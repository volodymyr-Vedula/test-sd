package com.cd.test.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class TemplateController {
    @GetMapping("/greeting")
    public String greeting() {
        return "login";
    }

    @GetMapping
    public String main() {
        return "toDoList";
    }
}
