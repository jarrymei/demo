package com.zhidisoft.controller;

import com.zhidisoft.entity.User;
import com.zhidisoft.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lx on 2018/3/20.
 */
@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("{id}/info")
    public ModelAndView userInfo(ModelAndView mv, @PathVariable("id") Integer id) {
        User user = userService.get(id);
        mv.setViewName("user/info");
        mv.addObject("user", user);
        return mv;
    }

}
