using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProjectManagementSystem.Models;

namespace ProjectManagementSystem.Data
{
    public static class PMSInitializer
    {
        public static void Initialize(PMSContext context)
        {
            context.Database.EnsureCreated();
            if (context.User.Any())
            {
                return;   // DB has been seeded
            }
            var users = new List<User>
            {
            new User{FirstName="Raivo",LastName="Kok", Password="root",Email="raivokok@inbox.lv",CreatedAt=DateTime.Parse("2018-03-04")},
            new User{FirstName="Janis",LastName="Berzins", Password="root",Email="jbk@box.lv",CreatedAt=DateTime.Parse("2018-03-04")},
            new User{FirstName="Karlis",LastName="Marx", Password="root",Email="km@inbodx.lv",CreatedAt=DateTime.Parse("2018-03-04")},
            };

            users.ForEach(u => context.User.Add(u));
            context.SaveChanges();
            var companies = new List<Company>
            {
            new Company{Name="RKCorp",Subscription=Subscription.Platinum,MemberCount=2},
            new Company{Name="Communists",Subscription=Subscription.Free,MemberCount=1},
            };
            companies.ForEach(s => context.Company.Add(s));
            context.SaveChanges();
            var companyMembers = new List<CompanyMember>
            {
            new CompanyMember{UserID=0,CompanyID=0,Role=Role.Owner},
            new CompanyMember{UserID=1,CompanyID=0,Role=Role.Member},
            new CompanyMember{UserID=2,CompanyID=1,Role=Role.Owner},
            };
            companyMembers.ForEach(s => context.CompanyMember.Add(s));
            context.SaveChanges();
        }
    }
}