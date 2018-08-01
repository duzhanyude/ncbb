package com.hcy.ncbb.user.server.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hcy.ncbb.user.bean.UserInfo;
import com.hcy.ncbb.user.mapper.UserInfoMapper;
import com.hcy.ncbb.user.server.UserInfoServer;

@Transactional
@Service("userInfoServer")
public class UserInfoServerImpl implements UserInfoServer {
	@Resource
	private UserInfoMapper userInfoMapper;

	@Override
	public List<UserInfo> queryDataCall(int page, int rows) throws Exception {
		List<UserInfo> userInfos = null;
		try {
			userInfos = userInfoMapper.queryDataCall();
		} catch (Exception e) {
			throw e;
		}
		return userInfos;
	}

}
