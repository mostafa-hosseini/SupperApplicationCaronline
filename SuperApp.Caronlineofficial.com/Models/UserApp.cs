using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace SuperApp.Caronlineofficial.com.Models;

public class UserApp : IdentityUser
{
    [Display(Name = "نام و نام خانوادگی")]
    [Required(ErrorMessage = "لطفا 0 را وارد کنید")]
    [MaxLength(120)]
    public string FullName { get; set; }

    public int? ProvinceId { get; set; }

    public int? CityId { get; set; }

    public string? LoginCode { get; set; }
    public DateTime ExpireLoginCode { get; set; }
    public int Point { get; set; } = 0;

    public UserApp? InvitedUser { get; set; }
    public string? InvitedUserId { get; set; }

    public Gender Gender { get; set; }

    public string Job { get; set; }
    public DateTime? BrithDay { get; set; }
    public string RefralCode { get; set; } = SuperApp.Caronlineofficial.com.Utils.RandomString(4);
}

public enum Gender
{
    Male,
    Female
}