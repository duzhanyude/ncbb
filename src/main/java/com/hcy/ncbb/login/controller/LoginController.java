package com.hcy.ncbb.login.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("moveBus")
public class LoginController {
	@RequestMapping("login")
	private ModelAndView login(ModelAndView mv){
		 mv.setViewName("login");
	    return mv;
	}
	
	@RequestMapping("main")
	private ModelAndView index(ModelAndView mv){
		
		 mv.setViewName("main/main");
	    return mv;
	}
}
