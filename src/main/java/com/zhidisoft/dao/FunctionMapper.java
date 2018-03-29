package com.zhidisoft.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.zhidisoft.base.dao.IBaseDao;
import com.zhidisoft.entity.Function;

public interface FunctionMapper extends IBaseDao<Function, Integer> {
	
	/**
	 * 根据用户id查询父权限
	 * @param userId
	 * @return
	 */
	List<Function> findParentFuncByUserId(@Param("userId") Integer userId);
	
	/**
	 * 根据用户id查询子权限
	 * @param userId
	 * @param parentId
	 * @return
	 */
	List<Function> findChildFuncByUserIdAndParentId(@Param("userId") Integer userId,
                                                    @Param("parentId") Integer parentId);
    
}