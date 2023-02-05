using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace MvcDiWithUnity.BL
{
    public class Student : IStudent
    {
        public string connStr = ConfigurationManager.ConnectionStrings["DbConnection"].ConnectionString;

        public int AddStudent(string studentName, int studentAge, string studentGender)
        {
            using (SqlConnection con = new SqlConnection(connStr))
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

        public int DeleteStudent(int studentId)
        {
            using (SqlConnection con = new SqlConnection(connStr))
            {
                con.Open();
                string query = "Delete from Student where student_id=@sid";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@sid", studentId);
                return cmd.ExecuteNonQuery();
            }
        }

        public DataTable GetAllStudents()
        {
            DataTable dt = new DataTable();

            using (SqlConnection con = new SqlConnection(connStr))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select * from Student", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
            }

            return dt;
        }

        public DataTable GetStudentById(int studentId)
        {
            DataTable dt = new DataTable();

            using (SqlConnection con = new SqlConnection(connStr))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select * from Student where student_id=" + studentId, con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
            }

            return dt;
        }

        public int UpdateStudent(int studentId, string studentName, int studentAge, string studentGender)
        {
            using (SqlConnection con = new SqlConnection(connStr))
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
    }
}