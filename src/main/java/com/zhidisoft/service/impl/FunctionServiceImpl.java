package com.zhidisoft.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhidisoft.base.service.impl.BaseServiceImpl;
import com.zhidisoft.dao.FunctionMapper;
import com.zhidisoft.entity.Function;
import com.zhidisoft.service.IFunctionService;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class FunctionServiceImpl extends BaseServiceImpl<Function, Integer> implements IFunctionService {

	@Autowired
	private FunctionMapper functionMapper;
	
	@Autowired
	public void setFunctionMapper(FunctionMapper functionMapper) {
		super.setBaseDao(functionMapper);
	}
	
	
}
