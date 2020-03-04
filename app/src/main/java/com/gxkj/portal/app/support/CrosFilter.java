package com.gxkj.portal.app.support;

import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@Component
//@ServletComponentScan
//@WebFilter(urlPatterns = "/*",filterName = "crosFilter")
public class CrosFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (isCorsRequest((HttpServletRequest) request)) {
            HttpServletRequest servletRequest = (HttpServletRequest) request;
            HttpServletResponse servletResponse = (HttpServletResponse) response;
            // 必填
            servletResponse.setHeader("Access-Control-Allow-Origin", servletRequest.getHeader("Origin"));
            // 可选
            servletResponse.setHeader("Access-Control-Allow-Methods", servletRequest.getHeader("Access-Control-Request-Method"));
            // 可选
            servletResponse.setHeader("Access-Control-Allow-Headers", servletRequest.getHeader("Access-Control-Request-Headers"));
            // 可选
            servletResponse.setHeader("Access-Control-Allow-Credentials", "true");
            // 可选，指定本次预检请求的有效期，单位为秒,我先写个1天
            servletResponse.setHeader("Access-Control-Max-Age", getCorsMaxAge(request));
        }
        if (isPreFlightRequest(request)) {
            return;
        } else {
            chain.doFilter(request, response);
        }
    }

    public static boolean isCorsRequest(HttpServletRequest request) {
        return (request.getHeader("Origin") != null);
    }

    /**
     * Returns {@code true} if the request is a valid CORS pre-flight one.
     */
    public static boolean isPreFlightRequest(ServletRequest servletRequest) {

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        return isCorsRequest(request) && "OPTIONS".equalsIgnoreCase(request.getMethod()) && (request.getHeader("Access-Control-Request-Method") != null);
    }

    // 可继承改写，自己设置有效期
    protected String getCorsMaxAge(ServletRequest request) {
        return "86400";
    }

    @Override
    public void destroy() {
    }
}

