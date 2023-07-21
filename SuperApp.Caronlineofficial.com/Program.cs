using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SuperApp.Caronlineofficial.com.Data;
using SuperApp.Caronlineofficial.com.Models;
using SuperApp.Caronlineofficial.com.Services.SmSSender;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<ISmsService, SmsService>();

string connectionString;
if (builder.Environment.IsDevelopment())
{
    connectionString = builder.Configuration.GetConnectionString("develop") ?? throw new InvalidOperationException("Connection string 'CarOnlineWebSiteContext' not found.");
}
else
{
    connectionString = builder.Configuration.GetConnectionString("webSite") ?? throw new InvalidOperationException("Connection string 'CarOnlineWebSiteContext' not found.");
}
builder.Services.AddDbContext<DataBaseContext>(options =>
{

    options.UseSqlServer(connectionString);
});

builder.Services.AddHttpClient();
builder.Services.AddIdentity<UserApp, IdentityRole>(options =>
    {
        options.Password.RequiredUniqueChars = 0;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireDigit = false;
        options.Password.RequireLowercase = false;
        options.Password.RequireUppercase = false;
        options.User.AllowedUserNameCharacters =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(1);
    })
    .AddEntityFrameworkStores<DataBaseContext>().AddDefaultTokenProviders();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();