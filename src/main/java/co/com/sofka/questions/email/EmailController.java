package co.com.sofka.questions.email;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EmailController{
    
    @GetMapping("/")
    public String index(){
        return "send_mail_view";
    }
}
