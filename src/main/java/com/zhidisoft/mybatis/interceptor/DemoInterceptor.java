package com.zhidisoft.mybatis.interceptor;

import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;

import java.lang.reflect.Method;
import java.util.Properties;

/**
 * Created by lx on 2018/3/29.
 */
public class DemoInterceptor implements Interceptor {

    private String param1;
    private String param2;

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        Object target = invocation.getTarget();
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
        String param1 = properties.getProperty("param1");
        this.param1 = param1;
    }

}
