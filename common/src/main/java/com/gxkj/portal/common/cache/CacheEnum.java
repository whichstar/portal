package com.gxkj.portal.common.cache;

import lombok.Getter;

public enum CacheEnum{
    SYSTEM_CONFIG_LOGIN_NUM("登录次数","SYSTEM_CONFIG_LOGIN_NUM",Integer.class),

    ;
    @Getter
    private String name;
    @Getter
    private String key;
    @Getter
    private Class clazz;

    CacheEnum(String name, String key, Class clazz) {
        this.name = name;
        this.key = key;
        this.clazz = clazz;
    }
}
