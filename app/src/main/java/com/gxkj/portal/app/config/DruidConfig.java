package com.gxkj.portal.app.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.SQLException;

/**
 * 查看地址http://ip:port/druid/index.html
 */
@Configuration
public class DruidConfig {

    private Logger logger = LoggerFactory.getLogger(DruidConfig.class);

    @Value("${spring.datasource.url}")
    private String dbUrl;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    /***********************可选属性**************************************/
    @Value("${spring.datasource.logSlowSql:true}")
    private String logSlowSql;

    @Value("${spring.datasource.initialSize:5}")
    private int initialSize;

    @Value("${spring.datasource.minIdle:5}")
    private int minIdle;

    @Value("${spring.datasource.maxActive:30}")
    private int maxActive;

    @Value("${spring.datasource.maxWait:60000}")
    private long maxWait;

    @Value("${spring.datasource.timeBetweenEvictionRunsMillis:60000}")
    private long timeBetweenEvictionRunsMillis;

    @Value("${spring.datasource.minEvictableIdleTimeMillis:300000}")
    private long minEvictableIdleTimeMillis;

    @Value("${spring.datasource.poolPreparedStatements:true}")
    private boolean poolPreparedStatements;

    @Value("${spring.datasource.maxPoolPreparedStatementPerConnectionSize:20}")
    private int maxPoolPreparedStatementPerConnectionSize;

    @Value("${spring.datasource.testWhileIdle:true}")
    private boolean testWhileIdle;

    @Value("${spring.datasource.testOnBorrow:true}")
    private boolean testOnBorrow;

    @Value("${spring.datasource.testOnReturn:true}")
    private boolean testOnReturn;

    @Value("${whiteIps:192.168.0.0/16,172.20.1.0/24,172.20.100.0/24,127.0.0.1}")
    private String whiteIps;

    @Bean
    public ServletRegistrationBean druidServlet() {
        ServletRegistrationBean reg = new ServletRegistrationBean();
        reg.setServlet(new StatViewServlet());
        reg.addUrlMappings("/druid/*");
//        reg.addInitParameter("loginUsername", username);
//        reg.addInitParameter("loginPassword", password);
        reg.addInitParameter("logSlowSql", logSlowSql);
        reg.addInitParameter("allow", whiteIps);
        reg.addInitParameter("resetEnable", "false");
        return reg;
    }

    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
        filterRegistrationBean.setFilter(new WebStatFilter());
        filterRegistrationBean.addUrlPatterns("/*");
        filterRegistrationBean.addInitParameter("exclusions", "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*");
        filterRegistrationBean.addInitParameter("profileEnable", "true");
        return filterRegistrationBean;
    }

    @Bean
    public DataSource druidDataSource() throws Exception {
        DruidDataSource datasource = new DruidDataSource();
        datasource.setUrl("jdbc:mysql://" + dbUrl + "?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull");
        datasource.setUsername(username);
        /*WdDBPasswordFactory wdDBPasswordFactory = new WdDBPasswordFactory();
        wdDBPasswordFactory.setPassword(password);*/
        datasource.setPassword(password);
//      datasource.setPassword(password);
        datasource.setDriverClassName("com.mysql.jdbc.Driver");
        datasource.setInitialSize(initialSize);
        datasource.setMinIdle(minIdle);
        datasource.setMaxActive(maxActive);
        datasource.setMaxWait(maxWait);
        datasource.setTimeBetweenEvictionRunsMillis(timeBetweenEvictionRunsMillis);
        datasource.setMinEvictableIdleTimeMillis(minEvictableIdleTimeMillis);
        datasource.setPoolPreparedStatements(poolPreparedStatements);
        datasource.setMaxPoolPreparedStatementPerConnectionSize(maxPoolPreparedStatementPerConnectionSize);
        datasource.setValidationQuery("select 1 from dual");
        datasource.setTestWhileIdle(testWhileIdle);
        datasource.setTestOnBorrow(testOnBorrow);
        datasource.setTestOnReturn(testOnReturn);
        datasource.setConnectionProperties("druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000");
        try {
            datasource.setFilters("stat,wall,log4j");
        } catch (SQLException e) {
            logger.error("druid configuration initialization filter", e);
        }
        return datasource;
    }

}