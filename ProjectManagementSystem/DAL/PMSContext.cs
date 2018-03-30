//using ProjectManagementSystem.Models;
//using System.Data.Entity;
//using System.Data.Entity.ModelConfiguration.Conventions;

//namespace ProjectManagementSystem.DAL
//{
//    public class PMSContext : DbContext
//    {
    
//        public PMSContext() : base("PMSContext")
//        {
//        }
        
//        public DbSet<User> Users { get; set; }
//        public DbSet<CompanyMember> CompanyMembers { get; set; }
//        public DbSet<Company> Companies { get; set; }

//        protected override void OnModelCreating(DbModelBuilder modelBuilder)
//        {
//            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
//        }
//    }
//}