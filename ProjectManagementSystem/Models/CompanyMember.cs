using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagementSystem.Models
{
    public enum Role
        {
            Member, Admin, Owner
        }
    public class CompanyMember
    {
        public int ID { get; set; }
        [Required]
        public Role Role { get; set; }
        public int UserID { get; set; }

        public virtual User User { get; set; }
        public int CompanyID { get; set; } 
        public virtual Company Company { get; set; }
    }
}
