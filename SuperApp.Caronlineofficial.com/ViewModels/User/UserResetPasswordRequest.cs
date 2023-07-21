using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SuperApp.Caronlineofficial.com.ViewModels.User
{
    public class UserResetPasswordRequest
    {
        [DisplayName("شماره همراه")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [RegularExpression(@"^09[0-9]{9}$",ErrorMessage = "شماره وارد شده معتبر نمی باشد!")]
        public string PhoneNumber { get; set; }
    }
    public class UserResetPasswordVerify
    {
        [DisplayName("شماره همراه")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [RegularExpression(@"^09[0-9]{9}$",ErrorMessage = "شماره وارد شده معتبر نمی باشد!")]
        public string PhoneNumber { get; set; }
        [DisplayName("رمز عبور")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string NewPassword { get; set; }
        [Compare("NewPassword", ErrorMessage = "رمز عبور با تکرار رمز عبور یکسان نمی باشد")]
        public string ConfirmNewPassword { get; set; }
        public string Code { get; set; }
    }
}
