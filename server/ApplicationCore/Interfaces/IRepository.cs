using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ApplicationCore.Interfaces
{
    public interface IRepository<T, TId>
    {
        T GetById(TId id);
        IEnumerable<T> ListAll();
        IQueryable<T> QueryableAll();
        T Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
