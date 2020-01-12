using ApplicationCore.Entities;
using Infrastructure.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkiDon.Services
{
    public static class DIRepositoryService
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IApiRepository<Product, long>, ApiRepository<Product, long>>();
            services.AddScoped<IApiRepository<Shop, long>, ApiRepository<Shop, long>>();
            services.AddScoped<IApiRepository<Discount, long>, ApiRepository<Discount, long>>();
        }
    }
}
