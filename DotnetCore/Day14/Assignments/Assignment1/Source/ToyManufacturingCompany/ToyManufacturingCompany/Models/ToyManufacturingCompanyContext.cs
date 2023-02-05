using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class ToyManufacturingCompanyContext : DbContext
    {
        public ToyManufacturingCompanyContext()
        {
        }

        public ToyManufacturingCompanyContext(DbContextOptions<ToyManufacturingCompanyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public virtual DbSet<ManufacturedAt> ManufacturedAts { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderItem> OrderItems { get; set; }
        public virtual DbSet<Plant> Plants { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }

        public virtual DbSet<CustomerDTO> CustomerDTO { get; set; }
 
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0380\\MSSQL2019;Database=ToyManufacturingCompany;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CustomerDTO>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<Address>(entity =>
            {
                entity.ToTable("Address");

                entity.Property(e => e.AppartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Area)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.FlatNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Landmark)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Pincode).HasColumnType("decimal(6, 0)");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomerAddress>(entity =>
            {
                entity.ToTable("CustomerAddress");

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.CustomerAddresses)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CustomerA__Addre__4316F928");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerAddresses)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CustomerA__Custo__4222D4EF");
            });

            modelBuilder.Entity<ManufacturedAt>(entity =>
            {
                entity.ToTable("ManufacturedAt");

                entity.HasOne(d => d.Plant)
                    .WithMany(p => p.ManufacturedAts)
                    .HasForeignKey(d => d.PlantId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Manufactu__Plant__3B75D760");

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.ManufacturedAts)
                    .HasForeignKey(d => d.ToyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Manufactu__ToyId__3A81B327");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.PayableAmount).HasColumnType("decimal(8, 2)");
                entity.Property(e => e.OrderAmount).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.OrderDate).HasColumnType("date");

                entity.Property(e => e.OrderStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Placed')");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Orders__Customer__45F365D3");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.Property(e => e.Qty).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OrderItem__Order__4AB81AF0");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OrderItem__Produ__49C3F6B7");
            });

            modelBuilder.Entity<Plant>(entity =>
            {
                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("decimal(8, 2)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
