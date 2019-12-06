using ApplicationCore.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class EfRepository<T, TId> : IRepository<T, TId>, IAsyncRepository<T, TId> where T : class
    {
        protected readonly SkidonContext context;

        public EfRepository(SkidonContext context)
        {
            this.context = context;
        }
        public T Add(T entity)
        {
            context.Set<T>().Add(entity);
            context.SaveChanges();

            return entity;
        }

        public async Task<T> AddAsync(T entity)
        {
            context.Set<T>().Add(entity);
            await context.SaveChangesAsync();

            return entity;
        }

        public void Delete(T entity)
        {
            context.Set<T>().Remove(entity);
            context.SaveChanges();
        }

        public async Task DeleteAsync(T entity)
        {
            context.Set<T>().Remove(entity);
            await context.SaveChangesAsync();
        }

        public T GetById(TId id)
        {
            return context.Set<T>().Find(id);
        }

        public async Task<T> GetByIdAsync(TId id)
        {
            return await context.Set<T>().FindAsync(id);
        }

        public IEnumerable<T> ListAll()
        {
            return context.Set<T>().AsEnumerable();
        }

        public async Task<List<T>> ListAllAsync()
        {
            return await context.Set<T>().ToListAsync();
        }

        public IQueryable<T> QueryableAll()
        {
            return context.Set<T>().AsQueryable();
        }

        public void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }

        public async Task UpdateAsync(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            await context.SaveChangesAsync();
        }
    }
}
