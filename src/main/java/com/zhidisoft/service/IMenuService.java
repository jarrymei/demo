package com.zhidisoft.service;

import java.util.List;

import com.zhidisoft.entity.vo.MenuVO;

public interface IMenuService {

	/**
	 * 根据用户id查询用户菜单
	 * @param userId
	 * @return
	 */
	List<MenuVO> getMenuByUserId(Integer userId);
}
