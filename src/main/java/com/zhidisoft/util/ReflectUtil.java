package com.zhidisoft.util;

import java.lang.reflect.Field;

/**
 * Created by lx on 2018/3/30.
 */
public class ReflectUtil {

    public static Object getFieldValue(Object taget, String fieldName) {
        Object result = null;
        Field field = ReflectUtil.getField(taget, fieldName);
        if (field != null) {
            field.setAccessible(true);
            try {
                result = field.get(taget);
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return result;
    }

    public static Field getField(Object obj, String fieldName) {
        Field field = null;
        for (Class<?> clazz = obj.getClass(); clazz != Object.class; clazz = clazz.getSuperclass()) {
            try {
                field = clazz.getField(fieldName);
                break;
            } catch (NoSuchFieldException e) {
                e.printStackTrace();
            }
        }
        return field;
    }
}
