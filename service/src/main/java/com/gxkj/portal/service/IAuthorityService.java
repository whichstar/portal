package com.gxkj.portal.service;

import com.gxkj.portal.dto.LoginDTO;
import com.gxkj.portal.vo.LoginVO;

public interface IAuthorityService {

    LoginVO login(LoginDTO loginDTO);

}
