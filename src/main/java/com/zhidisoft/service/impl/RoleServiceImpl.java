package com.zhidisoft.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhidisoft.base.service.impl.BaseServiceImpl;
import com.zhidisoft.dao.RoleMapper;
import com.zhidisoft.entity.Role;
import com.zhidisoft.service.IRoleService;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RoleServiceImpl extends BaseServiceImpl<Role, Integer> implements IRoleService {

	@Autowired
	private RoleMapper roleMapper;
	
	@Autowired
	public void setRoleMapper(RoleMapper roleMapper) {
		super.setBaseDao(roleMapper);
	}

}
