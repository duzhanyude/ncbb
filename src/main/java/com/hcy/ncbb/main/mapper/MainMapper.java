package com.hcy.ncbb.main.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.hcy.ncbb.main.bean.InfoBean;

@Mapper
public interface MainMapper {
  InfoBean getCount();
}
