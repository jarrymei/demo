package com.zhidisoft.mybatis.interceptor;

import com.zhidisoft.dao.UserMapper;
import com.zhidisoft.util.PageHandler;
import com.zhidisoft.util.ReflectUtil;
import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.executor.statement.RoutingStatementHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.*;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.util.Properties;

/**
 * Created by lx on 2018/3/29.
 */
@Intercepts( {@Signature(method = "prepare", type = StatementHandler.class, args = { Connection.class,Integer.class}) })
public class DemoInterceptor implements Interceptor {

    private String dataBase;

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        //获取RoutingStatementHandler对象
        RoutingStatementHandler target = (RoutingStatementHandler) invocation.getTarget();
        //获取delegate的值
        StatementHandler statementHandler = (StatementHandler) ReflectUtil.getFieldValue(target, "delegate");

        BoundSql boundSql = statementHandler.getBoundSql();
        Object obj = boundSql.getParameterObject();
        if (obj instanceof PageHandler<?>) {
            PageHandler<?> pageHandler = (PageHandler<?>) obj;
            //通过反射机制获取delegate父类BaseStatementHandler的mapperStatement属性
            MappedStatement mappedStatement = (MappedStatement) ReflectUtil.getFieldValue(statementHandler, "mappedStatement");
            Connection conn = (Connection) invocation.getArgs()[0];
            String sql = boundSql.getSql();

        }
        Method method = invocation.getMethod();
        Object[] args =  invocation.getArgs();
        Object result =  invocation.proceed();
        return result;
    }

    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }

    @Override
    public void setProperties(Properties properties) {
        String dataBase = properties.getProperty("dataBase");
        this.dataBase = dataBase;
    }

    /**
     * 构建mysql分页查询语句
     * @param page 分页对象
     * @param sqlSb 原sql语句的StringBuffer对象
     * @return
     */
    private String getMysqlPageSQL(PageHandler<?> page, StringBuffer sqlSb) {
        //查询开始位置，mysql为0
        int offset = (page.getPageNumber() - 1)*page.getPageSize();
        sqlSb.append(" limit ").append(offset).append(",").append(page.getPageSize());
        return sqlSb.toString();
    }

    /**
     * oracle分页查询语句
     * @param page
     * @param sqlSb
     * @return
     */
    private String getOraclePageSQL(PageHandler<?> page, StringBuffer sqlSb) {
        //查询开始位置，oracle为1
        int offset = (page.getPageNumber() - 1)*page.getPageSize() + 1;
        sqlSb.insert(0, "select u.*, rownum r from (").append(") u where rownum < ").append(offset + page.getPageSize());
        sqlSb.insert(0, "select * from (").append(") where r >= ").append(offset);
        return sqlSb.toString();
    }

    private void setTotalRecord(PageHandler<?> page, MappedStatement mappedStatement, Connection conn) {


    }
}
