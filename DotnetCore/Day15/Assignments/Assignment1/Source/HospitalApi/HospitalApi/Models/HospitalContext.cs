using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HospitalApi.Models
{
    public partial class HospitalContext : DbContext
    {
        public HospitalContext()
        {
        }

        public HospitalContext(DbContextOptions<HospitalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assistant> Assistants { get; set; }
        public virtual DbSet<AsstDepartment> AsstDepartments { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Dosage> Dosages { get; set; }
        public virtual DbSet<LoginCredential> LoginCredentials { get; set; }
        public virtual DbSet<LoginToken> LoginTokens { get; set; }
        public virtual DbSet<Medicine> Medicines { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Time> Times { get; set; }
        public virtual DbSet<TreatedBy> TreatedBies { get; set; }

        public virtual DbSet<DoctorVM> DoctorVM { get; set; }
        public virtual DbSet<PatientReport> PatientReport { get; set; }
        public virtual DbSet<PatientMedicineReport> PatientMedicineReport { get; set; }
        public virtual DbSet<SummaryReport> SummaryReport { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0380\\MSSQL2019;Database=Hospital;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DoctorVM>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<PatientReport>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<PatientMedicineReport>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<SummaryReport>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<Assistant>(entity =>
            {
                entity.HasKey(e => e.AsstId)
                    .HasName("PK__Assistan__AEFC94439B0430C5");

                entity.ToTable("Assistant");

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.JoiningDate).HasColumnType("date");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.ShiftTime)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AsstDepartment>(entity =>
            {
                entity.ToTable("AsstDepartment");

                entity.HasOne(d => d.Asst)
                    .WithMany(p => p.AsstDepartments)
                    .HasForeignKey(d => d.AsstId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AsstDepar__AsstI__5812160E");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.AsstDepartments)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AsstDepar__DeptI__571DF1D5");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId);

                entity.ToTable("Department");

                entity.Property(e => e.DeptName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DocId);

                entity.ToTable("Doctor");

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.JoiningDate).HasColumnType("date");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(10, 2)");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Doctor__DeptId__403A8C7D");
            });

            modelBuilder.Entity<Dosage>(entity =>
            {
                entity.ToTable("Dosage");

                entity.HasOne(d => d.Medicine)
                    .WithMany(p => p.Dosages)
                    .HasForeignKey(d => d.MedicineId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Dosage__Medicine__534D60F1");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Dosages)
                    .HasForeignKey(d => d.PatientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Dosage__PatientI__52593CB8");

                entity.HasOne(d => d.Time)
                    .WithMany(p => p.Dosages)
                    .HasForeignKey(d => d.TimeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Dosage__TimeId__5441852A");
            });

            modelBuilder.Entity<LoginCredential>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__LoginCre__1788CC4C8B736863");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<LoginToken>(entity =>
            {
                entity.HasKey(e => e.TokenId)
                    .HasName("PK__LoginTok__658FEEEA70E64167");

                entity.Property(e => e.Token)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Medicine>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.ToTable("Patient");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Time>(entity =>
            {
                entity.ToTable("Time");

                entity.Property(e => e.Time1)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Time");
            });

            modelBuilder.Entity<TreatedBy>(entity =>
            {
                entity.ToTable("TreatedBy");

                entity.HasOne(d => d.Asst)
                    .WithMany(p => p.TreatedBies)
                    .HasForeignKey(d => d.AsstId)
                    .HasConstraintName("FK__TreatedBy__AsstI__4F7CD00D");

                entity.HasOne(d => d.Doc)
                    .WithMany(p => p.TreatedBies)
                    .HasForeignKey(d => d.DocId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TreatedBy__DocId__4E88ABD4");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.TreatedBies)
                    .HasForeignKey(d => d.PatientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TreatedBy__Patie__4D94879B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
