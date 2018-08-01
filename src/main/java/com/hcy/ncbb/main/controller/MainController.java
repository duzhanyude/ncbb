package com.hcy.ncbb.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcy.ncbb.main.bean.InfoBean;
import com.hcy.ncbb.main.server.MainServer;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("moveBus")
public class MainController {
	@Autowired
	private MainServer mainServer;

	@RequestMapping("getCount")
	private InfoBean getCount() {
		InfoBean infoBean=null;
		try {
          infoBean=mainServer.getCount();
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
		}
		return infoBean;
	}

}
