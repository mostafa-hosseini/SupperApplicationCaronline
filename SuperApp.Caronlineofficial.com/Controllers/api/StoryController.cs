using Microsoft.AspNetCore.Mvc;
using SuperApp.Caronlineofficial.com.Data;
using SuperApp.Caronlineofficial.com.ViewModels.Stories;

namespace SuperApp.Caronlineofficial.com.Controllers.api;

[ApiController]
[Route("/api/[controller]/[action]")]
public class StoryController : Controller
{
    private readonly DataBaseContext _context;

    public StoryController(DataBaseContext context)

    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> CheckHasStory()
    {
        return Ok(new
        {
            lastId = _context.Stories.OrderBy(c => c.Id).Select(c => c.Id).Last(),
            hasActive = _context.Stories.Any(c => c.CreatedTime > DateTime.Now)
        });
    }


    // GET
    [HttpGet]
    public IActionResult GetActiveStories()
    {
        var stories = _context.Stories.Where(c => c.ExpiredTime > DateTime.Now)
            .Select(c => new StoryViewModel()
            {
                Id = c.Id,
                Url = $"{Request.Scheme}://{Request.Host}/Media/story/" + c.FileName,
                Type = c.StoryType,
                Duration = 5000,
                Header = new StoryHeaderViewModel()
                {
                    Heading = c.Title,
                    Subheading = c.CreatedTime.ToShamsiWhitTime(),
                    ProfileImage = "https://superapp.caronlineofficial.com/logoicon.png"
                }
            }).ToList();
        return Ok(stories);
    }
}