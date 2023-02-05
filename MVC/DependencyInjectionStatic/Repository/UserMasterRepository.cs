using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DependencyInjection.Repository
{
    public class UserMasterRepository : IUserMasterRepository
    {
        private List<UserMaster> users = new List<UserMaster>();
        private int Id = 3;

        public UserMasterRepository()
        {
            Add(new UserMaster { ID = 1, Name = "User-1", EmailID = "user1@test.com", MobileNo = "1234567890" });
            Add(new UserMaster { ID = 2, Name = "User-2", EmailID = "user2@test.com", MobileNo = "2345678901" });
            Add(new UserMaster { ID = 3, Name = "User-3", EmailID = "user3@test.com", MobileNo = "3456789012" });
        }

        public UserMaster Add(UserMaster item)
        {
            if(item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.ID = Id++;
            users.Add(item);
            return item;
        }

        public bool Delete(int id)
        {
            users.RemoveAll(p => p.ID == id);
            return true;
        }

        public UserMaster Get(int id)
        {
            return users.FirstOrDefault(p => p.ID == id);
        }

        public IEnumerable<UserMaster> GetAll()
        {
            return users;
        }

        public bool Update(UserMaster item)
        {
            if(item == null)
            {
                throw new ArgumentNullException("item");
            }

            int index = users.FindIndex(p => p.ID == item.ID);
            if(index == -1)
            {
                return false;
            }
            users.RemoveAt(index);
            users.Add(item);
            return true;
        }
    }
}