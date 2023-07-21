namespace SuperApp.Caronlineofficial.com.Services.SmSSender;

public interface ISmsService
{
    Task SendConfirmSMS(string phone, string message);
    Task SendBuyRequestSMS(string phone, string name, string code);
    Task SendOrderSms(string phone, string name);

    Task SendInfoSellerAgent(string phone, string name);

    Task SendVebinarSms(string phone);
}