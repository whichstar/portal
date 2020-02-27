package com.gxkj.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
public class IndexController {

    @GetMapping("/index")
    public ModelAndView index(Map<String,Object> map){
        map.put("name", "小宝宝");
        return new ModelAndView("index",map);
    }

    @RequestMapping(value = "/test")
    public String test1(Model model){

        model.addAttribute("haha","我的天");
        return "index";
    }
}

