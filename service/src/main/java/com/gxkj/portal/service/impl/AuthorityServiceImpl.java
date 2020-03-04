package com.gxkj.portal.service.impl;

import com.gxkj.portal.common.cache.CacheEnum;
import com.gxkj.portal.common.exceptions.BizException;
import com.gxkj.portal.dal.entity.SysAccount;
import com.gxkj.portal.dal.entity.SysAuthority;
import com.gxkj.portal.dal.entity.SysConfig;
import com.gxkj.portal.dal.mapper.SysAccountMapperExt;
import com.gxkj.portal.dal.mapper.SysAuthorityMapperExt;
import com.gxkj.portal.dal.mapper.SysConfigMapperExt;
import com.gxkj.portal.dto.LoginDTO;
import com.gxkj.portal.service.IAuthorityService;
import com.gxkj.portal.vo.LoginVO;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorityServiceImpl implements IAuthorityService {
    @Resource
    private SysAuthorityMapperExt sysAuthorityMapperExt;
    @Resource
    private SysAccountMapperExt sysAccountMapperExt;
    @Resource
    private SysConfigMapperExt sysConfigMapperExt;


    @Override
    public LoginVO login(LoginDTO loginDTO) {
        Assert.notNull(loginDTO, "入参不能为空");
        SysAccount sysAccount = sysAccountMapperExt.selectByAccount(loginDTO.getAccount());
        if (null == sysAccount) {
            throw new BizException("账户不存在");
        }
        //登录次数
        //TODO 放在缓存里面去做
        //SysConfig sysConfig = sysConfigMapperExt.selectByConfigKey(CacheEnum.SYSTEM_CONFIG_LOGIN_NUM.getKey());
        if (sysAccount.getLoginNum() >= 3) {
            throw new BizException("尝试登陆次数操过限制3次");
        }
        //密码判断
        if(null == loginDTO.getPassword() ||!loginDTO.getPassword().equals(sysAccount.getPassword())){
            throw new BizException("密码不正确");
        }
        //登陆成功  权限获取
        List<SysAuthority> sysAuthorities = sysAuthorityMapperExt.selectByRoleId(sysAccount.getRoleId());

        return convertTo(sysAccount,sysAuthorities);
    }

    private LoginVO convertTo(SysAccount sysAccount,List<SysAuthority> sysAuthorities){
        LoginVO loginVO = new LoginVO();
        loginVO.setAccount(sysAccount.getAccount());
        if(null == loginVO.getMenus()){
            loginVO.setMenus(new ArrayList<>());
        }
        for(SysAuthority sysAuthority:sysAuthorities){
            if(null == sysAuthority.getMenuId() && 1 == sysAuthority.getMenuLevel()){
                LoginVO.Menu menu = new LoginVO.Menu();
                menu.setId(sysAuthority.getId());
                menu.setTitle(sysAuthority.getAuthName());
                menu.setName(sysAuthority.getMenuName());
                menu.setIcon(sysAuthority.getIcon());
                menu.setPath(sysAuthority.getPath());
                subMenu(menu,sysAuthorities);
                loginVO.getMenus().add(menu);
            }
        }
        return loginVO;
    }

    private void subMenu(LoginVO.Menu menu ,List<SysAuthority> sysAuthorities){
        if(null == menu.getSubMenus()){
            menu.setSubMenus(new ArrayList<>());
        }
        for(SysAuthority sysAuthority:sysAuthorities){
            if(menu.getId().equals(sysAuthority.getMenuId())){
                LoginVO.Menu subMenu = new LoginVO.Menu();
                subMenu.setId(sysAuthority.getId());
                subMenu.setTitle(sysAuthority.getAuthName());
                subMenu.setName(sysAuthority.getMenuName());
                subMenu.setIcon(sysAuthority.getIcon());
                subMenu.setPath(sysAuthority.getPath());
                menu.getSubMenus().add(subMenu);
                subMenu(subMenu,sysAuthorities);
            }
        }
    }

}
