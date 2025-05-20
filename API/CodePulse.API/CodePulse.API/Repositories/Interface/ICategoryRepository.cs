using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
        Task<IEnumerable<Category>> GetAllAsync(
            string? query = null,
            string? sortby = null,
            string? sortdirection = null,
            int? pagenumber = 1,
            int? pagesize = 100
        );

        Task<Category?> GetById(Guid id);

        Task<Category?> UpdateAsync(Category category);

        Task<Category?> DeleteAsync(Guid id);

        Task<int> GetCount();
    }
}
