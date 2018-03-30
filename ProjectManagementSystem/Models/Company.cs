using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagementSystem.Models
{
    public enum Subscription
        {
            Free, Silver, Gold, Platinum
        }
    public class Company
    {
        
        public int ID { get; set; }
        [Required]
        public string Name { get; set; } 
        [Required]
        public Subscription Subscription { get; set; } 
        public int MemberCount { get; set; }
        [Required]

        public virtual ICollection<CompanyMember> CompanyMembers { get; set; }
    }
}
