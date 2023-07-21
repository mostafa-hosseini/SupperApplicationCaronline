using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SuperApp.Caronlineofficial.com.ViewModels;

public class LoginViewModel
{
    [DisplayName("شماره همراه")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [RegularExpression(@"^09[0-9]{9}$", ErrorMessage = "شماره وارد شده معتبر نمی باشد!")]
    public string PhoneNumber { get; set; }

    public string Password { get; set; }
    public bool Verify { get; set; } = false;
    public string RedirectUri { get; set; }
}

public class VerifyViewModel
{
    [DisplayName("شماره همراه")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [RegularExpression(@"^09[0-9]{9}$", ErrorMessage = "شماره وارد شده معتبر نمی باشد!")]
    public string Phone { get; set; }

    public string Code { get; set; }
    public bool Verify { get; set; } = false;
    public string RedirectUri { get; set; }
}

public class RegisterViewModel
{
    [DisplayName("شماره همراه")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [RegularExpression(@"^09[0-9]{9}$", ErrorMessage = "شماره وارد شده معتبر نمی باشد!")]
    public string Phone { get; set; }

    public string InvitedUser { get; set; }
}