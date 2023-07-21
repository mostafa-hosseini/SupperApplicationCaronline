namespace SuperApp.Caronlineofficial.com;

public static class Constant
{
    public static string SuccessResult = "عملیات با موفقیت انجام شد";
    public static string NotFoundResult = "اطلاعاتی یافت نشد";

    public static int PageSize { get; set; } = 30;
}

public abstract class ConstVariable
{
    public const string UserFolder = "User";
    public const string PageCategoryFolder = "PageCategory";
    public const string ContentTypeFolder = "ContentType";
    public const string ContentGalleryFolder = "ContentGallery";
    public const string BlogCategoryFolder = "BlogCategory";
    public const string BlogContentFolder = "BlogContent";
    public const string SliderImageFolder = "Slider";
    public const string BannerImageFolder = "Banner";
    public const string ManufacturerFolder = "Manufacturer";
    public const string ShopCategoryFolder = "ShopCategory";

    public const string NotFound = "Not found";
    public const string ContentFolder = "Content";
    public const string ErrorMessage = "Error Happend";
    public const string Url = "https://localhost:44316";
    public const int PageSize = 15;

    public const string SuccessMessage = "عملیات با موفقیت انجام شد";

    public const string HomeCacheKey = "HomeCache";
}