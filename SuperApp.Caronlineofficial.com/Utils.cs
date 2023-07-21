using System.Security.Claims;
using System.Text;

namespace SuperApp.Caronlineofficial.com;

public static class Utils
{
    public static string GetUserId(this ClaimsPrincipal data)
    {
        return data.FindFirst(ClaimTypes.PrimarySid)!.Value;
    }

    public static string FixPersianTextFromWeb(this string data)
    {
        return System.Net.WebUtility.HtmlDecode(data).Replace("\n", "").Replace("\r", "").Trim();
    }
    public static string CheckFeature(this string text)
    {
        if (text.Contains("tick.png"))
        {
            return "true";
        }

        if (text.Contains("cross.png"))
        {
            return "false";
        }

        return text.FixPersianTextFromWeb();
    }
    public static string ToEnglishNumber(this string input)
    {
        string[] persian = new string[10] { "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹" };

        for (int j = 0; j < persian.Length; j++)
            input = input.Replace(persian[j], j.ToString());

        return input;
    }


    public static string RandomString(int size)
    {
        StringBuilder builder = new StringBuilder();
        Random random = new Random();
        char ch;
        for (int i = 0; i < size; i++)
        {
            ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
            builder.Append(ch);
        }
        return builder.ToString();
    }
}