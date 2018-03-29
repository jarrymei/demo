package com.zhidisoft.base.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface IBaseService<T, K extends Serializable> {
	
	//增删改查的方法声明
	
	/**
	 * 新增
	 * @param entity
	 */
	void save(T entity);
	
	/**
	 * 根据主键删除
	 * @param id
	 */
	void delete(K id);
	
	/**
	 * 修改
	 * @param entity
	 */
	void update(T entity);
	
	/**
	 * 根据主键查询
	 * @param id
	 * @return
	 */
	T get(K id);
	
	/**
	 * 查询所有
	 * @return
	 */
	List<T> getAll();

	/**
	 * 分页查询
	 * @param params
	 * @param offset
	 * @param limit
	 * @return
	 */
	//List<T> findByPage(Map<String, Object> params, int offset, int limit);
}
