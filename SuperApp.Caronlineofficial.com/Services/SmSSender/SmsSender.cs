namespace SuperApp.Caronlineofficial.com.Services.SmSSender;

public class SmsService : ISmsService
{
    private readonly IHttpClientFactory _client;
    private readonly string _baseUrl = "http://rest.ippanel.com/v1/messages/patterns/send";
    private readonly string _phoneNumber = "+985000125475 ";

    public SmsService(IHttpClientFactory client)
    {
        _client = client;
    }

    public async Task SendConfirmSMS(string phone, string code)
    {
        var client = _client.CreateClient();
        client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization",
            "AccessKey Q-7_yGoRO69tv2W_QjHhIKl8Agqe-EuJT2xpVHYPA9k=");
        var result = await client.PostAsJsonAsync(_baseUrl, new
        {
            pattern_code = "sevlqkfgpt",
            originator = _phoneNumber,
            recipient = phone,
            values =
                new
                {
                    code
                }
        });
        var content = await result.Content.ReadAsStringAsync();
        Console.ForegroundColor = ConsoleColor.DarkGreen;
        Console.WriteLine("send Confrim Code For user " + phone);
        Console.ResetColor();
        Console.WriteLine("///////////////////////////////////////////////////////////");
        Console.WriteLine(content);
    }

    public async Task SendBuyRequestSMS(string phone, string name, string code)
    {
        var client = _client.CreateClient();
        client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization",
            "AccessKey Q-7_yGoRO69tv2W_QjHhIKl8Agqe-EuJT2xpVHYPA9k=");
        var result = await client.PostAsJsonAsync(_baseUrl, new
        {
            pattern_code = "4xnd9powxct1n9t",
            originator = _phoneNumber,
            recipient = phone,
            values =
                new
                {
                    name,
                    code
                }
        });
        var content = await result.Content.ReadAsStringAsync();
        Console.ForegroundColor = ConsoleColor.DarkGreen;
        Console.WriteLine("send export request Code For user " + phone);
        Console.ResetColor();
        Console.WriteLine("///////////////////////////////////////////////////////////");
        Console.WriteLine(content);
    }

    public async Task SendOrderSms(string phone, string name)
    {
        var client = _client.CreateClient();
        client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization",
            "AccessKey Q-7_yGoRO69tv2W_QjHhIKl8Agqe-EuJT2xpVHYPA9k=");
        var result = await client.PostAsJsonAsync(_baseUrl, new
        {
            pattern_code = "0a07g66ik85fo6v",
            originator = _phoneNumber,
            recipient = phone,
            values =
                new
                {
                    name
                }
        });
        var content = await result.Content.ReadAsStringAsync();
        Console.ForegroundColor = ConsoleColor.DarkGreen;
        Console.WriteLine("send Confrim order  For user " + phone);
        Console.ResetColor();
        Console.WriteLine("///////////////////////////////////////////////////////////");
        Console.WriteLine(content);
    }

    public async Task SendInfoSellerAgent(string phone, string name)
    {
        var client = _client.CreateClient();
        client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization",
            "AccessKey Q-7_yGoRO69tv2W_QjHhIKl8Agqe-EuJT2xpVHYPA9k=");
        var result = await client.PostAsJsonAsync(_baseUrl, new
        {
            pattern_code = "hzrqb4j1eplfa9f",
            originator = _phoneNumber,
            recipient = phone,
            values =
                new
                {
                    name
                }
        });
        var content = await result.Content.ReadAsStringAsync();
        Console.ForegroundColor = ConsoleColor.DarkGreen;
        Console.WriteLine("send Confrim seller Agent  For user " + phone);
        Console.ResetColor();
        Console.WriteLine("///////////////////////////////////////////////////////////");
        Console.WriteLine(content);
    }

    public async Task SendVebinarSms(string phone)
    {
        var client = _client.CreateClient();
        client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization",
            "AccessKey Q-7_yGoRO69tv2W_QjHhIKl8Agqe-EuJT2xpVHYPA9k=");
        var result = await client.PostAsJsonAsync(_baseUrl, new
        {
            pattern_code = "3cq87qdmeueymzh",
            originator = _phoneNumber,
            recipient = phone,
            values =
                new
                {
                    name = "دانشجوی"
                }
        });
        var content = await result.Content.ReadAsStringAsync();
        Console.ForegroundColor = ConsoleColor.DarkGreen;
        Console.WriteLine("send Confrim seller Agent  For user " + phone);
        Console.ResetColor();
        Console.WriteLine("///////////////////////////////////////////////////////////");
        Console.WriteLine(content);
    }
}