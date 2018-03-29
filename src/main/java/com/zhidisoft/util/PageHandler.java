package com.zhidisoft.util;

import java.util.List;

public class PageHandler<T> {

	private Integer pageNumber; // 页码
	private Integer pageSize; // 一页显示
	private Integer totalRows; // 数据总条数
	private Integer totalPage; // 总页数

	private List<T> data;

	public Integer getPageNumber() {
		// 对数据进行校验
		if (pageNumber <= 0) {
			pageNumber = 1;
		}
		if (pageNumber > totalPage) {
			pageNumber = totalPage;
		}
		return pageNumber;
	}

	public void setPageNumber(Integer pageNumber) {
		this.pageNumber = pageNumber;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getTotalRows() {
		return totalRows;
	}

	public void setTotalRows(Integer totalRows) {
		// 设置数据总条数时，计算总页数
		this.totalPage = (totalRows + pageSize - 1) / pageSize;
		this.totalRows = totalRows;
	}

	public Integer getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(Integer totalPage) {
		this.totalPage = totalPage;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

}
