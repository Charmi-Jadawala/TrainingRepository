using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWithAdo.Net.Models
{
    public class CRUDModel
    {
        //GET ALL
        public DataTable GetAllStudents(string SortBy, string currentFilter, string searchString, int? page)
        {


            DataTable dt = new DataTable();
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using(SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select * from Student", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);

                DataView view = dt.DefaultView;

                if (!String.IsNullOrEmpty(searchString))
                {
                    var result = from row in dt.AsEnumerable()
                                 where row.Field<string>("student_name").ToLower().Contains(searchString.ToLower())
                                 select row;

                    if (result.Any())
                    {
                        dt = result.CopyToDataTable();
                    }

                }

                switch (SortBy)
                {
                    case "Name_Description":
                        view.Sort = "student_name ASC";
                        dt = dt.DefaultView.ToTable();
                        break;
                    case "Age":
                        view.Sort = "student_age ASC";
                        dt = dt.DefaultView.ToTable();
                        break;
                    case "Age_Description":
                        view.Sort = "student_age DESC";
                        dt = dt.DefaultView.ToTable();
                        break;
                    default:
                        view.Sort = "student_id ASC";
                        dt = dt.DefaultView.ToTable();
                        break;
                }
            }

            return dt;
        }

        //GET By ID
        public DataTable GetStudentById(int studentId)
        {
            DataTable dt = new DataTable();
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using(SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select * from Student where student_id=" + studentId, con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
            }

            return dt;
        }

        //CREATE
        public int AddStudent(string studentName, int studentAge, string studentGender)
        {
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using(SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                string query = "Insert into Student (student_name, student_age, student_gender) values(@sname, @sage, @sgender)";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@sname", studentName);
                cmd.Parameters.AddWithValue("@sage", studentAge);
                cmd.Parameters.AddWithValue("@sgender", studentGender);
                return cmd.ExecuteNonQuery();
            }
        }

        //UPDATE
        public int UpdateStudent(int studentId, string studentName, int studentAge, string studentGender)
        {
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using (SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                string query = "Update Student set student_name = @sname, student_age = @sage, student_gender = @sgender where student_id = @sid";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@sname", studentName);
                cmd.Parameters.AddWithValue("@sage", studentAge);
                cmd.Parameters.AddWithValue("@sgender", studentGender);
                cmd.Parameters.AddWithValue("@sid", studentId);
                return cmd.ExecuteNonQuery();
            }
        }

        //DELETE
        public int DeleteStudent(int studentId)
        {
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using(SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                string query = "Delete from Student where student_id=@sid";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@sid", studentId);
                return cmd.ExecuteNonQuery();
            }
        }
    }
}