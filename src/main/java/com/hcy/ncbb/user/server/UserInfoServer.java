package com.hcy.ncbb.user.server;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.hcy.ncbb.user.bean.UserInfo;

public interface UserInfoServer {
	List<UserInfo> queryDataCall(int page,int rows) throws Exception;
}
