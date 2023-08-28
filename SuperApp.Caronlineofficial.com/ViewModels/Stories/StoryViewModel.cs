namespace SuperApp.Caronlineofficial.com.ViewModels.Stories;

public class StoryViewModel
{
    public int Id { get; set; }
    public string Url { get; set; }
    public int Duration { get; set; }
    public string Type { get; set; }
    public StoryHeaderViewModel Header { get; set; }
}

public class StoryHeaderViewModel
{
    public string Heading { get; set; }
    public string Subheading { get; set; }
    public string ProfileImage { get; set; }
}