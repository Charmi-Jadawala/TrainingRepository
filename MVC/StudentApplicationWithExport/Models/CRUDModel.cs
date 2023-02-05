using ClosedXML.Excel;
using System;
using System.IO;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using OfficeOpenXml;
using CrystalDecisions.CrystalReports.Engine;

namespace MvcWithAdo.Net.Models
{
    public class CRUDModel
    {
        //GET ALL
        public DataTable GetAllStudents()
        {
            DataTable dt = new DataTable();
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using(SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select * from Student", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
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


        //EXPORT TO EXCEL
        public void ExportToExcel()
        {
            DataTable dt = new DataTable();
            string conString = @"Data Source=PC0380\MSSQL2019;Initial Catalog=MVC_DB;Integrated Security=True";

            using (SqlConnection con = new SqlConnection(conString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select * from Student", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);

                using (XLWorkbook wb = new XLWorkbook())
                {
                    wb.Worksheets.Add(dt, "Students");
                    HttpContext.Current.Response.Clear();
                    HttpContext.Current.Response.Buffer = true;
                    HttpContext.Current.Response.Charset = "";
                    HttpContext.Current.Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    HttpContext.Current.Response.AddHeader("content-disposition", "attachment;filename=SqlExport.xlsx");
                    using (MemoryStream memoryStream = new MemoryStream())
                    {
                        wb.SaveAs(memoryStream);
                        memoryStream.WriteTo(HttpContext.Current.Response.OutputStream);
                        HttpContext.Current.Response.Flush();
                        HttpContext.Current.Response.End();
                    }
                }

                con.Close();
            }
        }


        //IMPORT TO SQL
        public void ImportFromExcel(HttpRequestBase request)
        {
            var studentList = new List<StudentModel>();

            HttpPostedFileBase file = request.Files["UploadedFile"];
            if ((file != null) && (file.ContentLength > 0) && !string.IsNullOrEmpty(file.FileName))
            {
                string fileName = file.FileName;
                string fileContentType = file.ContentType;
                byte[] fileBytes = new byte[file.ContentLength];
                var data = file.InputStream.Read(fileBytes, 0, Convert.ToInt32(file.ContentLength));
                using (var package = new ExcelPackage(file.InputStream))
                {
                    var currentSheet = package.Workbook.Worksheets;
                    var workSheet = currentSheet.First();
                    var noOfCol = workSheet.Dimension.End.Column;
                    var noOfRow = workSheet.Dimension.End.Row;
                    for (int rowIterator = 2; rowIterator <= noOfRow; rowIterator++)
                    {
                        var student = new StudentModel();
                        student.Name = workSheet.Cells[rowIterator, 1].Value.ToString();
                        student.Age = Convert.ToInt32(workSheet.Cells[rowIterator, 2].Value);
                        student.Gender = workSheet.Cells[rowIterator, 3].Value.ToString();
                        studentList.Add(student);
                    }
                }
            }

            CRUDModel model = new CRUDModel();
            foreach (var item in studentList)
            {
                model.AddStudent(item.Name, item.Age, item.Gender);
            }
        }


        //GENERATE CRYSTAL REPORT
        public Stream getCrystalReport()
        {
            DataTable dt = GetAllStudents();
            List<StudentModel> studentList = new List<StudentModel>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                StudentModel student = new StudentModel();
                student.Id = Convert.ToInt32(dt.Rows[i]["student_id"]);
                student.Name = dt.Rows[i]["student_name"].ToString();
                student.Age = Convert.ToInt32(dt.Rows[i]["student_age"]);
                student.Gender = dt.Rows[i]["student_gender"].ToString();
                studentList.Add(student);
            }

            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(HttpContext.Current.Server.MapPath("~/CrystalReports"), "StudentReport.rpt"));
            rd.SetDataSource(studentList);

            HttpContext.Current.Response.Buffer = false;
            HttpContext.Current.Response.ClearContent();
            HttpContext.Current.Response.ClearHeaders();

            Stream _stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
            _stream.Seek(0, SeekOrigin.Begin);
            return _stream;
        }
    }
}