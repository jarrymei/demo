package com.zhidisoft.base.dao;

import com.zhidisoft.util.PageHandler;
import org.apache.ibatis.session.RowBounds;

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

    List<T> getAll();

    List<T> findByPage(RowBounds RowBounds);

    List<T> findByPage();
}
