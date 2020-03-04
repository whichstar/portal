package com.gxkj.portal.common.cache;

public interface CacheHolder {

    CacheResult getCache(CacheEnum cacheEnum);

    void setCache(CacheEnum cacheEnum,Object value);


}
