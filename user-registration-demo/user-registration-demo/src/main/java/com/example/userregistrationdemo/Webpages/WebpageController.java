package com.example.userregistrationdemo.Webpages;

import com.example.userregistrationdemo.appuser.AppUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class WebpageController {
    /*
    @RequestMapping(path = "/index")
    public String index(){
        return "index";
    }
    */

    @GetMapping("/index")
    public String index(){
        return "index";
    }

    @GetMapping("/AboutUs")
    public String aboutUs(){
        return "AboutUs";
    }

    @GetMapping("/Login")
    public String showForm(Model model){
        AppUser user = new AppUser();
        model.addAttribute("user", user);

        return "Login";
    }
}
