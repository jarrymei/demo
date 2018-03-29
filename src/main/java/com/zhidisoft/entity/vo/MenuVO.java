package com.zhidisoft.entity.vo;

import java.util.List;

/**
 * 菜单实体
 * 
 * @author lx
 *
 */
public class MenuVO {

	private Integer id;
	private String name; // 节点名
	private String url; // 节点url
	private List<MenuVO> children; // 子节点

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public List<MenuVO> getChildren() {
		return children;
	}

	public void setChildren(List<MenuVO> children) {
		this.children = children;
	}

}
