using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace CustomMiddleware.Models
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

        public virtual DbSet<Discount> Discounts { get; set; }
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
            modelBuilder.Entity<Discount>(entity =>
            {
                entity.ToTable("Discount", "test1");

                entity.Property(e => e.DiscountId).HasColumnName("DiscountID");

                entity.Property(e => e.CreateDate).HasColumnType("date");

                entity.Property(e => e.DateEnd).HasColumnType("date");

                entity.Property(e => e.DateStart).HasColumnType("date");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");
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
