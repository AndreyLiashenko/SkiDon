using ApplicationCore.Entities.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Infrastructure.Data
{
    public class SkidonContextSeed
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<SkidonContext>();
            var userManager = serviceProvider.GetRequiredService<UserManager<SkidonUser>>();
            context.Database.EnsureCreated();

            if (!context.Users.Any())
            {
                SkidonUser user = new SkidonUser()
                {
                    Email = "test@.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = "Roma"
                };

                userManager.CreateAsync(user, "Qwerty");
            }
        }
    }
}
