using System;
using System.Collections.Generic;
using System.Text;

namespace Properties
{
    class Test
    {
        //public string FirstName { get; set; } = string.Empty;

        public string FirstName
        {
            get => firstName;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException("First name must not be blank");
                firstName = value;
            }
        }
        private string firstName;

        //public string LastName
        //{
        //    get { return lastName; }
        //    set { lastName = value; }
        //}
        //private string lastName;

        public string LastName
        {
            get => lastName;
            set => lastName = value;
        }
        private string lastName;

        public string FullName => $"{FirstName} {LastName}";

        public string Address { get; }
        //public string Address { get; private set; }
    }
}
