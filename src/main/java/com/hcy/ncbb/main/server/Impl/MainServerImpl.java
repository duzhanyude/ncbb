package com.hcy.ncbb.main.server.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcy.ncbb.main.bean.InfoBean;
import com.hcy.ncbb.main.mapper.MainMapper;
import com.hcy.ncbb.main.server.MainServer;
@Service("mainServer")
public class MainServerImpl implements MainServer{
    @Autowired
	private MainMapper mainMapper;
	@Override
	public InfoBean getCount() throws Exception {
	    InfoBean infoBean=null;
		try {
		   	infoBean=mainMapper.getCount();
		} catch (Exception e) {
		  throw e;
		}
		return infoBean;
	}

}
