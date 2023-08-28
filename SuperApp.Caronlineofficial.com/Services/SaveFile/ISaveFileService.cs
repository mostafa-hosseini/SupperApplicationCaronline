namespace SuperApp.Caronlineofficial.com.Services.SaveFile;

public interface ISaveFileService
{
    string UploadFile(SaveFileServiceRequest request);
    void DeleteFIle(string fileName, string folderName);
}