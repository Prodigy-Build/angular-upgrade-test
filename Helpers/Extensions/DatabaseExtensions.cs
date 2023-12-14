using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using StudentApp.Data;

namespace StudentApp.Helpers.Extensions
{
    public static class DatabaseExtensions
    {
        public static IServiceCollection AddDatabaseServices(this IServiceCollection services, IConfiguration configuration, IWebHostEnvironment env)
        {
            // If application is running in development mode, then use in memory database
            if (env.IsDevelopment())
            {
                services.AddDbContext<StudentDbContext>(options =>
                    options
                    .UseInMemoryDatabase("StudentApp")
                    .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
            }
            else
            {
                services.AddDbContext<StudentDbContext>(options =>
                    options.UseSqlServer(
                        configuration.GetConnectionString("DefaultConnection")));
            }

            return services;
        }
    }

    // Angular dependencies
    "dependencies": {
      "@angular/animations": "8.2.12",
      "@angular/common": "8.2.12",
      "@angular/compiler": "8.2.12",
      "@angular/core": "8.2.12",
      "@angular/forms": "8.2.12",
      "@angular/platform-browser": "8.2.12",
      "@angular/platform-browser-dynamic": "8.2.12",
      "@angular/platform-server": "8.2.12",
      "@angular/router": "8.2.12"
    }
}