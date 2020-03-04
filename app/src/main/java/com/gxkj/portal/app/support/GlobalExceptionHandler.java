package com.gxkj.portal.app.support;

import com.gxkj.portal.common.ResultBody;
import com.gxkj.portal.common.enums.CommonEnum;
import com.gxkj.portal.common.exceptions.BizException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * 处理自定义的业务异常
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value = BizException.class)
    public ResultBody bizExceptionHandler(HttpServletRequest req, BizException e){
        logger.error("发生业务异常！原因是：{}",e.getErrorMsg());
        return ResultBody.error(e.getErrorCode(),e.getErrorMsg());
    }

    /**
     * 处理空指针的异常
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value = {NullPointerException.class,IllegalArgumentException.class})
    public ResultBody exceptionHandler(HttpServletRequest req, RuntimeException e){
        if(e instanceof NullPointerException){
            logger.error("空指针异常:",e);
        }
        if(e instanceof  IllegalArgumentException){
            logger.error("参数错误:",e);
        }
        return ResultBody.error(CommonEnum.BODY_NOT_MATCH);
    }

    /**
     * 处理其他异常
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value =Exception.class)
    @ResponseBody
    public ResultBody exceptionHandler(HttpServletRequest req, Exception e){
        logger.error("未知异常:",e);
        return ResultBody.error(CommonEnum.INTERNAL_SERVER_ERROR);
    }


}
