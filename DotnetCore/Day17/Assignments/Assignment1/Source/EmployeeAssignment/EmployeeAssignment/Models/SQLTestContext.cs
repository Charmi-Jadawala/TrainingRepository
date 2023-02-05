using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class SQLTestContext : DbContext
    {
        public SQLTestContext()
        {
        }

        public SQLTestContext(DbContextOptions<SQLTestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assignment> Assignments { get; set; }
        public virtual DbSet<AssignmentLink> AssignmentLinks { get; set; }
        public virtual DbSet<Detail> Details { get; set; }
        public virtual DbSet<Discount> Discounts { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<EmployeeAssignment> EmployeeAssignments { get; set; }
        public virtual DbSet<Link> Links { get; set; }
        public virtual DbSet<Log> Logs { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderItem> OrderItems { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<VwInStock> VwInStocks { get; set; }
        public virtual DbSet<VwNoOrderPlaced> VwNoOrderPlaceds { get; set; }
        public virtual DbSet<VwNonDiscountedProduct> VwNonDiscountedProducts { get; set; }
        public virtual DbSet<VwReport> VwReports { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0380\\MSSQL2019;Database=SQLTest;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Assignment>(entity =>
            {
                entity.ToTable("Assignment");

                entity.Property(e => e.ActionCode)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.ActionReasonCode)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.ActualTerminationDate).HasColumnType("datetime");

                entity.Property(e => e.AssignmentCategory)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentDff)
                    .HasMaxLength(30)
                    .HasColumnName("assignmentDFF");

                entity.Property(e => e.AssignmentExtraInformation)
                    .HasMaxLength(30)
                    .HasColumnName("assignmentExtraInformation");

                entity.Property(e => e.AssignmentName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentProjectedEndDate).HasColumnType("datetime");

                entity.Property(e => e.AssignmentStatus)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentStatusTypeId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.BusinessUnitId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DefaultExpenseAccount)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.EffectiveEndDate).HasColumnType("datetime");

                entity.Property(e => e.EffectiveStartDate).HasColumnType("datetime");

                entity.Property(e => e.Empreps)
                    .HasMaxLength(30)
                    .HasColumnName("empreps");

                entity.Property(e => e.EndTime)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.FullPartTime)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.GradeId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.GradeLadderId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.JobId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LegalEntityId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.LocationId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerAssignmentId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId)
                    .HasMaxLength(8)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AssignmentLink>(entity =>
            {
                entity.HasOne(d => d.Assignment)
                    .WithMany(p => p.AssignmentLinks)
                    .HasForeignKey(d => d.AssignmentId)
                    .HasConstraintName("FK__Assignmen__Assig__3E1D39E1");

                entity.HasOne(d => d.Link)
                    .WithMany(p => p.AssignmentLinks)
                    .HasForeignKey(d => d.LinkId)
                    .HasConstraintName("FK__Assignmen__LinkI__3F115E1A");
            });

            modelBuilder.Entity<Detail>(entity =>
            {
                entity.HasKey(e => e.DetailsId)
                    .HasName("PK__Details__BAC8628CBCD28D51");

                entity.Property(e => e.AddressLine1)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine2)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine3)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenshipLegislationCode)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.CitizenshipStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenshipToDate).HasColumnType("datetime");

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CorrespondenceLanguage)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DateOfBirth).HasColumnType("datetime");

                entity.Property(e => e.DisplayName)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DriversLicenseExpirationDate).HasColumnType("datetime");

                entity.Property(e => e.DriversLicenseId)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.DriversLicenseIssuingCountry)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EffectiveStartDate).HasColumnType("datetime");

                entity.Property(e => e.Ethnicity)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("datetime");

                entity.Property(e => e.HomeFaxAreaCode)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.HomeFaxCountryCode)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.HomeFaxExtension)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.HomeFaxLegislationCode)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.HomeFaxNumber)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneAreaCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneCountryCode)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneExtension)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneLegislationCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneNumber)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Honors)
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LicenseNumber)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.MaritalStatus)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.MilitaryVetStatus)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.NameSuffix)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.NationalId)
                    .HasMaxLength(7)
                    .IsUnicode(false);

                entity.Property(e => e.NationalIdCountry)
                    .HasMaxLength(4)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discount>(entity =>
            {
                entity.ToTable("Discount", "test1");

                entity.Property(e => e.DiscountId).HasColumnName("DiscountID");

                entity.Property(e => e.CreateDate).HasColumnType("date");

                entity.Property(e => e.DateEnd).HasColumnType("date");

                entity.Property(e => e.DateStart).HasColumnType("date");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.DetailId).HasColumnName("DetailID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Detail)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.DetailId)
                    .HasConstraintName("FK__Employees__Detai__3587F3E0");
            });

            modelBuilder.Entity<EmployeeAssignment>(entity =>
            {
                entity.HasOne(d => d.Assignment)
                    .WithMany(p => p.EmployeeAssignments)
                    .HasForeignKey(d => d.AssignmentId)
                    .HasConstraintName("FK__EmployeeA__Assig__41EDCAC5");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeAssignments)
                    .HasForeignKey(d => d.EmployeeId)
                    .HasConstraintName("FK__EmployeeA__Emplo__42E1EEFE");
            });

            modelBuilder.Entity<Link>(entity =>
            {
                entity.Property(e => e.LinkName)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Log>(entity =>
            {
                entity.HasKey(e => e.RequestId)
                    .HasName("PK__Log__33A8517AE26E2F6C");

                entity.ToTable("Log");

                entity.Property(e => e.RequestTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RequestType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("Orders", "test1");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.OrderDate).HasColumnType("date");

                entity.Property(e => e.OrderStatus)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Placed')");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrderID");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.ToTable("OrderItem", "test1");

                entity.Property(e => e.OrderItemId).HasColumnName("OrderItemID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OIOrderID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductID");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product", "test1");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('InStock')");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users", "test1");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.IsPrime).HasColumnName("isPrime");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwInStock>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_InStock");

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ProductId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProductID");

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwNoOrderPlaced>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_NoOrderPlaced");

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ProductId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProductID");

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwNonDiscountedProduct>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_NonDiscountedProducts");

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ProductId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProductID");

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VwReport>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_Report");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
