package com.zhidisoft.exception;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lx on 2018/3/9.
 */
@Component
public class MyExceptionHandler implements HandlerExceptionResolver {

    private static final String DEFAULT_ERROR_VIEW = "error";

    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object o, Exception e) {
        String xRequestedWith = request.getHeader("X-Requested-With");
        if ("XMLHttpRequest".equals(xRequestedWith)) {//判断是否为ajax请求

            PrintWriter writer;
            try {
                writer = response.getWriter();
                response.setContentType("application/json;charset=UTF-8");
                Map<String, Object> result = new HashMap<String, Object>();
                result.put("success", false);
                result.put("message", e.getMessage());

                ObjectMapper objectMapper = new ObjectMapper();
                //将结果以JSON格式数据写出
                objectMapper.writeValue(writer, result);

                writer.flush();
                writer.close();

            } catch (JsonGenerationException e1) {
                e1.printStackTrace();
            } catch (JsonMappingException e1) {
                e1.printStackTrace();
            } catch (IOException e1) {
                e1.printStackTrace();
            }

        }
        ModelAndView mv = new ModelAndView(DEFAULT_ERROR_VIEW);
        mv.addObject("e", e);
        return mv;
    }
}
