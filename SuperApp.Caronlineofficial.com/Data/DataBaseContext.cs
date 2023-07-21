using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SuperApp.Caronlineofficial.com.Models;

namespace SuperApp.Caronlineofficial.com.Data;

public class DataBaseContext : IdentityDbContext<UserApp>
{
    public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
    {
    }
}