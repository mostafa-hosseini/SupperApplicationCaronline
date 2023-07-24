using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
            if (!findUser.PhoneNumberConfirmed)
            {
                if (findUser.ExpireLoginCode > DateTime.Now)
                {
                    if (CheckUserSmsLimit(model.PhoneNumber))
                    {
                        var loginCode = new Random().Next(10000, 99999);
                        await _smsService.SendConfirmSMS(findUser.PhoneNumber, loginCode.ToString());
                        findUser.LoginCode = loginCode.ToString();
                        findUser.ExpireLoginCode = DateTime.Now.AddMinutes(2).AddSeconds(5);

                        _context.SmsActiveCodes.Add(new SmsActiveCode()
                        {
                            PhoneNumber = model.PhoneNumber
                        });

                        await _userManager.CreateAsync(findUser);
                        await _context.SaveChangesAsync();
                        return Ok(new ResultDto()
                        {
                            IsSuccess = false,
                            Message = "کاربر گرامی ابتدا شماره همراه خود را تایید کنید"
                        });
                    }

                    return Ok(new ResultDto()
                    {
                        IsSuccess = true,
                        Message =
                            "کاربر گرامی درخواست های شما برای ارسال کد بسیار است لطفا بعد از ۶ ساعت دوباره تلاش کنید"
                    });
                }
            }

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
            Job = "",
            Gender = Gender.Male,
            RefralCode = Utils.RandomString(8)
        };

        _context.SmsActiveCodes.Add(new SmsActiveCode()
        {
            PhoneNumber = request.Phone
        });

        await _userManager.CreateAsync(user);
        await _context.SaveChangesAsync();
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

        if (DateTime.Now > user.ExpireLoginCode)
        {
            result.Message = "کد واد شده منقضی شده است";
            result.IsSuccess = false;
            return Ok(result);
        }

        if (user.LoginCode == model.Code)
        {
            user.PhoneNumberConfirmed = true;
            await _userManager.UpdateAsync(user);
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

    [HttpPost]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<IActionResult> CompleteProfile(UserCompleteProfileRequest request)
    {
        if (ModelState.IsValid)
        {
            var user = await _userManager.FindByIdAsync(User.GetUserId());
            if (user != null)
            {
                user.BrithDay = request.BirthDay;
                user.Email = request.Email;
                // user.Gender = request.Gender;
                user.FullName = request.FullName;
                user.Job = request.Job;
                var hasher = new PasswordHasher<UserApp>();
                user.PasswordHash = hasher.HashPassword(user, request.Password);
                var res = await _userManager.UpdateAsync(user);
                if (res.Succeeded)
                {
                    return Ok(new ResultDto()
                    {
                        IsSuccess = true,
                        Message = "تکمیل حساب کاربری شما با موفقیت انجام شد"
                    });
                }
            }

            return Ok(new ResultDto()
            {
                Message = "کاربری یافت نشد",
                IsSuccess = false
            });
        }

        return BadRequest();
    }

    [HttpGet]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<IActionResult> GetUserDashboard()
    {
        if (ModelState.IsValid)
        {
            var user = await _userManager.FindByIdAsync(User.GetUserId());
            if (user != null)
            {
                var model = new UserDashboard()
                {
                    PhoneNumber = user.UserName,
                    FullName = user.FullName,
                    RefCode = user.RefralCode,
                    InvitedUser = _context.Users.Count(c => c.InvitedUserId == user.Id),
                    UserPoint = user.Point,

                };
                return Ok(model);
            }

            return Ok(new ResultDto()
            {
                Message = "کاربری یافت نشد",
                IsSuccess = false
            });
        }

        return BadRequest();
    }


    [HttpPost]
    public async Task<IActionResult> SendCode(SendCodeRequest request)
    {
        if (ModelState.IsValid)
        {
            var user = await _userManager.FindByNameAsync(request.PhoneNumber);

            if (user == null)
            {
                return Ok(new ResultDto()
                {
                    Message = "کاربری یافت نشد",
                    IsSuccess = false
                });
            }


            if (user.ExpireLoginCode > DateTime.Now)
            {
                if (CheckUserSmsLimit(request.PhoneNumber))
                {
                    var loginCode = new Random().Next(10000, 99999);
                    await _smsService.SendConfirmSMS(request.PhoneNumber, loginCode.ToString());
                    user.LoginCode = loginCode.ToString();
                    user.ExpireLoginCode = DateTime.Now.AddMinutes(2).AddSeconds(5);
                    await _userManager.UpdateAsync(user);
                    return Ok(new ResultDto()
                    {
                        IsSuccess = true,
                        Message = "کاربر گرامی کد تایید برای شما ارسال شد"
                    });
                }

                return Ok(new ResultDto()
                {
                    IsSuccess = true,
                    Message =
                        "کاربر گرامی درخواست های شما برای ارسال کد بسیار است لطفا بعد از ۶ ساعت دوباره تلاش کنید"
                });
            }

            return Ok(new ResultDto()
            {
                IsSuccess = true,
                Message = "کاربر گرامی کد تایید قبلی هنوز فعال است !"
            });
        }

        return BadRequest();
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


    private bool CheckUserSmsLimit(string phoneNumber)
    {
        var result =
            _context.SmsActiveCodes.Count(
                c => c.PhoneNumber == phoneNumber && c.CreatedTime > DateTime.Now.AddHours(-6));
        return result < 5;
    }

    [HttpGet("/remove")]
    public async Task<IActionResult> RemoveUser([FromServices] IHostEnvironment _env)
    {
        if (_env.IsDevelopment())
        {
            var user = _context.Users.Where(c =>
                c.UserName == "09363179310" || c.UserName == "09108737900" || c.UserName == "09222729310").ToList();
            _context.Users.RemoveRange(user);
            await _context.SaveChangesAsync();
        }

        return Ok("oifajeoifjioa");
    }
}