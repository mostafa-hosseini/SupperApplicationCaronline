


namespace SuperApp.Caronlineofficial.com.Services.SaveFile;

    public class SaveFileService : ISaveFileService
    {
        private readonly IWebHostEnvironment _environment;
 

        public SaveFileService(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public string UploadFile(SaveFileServiceRequest request)
        {
            string uploadsRootFolder = Path.Combine(_environment.WebRootPath, "Media/" + request.FolderName);
            if (!Directory.Exists(uploadsRootFolder))
            {
                Directory.CreateDirectory(uploadsRootFolder);
            }

            if (!string.IsNullOrEmpty(request.OldFileName))
            {
                DeleteFIle(request.OldFileName, request.FolderName);
            }


            string fileName = DateTime.Now.Ticks + request.File.FileName;


            var filePath = Path.Combine(uploadsRootFolder, fileName);
            using var fileStream = new FileStream(filePath, FileMode.Create);
            request.File.CopyTo(fileStream);

            return fileName;
        }

        public void DeleteFIle(string fileName, string folderName)
        {
            string folder = folderName;
            string uploadsRootFolder = Path.Combine(_environment.WebRootPath, "Media/" + folder);
            var filePath = Path.Combine(uploadsRootFolder, fileName);
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }

        public void DeleteFIle(List<string> fileNames, string folderName)
        {
            foreach (var fileName in fileNames)
            {
                string folder = folderName;
                string uploadsRootFolder = Path.Combine(_environment.WebRootPath, "Media/" + folder);
                var filePath = Path.Combine(uploadsRootFolder, fileName);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
            }
        }

    

 

      



      



     
    }