using ApplicationCore.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Data.Repositories
{
    public interface IApiRepository<T, TId> : IRepository<T, TId>,
                                              IAsyncRepository<T, TId>
    {
        DbContext GetDbContext();
    }
}
