using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SuperApp.Caronlineofficial.com.Data;
using SuperApp.Caronlineofficial.com.Models;
using SuperApp.Caronlineofficial.com.Models.Stories;
using SuperApp.Caronlineofficial.com.Services.SaveFile;
using SuperApp.Caronlineofficial.com.ViewModels.Stories;

namespace SuperApp.Caronlineofficial.com.Controllers.api;

[ApiController]
[Route("/api/[controller]/[action]")]
[Authorize(Roles = "Admin", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class StoriesManagementController : Controller
{
    private readonly DataBaseContext _context;

    private readonly ISaveFileService _saveFile;

    public StoriesManagementController(DataBaseContext context, ISaveFileService saveFile)
    {
        _context = context;
        _saveFile = saveFile;
    }

    // GET
    [HttpGet]
    public IActionResult GetActiveStories()
    {
        var stories = _context.Stories.Where(c => c.ExpiredTime > DateTime.Now).OrderByDescending(c => c.CreatedTime)
            .Select(c => new StoryViewModel()
            {
                Id = c.Id,
                Url = $"{Request.Scheme}://{Request.Host}/Media/story/" + c.FileName,
                Type = c.StoryType,
                Duration = 5000,
                Header = new StoryHeaderViewModel()
                {
                    Heading = c.Title,
                    Subheading = c.SubTitle,
                    ProfileImage = "https://mostafa-h.ir/Media/Profile/6382701491811010401402-05-16%2014.21.41.jpg"
                }
            }).ToList();
        return Ok(stories);
    }

    [HttpGet]
    public IActionResult GetNotActiveStories()
    {
        var stories = _context.Stories.Where(c => c.ExpiredTime < DateTime.Now).ToList();
        return Ok(stories);
    }

    [HttpPost]
    public async Task<IActionResult> AddNewStory([FromForm] AddNewStoryRequest request)
    {
        if (!ModelState.IsValid) return BadRequest();

        if (request.File == null) return BadRequest();
        _context.Stories.Add(new Story()
        {
            Title = request.Title,
            StoryType = request.FileType,
            FileName = _saveFile.UploadFile(new SaveFileServiceRequest()
            {
                File = request.File,
                FolderName = "story",
            }),
            SubTitle = DateTime.Now.ToString()
        });
        await _context.SaveChangesAsync();
        return Ok(new ResultDto()
        {
            IsSuccess = true,
            Message = "استوری با موفقیت ایجاد شد"
        });
    }

    [HttpPost]
    public async Task<IActionResult> Delete([FromQuery] int Id)
    {
        if (!_context.Stories.Any(c => c.Id == Id))
            return Ok(new ResultDto()
            {
                IsSuccess = false,
                Message = "اطلاعاتی یافت نشد"
            });

        var story = await _context.Stories.FindAsync(Id);
        _context.Stories.Remove(story);
        _saveFile.DeleteFIle(story.FileName, "story");
        await _context.SaveChangesAsync();
        return Ok(new ResultDto()
        {
            IsSuccess = true,
            Message = "استوری با موفقیت پاک شد"
        });
    }
}