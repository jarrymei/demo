package com.zhidisoft.base.service.impl;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.zhidisoft.base.dao.IBaseDao;
import com.zhidisoft.base.service.IBaseService;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BaseServiceImpl<T, K extends Serializable> implements IBaseService<T, K> {
	
	private IBaseDao<T, K> baseDao;
	
	public void setBaseDao(IBaseDao<T, K> baseDao) {
		this.baseDao = baseDao;
	}

	@Override
	public void save(T entity) {
		baseDao.insert(entity);
	}

	@Override
	public void delete(K id) {
		baseDao.deleteByPrimaryKey(id);
	}

	@Override
	public void update(T entity) {
		baseDao.updateByPrimaryKey(entity);
	}

	@Override
	public T get(K id) {
		return baseDao.selectByPrimaryKey(id);
	}

	@Override
	public List<T> getAll() {
		return baseDao.getAll();
	}

	/*@Override
	public List<T> findByPage(Map<String, Object> params, int offset, int limit) {
		return null;
	}*/
}
