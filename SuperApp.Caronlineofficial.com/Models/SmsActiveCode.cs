namespace SuperApp.Caronlineofficial.com.Models;

public class SmsActiveCode
{
    public int Id { get; set; }
    public string PhoneNumber { get; set; }
    public string ConfirmCode { get; set; }
    public DateTime CreatedTime { get; set; }=DateTime.Now;
    public DateTime ExpireActiveCode { get; set; } = DateTime.Now.AddMinutes(2);

}