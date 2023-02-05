using System;
using System.Collections.Generic;
using System.Text;

namespace PersonDetails
{
    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }

        public Person(string firstName, string lastName, string emailAddress, DateTime dateOfBirth)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailAddress = emailAddress;
            this.DateOfBirth = dateOfBirth;
        }

        DateTime today = DateTime.Today;
        public bool isAdult
        {
            get
            {
                if ((today.Year - DateOfBirth.Year) >= 18)
                    return true;
                else
                    return false;
            }
        }
        public string SunSign {
            get
            {
                if ((DateOfBirth.Day >= 21 && DateOfBirth.Month == 3) || (DateOfBirth.Day <= 19 && DateOfBirth.Month == 4))
                    return "Aries";
                else if ((DateOfBirth.Day >= 20 && DateOfBirth.Month == 4) || (DateOfBirth.Day <= 20 && DateOfBirth.Month == 5))
                    return "Taurus";
                else if ((DateOfBirth.Day >= 21 && DateOfBirth.Month == 5) || (DateOfBirth.Day <= 20 && DateOfBirth.Month == 6))
                    return "Gemini";
                else if ((DateOfBirth.Day >= 21 && DateOfBirth.Month == 6) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 7))
                    return "Cancer";
                else if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 7) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 8))
                    return "Leo";
                else if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 8) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 9))
                    return "Virgo";
                else if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 9) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 10))
                    return "Libra ";
                else if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 10) || (DateOfBirth.Day <= 21 && DateOfBirth.Month == 11))
                    return "Scorpio";
                else if ((DateOfBirth.Day >= 22 && DateOfBirth.Month == 11) || (DateOfBirth.Day <= 21 && DateOfBirth.Month == 12))
                    return "Sagittarius";
                else if ((DateOfBirth.Day >= 22 && DateOfBirth.Month == 12) || (DateOfBirth.Day <= 19 && DateOfBirth.Month == 1))
                    return "Capricon";
                else if ((DateOfBirth.Day >= 20 && DateOfBirth.Month == 1) || (DateOfBirth.Day <= 18 && DateOfBirth.Month == 2))
                    return "Aquarius";
                else
                    return "Pisces";
            }
        }
        public string ChineseSign {
            get
            {
                double r = DateOfBirth.Year % 12;
                if (r == 0)
                {
                    return "Monkey";
                }
                else if (r == 1)
                {
                    return "Rooster";
                }
                else if (r == 2)
                {
                    return "Dog";
                }
                else if (r == 3)
                {
                    return "Pig";
                }
                else if (r == 4)
                {
                    return "Rat";
                }
                else if (r == 5)
                {
                    return "Ox";
                }
                else if (r == 6)
                {
                    return "Tiger";
                }
                else if (r == 7)
                {
                    return "Rabbit";
                }
                else if (r == 8)
                {
                    return "Dragon";
                }
                else if (r == 9)
                {
                    return "Snake";
                }
                else if (r == 10)
                {
                    return "Horse";
                }
                else if (r == 11)
                {
                    return "Sheep";
                }
                else
                    return "";
            }
        }
        public bool isBirthday {
            get
            {
                if (today.Day == DateOfBirth.Day && today.Month == DateOfBirth.Month)
                    return true;
                else
                    return false;
            }
        }
        public string ScreenName { 
            get
            {
                string myDate = DateOfBirth.ToString("MM/dd/yy");
                string[] split = myDate.Split("-");
                myDate = string.Join("", split);
                return ($"{FirstName.ToLower()}{LastName.ToLower()}{myDate}");
            }
        }
    }
}
