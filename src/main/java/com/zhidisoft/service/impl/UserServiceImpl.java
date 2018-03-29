package com.zhidisoft.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhidisoft.base.service.impl.BaseServiceImpl;
import com.zhidisoft.dao.UserMapper;
import com.zhidisoft.entity.User;
import com.zhidisoft.service.IUserService;
import com.zhidisoft.util.PageHandler;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl extends BaseServiceImpl<User, Integer> implements IUserService {

	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	public void setUserMapper(UserMapper userMapper) {
		super.setBaseDao(userMapper);
	}

	@Override
	public PageHandler<User> findUserByPage(Integer pageNumber, Integer pageSize) {
		List<User> users = userMapper.findUserByPage((pageNumber - 1) * pageSize, pageSize);
		Integer totalRows = userMapper.count();
		PageHandler<User> pageHandler = new PageHandler<User>();
		pageHandler.setPageNumber(pageNumber);
		pageHandler.setPageSize(pageSize);
		pageHandler.setTotalRows(totalRows);
		pageHandler.setData(users);
		return pageHandler;
	}
	

}
