namespace SuperApp.Caronlineofficial.com.Services.SaveFile;

public class SaveFileServiceRequest
{
    public string FolderName { get; set; }
    public IFormFile File { get; set; }
    public string OldFileName { get; set; }
}