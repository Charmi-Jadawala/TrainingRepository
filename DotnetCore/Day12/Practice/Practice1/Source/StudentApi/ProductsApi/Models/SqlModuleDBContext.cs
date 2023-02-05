using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace StudentApi.Models
{
    public partial class SqlModuleDBContext : DbContext
    {
        public SqlModuleDBContext()
        {
        }

        public SqlModuleDBContext(DbContextOptions<SqlModuleDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AmtTransaction> AmtTransactions { get; set; }
        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Borrow> Borrows { get; set; }
        public virtual DbSet<Branch> Branches { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<CourseEnrolled> CourseEnrolleds { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerDatum> CustomerData { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<DepartmentView> DepartmentViews { get; set; }
        public virtual DbSet<Deposit> Deposits { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Employee1> Employees1 { get; set; }
        public virtual DbSet<EmployeeHistory> EmployeeHistories { get; set; }
        public virtual DbSet<EmployeeView> EmployeeViews { get; set; }
        public virtual DbSet<ExamResult> ExamResults { get; set; }
        public virtual DbSet<FeePayment> FeePayments { get; set; }
        public virtual DbSet<Incentive> Incentives { get; set; }
        public virtual DbSet<IncentiveView> IncentiveViews { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
        public virtual DbSet<JobHistory> JobHistories { get; set; }
        public virtual DbSet<JobHistoryView> JobHistoryViews { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<LondonView> LondonViews { get; set; }
        public virtual DbSet<ManagerView> ManagerViews { get; set; }
        public virtual DbSet<Mark> Marks { get; set; }
        public virtual DbSet<PlanetsId> PlanetsIds { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductPrice> ProductPrices { get; set; }
        public virtual DbSet<SalaryView> SalaryViews { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Student1> Students1 { get; set; }
        public virtual DbSet<Student2> Students2 { get; set; }
        public virtual DbSet<Student3> Students3 { get; set; }
        public virtual DbSet<StudentDetail> StudentDetails { get; set; }
        public virtual DbSet<StudentHour> StudentHours { get; set; }
        public virtual DbSet<StudentHoursSum> StudentHoursSums { get; set; }
        public virtual DbSet<StudentPresent> StudentPresents { get; set; }
        public virtual DbSet<StudentPresentSum> StudentPresentSums { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }

        public virtual DbSet<StudentVM> StudentVM { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0380\\MSSQL2019;Database=SqlModuleDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentVM>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<AmtTransaction>(entity =>
            {
                entity.HasKey(e => e.TransactionId)
                    .HasName("PK__AmtTrans__55433A4B8B85BF82");

                entity.ToTable("AmtTransactions", "bank");

                entity.Property(e => e.TransactionId).HasColumnName("TransactionID");

                entity.Property(e => e.Amount).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Pending')");

                entity.Property(e => e.TransferFromActNo)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.TransferIntoActNo)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.HasOne(d => d.TransferFromActNoNavigation)
                    .WithMany(p => p.AmtTransactionTransferFromActNoNavigations)
                    .HasPrincipalKey(p => p.ActNo)
                    .HasForeignKey(d => d.TransferFromActNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AmtTransa__Trans__60FC61CA");

                entity.HasOne(d => d.TransferIntoActNoNavigation)
                    .WithMany(p => p.AmtTransactionTransferIntoActNoNavigations)
                    .HasPrincipalKey(p => p.ActNo)
                    .HasForeignKey(d => d.TransferIntoActNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AmtTransa__Trans__61F08603");
            });

            modelBuilder.Entity<Author>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");
            });

            modelBuilder.Entity<Borrow>(entity =>
            {
                entity.HasKey(e => e.LoanNo)
                    .HasName("PK__Borrow__4F5B1D631A60D71D");

                entity.ToTable("Borrow", "bank");

                entity.Property(e => e.LoanNo)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BName");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CName");

                entity.HasOne(d => d.BnameNavigation)
                    .WithMany(p => p.Borrows)
                    .HasForeignKey(d => d.Bname)
                    .HasConstraintName("FK__Borrow__BName__6CA31EA0");

                entity.HasOne(d => d.CnameNavigation)
                    .WithMany(p => p.Borrows)
                    .HasForeignKey(d => d.Cname)
                    .HasConstraintName("FK__Borrow__CName__6BAEFA67");
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.HasKey(e => e.Bname)
                    .HasName("PK__Branch__3FF35083AB361D6B");

                entity.ToTable("Branch", "bank");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BName");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(18)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course", "school");

                entity.Property(e => e.CourseId).HasColumnName("CourseID");

                entity.Property(e => e.CourseName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CourseEnrolled>(entity =>
            {
                entity.ToTable("CourseEnrolled", "school");

                entity.Property(e => e.CourseEnrolledId).HasColumnName("CourseEnrolledID");

                entity.Property(e => e.CourseId).HasColumnName("CourseID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseEnrolleds)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__CourseEnr__Cours__38EE7070");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.CourseEnrolleds)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK__CourseEnr__Stude__37FA4C37");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cname)
                    .HasName("PK__Customer__85D445AB5165E374");

                entity.ToTable("Customer", "bank");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CName");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(18)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomerDatum>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__Customer__A4AE64B86AFAFF37");

                entity.ToTable("CustomerData", "bank");

                entity.HasIndex(e => e.ActNo, "UQ__Customer__AF178A3AE5BA20DC")
                    .IsUnique();

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.ActNo)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Balance).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("departments");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DEPARTMENT_ID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("DEPARTMENT_NAME");

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LOCATION_ID");

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MANAGER_ID");
            });

            modelBuilder.Entity<DepartmentView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Department View");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.NoOfEmployees).HasColumnName("No. of Employees");
            });

            modelBuilder.Entity<Deposit>(entity =>
            {
                entity.HasKey(e => e.ActNo)
                    .HasName("PK__Deposit__AF178A3B7DE1E3AC");

                entity.ToTable("Deposit", "bank");

                entity.Property(e => e.ActNo)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Adate).HasColumnType("date");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BName");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CName");

                entity.HasOne(d => d.BnameNavigation)
                    .WithMany(p => p.Deposits)
                    .HasForeignKey(d => d.Bname)
                    .HasConstraintName("FK__Deposit__BName__7073AF84");

                entity.HasOne(d => d.CnameNavigation)
                    .WithMany(p => p.Deposits)
                    .HasForeignKey(d => d.Cname)
                    .HasConstraintName("FK__Deposit__CName__6F7F8B4B");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employee");

                entity.Property(e => e.EmployeeId).HasColumnName("Employee_ID");

                entity.Property(e => e.Department)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("First_Name");

                entity.Property(e => e.JoiningDate)
                    .HasColumnType("date")
                    .HasColumnName("Joining_Date");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("Last_Name");

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("Manager_ID");
            });

            modelBuilder.Entity<Employee1>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("pkEmployeeID");

                entity.ToTable("Employees");

                entity.HasIndex(e => e.Email, "ukEmail")
                    .IsUnique();

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EmployeeID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.CommissionPct).HasColumnType("decimal(2, 2)");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("ManagerID");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");
            });

            modelBuilder.Entity<EmployeeHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmployeeHistory");

                entity.Property(e => e.CommissionPct).HasColumnType("decimal(2, 2)");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("ManagerID");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");
            });

            modelBuilder.Entity<EmployeeView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Employee View");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("First_Name");

                entity.Property(e => e.IncentiveAmount).HasColumnName("Incentive_Amount");

                entity.Property(e => e.IncentiveDate)
                    .HasColumnType("date")
                    .HasColumnName("Incentive_Date");

                entity.Property(e => e.JoiningDate)
                    .HasColumnType("date")
                    .HasColumnName("Joining_Date");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("Last_Name");
            });

            modelBuilder.Entity<ExamResult>(entity =>
            {
                entity.HasKey(e => e.StudentId)
                    .HasName("PK__ExamResu__32C52B9955DFBE5C");

                entity.ToTable("ExamResult");

                entity.Property(e => e.StudentName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Subject)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<FeePayment>(entity =>
            {
                entity.ToTable("FeePayment", "school");

                entity.Property(e => e.FeePaymentId).HasColumnName("FeePaymentID");

                entity.Property(e => e.DateOfPayment)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.FeePayments)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK__FeePaymen__Stude__3BCADD1B");
            });

            modelBuilder.Entity<Incentive>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.EmployeeRefId).HasColumnName("Employee_Ref_ID");

                entity.Property(e => e.IncentiveAmount).HasColumnName("Incentive_Amount");

                entity.Property(e => e.IncentiveDate)
                    .HasColumnType("date")
                    .HasColumnName("Incentive_Date");

                entity.HasOne(d => d.EmployeeRef)
                    .WithMany()
                    .HasForeignKey(d => d.EmployeeRefId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Employee_Ref_ID");
            });

            modelBuilder.Entity<IncentiveView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Incentive View");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("First_Name");

                entity.Property(e => e.TotalIncentives).HasColumnName("Total_Incentives");
            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.ToTable("jobs");

                entity.Property(e => e.JobId)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JOB_ID")
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.JobTitle)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false)
                    .HasColumnName("JOB_TITLE");

                entity.Property(e => e.MaxSalary)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MAX_SALARY");

                entity.Property(e => e.MinSalary)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MIN_SALARY");
            });

            modelBuilder.Entity<JobHistory>(entity =>
            {
                entity.HasKey(e => new { e.EmployeeId, e.StartDate })
                    .HasName("PK__job_hist__6734C998477B2C4D");

                entity.ToTable("job_history");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("START_DATE");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DEPARTMENT_ID");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("END_DATE");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JOB_ID");
            });

            modelBuilder.Entity<JobHistoryView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Job History View");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.JobTitle)
                    .HasMaxLength(35)
                    .IsUnicode(false);

                entity.Property(e => e.NoOfDays).HasColumnName("No. of Days");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("locations");

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LOCATION_ID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CITY");

                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY_ID");

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("POSTAL_CODE");

                entity.Property(e => e.StateProvince)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("STATE_PROVINCE");

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("STREET_ADDRESS");
            });

            modelBuilder.Entity<LondonView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("London View");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .HasMaxLength(46)
                    .IsUnicode(false);

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.JobName)
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ManagerView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Manager View");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Department_Name");

                entity.Property(e => e.ManagerName)
                    .HasMaxLength(46)
                    .IsUnicode(false)
                    .HasColumnName("Manager Name");
            });

            modelBuilder.Entity<Mark>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Marks", "assign");

                entity.Property(e => e.Average).HasColumnType("decimal(4, 2)");

                entity.Property(e => e.English).HasColumnType("decimal(4, 2)");

                entity.Property(e => e.Grade)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.Maths).HasColumnType("decimal(4, 2)");

                entity.Property(e => e.Science).HasColumnType("decimal(4, 2)");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.HasOne(d => d.Student)
                    .WithMany()
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK__Marks__StudentID__56B3DD81");
            });

            modelBuilder.Entity<PlanetsId>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("PlanetsID", "index");

                entity.HasIndex(e => e.Id, "In_PlanetsID_ID")
                    .IsClustered();

                entity.Property(e => e.Id).HasColumnName("ID");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product", "student");

                entity.Property(e => e.Productid).HasColumnName("productid");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ProductPrice>(entity =>
            {
                entity.ToTable("ProductPrice", "student");

                entity.Property(e => e.Productpriceid).HasColumnName("productpriceid");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("code")
                    .IsFixedLength(true);

                entity.Property(e => e.Effdt)
                    .HasColumnType("date")
                    .HasColumnName("effdt");

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(5, 2)")
                    .HasColumnName("price");

                entity.Property(e => e.Productid).HasColumnName("productid");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductPrices)
                    .HasForeignKey(d => d.Productid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ProductPr__produ__0A688BB1");
            });

            modelBuilder.Entity<SalaryView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Salary View");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Department_Name");

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .HasMaxLength(46)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Student", "assign");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Board)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Student1>(entity =>
            {
                entity.HasKey(e => e.StudentId)
                    .HasName("PK__Student__32C52B99DDBF0D89");

                entity.ToTable("Student");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Student2>(entity =>
            {
                entity.HasKey(e => e.StudentId)
                    .HasName("PK__Student__32C52A7983D70C21");

                entity.ToTable("Student", "school");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.StudentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Student3>(entity =>
            {
                entity.HasKey(e => e.Studentid)
                    .HasName("PK__Student__4D16D26482225645");

                entity.ToTable("Student", "student");

                entity.Property(e => e.Studentid).HasColumnName("studentid");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<StudentDetail>(entity =>
            {
                entity.ToTable("StudentDetail", "student");

                entity.Property(e => e.Studentdetailid).HasColumnName("studentdetailid");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("gender")
                    .IsFixedLength(true);

                entity.Property(e => e.Standard).HasColumnName("standard");

                entity.Property(e => e.Studentid).HasColumnName("studentid");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentDetails)
                    .HasForeignKey(d => d.Studentid)
                    .HasConstraintName("FK__StudentDe__stude__236943A5");
            });

            modelBuilder.Entity<StudentHour>(entity =>
            {
                entity.HasKey(e => e.Studenthoursid)
                    .HasName("PK__StudentH__9D79B3F87898E3FD");

                entity.ToTable("StudentHours", "student");

                entity.Property(e => e.Studenthoursid).HasColumnName("studenthoursid");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.Hours)
                    .HasColumnType("decimal(4, 2)")
                    .HasColumnName("hours");

                entity.Property(e => e.Studentid).HasColumnName("studentid");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentHours)
                    .HasForeignKey(d => d.Studentid)
                    .HasConstraintName("FK__StudentHo__stude__756D6ECB");
            });

            modelBuilder.Entity<StudentHoursSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("StudentHoursSum", "student");

                entity.Property(e => e.HoursSum).HasColumnType("decimal(38, 2)");

                entity.Property(e => e.Studentid).HasColumnName("studentid");
            });

            modelBuilder.Entity<StudentPresent>(entity =>
            {
                entity.ToTable("StudentPresent", "student");

                entity.Property(e => e.Studentpresentid).HasColumnName("studentpresentid");

                entity.Property(e => e.Month).HasColumnName("month");

                entity.Property(e => e.Present)
                    .HasColumnType("decimal(4, 2)")
                    .HasColumnName("present");

                entity.Property(e => e.Studentid).HasColumnName("studentid");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentPresents)
                    .HasForeignKey(d => d.Studentid)
                    .HasConstraintName("FK__StudentPr__stude__2739D489");
            });

            modelBuilder.Entity<StudentPresentSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("StudentPresentSum", "student");

                entity.Property(e => e.PresentSum).HasColumnType("decimal(38, 2)");

                entity.Property(e => e.Studentid).HasColumnName("studentid");
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.ToTable("Transactions", "bank");

                entity.Property(e => e.TransactionId).HasColumnName("TransactionID");

                entity.Property(e => e.Amount).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.TransferFromActNo)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.TransferIntoActNo)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.HasOne(d => d.TransferFromActNoNavigation)
                    .WithMany(p => p.TransactionTransferFromActNoNavigations)
                    .HasPrincipalKey(p => p.ActNo)
                    .HasForeignKey(d => d.TransferFromActNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transacti__Trans__52AE4273");

                entity.HasOne(d => d.TransferIntoActNoNavigation)
                    .WithMany(p => p.TransactionTransferIntoActNoNavigations)
                    .HasPrincipalKey(p => p.ActNo)
                    .HasForeignKey(d => d.TransferIntoActNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transacti__Trans__53A266AC");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
