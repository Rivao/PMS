using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectManagementSystem.Models;

namespace ProjectManagementSystem.Models
{
    public class PMSContext : DbContext
    {
        public PMSContext (DbContextOptions<PMSContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(u => new { u.Phone, u.Email, u.Username })
                .IsUnique();

            modelBuilder.Entity<Company>()
                .HasIndex(c => c.Name)
                .IsUnique();
        }

        public DbSet<ProjectManagementSystem.Models.Company> Company { get; set; }

        public DbSet<ProjectManagementSystem.Models.User> User { get; set; }

        public DbSet<ProjectManagementSystem.Models.CompanyMember> CompanyMember { get; set; }

    }
}
