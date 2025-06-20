using Microsoft.AspNetCore.Mvc;

namespace SuperApp.Caronlineofficial.com.Controllers;

public class HomeController : Controller
{
    private List<string> suppoerts = new List<string>()
    {
        "https://wa.me/message/IEMHPDZKBZ3XL1",
        "https://wa.me/message/RZA5ZPH4I3LRO1",
        "https://wa.me/message/VME2CRECID5BH1",
        "https://wa.me/message/YBEST4MTPMGNB1",
        "https://wa.me/message/7FKJBCOPTGXLI1",
    };

    // GET
    [HttpGet("/Community")]
    public IActionResult Index()
    {
        if (Utils.SupportIndex == suppoerts.Count )
        {
            Utils.SupportIndex = 0;
        }
        var link = suppoerts[Utils.SupportIndex];
        Utils.SupportIndex += 1;
        return Redirect(link);
    }
}