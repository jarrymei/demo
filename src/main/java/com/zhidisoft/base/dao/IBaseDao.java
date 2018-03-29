package com.zhidisoft.base.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface IBaseDao<T, K extends Serializable> {

	int deleteByPrimaryKey(K id);

    int insert(T record);

    int insertSelective(T record);

    T selectByPrimaryKey(K id);

    int updateByPrimaryKeySelective(T record);

    int updateByPrimaryKey(T record);

   // List<T> findByPage(Map<String, Object> params, int offset, int limit);
}
