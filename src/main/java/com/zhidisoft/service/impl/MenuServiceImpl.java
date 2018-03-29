package com.zhidisoft.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhidisoft.dao.FunctionMapper;
import com.zhidisoft.entity.Function;
import com.zhidisoft.entity.vo.MenuVO;
import com.zhidisoft.service.IMenuService;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuServiceImpl implements IMenuService {
	
	@Autowired
	private FunctionMapper functionMapper;

	/*
	 * 先查询所有的父菜单->遍历，根据父菜单id查询出子菜单->需要使用递归巡回的根据父菜单id查询子菜单
	 * (non-Javadoc)
	 * @see com.zhidisoft.service.IMenuService#getMenuByUserId(java.lang.Integer)
	 */
	@Override
	public List<MenuVO> getMenuByUserId(Integer userId) {
		//根据用户id查询出所有的父菜单
		List<Function> parents = functionMapper.findParentFuncByUserId(userId);
		List<MenuVO> menuVOs = null;
		if (parents != null && parents.size() > 0) {
			menuVOs = new ArrayList<MenuVO>();
			for (Function function : parents) {
				//根据父权限id查询子权限
				MenuVO menuVO = getChildMenu(userId, function);
				menuVOs.add(menuVO);
			}
		}
		return menuVOs;
	}
	
	//提供一个根据用户id和父权限查询子权限的方法，并且要递归查询
	private MenuVO getChildMenu(Integer userId, Function parent) {
		//构建成MenuVO
		MenuVO menuVO = new MenuVO();
		menuVO.setId(parent.getFuncId());
		menuVO.setName(parent.getFuncName());
		menuVO.setUrl(parent.getFuncUrl());
		//查询子权限
		List<Function> functions = functionMapper.findChildFuncByUserIdAndParentId(userId, parent.getFuncId());
		//判断菜单是否为空
		if (functions != null && functions.size() > 0) {
			//子权限集合
			List<MenuVO> childrens = new ArrayList<MenuVO>();
			for (Function function : functions) {
				//递归查询
				MenuVO children = getChildMenu(userId, function);
				childrens.add(children);
				//把遍历的集合设置到VO中
				menuVO.setChildren(childrens);
			}
		}
		return menuVO;
	}

	
}
 