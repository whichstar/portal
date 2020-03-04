package com.gxkj.portal.app.controller;

import com.gxkj.portal.common.ResultBody;
import com.gxkj.portal.dto.LoginDTO;
import com.gxkj.portal.service.IAuthorityService;
import com.gxkj.portal.vo.LoginVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authority")
public class AuthorityController {
    @Autowired
    private IAuthorityService authorityService;


    @RequestMapping("/login")
    public ResultBody login(@RequestBody LoginDTO loginDTO) {
        LoginVO login = authorityService.login(loginDTO);
        ResultBody success = ResultBody.success(login);
        return success;
    }


}
