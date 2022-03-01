package com.insurace.email.email.Service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

@Service
public class EmailService {

	@Autowired
	SendGrid sendgrid;

	@Value("${sendgrid.email}")
	private String from;

	public Response sendEmail(EmailRequest emailrequest) {
		Mail mail = new Mail(new Email(from), emailrequest.getSubject(), new Email(emailrequest.getTo()),
				new Content("text/plain", emailrequest.getBody()));
		mail.setReplyTo(new Email(emailrequest.getTo()));
		Request request = new Request();
		try {
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = this.sendgrid.api(request);
			return response;
		} catch (IOException ex) {
			ex.printStackTrace();
			System.out.println(ex.getMessage());
		}
		return null;
	};
}
