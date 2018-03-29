package com.zhidisoft.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.zhidisoft.base.dao.IBaseDao;
import com.zhidisoft.entity.User;

public interface UserMapper extends IBaseDao<User, Integer> {

	Integer count();
	
	List<User> findUserByPage(@Param("startRows") Integer startRows,
                              @Param("fetchSize") Integer fetchSize);



	
}