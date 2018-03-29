package com.zhidisoft;

import com.zhidisoft.dao.IAccountDao;
import com.zhidisoft.dao.UserMapper;
import com.zhidisoft.entity.Account;
import com.zhidisoft.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
//使用@Transactionl注解可以保证每个方法为一个完整的事务，可以保证其数据的完整性
@Transactional
public class DemoApplicationTests {

	@Autowired
	private UserMapper userDao;
	@Autowired
	private IAccountDao accountDao;

	@Test
	public void contextLoads() {
	}

	@Test
	public void add() {

	}

	@Rollback(value = false)
	@Test
	public void testAccount() {
		Account account = accountDao.findById(1);
		account.setName("silence2");
		accountDao.update(account);
	}

}
