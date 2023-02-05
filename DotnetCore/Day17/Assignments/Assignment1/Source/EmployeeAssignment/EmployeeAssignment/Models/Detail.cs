using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class Detail
    {
        public Detail()
        {
            Employees = new HashSet<Employee>();
        }

        public int DetailsId { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public int? CitizenshipId { get; set; }
        public string CitizenshipLegislationCode { get; set; }
        public string CitizenshipStatus { get; set; }
        public DateTime? CitizenshipToDate { get; set; }
        public string City { get; set; }
        public string CorrespondenceLanguage { get; set; }
        public string Country { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string DisplayName { get; set; }
        public DateTime? DriversLicenseExpirationDate { get; set; }
        public string DriversLicenseId { get; set; }
        public string DriversLicenseIssuingCountry { get; set; }
        public DateTime? EffectiveStartDate { get; set; }
        public string Ethnicity { get; set; }
        public string Gender { get; set; }
        public DateTime? HireDate { get; set; }
        public string HomeFaxAreaCode { get; set; }
        public string HomeFaxCountryCode { get; set; }
        public string HomeFaxExtension { get; set; }
        public string HomeFaxLegislationCode { get; set; }
        public string HomeFaxNumber { get; set; }
        public string HomePhoneAreaCode { get; set; }
        public string HomePhoneCountryCode { get; set; }
        public string HomePhoneExtension { get; set; }
        public string HomePhoneLegislationCode { get; set; }
        public string HomePhoneNumber { get; set; }
        public string Honors { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public int? LegalEntityId { get; set; }
        public string LicenseNumber { get; set; }
        public string MaritalStatus { get; set; }
        public string MiddleName { get; set; }
        public string MilitaryVetStatus { get; set; }
        public string NameSuffix { get; set; }
        public string NationalId { get; set; }
        public string NationalIdCountry { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
