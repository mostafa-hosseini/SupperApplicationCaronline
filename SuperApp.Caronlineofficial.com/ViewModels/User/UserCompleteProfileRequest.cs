using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace SuperApp.Caronlineofficial.com.ViewModels.User
{
    public class UserCompleteProfileRequest
    {
        [DisplayName("نام کامل")]

        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string FullName { get; set; }
        public string Email { get; set; }
        [DisplayName("رمز عبور")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "رمز عبور با تکرار رمز عبور یکسان نمی باشد")]
        public string ConfirmPassword { get; set; }
        [AllowNull]
   
        public string InvitedUser { get; set; }

    }
}
