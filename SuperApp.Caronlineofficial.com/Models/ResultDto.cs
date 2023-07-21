namespace SuperApp.Caronlineofficial.com.Models;

public class ResultDto
{
    public string Message { get; set; }
    public bool IsSuccess { get; set; } = false;

}

public class ResultDto<T>
{
    public string Message { get; set; }
    public bool IsSuccess { get; set; } = false;
    public T Data { get; set; }
}