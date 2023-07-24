namespace SuperApp.Caronlineofficial.com.Models;

public class SmsActiveCode
{
    public int Id { get; set; }
    public string PhoneNumber { get; set; }
    public DateTime CreatedTime { get; set; }=DateTime.Now;
    
}