using System;
using Coursera.Models.CustomModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Coursera.Models
{
    public partial class coursera2399charmiContext : DbContext
    {
        public coursera2399charmiContext()
        {
        }

        public coursera2399charmiContext(DbContextOptions<coursera2399charmiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ApplicationObject> ApplicationObjects { get; set; }
        public virtual DbSet<ApplicationObjectValue> ApplicationObjectValues { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<ExceptionLog> ExceptionLogs { get; set; }
        public virtual DbSet<Instructor> Instructors { get; set; }
        public virtual DbSet<InstructorMapping> InstructorMappings { get; set; }
        public virtual DbSet<Module> Modules { get; set; }
        public virtual DbSet<RequestLog> RequestLogs { get; set; }
        public virtual DbSet<SkillMapping> SkillMappings { get; set; }
        public virtual DbSet<SubCategory> SubCategories { get; set; }
        public virtual DbSet<Topic> Topics { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserCourse> UserCourses { get; set; }
        
        public virtual DbSet<StoreProcedure> StoreProcedure { get; set; }
        public virtual DbSet<Credentials> Credentials { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=43.204.134.14;Initial Catalog=coursera-2399-charmi;User ID=coursera-2399-charmi;Password=YxHfCMZduJ0hBzF");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Credentials>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<ApplicationObject>(entity =>
            {
                entity.HasKey(e => e.Aoid)
                    .HasName("PK__Applicat__4CE7F98654961D8B");

                entity.ToTable("ApplicationObject");

                entity.Property(e => e.Aoid).HasColumnName("AOId");

                entity.Property(e => e.Aoname)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("AOName");
            });

            modelBuilder.Entity<ApplicationObjectValue>(entity =>
            {
                entity.HasKey(e => e.Aovid)
                    .HasName("PK__Applicat__4C7D70D9B891D96C");

                entity.Property(e => e.Aovid).HasColumnName("AOVId");

                entity.Property(e => e.Aoid).HasColumnName("AOId");

                entity.Property(e => e.Aovname)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("AOVName");

                entity.HasOne(d => d.Ao)
                    .WithMany(p => p.ApplicationObjectValues)
                    .HasForeignKey(d => d.Aoid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Applicatio__AOId__50C5FA01");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false);

                entity.Property(e => e.CourseCount).HasDefaultValueSql("((0))");

                entity.Property(e => e.Status).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.About).IsUnicode(false);

                entity.Property(e => e.AlreadyEnrolled).HasDefaultValueSql("((0))");

                entity.Property(e => e.CourseName)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OfferredBy)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.OfferredByAbout).IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(8, 2)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Ratings).HasDefaultValueSql("((0))");

                entity.Property(e => e.Stars)
                    .HasColumnType("decimal(2, 1)")
                    .HasDefaultValueSql("((0.0))");

                entity.Property(e => e.Status).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Course__Category__09FE775D");

                entity.HasOne(d => d.Duration)
                    .WithMany(p => p.CourseDurations)
                    .HasForeignKey(d => d.DurationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Course__Duration__0BE6BFCF");

                entity.HasOne(d => d.Language)
                    .WithMany(p => p.CourseLanguages)
                    .HasForeignKey(d => d.LanguageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Course__Language__0CDAE408");

                entity.HasOne(d => d.Level)
                    .WithMany(p => p.CourseLevels)
                    .HasForeignKey(d => d.LevelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Course__LevelId__10AB74EC");

                entity.HasOne(d => d.SubCategory)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.SubCategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Course__SubCateg__0AF29B96");
            });

            modelBuilder.Entity<ExceptionLog>(entity =>
            {
                entity.HasKey(e => e.ExceptionId)
                    .HasName("PK__Exceptio__26981D88BA730D91");

                entity.ToTable("ExceptionLog");

                entity.Property(e => e.Ename)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("EName");

                entity.Property(e => e.ErrorMessage)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.GeneratedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<Instructor>(entity =>
            {
                entity.ToTable("Instructor");

                entity.Property(e => e.CourseCount).HasDefaultValueSql("((1))");

                entity.Property(e => e.Designation)
                    .HasMaxLength(140)
                    .IsUnicode(false);

                entity.Property(e => e.InstructorName)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false);

                entity.Property(e => e.Learners).HasDefaultValueSql("((0))");

                entity.Property(e => e.Ratings).HasDefaultValueSql("((0))");

                entity.Property(e => e.Specialization)
                    .HasMaxLength(140)
                    .IsUnicode(false);

                entity.Property(e => e.Stars)
                    .HasColumnType("decimal(2, 1)")
                    .HasDefaultValueSql("((0.0))");
            });

            modelBuilder.Entity<InstructorMapping>(entity =>
            {
                entity.HasKey(e => e.MappingId)
                    .HasName("PK__Instruct__8B57819DA3C63260");

                entity.ToTable("InstructorMapping");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.InstructorMappings)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Instructo__Cours__1E05700A");

                entity.HasOne(d => d.Instructor)
                    .WithMany(p => p.InstructorMappings)
                    .HasForeignKey(d => d.InstructorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Instructo__Instr__1D114BD1");
            });

            modelBuilder.Entity<Module>(entity =>
            {
                entity.Property(e => e.ModuleName)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Modules)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Modules__CourseI__24B26D99");
            });

            modelBuilder.Entity<RequestLog>(entity =>
            {
                entity.HasKey(e => e.RequestId)
                    .HasName("PK__RequestL__33A8517AC231BC3D");

                entity.ToTable("RequestLog");

                entity.Property(e => e.RequestPath).IsRequired();

                entity.Property(e => e.RequestTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RequestType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SkillMapping>(entity =>
            {
                entity.HasKey(e => e.MappingId)
                    .HasName("PK__SkillMap__8B57819D3DA97777");

                entity.ToTable("SkillMapping");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.SkillMappings)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SkillMapp__Cours__21D600EE");

                entity.HasOne(d => d.Skill)
                    .WithMany(p => p.SkillMappings)
                    .HasForeignKey(d => d.SkillId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SkillMapp__Skill__20E1DCB5");
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.ToTable("SubCategory");

                entity.Property(e => e.Status).HasDefaultValueSql("((1))");

                entity.Property(e => e.SubCategoryName)
                    .IsRequired()
                    .HasMaxLength(160)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategories)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SubCatego__Categ__062DE679");
            });

            modelBuilder.Entity<Topic>(entity =>
            {
                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.Status).HasDefaultValueSql("((1))");

                entity.Property(e => e.TopicTitle)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Module)
                    .WithMany(p => p.Topics)
                    .HasForeignKey(d => d.ModuleId)
                    .HasConstraintName("FK__Topics__ModuleId__297722B6");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.HasIndex(e => e.Email, "UQ__User__A9D105343A9EEA4E")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(120);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(80);

                entity.Property(e => e.Role)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Learner')");
            });

            modelBuilder.Entity<UserCourse>(entity =>
            {
                entity.HasKey(e => e.Cuid)
                    .HasName("PK__UserCour__F46C15898927E018");

                entity.Property(e => e.Cuid).HasColumnName("CUId");

                entity.Property(e => e.PurchasedDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Status)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Inprogress')");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.UserCourses)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserCours__Cours__2E3BD7D3");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserCourses)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserCours__UserI__2D47B39A");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
