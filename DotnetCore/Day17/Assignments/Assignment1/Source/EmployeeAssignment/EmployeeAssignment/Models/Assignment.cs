using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class Assignment
    {
        public Assignment()
        {
            AssignmentLinks = new HashSet<AssignmentLink>();
            EmployeeAssignments = new HashSet<EmployeeAssignment>();
        }

        public int Id { get; set; }
        public string ActionCode { get; set; }
        public string ActionReasonCode { get; set; }
        public DateTime? ActualTerminationDate { get; set; }
        public string AssignmentCategory { get; set; }
        public int? AssignmentId { get; set; }
        public string AssignmentName { get; set; }
        public int? AssignmentNumber { get; set; }
        public DateTime? AssignmentProjectedEndDate { get; set; }
        public string AssignmentStatus { get; set; }
        public string AssignmentStatusTypeId { get; set; }
        public string BusinessUnitId { get; set; }
        public DateTime? CreationDate { get; set; }
        public string DefaultExpenseAccount { get; set; }
        public string DepartmentId { get; set; }
        public DateTime? EffectiveEndDate { get; set; }
        public DateTime? EffectiveStartDate { get; set; }
        public string EndTime { get; set; }
        public int? Frequency { get; set; }
        public string FullPartTime { get; set; }
        public string GradeId { get; set; }
        public string GradeLadderId { get; set; }
        public string JobId { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public string LegalEntityId { get; set; }
        public string LocationId { get; set; }
        public string ManagerAssignmentId { get; set; }
        public string ManagerId { get; set; }
        public string AssignmentDff { get; set; }
        public string AssignmentExtraInformation { get; set; }
        public string Empreps { get; set; }

        public virtual ICollection<AssignmentLink> AssignmentLinks { get; set; }
        public virtual ICollection<EmployeeAssignment> EmployeeAssignments { get; set; }
    }
}
