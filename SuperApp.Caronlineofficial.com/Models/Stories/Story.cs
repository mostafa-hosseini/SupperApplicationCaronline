namespace SuperApp.Caronlineofficial.com.Models.Stories;

public class Story
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string SubTitle { get; set; }
    public int Duration { get; set; } = 5000;
    public string StoryType { get; set; } = "image";
    public DateTime CreatedTime { get; set; } = DateTime.Now;
    public DateTime ExpiredTime { get; set; } = DateTime.Now.AddDays(1);
    public string FileName { get; set; }
    public Int64 ViewCount { get; set; }
}