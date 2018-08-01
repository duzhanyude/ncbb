package com.hcy.ncbb.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hcy.ncbb.user.bean.UserInfo;
import com.hcy.ncbb.user.server.UserInfoServer;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("moveBus")
public class UserController {
   
	@Resource
	private UserInfoServer userInfoServer;
	
	@RequestMapping("queryDataCall")
	private Map<String, Object> queryDataCall(@RequestParam("page") int page,@RequestParam("rows") int rows){
		PageInfo pageInfo=null;
		Map<String, Object> map=new HashMap<>();
		try {
			PageHelper.startPage(page, rows);
			pageInfo=new PageInfo<>(userInfoServer.queryDataCall(page,rows)) ;
			map.put("total", pageInfo.getList().stream().count()/rows+1);
			map.put("page", page);
			map.put("records", pageInfo.getSize());
			map.put("rows",pageInfo.getList().stream().skip((page-1)*rows).limit(rows));
		} catch (Exception e) {
		 log.error(e.getMessage()+" page:"+page+" rows:"+rows);
		}
		return map;
	}
	@RequestMapping("getData")
	private ModelAndView getData(ModelAndView mv){
		 mv.setViewName("user/list");
	    return mv;
	}
}
