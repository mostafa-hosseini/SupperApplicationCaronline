using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SuperApp.Caronlineofficial.com.Models;
using SuperApp.Caronlineofficial.com.Models.Stories;

namespace SuperApp.Caronlineofficial.com.Data;

public class DataBaseContext : IdentityDbContext<UserApp>
{
    public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
    {
    }

    public DbSet<SmsActiveCode> SmsActiveCodes { get; set; }

    public DbSet<Story> Stories { get; set; }


    //seed data for users and required role
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // SeedData(builder);
        var userId = "0a0b379d-0e7a-442e-a90a-ba103f8595885";
        var arashId = "19933d9a-b07d-41f8-8751-9568f48419ed";
        var adminRoleId = "c8a7e064-1c93-478d-9450-bd1858c2e40c";
        builder.Entity<IdentityRole>().HasData(new IdentityRole()
            {
                Id = adminRoleId,
                Name = "Admin",
                NormalizedName = "admin"
            }
            , new IdentityRole()
            {
                Id = "54ba6e06-e7d2-4438-855e-dd731e6493bf",
                Name = "Employee",
                NormalizedName = "employee"
            }, new IdentityRole()
            {
                Id = "18c04ec5-99ca-4016-952f-b4e08aab39ef",
                Name = "Seller",
                NormalizedName = "seller"
            });


        var hasher = new PasswordHasher<UserApp>();
        builder.Entity<UserApp>().HasData(new UserApp()
        {
            Id = userId,
            Email = "mostafa@admin.com",
            NormalizedEmail = "mostafa@admin.com",
            FullName = "admin admini",
            EmailConfirmed = true,
            UserName = "09173365950",
            NormalizedUserName = "09173365950",
            PhoneNumber = "09173365950",
            PhoneNumberConfirmed = true,
            PasswordHash = hasher.HashPassword(null, "BvAAf317@#$"),
            SecurityStamp = string.Empty,
            Job = ""
        });


        builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>()
        {
            RoleId = adminRoleId,
            UserId = userId
        });
    }
}