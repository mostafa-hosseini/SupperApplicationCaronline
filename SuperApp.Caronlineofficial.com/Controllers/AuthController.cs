using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SuperApp.Caronlineofficial.com.Data;
using SuperApp.Caronlineofficial.com.Models;
using SuperApp.Caronlineofficial.com.Services.SmSSender;
using SuperApp.Caronlineofficial.com.ViewModels;
using SuperApp.Caronlineofficial.com.ViewModels.User;
using RedirectResult = SuperApp.Caronlineofficial.com.ViewModels.RedirectResult;

namespace SuperApp.Caronlineofficial.com.Controllers;

[Route("api/[controller]/[action]")]
[ApiExplorerSettings(IgnoreApi = false)]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly UserManager<UserApp> _userManager;
    private readonly SignInManager<UserApp> _signInManager;
    private readonly DataBaseContext _context;
    private readonly ISmsService _smsService;

    public AuthController(IConfiguration config, UserManager<UserApp> userManager, SignInManager<UserApp> signInManager,
        DataBaseContext context, ISmsService smsService)
    {
        _config = config;
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
        _smsService = smsService;
    }

    [HttpPost()]
    public async Task<IActionResult> Login([FromBody] LoginViewModel model)
    {
        var result = new ResultDto();
        if (string.IsNullOrEmpty(model.PhoneNumber) || !Regex.IsMatch(model.PhoneNumber, @"^09[0-9]{9}$"))
        {
            result.Message = "شماره موبایل وارد شده صحیح نمی باشد";
            result.IsSuccess = false;
            return Ok(result);
        }

        var findUser = await _userManager.FindByNameAsync(model.PhoneNumber);

        if (findUser != null)
        {
            var res = await _signInManager.CheckPasswordSignInAsync(findUser, model.Password, true);
            if (res.Succeeded)
            {
                var role = await _userManager.GetRolesAsync(findUser);
                var token = BuildToken(findUser, role.ToList());

                return Ok(new ResultDto<string>()
                {
                    IsSuccess = true,
                    Message = "کاربر گرامی خوش آمدید",
                    Data = token
                });
            }

            return Ok(new ResultDto()
            {
                Message = "نام کاربری یا رمزعبور اشتباه است",
                IsSuccess = false,
            });
        }


        return Ok(new ResultDto()
        {
            Message = "نام کاربری یا رمزعبور اشتباه است",
            IsSuccess = false,
        });
    }


    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegisterViewModel request)
    {
        var result = new ResultDto();
        if (string.IsNullOrEmpty(request.Phone) || !Regex.IsMatch(request.Phone, @"^09[0-9]{9}$"))
        {
            result.Message = "شماره موبایل وارد شده صحیح نمی باشد";
            result.IsSuccess = false;
            return Ok(result);
        }

        var findUser = await _userManager.FindByNameAsync(request.Phone);
        if (findUser != null)
        {
            return Ok(new ResultDto<string>()
            {
                IsSuccess = false,
                Message = "کاربری با این شماره تماس ثبت نام کرده است",
            });
        }

        var loginCode = new Random().Next(10000, 99999);
        await _smsService.SendConfirmSMS(request.Phone, loginCode.ToString());
        UserApp user = new UserApp()
        {
            Email = "",
            UserName = request.Phone,
            FullName = "",
            LoginCode = loginCode.ToString(),
            ExpireLoginCode = DateTime.Now.AddMinutes(2).AddSeconds(5),
            Point = 0,
            RefralCode = Utils.RandomString(8)
        };

        if (!string.IsNullOrEmpty(request.InvitedUser))
        {
            var caller = await _userManager.FindByNameAsync(request.InvitedUser);
            if (caller != null)
            {
                user.InvitedUserId = caller.Id;
                caller.Point += 10;
                await _userManager.UpdateAsync(caller);
            }
        }

        await _userManager.CreateAsync(user);

        return Ok(new ResultDto<VerifyViewModel>()
        {
            Message = ConstVariable.SuccessMessage,
            IsSuccess = true,
            Data = new VerifyViewModel()
            {
                Code = "",
                Phone = user.PhoneNumber
            }
        });
    }

    [HttpPost()]
    public async Task<IActionResult> Verify(VerifyViewModel model)
    {
        var result = new ResultDto<RedirectResult>();
        var user = await _userManager.FindByNameAsync(model.Phone);
        if (user == null)
        {
            result.Message = "خطایی رخ داد کد 605";
            result.IsSuccess = false;
            return Ok(result);
        }
        else
        {
            if (DateTime.Now > user.ExpireLoginCode)
            {
                result.Message = "کد واد شده منقضی شده است";
                result.IsSuccess = false;
                return Ok(result);
            }

            if (user.LoginCode == model.Code)
            {
                result.Message = "کاربر گرامی خوش آمدید!";
                result.IsSuccess = true;
                var role = await _userManager.GetRolesAsync(user);
                var token = BuildToken(user, role.ToList());
                result.Data = new RedirectResult()
                {
                    Code = token,
                    RedirectUri = model.RedirectUri
                };
                return Ok(result);
            }

            result.Message = "کد وارد شده اشتباه می باشد";
            result.IsSuccess = false;
            return Ok(result);
        }
    }

    [HttpPost]
    public async Task<IActionResult> GetTestToken()
    {
        var user = await _userManager.FindByNameAsync("_admin_ad");
        var token = BuildToken(user, new List<string>());
        return Ok("Bearer " + token);
    }

    [HttpPost]
    public async Task<IActionResult> ResetPassword(UserResetPasswordRequest request)
    {
        if (ModelState.IsValid)
        {
            var findUser = await _userManager.Users.FirstAsync(c => c.UserName == request.PhoneNumber);
            if (findUser == null)
            {
                return Ok(new ResultDto()
                {
                    Message = "کاربری یافت نشد!",
                    IsSuccess = false
                });
            }

            var loginCode = new Random().Next(10000, 99999);
            await _smsService.SendConfirmSMS(request.PhoneNumber, loginCode.ToString());

            findUser.LoginCode = loginCode.ToString();
            findUser.ExpireLoginCode = DateTime.Now.AddMinutes(2).AddSeconds(5);
            await _userManager.UpdateAsync(findUser);
            return Ok(new ResultDto<string>()
            {
                Message = "کاربر گرامی کد تائید برای شما ارسال شد",
                IsSuccess = true,
                Data = ""
            });
        }

        return Ok();
    }

    [HttpPost]
    public async Task<IActionResult> VerifyResetPassword(UserResetPasswordVerify request)
    {
        if (ModelState.IsValid)
        {
            var findUser = await _userManager.Users.FirstAsync(c => c.UserName == request.PhoneNumber);
            if (findUser == null)
            {
                return Ok(new ResultDto()
                {
                    Message = "کاربری یافت نشد!",
                    IsSuccess = false
                });
            }

            if (DateTime.Now > findUser.ExpireLoginCode)
            {
                return Ok(new ResultDto()
                {
                    Message = "کد واد شده منقضی شده است",
                    IsSuccess = false
                });
            }

            if (findUser.LoginCode == request.Code)
            {
                var role = await _userManager.GetRolesAsync(findUser);
                var res = await _userManager.ResetPasswordAsync(findUser,
                    await _userManager.GeneratePasswordResetTokenAsync(findUser), request.NewPassword);
                Console.WriteLine(res.Succeeded + " result reset pass //////////////////////////");
                var token = BuildToken(findUser, role.ToList());


                return Ok(new ResultDto<string>()
                {
                    Message = "کاربر گرامی خوش آمدید!",
                    Data = token,
                    IsSuccess = true
                });
            }

            await _userManager.UpdateAsync(findUser);
            return Ok(new ResultDto()
            {
                Message = Constant.SuccessResult,
                IsSuccess = true
            });
        }

        return Ok();
    }


    private string BuildToken(UserApp user, List<string> roles)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var creeds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var authClaims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.UserName),
            new Claim(ClaimTypes.PrimarySid, user.Id),
            new Claim(ClaimTypes.Role, "user"),
        };
        foreach (var role in roles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, role));
        }

        var token = new JwtSecurityToken(_config["Jwt:Issuer"],
            _config["Jwt:Issuer"],
            expires: DateTime.Now.AddDays(30),
            signingCredentials: creeds, claims: authClaims);
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}