using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SuperApp.Caronlineofficial.com.ViewModels.Stories;

public class AddNewStoryRequest
{
    [DisplayName("فایل")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public IFormFile File { get; set; }
    [DisplayName("نوع فایل")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string FileType { get; set; }
    [DisplayName("عنوان استوری")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string Title { get; set; }

}