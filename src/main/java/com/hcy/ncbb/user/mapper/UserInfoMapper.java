package com.hcy.ncbb.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hcy.ncbb.user.bean.UserInfo;

@Mapper
public interface UserInfoMapper {
	
  List<UserInfo> queryDataCall();
}
