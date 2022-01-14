package co.com.sofka.questions.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import reactor.core.publisher.Mono;

@Service
@Validated
public class SendEmailService {
    
    @Autowired
    private JavaMailSender javaMailSender;

    public SendEmailService() {}

    public Mono<String> sendEmail(String to, String subject, String body) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        try{
            MimeMessage message = javaMailSender.createMimeMessage();
            message.setSubject(subject);
            MimeMessageHelper helper;
            helper = new MimeMessageHelper(message, true);
            helper.setFrom("jhonzallazar@gmail.com");
            helper.setTo(to);
            helper.setText(body, true);
            javaMailSender.send(message);
        } catch(MessagingException exception){
            exception.getMessage();
        }

        return Mono.just("¡Se envio el Email!");
    }
}
