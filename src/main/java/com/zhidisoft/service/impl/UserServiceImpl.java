package com.zhidisoft.service.impl;

import java.util.List;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.PageRowBounds;
import org.apache.ibatis.session.RowBounds;
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
		PageHandler<User> pageHandler = new PageHandler<User>();
		pageHandler.setPageNumber(pageNumber);
		pageHandler.setPageSize(pageSize);

//		PageRowBounds pageRowBounds = new PageRowBounds((pageNumber-1)*pageSize, pageSize);
//		List<User> users = userMapper.findByPage(pageRowBounds);
		PageHelper.startPage(pageNumber, pageSize);
		List<User> users = userMapper.findByPage();
//		Integer totalRows = userMapper.count();
		pageHandler.setTotalRows((int)((Page) users).getTotal());
		pageHandler.setData(users);
		return pageHandler;
	}

	@Override
	public PageInfo<User> findByPage(Integer pageNumber, Integer pageSize) {
		PageHelper.startPage(pageNumber, pageSize).setOrderBy("create_time");
		List<User> list = userMapper.findByPage();
		return new PageInfo<User>(list);
	}
}
