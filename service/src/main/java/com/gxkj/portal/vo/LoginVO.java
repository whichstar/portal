package com.gxkj.portal.vo;

import lombok.Data;

import java.util.List;

@Data
public class LoginVO {

    private String account;

    private List<Menu> menus;

    @Data
    public static class Menu {
        private Long id;
        private String name;
        private String title;
        private String icon;
        private String path;
        private List<Menu> subMenus;
    }

}
