package com.gxkj.portal.app.controller;

import com.gxkj.portal.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("accountController")
public class AccountController {
    @Autowired
    private IAccountService accountService;

    

}
