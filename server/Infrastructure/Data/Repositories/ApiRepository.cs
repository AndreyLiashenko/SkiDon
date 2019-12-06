using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Repositories
{
    public class ApiRepository<T, TId> : EfRepository<T, TId>, IApiRepository<T, TId>
                                        where T : class
    {
        public ApiRepository(SkidonContext context) : base(context)
        {

        }

        public DbContext GetDbContext()
        {
            return context;
        }
    }
}
