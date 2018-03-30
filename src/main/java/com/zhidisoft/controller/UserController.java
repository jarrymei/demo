package com.zhidisoft.controller;

import com.github.pagehelper.PageInfo;
import com.zhidisoft.entity.User;
import com.zhidisoft.service.IUserService;
import com.zhidisoft.util.PageHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * Created by lx on 2018/3/20.
 */
@RestController
@RequestMapping("user")
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

    @GetMapping("users")
    public List<User> list() {
        return userService.getAll();
    }

    @GetMapping("{startRows}/{size}")
    public PageHandler<User> list(@PathVariable("startRows") Integer startRows,
                                  @PathVariable("size") Integer size) {
        return userService.findUserByPage(startRows, size);
    }

    @GetMapping("{startRows},{size}")
    public PageInfo<User> list2(@PathVariable("startRows") Integer startRows,
                               @PathVariable("size") Integer size) {
        return userService.findByPage(startRows, size);
    }

}
