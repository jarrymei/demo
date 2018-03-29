package com.zhidisoft.dao;

import com.zhidisoft.entity.Account;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by lx on 2018/3/9.
 */
@Mapper
public interface IAccountDao {

    Account findById(Integer id);

    void update(Account account);
}
