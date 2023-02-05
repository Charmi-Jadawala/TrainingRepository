using MimeKit;
using Coursera.Models.CustomModels;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using System.IO;
using System.Net.Mail;
using System.Net.Mime;
using ContentType = MimeKit.ContentType;
using System.Net;
using System;
using SmtpClient = System.Net.Mail.SmtpClient;

namespace Coursera.Authentication
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
    }
    public class MailService : IMailService
    {
        private readonly MailSettings _mailSettings;
        public MailService(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }
        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            var mailMessage = new MailMessage()
            {
                Subject = mailRequest.Subject,
                Body = mailRequest.Body,
                IsBodyHtml = true,
                From = new MailAddress(_mailSettings.Mail)
            };

            var NetworkCred = new NetworkCredential(_mailSettings.Mail, _mailSettings.Password);

            var smtp = new SmtpClient()
            {

                Host = _mailSettings.Host,
                EnableSsl = true,
                UseDefaultCredentials = true,
                Port = Convert.ToInt32(_mailSettings.Port),
                Credentials = NetworkCred
            };

            mailMessage.To.Add(mailRequest.ToEmail);

            smtp.Send(mailMessage);
            //try
            //{
            //    smtp.Send(mailMessage);
            //}
            //catch (SmtpException ex)
            //{
            //}
        }
    }
}
