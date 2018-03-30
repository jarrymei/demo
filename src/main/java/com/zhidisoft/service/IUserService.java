package com.zhidisoft.service;

import com.github.pagehelper.PageInfo;
import com.zhidisoft.base.service.IBaseService;
import com.zhidisoft.entity.User;
import com.zhidisoft.util.PageHandler;

public interface IUserService extends IBaseService<User, Integer> {
	
	/**
	 * 分页查询
	 * @param pageNumber 页码
	 * @param pageSize   一页显示条数
	 * @return
	 */
	PageHandler<User> findUserByPage(Integer pageNumber, Integer pageSize);

	PageInfo<User> findByPage(Integer pageNumber, Integer pageSize);

}
