function $$(e) {
    return document.getElementById(e)
}
function checkSubmit(e) {
    if (13 != (e = e || window.event || arguments.callee.caller.arguments[0]).keyCode)return !1;
    verifyRegister()
}
function verifyRegister() {
    isFlash && flash_flag ? flashCheckForm() : checkForm($$("register_form"))
}
function checkService(e, a) {
    if (e) {
        if ($$(e))return $$(e).checked ? ($$(a).style.color = "black", !0) : ($$(a).innerHTML = "请勾选协议", $$(a).style.color = "red", !1)
    } else if ($$("checkservice"))return $$("checkservice").checked ? ($$("agreement").style.color = "black", !0) : ($$("agreement").style.color = "red", !1)
}
function clearCookie() {
    Cookies.set("pusername", "", -1), $$("tr_password1") && ($$("tr_password1").style.display = ""), $$("tr_olduser_notice") && ($$("tr_olduser_notice").style.display = "none"), $$("tr_cxzc") && ($$("tr_cxzc").style.display = "none"), $$("divolduser") && ($$("divolduser").style.display = "none"), $$("login_account") && ($$("login_account").value = ""), $$("password") && ($$("password").value = "")
}
function realCheckForm(e) {
    var a = e.real_a.value, n = e.real_pw.value;
    logAccount = a;
    var t = e.real_n.value, i = e.real_id.value, o = $$("real_vali").value;
    if (!App.checkLoginRealAccount(a))return !1;
    if (!App.checkRealPassword(n))return !1;
    if (chk_real_flag) {
        if (!App.checkRealPassword1(e.real_pw2.value))return !1;
        if (!App.checkRealName(t))return !1;
        if (!App.checkCard(i))return !1
    }
    if (!checkService("real_chk", "real_chk_tip"))return !1;
    if (n = td(n), App.checkHttpsEnable(), "http" == http)return App.register(a, n, o, t, i), !1;
    var r = App.checkformCommon(n, a, o, t, i), s = r.url, p = App.newWin();
    return $valiwr = $$("real_vali_wrap"), App.tjRealName(4), Jsonp(s, function (e) {
        if (App.tjRegister(e.success, r.regapi), 0 == e.success) App.retrunId(e), isPopWin.flag && (isPopWin.flag = !1), void 0 !== a && Cookies.set("pusername", a, 365), "" != cs_ext && (e.url = e.url + "&cs_ext=" + cs_ext), p ? App.regSuccess(e.url, p) : App.regSuccess(e.url); else {
            if (8 == e.success)return App.closeWin(p), $valiwr.style.display = "block", !1;
            if (7 == e.success)return App.closeWin(p), "block" != $valiwr.style.display ? ($valiwr.style.display = "block", !1) : ($$("real_tips_vali").innerHTML = "验证码错误!", $$("img_real_vali").src = "//regapi.37.com/code.php?t=" + Math.random(), !1);
            App.closeWin(p), $$("real_tit_tips").innerHTML = e.message
        }
    }), !1
}
function checkForm(e) {
    var a = e.login_account.value;
    logAccount = a;
    var n = e.password.value, t = $$("check-code").value;
    if (!App.checkLoginAccount(a))return !1;
    if (!App.checkPassword(n))return !1;
    if ("" == Cookies.get("pusername", "") && !App.checkPassword1(e.password1.value))return !1;
    if (!checkService())return !1;
    if ($$("submitbtn").disabled = !0, $$("u_info").innerHTML = "请稍候...", $$("p_info").innerHTML = "", $$("w_info").innerHTML = "", n = td(n), App.checkHttpsEnable(), "http" == http)return App.register(a, n, t), !1;
    var i = App.checkformCommon(n, a, t), o = i.url, r = App.newWin();
    return Jsonp(o, function (e) {
        if (App.tjRegister(e.success, i.regapi), 0 == e.success) App.retrunId(e), isPopWin.flag && (isPopWin.flag = !1), void 0 !== a && Cookies.set("pusername", a, 365), "" != cs_ext && (e.url = e.url + "&cs_ext=" + cs_ext), r ? App.regSuccess(e.url, r) : App.regSuccess(e.url); else {
            if (8 == e.success)return App.closeWin(r), $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random(), $$("submitbtn").disabled = !1, App.showValidation(), !1;
            if (7 == e.success)return App.closeWin(r), $$("submitbtn").disabled = !1, "block" != $$("validation").style.display ? (App.showValidation(), !1) : ($$("validation_title").innerHTML = "验证码错误!", $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random(), !1);
            App.closeWin(r), $$("submitbtn").disabled = !1, $$("u_info").className = "error", $$("u_info").innerHTML = e.message, $$("validation_title").innerHTML = e.message
        }
    }), !1
}
function flashCheckForm() {
    var e = $$("storage_login_account").value;
    logAccount = e;
    var a = $$("storage_login_password").value, n = $$("check-code").value;
    if (a = td(a), App.checkHttpsEnable(), "http" == http)return App.register(e, a, n), !1;
    var t = App.checkformCommon(a, e, n), i = t.url;
    e = e;
    var o = App.newWin();
    return Jsonp(i, function (a) {
        if (App.tjRegister(a.success, t.regapi), window._qs = 0, 0 == a.success) App.retrunId(a), isPopWin.flag && (isPopWin.flag = !1), Cookies.set("pusername", e, 365), "" != cs_ext && (a.url = a.url + "&cs_ext=" + cs_ext), o ? App.regSuccess(a.url, o) : App.regSuccess(a.url); else if (8 == a.success) App.closeWin(o), $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random(), App.showValidation(); else if (7 == a.success) {
            if (App.closeWin(o), "block" != $$("validation").style.display)return App.showValidation(), !1;
            $$("validation_title").innerHTML = "验证码错误!", $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random()
        } else {
            App.closeWin(o), $$("validation_title").innerHTML = a.message;
            try {
                getFlashMovieObjectNew("flash_obj").alertInfo('<font color="#FF0000">' + a.message + "</font>")
            } catch (e) {
                o && o.close(), App.newWarmBox(a.message)
            }
        }
    }), !1
}
function registerCallBack(e) {
    var a = {};
    a.success = getParamUrl("success", e), a.url = decodeURIComponent(getParamUrl("url", e)), a.message = decodeURIComponent(getParamUrl("message", e)), App.tjRegister(a.success, "p_register_v3");
    var n = App.newWin();
    if (0 == a.success) {
        App.retrunId(a), isPopWin.flag && (isPopWin.flag = !1);
        var t = $$("storage_login_account").value;
        Cookies.set("pusername", t, 365), n ? App.regSuccess(a.url, n) : App.regSuccess(a.url)
    } else if (8 == a.success) $$("real_name") && "block" == $$("real_name").style.display && ($valiwr = $$("real_vali_wrap"), $valiwr.style.display = "block"), App.closeWin(n), $$("submitbtn").disabled = !1, $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random(), App.showValidation(); else if (7 == a.success) {
        if ($$("real_name") && "block" == $$("real_name").style.display && ($valiwr = $$("real_vali_wrap"), $valiwr.style.display = "block"), App.closeWin(n), $$("submitbtn").disabled = !1, "block" != $$("validation").style.display)return App.showValidation(), !1;
        $$("validation_title").innerHTML = "验证码错误!", $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random()
    } else {
        if ($$("real_name") && "block" == $$("real_name").style.display && ($$("real_tit_tips").innerHTML = a.message), App.closeWin(n), $$("submitbtn").disabled = !1, adName.indexOf("[FL]") > 0)try {
            getFlashMovieObjectNew("flash_obj").alertInfo('<font color="#FF0000">' + a.message + "</font>")
        } catch (e) {
            App.newWarmBox(a.message)
        } else $$("u_info").className = "error", $$("u_info").innerHTML = a.message;
        $$("validation_title").innerHTML = a.message
    }
}
function winopenRegisterCallBack(e) {
    var a = {};
    a.success = getParamUrl("e", e), a.authtType = getParamUrl("auth_type", e), a.url = decodeURIComponent(getParamUrl("gameweburl", e)), a.message = decodeURIComponent(getParamUrl("message", e)), a.game_id = getParamUrl("game_id", e), a.game_server_id = getParamUrl("game_server_id", e), App.retrunId(a), logAccount = decodeURIComponent(getParamUrl("LOGIN_ACCOUNT", e)), 0 == a.success ? (isPopWin.flag && (isPopWin.flag = !1), App.regSuccess(a.url)) : (a.message = "授权暂时无法进行，请点击 “确认” 返回注册登录", $$("submitbtn").disabled = !1, adName.indexOf("[FL]") > 0 ? App.newWarmBox(a.message) : ($$("u_info").className = "error", $$("u_info").innerHTML = a.message), $$("validation_title").innerHTML = a.message), 100 != a.success && 101 != a.success && 102 != a.success || Jsonp("//log.he2d.com/direct_media/call_back?/cb/1/2255/52571.html?uid=" + a.authtType, null)
}
function loadAdTrack() {
    tj_clicked = 1, isPopWin.flag && (1 == isPopWin.type ? App.popWin(isPopWin.url) : 2 == isPopWin.type && App.popWin2(isPopWin.url)), Jsonp("//" + logDomain + baseUrl + "5.js?uid=" + uid + "&lt=" + pt.adload() + "&key=" + key + adsys_param, null)
}
function loadTrack() {
    if (!flash_flag) {
        var $html = document.documentElement;
        $html.style.width = "100%", $html.style.height = "100%", tj_clicked = 1, $$("main").onclick = function (e) {
            openStatic(), tj_clicked_flag = 0
        }
    }
    if (App.showReal(), loadFreeApp && loadFreeApp(), window.autoOpenDiv && window.setTimeout(function () {
            if (autoOpenDiv.autoOpen) {
                autoOpenDiv.autoOpenFlag = !0;
                try {
                    getFlashMovieObject("flash_obj").ActivateOpen()
                } catch (e) {
                }
            }
        }, 1e4), window.execHijack && App.execHijackFn(), icp_flag.flag && App.createIcp(), free_twice.flag && free_twice.enter_game && App.freeLog(), (new Image).src = "//cm.he2d.com/1/", App.loadedCommon(), flash_flag || (isPopWin.flag = !1, App.newFlashReg(), App.testDevice() && (window.location.href = "//g.pp9l.com/s/1/2258/53173.html?uid=" + referer)), new_iframe.flag && "reach" == new_iframe.show && App.newIframe(), game_box.flag && !game_box.isLog && App.newGameBox(), game_box.flag && game_box.isLog) {
        var script = document.createElement("script");
        with (script)type = "text/javascript", src = "/js/module/box/dlbox.min.js";
        var head = document.getElementsByTagName("head");
        head[0] ? head[0].appendChild(script) : document.body.appendChild(script)
    }
    Jsonp("//" + logDomain + baseUrl + "2.js?uid=" + uid + "&lt=" + pt.load() + "&key=" + key + adsys_param, null), window.moveTo(0, 0), window.resizeTo(screen.width, screen.height);
    var oldusername = Cookies.get("pusername", "");
    "" != oldusername && ($$("login_account") && ($$("login_account").value = oldusername), $$("tr_olduser_notice") && ($$("tr_olduser_notice").style.display = "block"), $$("tr_password1") && ($$("tr_password1").style.display = "none"), $$("tr_cxzc") && ($$("tr_cxzc").style.display = "")), $$("body_id").onmousedown = function () {
        flash_flag && tjClickFn()
    }
}
function openStatic() {
    !isFlash && flash_flag && $$("show") && ($$("show").style.display = "block"), !flash_flag && tj_clicked_flag && ($$("new_reg_wrap").style.display = "block", "" != tj_noflash_regbox && Jsonp(tj_noflash_regbox, null), tjClickFn())
}
function openDiv() {
    adName.indexOf("[QP]") > 0 && ($$("show").style.display = "block"), window.autoOpenDiv && (autoOpenDiv.autoOpen = !1), free_twice.flag && !free_twice.enter_game && (new_iframe.flag && "click" != new_iframe.show || !new_iframe.flag) && App.freeLog(), new_iframe.flag && "click" == new_iframe.show && App.newIframe()
}
function tjClickFn() {
    window.autoOpenDiv ? autoOpenDiv.autoOpenFlag || tjsonp() : tjsonp(), tj_click.flag && "" != tj_click.url && Jsonp(tj_click.url + cs_ext, null)
}
function tjsonp() {
    tj_clicked && (Jsonp("//" + logDomain + baseUrl + "3.js?uid=" + uid + "&lt=" + pt.click() + "&key=" + key + adsys_param, null), tj_clicked = 0)
}
function flashRegister(e, a, n) {
    return ((new Date).getTime() - _qs) / 1e3 < 5 || (window._qs = (new Date).getTime(), !!checkLoginAccount(e) && (!!checkPassword(a) && (!!checkPassword1(n, a) && ($$("storage_login_account").value = e, $$("storage_login_password").value = a, void flashCheckForm()))))
}
function flashRegisterNew(e, a, n) {
    return ((new Date).getTime() - _qs) / 1e3 < 5 || (window._qs = (new Date).getTime(), !!checkLoginAccountV2(e) && (!!checkPasswordV2(a) && (!!checkPassword1V2(n, a) && ($$("storage_login_account").value = e, $$("storage_login_password").value = a, void flashCheckForm()))))
}
function _loginfb(e, a, n) {
    _loginName = e, _loginUrl = a, _loginTime = n
}
var accountObj = {}, sendFlag = 1, msg_timer = null, iStep = -1, nua = navigator.userAgent.toLowerCase(), tj_clicked = 0;
!function (GLOBAL) {
    var App = {
        getParam: function (e) {
            try {
                var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(a);
                return null != n ? unescape(n[2]) : ""
            } catch (e) {
                return ""
            }
        },
        flash_title: function () {
            if (flash_tit.flag) {
                var e = _title.split(""), a = e.length;
                iStep > a && (iStep = 0);
                var n = "", t = "", i = "";
                for (var o in e)o > iStep ? t += e[o] : n += e[o];
                i = t + "    " + n, iStep++, document.title = i, setTimeout("App.flash_title()", 500)
            } else flash_tit.flag || (document.title = _title)
        },
        successInfo: function (e, a, n) {
            return n ? $$(e) && ($$(e).className = "normal phone_tips") : $$(e) && ($$(e).className = "normal"), $$(e) && ($$(e).innerHTML = a), !0
        },
        errorInfo: function (e, a, n) {
            return n ? $$(e) && ($$(e).className = "error phone_tips") : $$(e) && ($$(e).className = "error"), $$(e) && ($$(e).innerHTML = a), !1
        },
        checkCard18: function (e) {
            var a = 0, n = e.substring(6, 10), t = e.substring(10, 12), i = e.substring(12, 14), o = new Date, r = o.getFullYear() - n, s = o.getMonth() + 1 - t, p = o.getDate() - i;
            return a = r, (r > 0 && s < 0 || r > 0 && 0 == s && p < 0) && (a -= 1), a >= 18 ? App.successInfo("real_tips_id", '<font style="color:#008000;">身份证填写正确！</font>', "real") : App.errorInfo("real_tips_id", "未满18周岁无法注册", "real")
        },
        checkCard: function (e) {
            if (!e)return App.errorInfo("real_tips_id", "请输入正确的身份证！", "real");
            if (!/^[0-9xX]+$/.test(e))return App.errorInfo("real_tips_id", "请输入正确的身份证！", "real");
            if (18 !== e.length)return App.errorInfo("real_tips_id", "请输入正确的身份证！", "real");
            var a, n, t, i, o, r = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外"
            }, s = e.split("");
            if (null === r[parseInt(e.substr(0, 2), 10)])return App.errorInfo("real_tips_id", "请输入正确的身份证！", "real");
            switch (e.length) {
                case 15:
                    return t = (parseInt(e.substr(6, 2), 10) + 1900) % 4 == 0 || (parseInt(e.substr(6, 2), 10) + 1900) % 100 == 0 && (parseInt(e.substr(6, 2), 10) + 1900) % 4 == 0 ? /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ : /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/, t.test(e) ? App.checkCard18(e) : App.errorInfo("real_tips_id", "请输入正确的身份证！", "real");
                case 18:
                    return t = parseInt(e.substr(6, 4), 10) % 4 == 0 || parseInt(e.substr(6, 4), 10) % 100 == 0 && parseInt(e.substr(6, 4), 10) % 4 == 0 ? /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/, t.test(e) ? (i = 7 * (parseInt(s[0], 10) + parseInt(s[10], 10)) + 9 * (parseInt(s[1], 10) + parseInt(s[11], 10)) + 10 * (parseInt(s[2], 10) + parseInt(s[12], 10)) + 5 * (parseInt(s[3], 10) + parseInt(s[13], 10)) + 8 * (parseInt(s[4], 10) + parseInt(s[14], 10)) + 4 * (parseInt(s[5], 10) + parseInt(s[15], 10)) + 2 * (parseInt(s[6], 10) + parseInt(s[16], 10)) + parseInt(s[7], 10) + 6 * parseInt(s[8], 10) + 3 * parseInt(s[9], 10), a = i % 11, o = "F", n = "10X98765432", o = n.substr(a, 1), o == s[17].toUpperCase() ? App.checkCard18(e) : App.errorInfo("real_tips_id", "请输入正确的身份证！", "real")) : App.errorInfo("real_tips_id", "请输入正确的身份证！", "real");
                default:
                    return App.errorInfo("real_tips_id", "请输入正确的身份证！", "real")
            }
        },
        checkRealName: function (e) {
            return /^[\u4e00-\u9fa5]+$/.test(e) ? App.successInfo("real_tips_n", '<font style="color:#008000;">姓名填写正确！</font>', "real") : App.errorInfo("real_tips_n", "请输入正确的姓名！", "real")
        },
        checkLoginRealAccount: function (e) {
            App.httpsPreLoad();
            var a = /^(qq_)/i, n = /^(wx_)/i, t = /^(wb_)/i, i = /^(6711_)/i, o = /^(h5yx_)/i, r = /^(youke_)/i;
            return /^13[0-9]{1}[0-9]{8}$|^14[579]{1}[0-9]{8}$|^15[012356789]{1}[0-9]{8}$|^18[0-9]{1}[0-9]{8}$|^17[01235678]{1}[0-9]{8}$/.test(e) ? (phoneAccount = e, App.chkOldUser(e)) : "" != e && Jsonp(http + "://regapi.37.com/api/p_register_check.php?action=checkUser&login_account=" + e + "&type=3&ajax=0&callback=chkOldUserCallback2", null), a.test(e) ? App.errorInfo("real_tips_a", "请勿注册前缀为“qq_”的帐号", "real") : n.test(e) ? App.errorInfo("real_tips_a", "请勿注册前缀为“wx_”的帐号", "real") : t.test(e) ? App.errorInfo("real_tips_a", "请勿注册前缀为“wb_”的帐号", "real") : i.test(e) ? App.errorInfo("real_tips_a", "请勿注册前缀为“6711_”的帐号", "real") : o.test(e) ? App.errorInfo("real_tips_a", "请勿注册前缀为“h5yx_”的帐号", "real") : r.test(e) ? App.errorInfo("real_tips_a", "请勿注册前缀为“youke_”的帐号", "real") : /^[A-Za-z0-9_]{4,20}$/.test(e) ? App.successInfo("real_tips_a", '<font style="color:#008000;">帐号填写正确！</font>', "real") : App.errorInfo("real_tips_a", "4-20个字符,由字母或数字组成！", "real")
        },
        checkRealPassword: function (e) {
            return /^[\x01-\xfe]{6,20}$/.test(e) ? App.successInfo("real_tips_pw", '<font style="color:#008000;">密码填写正确！</font>', "real") : App.errorInfo("real_tips_pw", "长度6-20个字符！", "real")
        },
        checkRealPassword1: function (e) {
            var a = arguments[1] ? arguments[1] : $$("real_pw").value;
            return /^[\x01-\xfe]{6,20}$/.test(e) ? a == e ? App.successInfo("real_tips_pw2", '<font style="color:#008000;">两次填写的密码一致！</font>', "real") : App.errorInfo("real_tips_pw2", "两次填写的密码不一致！", "real") : App.errorInfo("real_tips_pw2", "长度6-20个字符！", "real")
        },
        checkLoginAccount: function (e) {
            App.httpsPreLoad();
            var a = /^(qq_)/i, n = /^(wx_)/i, t = /^(wb_)/i, i = /^(6711_)/i, o = /^(h5yx_)/i, r = /^(youke_)/i;
            return /^13[0-9]{1}[0-9]{8}$|^14[579]{1}[0-9]{8}$|^15[012356789]{1}[0-9]{8}$|^18[0-9]{1}[0-9]{8}$|^17[01235678]{1}[0-9]{8}$/.test(e) && (phoneAccount = e, App.chkOldUser(e)), a.test(e) ? App.errorInfo("u_info", "请勿注册前缀为“qq_”的帐号") : n.test(e) ? App.errorInfo("u_info", "请勿注册前缀为“wx_”的帐号") : t.test(e) ? App.errorInfo("u_info", "请勿注册前缀为“wb_”的帐号") : i.test(e) ? App.errorInfo("u_info", "请勿注册前缀为“6711_”的帐号") : o.test(e) ? App.errorInfo("u_info", "请勿注册前缀为“h5yx_”的帐号") : r.test(e) ? App.errorInfo("u_info", "请勿注册前缀为“youke_”的帐号") : /^[A-Za-z0-9_]{4,20}$/.test(e) ? App.successInfo("u_info", '<font style="color:#008000;">帐号填写正确！</font>') : App.errorInfo("u_info", "4-20个字符,由字母或数字组成！")
        },
        checkPassword: function (e) {
            return /^[\x01-\xfe]{6,20}$/.test(e) ? App.successInfo("w_info", '<font style="color:#008000;">密码填写正确！</font>') : App.errorInfo("w_info", "长度6-20个字符！")
        },
        checkPassword1: function (e) {
            var a = arguments[1] ? arguments[1] : $$("password").value;
            return /^[\x01-\xfe]{6,20}$/.test(e) ? a == e ? App.successInfo("p_info", '<font style="color:#008000;">两次填写的密码一致！</font>') : App.errorInfo("p_info", "两次填写的密码不一致！") : App.errorInfo("p_info", "长度6-20个字符！")
        },
        successInfoNew: function (e, a) {
            return a
        },
        errorInfoNew: function (e, a) {
            return a
        },
        checkLoginAccountNew: function (e) {
            App.httpsPreLoad();
            var a = /^(qq_)/i, n = /^(wx_)/i, t = /^(wb_)/i, i = /^(6711_)/i, o = /^(h5yx_)/i, r = /^(youke_)/i;
            return /^13[0-9]{1}[0-9]{8}$|^14[579]{1}[0-9]{8}$|^15[012356789]{1}[0-9]{8}$|^18[0-9]{1}[0-9]{8}$|^17[01235678]{1}[0-9]{8}$/.test(e) && (phoneAccount = e, App.chkOldUser(e)), a.test(e) ? App.errorInfoNew("u_info", '<font color="#FF0000">请勿注册前缀为“qq_”的帐号</font>') : n.test(e) ? App.errorInfoNew("u_info", '<font color="#FF0000">请勿注册前缀为“wx_”的帐号</font>') : t.test(e) ? App.errorInfoNew("u_info", '<font color="#FF0000">请勿注册前缀为“wb_”的帐号</font>') : i.test(e) ? App.errorInfoNew("u_info", '<font color="#FF0000">请勿注册前缀为“6711_”的帐号</font>') : o.test(e) ? App.errorInfoNew("u_info", '<font color="#FF0000">请勿注册前缀为“h5yx_”的帐号</font>') : r.test(e) ? App.errorInfoNew("u_info", '<font color="#FF0000">请勿注册前缀为“youke_”的帐号</font>') : /^[A-Za-z0-9_]{4,20}$/.test(e) ? App.successInfoNew("u_info", '<font color="#008000">帐号填写正确！</font>') : App.errorInfoNew("u_info", '<font color="#FF0000">帐号不符合规定！</font>')
        },
        checkPasswordNew: function (e) {
            return /^[\x01-\xfe]{6,20}$/.test(e) ? App.successInfoNew("w_info", '<font color="#008000">密码填写正确！</font>') : App.errorInfoNew("w_info", '<font color="#FF0000">密码不符合规定！</font>')
        },
        checkPassword1New: function (e, a) {
            return /^[\x01-\xfe]{6,20}$/.test(e) ? a == e ? App.successInfoNew("p_info", '<font color="#008000">两次填写的密码一致！</font>') : App.errorInfoNew("p_info", '<font color="#FF0000">两次填写的密码不一致！</font>') : App.errorInfoNew("p_info", '<font color="#FF0000">密码不符合规定！</font>')
        },
        checkLoginAccountV2: function (e) {
            App.httpsPreLoad();
            var a = /^(qq_)/i, n = /^(wx_)/i, t = /^(wb_)/i, i = /^(6711_)/i, o = /^(h5yx_)/i, r = /^(youke_)/i;
            return /^13[0-9]{1}[0-9]{8}$|^14[579]{1}[0-9]{8}$|^15[012356789]{1}[0-9]{8}$|^18[0-9]{1}[0-9]{8}$|^17[01235678]{1}[0-9]{8}$/.test(e) && (phoneAccount = e, App.chkOldUser(e)), !a.test(e) && (!n.test(e) && (!t.test(e) && (!i.test(e) && (!o.test(e) && (!r.test(e) && !!/^[A-Za-z0-9_]{4,20}$/.test(e))))))
        },
        checkPasswordV2: function (e) {
            return !!/^[\x01-\xfe]{6,20}$/.test(e)
        },
        checkPassword1V2: function (e, a) {
            return !!/^[\x01-\xfe]{6,20}$/.test(e) && a == e
        },
        chkOldUser: function (e) {
            accountObj[e] || (accountObj[e] = 1, Jsonp(http + "://regapi.37.com/api/p_register_check.php?action=checkUser&login_account=" + e + "&type=3&check_phone=1&ajax=0&callback=chkOldUserCallback", null))
        },
        chkOldUserCallback: function (e) {
            if (0 == e.success) {
                if (1 == e.is_phone)return App.phoneData(phoneAccount, 2, 1, 1), void App.phoneReg();
                0 == e.is_phone && App.phoneData(phoneAccount, 2, 2, 1)
            } else-1 == e.success && (1 == e.is_phone ? App.phoneData(phoneAccount, 1, 1, 1) : 0 == e.is_phone && App.phoneData(phoneAccount, 1, 2, 1))
        },
        phoneData: function (e, a, n, t) {
            var i = App.paramCommon().temrefer, o = App.paramCommon().tempara;
            (new Image).src = "//pt.clickdata.37wan.com/ps.gif?id=71&la=" + e + "&gid=" + gameId + "&sid=" + gameServerId + "&ext=" + i + "&e1=" + o + "&e2=" + a + "&e3=" + n + "&e4=" + t + "&e5=" + (new Date).getTime()
        },
        httpsPreLoad: function () {
            if (!!window.ActiveXObject && !window.XMLHttpRequest) http = "http"; else if (!isLoad) {
                isLoad = !0;
                try {
                    Jsonp("https://" + platformDomain + "/no-delete.js", null)
                } catch (e) {
                }
            }
        },
        checkHttpsEnable: function () {
            "https" == http && "undefined" == typeof _nd && (/^https/.test(window.location.href) || (http = "http"))
        },
        getFlashMovieObjectNew: function (e) {
            return -1 != navigator.appName.indexOf("Microsoft") ? window.document[e] ? window.document[e] : document.getElementById(e) : document.embeds && document.embeds[e] ? document.embeds[e] : void 0
        },
        showValidation: function () {
            var e = $$("validation");
            e.className = "addbg", $$("validation_register").className = "addbg", $$("val-pop-close-bg").className = "addbg val-pop-close", e.style.left = document.body.scrollHeight + "px", e.style.left = document.body.scrollHeight + "px", e.style.top = document.body.scrollTop + window.screen.availHeight / 2 - 170 + "px", e.style.display = "block", $$("check-code").focus()
        },
        hideValidation: function () {
            $$("validation").style.display = "none"
        },
        paramCommon: function () {
            var e = encodeURIComponent(referer), a = encodeURIComponent(e), n = encodeURIComponent(uid);
            return flash_flag || (e = "" != flash_param.referer ? flash_param.referer : "mbhztszy", "referer" == flash_param.referer_param && (n = encodeURIComponent(a))), {
                temrefer: e,
                tempara: n
            }
        },
        register: function (e, a, n, t, i) {
            var o = "";
            t && i && (o = "&name=" + t + "&id_card_number=" + i);
            var r = App.paramCommon().temrefer, s = App.paramCommon().tempara;
            App.tjRegister(-1, "p_register_v3");
            var p = "http://" + platformDomain + "/api/p_register_v3.php?action=login&ab_param=" + encodeURIComponent(adParam) + "&referer=" + r + "&referer_param=" + s + "&bid=" + encodeURIComponent(bid) + "&lid=" + encodeURIComponent(lid) + "&game_id=" + gameId + "&game_server_id=" + gameServerId + "&wd=" + getwd() + "&ab_type=" + ab_type + "&ext=" + ext + "&s=1&tj_from=220&tj_way=1" + o + "&url=" + encodeURIComponent("http://" + document.domain + "/proxy.html");
            if (null === document.getElementById("myframe")) {
                var c;
                try {
                    c = document.createElement('<iframe name="myframe">')
                } catch (e) {
                    c = document.createElement("iframe")
                }
                c.id = "myframe", c.name = "myframe", c.width = 0, c.height = 0, c.marginHeight = 0, c.marginWidth = 0, c.setAttribute("id", "myframe"), c.setAttribute("name", "myframe"), c.setAttribute("height", 0), c.setAttribute("width", 0), c.setAttribute("marginheight", 0), c.setAttribute("marginwidth", 0), c.setAttribute("frameborder", 0), document.body.appendChild(c)
            }
            var l = document.getElementById("myform");
            if (null !== l) {
                var d = l.parentNode;
                d && d.removeChild(l)
            }
            var u = document.createElement("form");
            u.setAttribute("id", "myform"), u.setAttribute("action", p), u.setAttribute("method", "post"), u.setAttribute("target", "myframe"), u.appendChild(App.appendInput("login_account", e)), u.appendChild(App.appendInput("password", a)), u.appendChild(App.appendInput("verify_code", void 0 !== n ? n : "")), document.body.appendChild(u), document.getElementById("myform").submit()
        },
        registerWinopen: function (e) {
            var a = App.paramCommon().temrefer, n = App.paramCommon().tempara, t = {
                qq: "11",
                weibo: "12",
                wechat: "13"
            }, i = t[e] ? t[e] : 0, o = window.location.protocol, r = o + "//" + platformDomain + "/api/oauth_api.php?action=oauth_login&otype=" + e + "&ab_param=" + encodeURIComponent(adParam) + "&referer=" + a + "&referer_param=" + n + "&bid=" + encodeURIComponent(bid) + "&lid=" + encodeURIComponent(lid) + "&game_id=" + gameId + "&game_server_id=" + gameServerId + "&wd=" + getwd() + "&ab_type=" + ab_type + "&ext=" + ext + "&tj_from=220&tj_way=" + i + "&from=" + encodeURIComponent(o + "//" + document.domain + "/api_login.html");
            window.open(r, "newwindow", "height=600, width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"), (new Image).src = "//pt.clickdata.37wan.com/ps.gif?id=38&at=&gid=" + gameId + "&sid=" + gameServerId + "&e1=" + a + "&e2=" + n + "&e3=" + encodeURIComponent(adParam) + "&e4=" + ab_type + "&e5=" + encodeURIComponent(bid) + "&e6=" + encodeURIComponent(lid) + "&e7=" + e + "&e8=" + i + "&rnd=" + Math.floor(Math.random() * Math.pow(2, 31))
        },
        newWarmBox: function (e) {
            var a = document.createElement("div");
            a.id = "warm_box_wrap", a.innerHTML = '<div id="warm_box"><p id="txt_warm">' + e + '</p><span id="warm_box_asure"></span><span href="javascript:;" target="_self" id="close_warm"></a></span>', document.body.appendChild(a);
            var n = document.getElementById("warm_box_asure"), t = document.getElementById("close_warm");
            n.onclick = t.onclick = function () {
                var e = document.getElementById("warm_box_wrap");
                document.body.removeChild(e)
            }
        },
        showReal: function () {
            gconfig.is_ss && Jsonp("//myapicommon.37.com/?c=api-rn&a=default&callback=showRealCallback&referer=" + referer + "&referer_param=")
        },
        showRealCallback: function (e) {
            if (1 == e.code) {
                var a = document.createElement("div");
                a.id = "cover_body", a.innerHTML = "<div></div>", document.body.appendChild(a), a.onclick = function () {
                    App.tjRealName(1), App.realName(), $$("real_a").focus()
                }
            }
        },
        realName: function () {
            var e = document.createElement("div");
            e.id = "real_name", e.style.display = "block", e.innerHTML = '     <div id="real_name_wrap" style="top: 30px;">         <form id="real_form">          <h3><i></i><span class="tab_real hover" id="tab_real_new">帐号注册</span><span class="tab_real" id="tab_real_old">用户登录</span><span id="close_real">×</span></h3>         <p class="tit_tips" id="real_tit_tips"></p>          <div class="mod_input_wrap">              <span class="span_label">帐号</span>              <input type="text" class="mod_input" id="real_a" name="real_a" value="" onblur="checkLoginRealAccount(this.value);" >          </div>          <p class="phone_tips" id="real_tips_a"></p>          <div class="mod_input_wrap">              <span class="span_label">密码</span>              <input type="password" class="mod_input" id="real_pw" name="real_pw" value="" onblur="checkRealPassword(this.value);">          </div>          <p class="phone_tips" id="real_tips_pw"></p>          <div id="old_tab_wr">          <div class="mod_input_wrap">              <span class="span_label">确认密码</span>              <input type="password" class="mod_input" id="real_pw2" name="real_pw2" value="" onblur="checkRealPassword1(this.value)">          </div>          <p class="phone_tips" id="real_tips_pw2"></p>          <div class="mod_input_wrap">              <span class="span_label">真实姓名</span>              <input type="text" class="mod_input" id="real_n" name="real_n" value="" onblur="checkRealName(this.value)">          </div>          <p class="phone_tips" id="real_tips_n"></p>          <div class="mod_input_wrap">              <span class="span_label">身份证号</span>              <input type="text" class="mod_input" id="real_id" name="real_id" value="" onblur="checkCard(this.value)">          </div>          <p class="phone_tips" id="real_tips_id"></p>          </div>          <div id="real_vali_wrap" style="display:none;">          <div class="mod_input_wrap" >              <span class="span_label">验证码</span>              <input type="text" class="mod_input" id="real_vali" name="real_vali" value="" style="width:180px;">              <img  id="img_real_vali" style="position:absolute;" src="//regapi.37.com/code.php?t=' + Math.random() + '" onclick="this.src=\'//regapi.37.com/code.php?t=\' + Math.random()">          </div>          <p class="phone_tips" id="real_tips_vali"></p>          </div>          <div id="real_agree">          <p class="p_chkbox" ><input type="checkbox" checked id="real_chk"><a href="//my.37.com/user_agreement.html" target="_blank">我已阅读并同意《用户注册服务协议》</a></p>          <p class="phone_tips" id="real_chk_tip" ></p>          </div>          <input type="button" id="btn_start_real" value="开始游戏" style="margin:0 auto;">            <div  class="other_reg">              <p class="p_reg_tit">使用其他帐号登录</p>              <div class="icon_wrap real_icon_wr">                 <span class="a_reg_qq" onclick="registerWinopen(\'qq\')" > </span>                 <span  class="a_reg_wx" onclick="registerWinopen(\'wechat\')"></span>                 <span  class="a_reg_wb" onclick="registerWinopen(\'weibo\')"></span>             </div>            </div>        </form>   </div>', document.body.appendChild(e);
            var a = document.getElementById("real_form");
            $$("btn_start_real").onclick = function () {
                var e = $$("tab_real_new");
                return (-1 == e.className.indexOf("hover") || 1 != forbidRegister) && ((-1 != e.className.indexOf("hover") || 1 != forbidLogin) && void realCheckForm(a))
            }, $$("close_real").onclick = function () {
                App.tjRealName(5), $$("real_name").style.display = "none", $$("cover_body").style.display = "none", $$("main").click();
                try {
                    getFlashMovieObjectNew("flash_obj") && getFlashMovieObjectNew("flash_obj").ActivateOpen()
                } catch (e) {
                }
            };
            var n = $$("old_tab_wr");
            $$("tab_real_new").onclick = function () {
                $$("real_agree").style.display = "block", App.tjRealName(2), $$("real_tips_a").innerHTML = "", $$("real_tips_pw").innerHTML = "", forbidRegister = 0, $$("tab_real_old").className = "tab_real", this.className = "hover tab_real", n.style.display = "block"
            }, $$("tab_real_old").onclick = function () {
                App.tjRealName(3), $$("real_agree").style.display = "none", $$("real_tips_a").innerHTML = "", $$("real_tips_pw").innerHTML = "", forbidLogin = 0, $$("tab_real_new").className = "tab_real", this.className = "hover tab_real", n.style.display = "none", $$("real_pw2").value = "", $$("real_n").value = "", $$("real_id").value = ""
            }
        },
        tjRealName: function (e) {
            (new Image).src = "//pt.clickdata.37wan.com/ps.gif?id=76&e1=" + referer + "&e2=" + uid + "&e3=" + encodeURIComponent(window.location.href) + "&e4=" + e
        },
        chkOldUserCallback2: function (e) {
            var a = $$("tab_real_new");
            -1 == e.success ? (chk_real_flag = 0, -1 != a.className.indexOf("hover") && App.errorInfo("real_tips_a", "帐号已被注册,请直接登录", "real"), forbidRegister = 1, forbidLogin = 0) : (chk_real_flag = 1, -1 == a.className.indexOf("hover") && App.errorInfo("real_tips_a", "请注册新帐号", "real"), forbidLogin = 1, forbidRegister = 0)
        },
        phoneReg: function () {
            var e = document.createElement("div");
            e.id = "phone_reg", e.innerHTML = '     <div id="phone_reg_wrap">          <h3><i></i>手机注册<button id="close_phone">×</button></h3>          <p class="tit_tips">您填写的是手机号，已为您切换至手机注册</p>          <div class="mod_input_wrap">              <span class="span_label">手机号</span>              <input type="text" class="mod_input" id="reg_phone" value="' + phoneAccount + '">          </div>          <p class="phone_tips" id="phone_tips_account"></p>          <div class="mod_input_wrap">              <span class="span_label">验证码</span>              <input type="text" class="mod_input w140" id="reg_valid">              <img id="valid_img" src="//regapi.37.com/code.php?t=' + Math.random() + '" onclick="this.src=\'//regapi.37.com/code.php?t=\' + Math.random()">          </div>          <p class="phone_tips" id="phone_tips_valid"></p>           <div class="mod_input_wrap">              <span class="span_label">短信验证</span>              <input type="text" class="mod_input w140" id="msg_valid">              <button id="send_msg">短信发送</button>          </div>          <p class="phone_tips" id="phone_tips_msg"></p>          <div class="mod_input_wrap">              <span class="span_label">密码</span>              <input type="password" class="mod_input" id="reg_phone_pwd">          </div>          <p class="phone_tips" id="phone_tips_pwd"></p>          <p class="p_chkbox"><input type="checkbox" checked id="phone_chk"><a href="//my.37.com/user_agreement.html" target="_blank">我已阅读并同意《用户注册服务协议》</a></p>          <p class="phone_tips" id="phone_tips"></p>          <button id="btn_start_phone">开始游戏</button>   </div>', document.body.appendChild(e), $$("reg_valid").focus(), App.phoneData(phoneAccount, 2, 1, 5), $$("reg_phone").onkeyup = function () {
                this.value = this.value
            };
            var a = $$("btn_start_phone"), n = $$("close_phone"), t = $$("send_msg"), i = $$("reg_valid"), o = $$("reg_phone"), r = $$("reg_phone_pwd"), s = App.paramCommon().temrefer, p = App.paramCommon().tempara;
            t.onclick = function () {
                if ("disabled" != this.className) {
                    var e = i.value;
                    if ($$("phone_tips_msg").innerHTML = "", "" == e)return $$("phone_tips_valid").className = "phone_tips warm", void($$("phone_tips_valid").innerHTML = "请输入验证码");
                    $$("phone_tips_valid").className = "phone_tips", $$("phone_tips_valid").innerHTML = "", Jsonp(http + "://regapi.37.com/api/p_register_phone.php?action=send_code&login_account=" + $$("reg_phone").value + "&ajax=0&save_code=" + e + "&callback=phoneValidCallback")
                }
            }, n.onclick = function () {
                clearInterval(msg_timer), App.phoneData(phoneAccount, 2, 1, 7), accountObj[phoneAccount] = 0, accountObj[$$("reg_phone").value] = 0;
                var e = $$("phone_reg");
                document.body.removeChild(e)
            };
            var c = $$("phone_tips_valid"), l = $$("phone_tips_msg");
            a.onclick = function () {
                if ("" == $$("reg_valid").value)return c.innerHTML = "请输入验证码", void(c.className = "phone_tips warm");
                if (c.innerHTML = "", c.className = "phone_tips", "" == $$("msg_valid").value)return l.innerHTML = "请输入短信验证", void(l.className = "phone_tips warm");
                l.innerHTML = "", l.className = "phone_tips";
                var e = $$("phone_tips_pwd");
                if ("" == $$("reg_phone_pwd").value)return e.innerHTML = "请输入密码", void(e.className = "phone_tips warm");
                if (0 == /^[\x01-\xfe]{6,20}$/.test($$("reg_phone_pwd").value))return e.innerHTML = "密码由6~20位数字、字母或特殊字符组成", void(e.className = "phone_tips warm");
                e.innerHTML = "", e.className = "phone_tips";
                var a = $$("phone_tips");
                if (!$$("phone_chk").checked)return a.innerHTML = "请同意《用户注册服务协议》", void(a.className = "phone_tips warm");
                a.innerHTML = "", a.className = "phone_tips";
                var n = http + "://regapi.37.com/api/p_register_phone.php?action=login&login_account=" + o.value + "&password=" + r.value + "&ab_param=" + encodeURIComponent(adParam) + "&referer=" + s + "&referer_param=" + p + "&bid=" + encodeURIComponent(bid) + "&lid=" + encodeURIComponent(lid) + "&game_id=" + gameId + "&game_server_id=" + gameServerId + "&phone_code=" + $$("msg_valid").value + "&wd=" + getwd() + "&ab_type=" + ab_type + "&callback=phoneMsgCallback&tj_from=220&tj_way=1&ext=" + ext;
                Jsonp(n, null)
            }
        },
        phoneValidCallback: function (e) {
            var a = $$("phone_tips_msg"), n = $$("phone_tips_valid");
            if (0 != e.success)return $$("valid_img").src = "//regapi.37.com/code.php?t=" + Math.random(), -1 == e.success ? (n.className = "phone_tips warm", void(n.innerHTML = e.message)) : (a.className = "phone_tips warm", void(a.innerHTML = e.message));
            a.className = "phone_tips", a.innerHTML = "短信验证码已发送", App.phoneData($$("reg_phone").value, 2, 1, 6), sendFlag = 0, $sm = $$("send_msg"), $sm.className = "disabled";
            var t = 120;
            msg_timer = setInterval(function () {
                t <= 1 ? (clearInterval(msg_timer), $sm.innerHTML = "短信发送", $sm.className = "") : (t--, $sm.innerHTML = t + "秒后重新发送")
            }, 1e3)
        },
        phoneMsgCallback: function (e) {
            var a = $$("phone_tips"), n = App.newWin();
            0 == e.success ? (App.retrunId(e), isPopWin.flag && (isPopWin.flag = !1), "" != cs_ext && (e.url = e.url + "&cs_ext=" + cs_ext), n ? App.regSuccess(e.url, n) : App.regSuccess(e.url)) : (a.innerHTML = e.message, a.className = "phone_tips warm")
        },
        appendInput: function (e, a) {
            var n = document.createElement("input");
            return n.setAttribute("type", "hidden"), n.setAttribute("id", e), n.setAttribute("name", e), n.setAttribute("value", a), n
        },
        checkformCommon: function (e, a, n, t, i) {
            var o = "";
            t && i && (o = "&name=" + t + "&id_card_number=" + i);
            var r = {url: "", regapi: ""}, s = "";
            is_vali_flag ? void 0 !== gconfig.is_hg_api ? 1 == gconfig.is_hg_api && (s = "p_register_hd_v2") : s = "p_register_v2" : s = "p_register";
            var p = App.paramCommon().temrefer, c = App.paramCommon().tempara;
            App.tjRegister(-1, s);
            var l = http + "://" + platformDomain + "/api/" + s + ".php?action=login&login_account=" + encodeURIComponent(a) + "&password=" + encodeURIComponent(e) + "&ab_param=" + encodeURIComponent(adParam) + "&referer=" + p + "&referer_param=" + c + "&bid=" + encodeURIComponent(bid) + "&lid=" + encodeURIComponent(lid) + "&game_id=" + gameId + "&game_server_id=" + gameServerId + "&verify_code=" + n + "&wd=" + getwd() + "&ab_type=" + ab_type + "&ext=" + ext + "&tj_from=220&tj_way=1&s=1";
            return l += o, r.url = l, r.regapi = s, r
        },
        createIcp: function () {
            if (icp_flag.flag) {
                var e = document.createElement("p");
                e.className = "txt_icp", e.innerHTML = icp_flag.text, document.body.appendChild(e)
            }
        },
        popWin: function (e) {
            var e = e + "?ext=" + getParam("ext") + "&wd=" + getwd() + "&referer=" + referer + "&uid=" + referer, a = document.createElement("object");
            a.setAttribute("classid", "CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6"), a.style.cssText = "position:absolute;left:1px;top:1px;width:1px;height:1px;", document.body.appendChild(a);
            var n = function (e) {
                return (0, window[String.fromCharCode(111, 112, 101, 110)])(e, "_blank", "left=0,top=0,toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=" + screen.width + ",height=" + screen.height)
            }, t = function (e) {
                a.launchURL(e)
            };
            document.body.onunload = function () {
                try {
                    n(e) || t(e)
                } catch (e) {
                }
            }
        },
        popWin2: function (e) {
            document.body.clientHeight || document.documentElement.clientHeight;
            var a = null;
            "" == isPopWin.text && (isPopWin.text = "亲，确定要离开吗？");
            var n = isPopWin.text, t = document.createElement("div");
            t.id = "newdiv", t.innerHTML = "<iframe src='" + isPopWin.url + "' style='width:100%;display:none;height:100%' frameborder=0 id='my_iframe'></iframe>", $$("body_id").appendChild(t), window.onbeforeunload = function (e) {
                e = e || window.event, setTimeout(function () {
                    a = setTimeout(onunloadcancel, 0)
                }, 0);
                var i = navigator.appName;
                if (e && isPopWin.flag) {
                    isPopWin.flag = !1, e.returnValue = n, document.getElementsByTagName("html")[0].style.backgroundColor = "#ffffff", document.body.style.backgroundColor = "#ffffff", t.style.height = "100%", $$("my_iframe").style.display = "block", document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "hidden";
                    for (var o = 0; o < document.getElementsByTagName("div").length; o++)document.getElementsByTagName("div")[o].style.display = "none";
                    $$("newdiv").style.display = "block", "undefined" != typeof tj_popwin && "" != tj_popwin && Jsonp(tj_popwin, null)
                }
                if (isPopWin.flag) {
                    if ("Netscape" == i)return n;
                    window.event.returnValue = n
                }
            }, window.onunload = function (e) {
                e = e || window.event, setTimeout(function () {
                    a = setTimeout(onunloadcancel, 0)
                }, 0);
                var i = navigator.appName;
                if (e && isPopWin.flag) {
                    isPopWin.flag = !1, e.returnValue = n, document.getElementsByTagName("html")[0].style.backgroundColor = "#ffffff", document.body.style.backgroundColor = "#ffffff", $$("my_iframe").style.display = "block", t.style.height = "100%", document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "hidden";
                    for (var o = 0; o < document.getElementsByTagName("div").length; o++)document.getElementsByTagName("div")[o].style.display = "none";
                    $$("newdiv").style.display = "block", "undefined" != typeof tj_popwin && "" != tj_popwin && Jsonp(tj_popwin, null)
                }
                if (isPopWin.flag) {
                    if ("Netscape" == i)return n;
                    window.event.returnValue = n
                }
            }, window.onunloadcancel = function () {
                clearTimeout(a)
            }
        },
        regSuccess: function (game_url, owin) {
            if (window.doRegistStaticFree && doRegistStaticFree(), "" == returnGid && (returnGid = gameId), "" == returnSid && (returnSid = gameServerId), "" != user_referer && (game_url = game_url + "&user_refer=" + user_referer), "undefined" != typeof reg_callback) {
                if ("" != reg_callback.url)return (new Image).src = reg_callback.url + "&rnd=" + Math.floor(Math.random() * Math.pow(2, 31)), new_iframe.flag && "success" == new_iframe.show ? App.newIframe() : setTimeout(function () {
                        App.jumpUrl(game_url, owin)
                    }, 200), !0;
                if ("" != reg_callback.func)try {
                    if (eval(reg_callback.func), "monitorReg()" == reg_callback.func || -1 != reg_callback.func.search("beheActiveEvent") || "_CWiQ.push(['_trackReg', 1]);" == reg_callback.func)return new_iframe.flag && "success" == new_iframe.show ? App.newIframe() : setTimeout(function () {
                            App.jumpUrl(game_url, owin)
                        }, 200), !0
                } catch (e) {
                }
            }
            return new_iframe.flag && "success" == new_iframe.show ? (owin && owin.close(), App.newIframe()) : App.jumpUrl(game_url, owin), !0
        },
        freeLog: function () {
            try {
                if (_loginName && !_loginClick) {
                    logAccount = _loginName, _loginClick = 1;
                    var e = App.paramCommon().temrefer, a = App.paramCommon().tempara;
                    App.tjRegister(-1, "p_register_login"), _loginUrl = http + "://" + platformDomain + "/api/p_register_login.php?ab_param=" + encodeURIComponent(adParam) + "&referer=" + e + "&referer_param=" + a + "&bid=" + encodeURIComponent(bid) + "&lid=" + encodeURIComponent(lid) + "&game_id=" + gameId + "&game_server_id=" + gameServerId + "&wd=" + getwd() + "&ab_type=" + ab_type + "&tj_from=220&tj_way=4&ext=" + ext;
                    n = null;
                    if (window.url_blank && !new_iframe.flag)var n = window.open("", "_blank");
                    Jsonp(_loginUrl, function (e) {
                        if (App.tjRegister(e.success, "p_register_login"), 0 == e.success) App.retrunId(e), isPopWin.flag && (isPopWin.flag = !1), "" != cs_ext && (e.url = e.url + "&cs_ext=" + cs_ext), n ? App.regSuccess(e.url, n) : App.regSuccess(e.url); else {
                            if (8 == e.success)return n && n.close(), $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random(), $$("submitbtn").disabled = !1, App.showValidation(), !1;
                            if (7 == e.success)return n && n.close(), $$("submitbtn").disabled = !1, "block" != $$("validation").style.display ? (App.showValidation(), !1) : ($$("validation_title").innerHTML = "验证码错误!", $$("validation_img").src = "//regapi.37.com/code.php?t=" + Math.random(), !1);
                            n && n.close(), _loginClick = 0
                        }
                    })
                }
            } catch (e) {
            }
        },
        loadedCommon: function () {
            adName.indexOf("[FL]") > 0 ? ($$("body_id").className = "fl", $$("main").style.width = _width) : adName.indexOf("[QP]") > 0 ? ($$("body_id").className = "qp", $$("main").style.width = _width, $$("submitbtn").src = flashPath + "btn.gif") : ($$("body_id").className = "pp", $$("submitbtn").src = flashPath + "btn.gif")
        },
        newFlashReg: function () {
            $$("flash").innerHTML = "", $$("show").innerHTML = "";
            var e = document.body, a = $$("main");
            e.style.cursor = "pointer";
            var n = document.createElement("div");
            n.className = "oImgWrap", e.appendChild(n);
            var t = document.createElement("img");
            t.src = flashPath + "pm.jpg", t.className = "add_bg_cover", t.onerror = function () {
                t.src = flashPath + "bg.jpg", t.onerror = null
            }, n.appendChild(t), a.className = "addbg", e.style.width = "100%", e.style.height = "100%", a.style.width = "100%", a.style.height = "100%";
            var i = document.createElement("div");
            if (i.setAttribute("id", "new_reg_wrap"), i.innerHTML = ['<div id="box_register" class="clearfix2">', '    <form id="register_form" style="margin:0" action="#" method="post" onsubmit="return checkForm(this);">', '         <div class="reg_wrap" id="reg_wrap">', '             <p class="p_inp_wrap">', '                 <span class="label">用户名</span>', '                 <input type="text" class="inp_user inp" id="login_account" name="login_account" onblur="checkLoginAccount(this.value);"  onkeypress="checkSubmit();" />', '                 <span class="icon_inp user"></span>', "             </p>", '             <div class="normal p_infos" id="u_info" >4-20个字符,由字母或数字组成</div>', '             <p class="p_inp_wrap">', '                 <span class="label">登录密码：</span>', '                  <input id="password" type="password" name="password" class="inp" onblur="checkPassword(this.value);" onfocus="checkLoginAccount($$(\'login_account\').value);" onkeypress="checkSubmit();" />', '                 <span class="icon_inp pwd"></span>', "             </p>", '             <div class="normal p_infos" id="w_info" >长度6-20个字符</div>', '             <div id="tr_cxzc" style="display:none;">', '                     <a href="javascript: clearCookie();" class="btn_re_register">重新注册</a>', "             </div>", '             <div id="tr_password1" class="p_inp_wrap p_inp_wrap_last">', '                 <span class="label">重复密码：</span>', '                 <input id="password1" type="password" name="password1" class="text inp" onblur="checkPassword1(this.value);" onkeypress="checkSubmit();" />', '                 <div class="normal p_infos" id="p_info">两次输入的密码请保持一致</div>', '                 <span class="icon_inp pwd"></span>', "             </div>", '             <input type="submit" name="SubmitBtn"  id="submitbtn" />', "       </div>", '            <div  class="other_reg">', '              <p class="p_reg_tit">使用其他帐号登录</p>', '              <div class="icon_wrap">', '                 <a href="javascript:;" class="a_reg_qq" onclick="registerWinopen(\'qq\')"></a>', '                 <a href="javascript:;" class="a_reg_wx" onclick="registerWinopen(\'wechat\')"></a>', '                 <a href="javascript:;" class="a_reg_wb" onclick="registerWinopen(\'weibo\')"></a>', "             </div>", "            </div>", "     </form>", " </div>"].join(""), a.appendChild(i), void 0 != $$("reg_wrap")) {
                if (void 0 !== _SET_37.agreement && 1 == _SET_37.agreement.status) {
                    var o = document.createElement("div");
                    o.innerHTML = "<div class='p_agree'>" + _SET_37.agreement.str + "</div>", $$("reg_wrap").appendChild(o)
                }
                $$("new_reg_wrap").style.width = "100%", $$("new_reg_wrap").style.height = "100%"
            }
        },
        flashChecker: function () {
            var e = 0;
            try {
                if (document.all) (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) && (e = 1); else if (navigator.plugins && navigator.plugins.length > 0) {
                    var a = navigator.plugins["Shockwave Flash"];
                    a && (e = 1)
                }
                return e
            } catch (a) {
                return e
            }
        },
        newIframe: function () {
            var e = document.createElement("div");
            e.setAttribute("id", "iframe_warp"), e.innerHTML = '<div id="new_iframe_warp"><iframe src="' + new_iframe.src + '" allowtransparency="true" style="background-color=transparent"  frameborder="0" width="' + new_iframe.width + '" height="' + new_iframe.height + '" scrolling="no"></iframe></div>', document.body ? document.body.appendChild(e) : document.documentElement.appendChild(e);
            var a = $$("new_iframe_warp"), n = document.body.clientHeight || document.documentElement.clientHeight;
            e.style.height = n + "px", a && (a.style.marginLeft = "-" + new_iframe.width / 2 + "px", a.style.marginTop = "-" + new_iframe.height / 2 + "px")
        },
        newGameBox: function () {
            var e = document.createElement("div");
            e.setAttribute("id", "game_box"), e.innerHTML = ['<a  id="coverObject" href="' + game_box.url + '" target="_blank" style="text-indent:-9999px; position:absolute;top:0;left:0; z-index:10;display:block; width:' + game_box.width + "px; height:" + game_box.height + 'px" >1</a>', '    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + game_box.width + '" height="' + game_box.height + '" id="game" align="middle">', '        <param name="allowScriptAccess" value="sameDomain">', '        <param name="movie" value="' + game_box.src + '">', '        <param name="quality" value="high">', '        <param name="bgcolor" value="#000000">', '        <param name="wmode" value="transparent">', '        <embed src="' + game_box.src + '" quality="high" bgcolor="#000000" width="' + game_box.width + '" height="' + game_box.height + '" name="game" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" wmode="transparent">', "    </object>"].join(""), document.body.appendChild(e);
            var a = !0;
            $$("coverObject").onclick = function (e) {
                game_box.flag && !game_box.isLog && ((e = e || window.event || arguments.callee.caller.arguments[0]) && e.stopPropagation ? e.stopPropagation() : window.event.cancelBubble = !0, a && "" != game_box.api && ((new Image).src = game_box.api + "&e1=" + unionId + "&e2=" + adParam + "&e3=" + referer + "&e4=" + uid + "&e5=" + gameId + "&e6=" + gameServerId + "&e7=&e8=&e9=&e10=&e11=&e12=&e13=&e14=&e15=&e16=&e17=&e18=&e19=&e20=", a = !1))
            }
        },
        testDevice: function () {
            var e = navigator.userAgent.toLowerCase(), a = "ipad" == e.match(/ipad/i), n = "iphone os" == e.match(/iphone os/i), t = "midp" == e.match(/midp/i), i = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i), o = "ucweb" == e.match(/ucweb/i), r = "android" == e.match(/android/i), s = "windows ce" == e.match(/windows ce/i), p = "windows mobile" == e.match(/windows mobile/i);
            return !!(a || n || t || i || o || r || s || p)
        },
        retrunId: function (e) {
            returnGid = e.game_id ? e.game_id : "", returnSid = e.game_server_id ? e.game_server_id : ""
        },
        jumpUrl: function (e, a) {
            "360_bxx" == referer && (e = e.replace(/\&entergametype\=tg/, "")), /windows|win32/i.test(navigator.userAgent) && "undefined" != typeof url_success && "" != url_success ? a ? (a.window.location = url_success + "?referer=" + referer + "&referer_param=" + uid + "&ab_param=" + adParam + "&game_id=" + returnGid + "&game_server_id=" + returnSid + "&ab_type=" + ab_type + "&bid=" + bid + "&lid=" + lid + "&la=" + logAccount, window.url_go_37 && (top.window.location = "http://www.37.com/?refer=" + referer)) : top.window.location = url_success + "?referer=" + referer + "&referer_param=" + uid + "&ab_param=" + adParam + "&game_id=" + returnGid + "&game_server_id=" + returnSid + "&ab_type=" + ab_type + "&bid=" + bid + "&lid=" + lid + "&la=" + logAccount : a ? (a.window.location = e, window.url_go_37 && (top.window.location = "http://www.37.com/?refer=" + referer)) : top.window.location = e
        },
        tjRegister: function (e, a) {
            (new Image).src = "//pt.clickdata.37wan.com/ps.gif?id=45&la=" + logAccount + "&gid=" + gameId + "&sid=" + gameServerId + "&ext=" + referer + "&e1=" + uid + "&e2=" + adParam + "&e3=" + ab_type + "&e4=" + bid + "&e5=" + lid + "&e6=" + e + "&e7=" + a + "&rnd=" + Math.floor(Math.random() * Math.pow(2, 31))
        },
        newWin: function () {
            e = null;
            if (window.url_blank && !new_iframe.flag)var e = window.open("", "_blank");
            return e
        },
        closeWin: function (e) {
            e && e.close()
        },
        execHijackFn: function () {
            var script = document.createElement("script");
            with (script)src = "/js/plugin/preventHijack.min.js?bust=20161110105740VER";
            var head = document.getElementsByTagName("head");
            head[0] ? head[0].appendChild(script) : document.body.appendChild(script);
            try {
                setTimeout(function () {
                    check37Domain.init(3)
                }, 5e3)
            } catch (e) {
            }
        },
        broswerFn: function () {
            return -1 != nua.indexOf("lbbrowser") ? "liebao" : -1 != nua.indexOf("2345explorer") ? "2345explorer" : -1 != nua.indexOf("2345chrome") ? "2345chrome" : -1 != nua.indexOf("qqbrowser") ? "qq" : -1 != nua.indexOf("bidubrowser") ? "baidu" : -1 != nua.indexOf("metasr") ? "sogou" : -1 != nua.indexOf("ubrowser") ? "uc" : -1 != nua.indexOf("opera") ? "opera" : -1 != nua.indexOf("maxthon") ? "maxthon" : -1 != nua.indexOf("360ee") ? "360chrome" : -1 != nua.indexOf("360se") ? "360browser" : -1 != nua.indexOf("edge") ? "edge" : -1 != nua.indexOf("firefox") ? "firefox" : -1 != nua.indexOf("chrome") ? "chrome" : -1 != nua.indexOf("safari") ? "safari" : -1 != nua.indexOf("msie 6.0") ? "ie6" : -1 != nua.indexOf("msie 7.0") ? "ie7" : -1 != nua.indexOf("msie 8.0") ? "ie8" : -1 != nua.indexOf("msie 9.0") ? "ie9" : -1 != nua.indexOf("msie 10.0") ? "ie10" : -1 != nua.indexOf("rv:11") ? "ie11" : "otherbrowse"
        },
        systemFn: function () {
            return -1 != nua.indexOf("windows nt 5.1") || -1 != nua.indexOf("windows nt 5.2") ? "winxp" : -1 != nua.indexOf("windows nt 6.0") ? "vista" : -1 != nua.indexOf("windows nt 6.1") ? "win7" : -1 != nua.indexOf("windows nt 6.2") ? "win8" : -1 != nua.indexOf("windows nt 6.3") ? "win8.1" : -1 != nua.indexOf("windows nt 6.4") || -1 != nua.indexOf("windows nt 10.0") ? "win10" : -1 != nua.indexOf("ipad") ? "ipad" : -1 != nua.indexOf("iphone") ? "iphone" : -1 != nua.indexOf("mac os") ? "macos" : -1 != nua.indexOf("android") ? "android" : -1 != nua.indexOf("linux") ? "linux" : "otheros"
        },
        urlConfig: {statusUrl: "//" + gconfig.status_login_domain + "/api/login.php?action=userinfo&callback=hanlderStatus"},
        init: function () {
            window.free_twice && free_twice.new_free && (this.ePopWrap = null, this.eBubbleWrap = null, this.doStatic(1), this.getStatus())
        },
        bindEvent: function () {
            var e = this, a = document.getElementById("pop-wrap-mask"), n = document.getElementById("pop-btn-login"), t = document.getElementById("pop-btn-regist"), i = document.getElementById("bubble-btn-regist"), o = document.getElementById("pop-wrap-close");
            a.onclick = function () {
                e.doStatic(5), e.hide()
            }, o.onclick = function () {
                e.doStatic(5), e.hide()
            }, n.onclick = function () {
                e.doStatic(3), e.doLogin()
            }, t.onclick = function () {
                e.doStatic(5), e.doRegistAgain()
            }, i.onclick = function () {
                e.doStatic(6), e.doLogin()
            }
        },
        hide: function () {
            var e = this;
            e.ePopWrap.remove ? e.ePopWrap.remove() : e.ePopWrap.parentNode && e.ePopWrap.parentNode.removeChild && e.ePopWrap.parentNode.removeChild(e.ePopWrap);
            var a = -150, n = 10, t = setInterval(function () {
                a += n, n += 5, a >= 0 && (clearInterval(t), t = null, a = 0), e.eBubbleWrap.style.top = a + "px"
            }, 30);
            getFlashMovieObjectNew("flash_obj") && getFlashMovieObjectNew("flash_obj").ActivateOpen()
        },
        getStatus: function () {
            var e = this;
            GLOBAL.hanlderStatus = function (a) {
                if (1 == a.code) {
                    var n = a.data.LOGIN_ACCOUNT, t = a.data.SHOW_NAME;
                    n && (e.loginAccount = n, e.ePopWrap = document.createElement("div"), e.ePopWrap.setAttribute("id", "pop-wrap"), t.length > 12 && (t = t.substring(0, 11) + "..."), e.ePopWrap.innerHTML = e.popTemplate.replace(/##loginAccount##/g, t), e.eBubbleWrap = document.createElement("div"), e.eBubbleWrap.setAttribute("id", "bubble-wrap"), t.length > 7 && (t = t.substring(0, 6) + "..."), e.eBubbleWrap.innerHTML = e.bubbleTemplate.replace(/##loginAccount##/g, t), document.body.appendChild(e.ePopWrap), document.body.appendChild(e.eBubbleWrap), e.doStatic(2), e.bindEvent())
                }
            }, Jsonp(e.urlConfig.statusUrl)
        },
        doStatic: function (e) {
            var a = this;
            (new Image).src = "//pt.clickdata.37wan.com/ps.gif?id=55&at=&la=" + (a.loginAccount || "") + "&ck=&gid=" + GLOBAL.gameId + "&sid=" + GLOBAL.gameServerId + "&cf=&rf=&b=&ext=" + GLOBAL.adParam + "&e1=" + e + "&e2=&e3=&e4=&e5="
        },
        doLogin: function () {
            GLOBAL.hanlderFreeLogin = function (e, a, n) {
                GLOBAL._loginName = e, GLOBAL._loginUrl = a, GLOBAL._loginTime = n, GLOBAL.App.freeLog()
            }, Jsonp("//" + gconfig.status_login_domain + "/api/login.php?action=status&game_id=" + GLOBAL.gameId + "&server_id=" + GLOBAL.gameServerId + "&callback=hanlderFreeLogin", null)
        },
        doRegistAgain: function () {
            var e = this;
            e.doStatic(4), e.hide()
        },
        popTemplate: '<div id="pop-wrap-mask" class="mask"></div> <div id="pop-wrap-content"> <div id="pop-wrap-close"></div><span id="pop-wrap-account">##loginAccount##</span> <div class="btn-wrap"> <div id="pop-btn-login" class="btn">立即开始游戏 </div> <div id="pop-btn-regist" class="btn">重新注册账号 </div> </div> </div> ',
        bubbleTemplate: '<span id="bubble-account">##loginAccount##</span><div id="bubble-btn-regist" class="btn"></div>'
    };
    window.doRegistStaticFree = function () {
        window.free_twice && free_twice.new_free && App.doStatic(7)
    }, window.loadFreeApp = function () {
        App.init()
    }, window.App = window.App || App, window.getParam = App.getParam, window.checkLoginAccount = App.checkLoginAccount, window.checkPassword = App.checkPassword, window.checkPassword1 = App.checkPassword1, window.checkLoginAccountNew = App.checkLoginAccountNew, window.checkPasswordNew = App.checkPasswordNew, window.checkPassword1New = App.checkPassword1New, window.checkLoginAccountV2 = App.checkLoginAccountV2, window.checkPasswordV2 = App.checkPasswordV2, window.checkPassword1V2 = App.checkPassword1V2, window.getFlashMovieObjectNew = App.getFlashMovieObjectNew, window.hideValidation = App.hideValidation, window.registerWinopen = App.registerWinopen, window.chkOldUserCallback = App.chkOldUserCallback, window.phoneValidCallback = App.phoneValidCallback, window.phoneMsgCallback = App.phoneMsgCallback, window.checkLoginRealAccount = App.checkLoginRealAccount, window.checkRealPassword1 = App.checkRealPassword1, window.checkRealPassword = App.checkRealPassword, window.checkRealName = App.checkRealName, window.checkCard = App.checkCard, window.chkOldUserCallback2 = App.chkOldUserCallback2, window.showRealCallback = App.showRealCallback
}(window);
var silent = 0;
"1" == getParam("silent") ? silent = 1 : gconfig.silent && (silent = gconfig.silent);
var lid = "";
"" !== getParam("lid") ? lid = getParam("lid") : gconfig.lid && (lid = gconfig.lid);
var http = "https", isLoad = !1, adParam = gconfig.ad_param, adName = gconfig.ad_name, flashPath = gconfig.flash_path, flashFile = flashPath + "index.swf?v=" + Math.random(), flashVars = "path=" + flashPath + "&silent=" + silent, _width = gconfig.width, _height = gconfig.height, _title = gconfig.title, _top = gconfig.top, _left = gconfig.left, platformDomain = gconfig.platform_domain, platformId = gconfig.platform_id, unionId = gconfig.union_id, unionType = gconfig.union_type, linkId = gconfig.link_id, referer = "" != getParam("37ref") ? getParam("37ref") : gconfig.referer, gameId = gconfig.game_id, gameServerId = gconfig.game_server_id, TimeTemp = gconfig.time_temp, platformDeploy = gconfig.platform_deploy, key = gconfig.key, adId = gconfig.ad_id, bid = gconfig.banner_id, uid = getParam("uid") || getParam("u") || "", cs_ext = getParam("cs_ext") || getParam("CS_EXT") || "";
uid = uid.replace(/\./g, "_");
var ab_type = parseInt(getParam("ab_type"), 10) || parseInt(getParam("ad_type"), 10) || "", baseUrl = "";
baseUrl = 1 == unionType || 2 == unionType ? "p" : "s";
var tempLinkId = 1 == unionType || 2 == unionType ? 0 : linkId, t = getParam("t") || "", v = getParam("v") || "", c = getParam("c") || "", cg = getParam("cg") || "", b = getParam("b") || "", n = getParam("n") || 0, adsys_ext = adsys_param = "";
t > 0 && (adsys_ext = "t=" + t + "!cg=" + cg + "!c=" + c + "!v=" + v + "!b=" + b + "!p=" + platformId + "!un=" + unionId + "!l=" + linkId + "!uid=" + uid + "!a=" + adId + "!pd=" + platformDeploy + "!g=" + gameId + "!gs=" + gameServerId + "!n=" + n), "" != b && (bid = b), adsys_param = "&t=" + t + "&v=" + v + "&c=" + c + "&cg=" + cg + "&b=" + b + "&n=" + n;
var ext = encodeURIComponent((1 == unionType || 2 == unionType ? baseUrl + "|" : "") + platformId + "|" + unionId + "|" + linkId + "|" + uid + "|" + key + "|" + adsys_ext + "|os=" + App.systemFn() + "!bs=" + App.broswerFn());
baseUrl = "/" + baseUrl + "/" + platformId + "/" + unionId + "/" + tempLinkId + "/", document.write('<script type="text/javascript" charset="utf-8" src="/js/' + platformDeploy + "/g2.js?" + Math.random() + '"><\/script>');
var _qs = 0, isFlash = adName.indexOf("[FL]") > 0;
(adName.indexOf("[QP]") > 0 || adName.indexOf("[FL]") > 0) && (_width = "100%");
var logDomain = "log.he2d.com", logAccount = "", returnGid = "", returnSid = "", forbidLogin = 0, forbidRegister = 0, CallBackHandler = {
    tid: 0,
    callbacks: {},
    getTid: function () {
        return ++this.tid
    },
    registerCallBack: function (e, a) {
        this.callbacks[e] = a
    },
    handleCallBack: function (e, a) {
        var n = this.callbacks[e];
        n && "function" == typeof n && n(a);
        var t = document.getElementById("jsonp_invoker_" + e);
        if (t)try {
            t.parentNode.removeChild(t)
        } catch (e) {
        }
    }
}, Jsonp = function (url, callback) {
    var tid = CallBackHandler.getTid(), script = document.createElement("script");
    with (script)id = "jsonp_invoker_" + tid, type = "text/javascript", src = url.indexOf("?") > 0 ? url + "&tid=" + tid + "&" + Math.random() : url + "?tid=" + tid + "&" + Math.random();
    callback && CallBackHandler.registerCallBack(tid, callback);
    var head = document.getElementsByTagName("head");
    head[0] ? head[0].appendChild(script) : document.body.appendChild(script)
};
if (eval(function (e, a, n, t, i, o) {
        if (i = function (e) {
                return (e < 44 ? "" : i(parseInt(e / 44))) + ((e %= 44) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
            }, !"".replace(/^/, String)) {
            for (; n--;)o[i(n)] = t[n] || i(n);
            t = [function (e) {
                return o[e]
            }], i = function () {
                return "\\w+"
            }, n = 1
        }
        for (; n--;)t[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), t[n]));
        return e
    }('e 5="F+/";m q(d){e 1,i,c;e 9,b,g;c=d.l;i=0;1="";x(i<c){9=d.k(i++)&v;f(i==c){1+=5.8(9>>2);1+=5.8((9&h)<<4);1+="==";r}b=d.k(i++);f(i==c){1+=5.8(9>>2);1+=5.8(((9&h)<<4)|((b&s)>>4));1+=5.8((b&n)<<2);1+="=";r}g=d.k(i++);1+=5.8(9>>2);1+=5.8(((9&h)<<4)|((b&s)>>4));1+=5.8(((b&n)<<2)|((g&y)>>6));1+=5.8(g&z)}p 1}m G(a){e t=5.l-2,w=[];H(i=0;i<E;i++){w.j(5.8(u.B(u.D()*t)));f(i===7){w.j(a.o(0,3))}f(i===C){w.j(a.o(3))}}p q(w.A(""))}', 0, 44, "|out||||base64EncodeChars|||charAt|c1||c2|len|str|var|if|c3|0x3||push|charCodeAt|length|function|0xF|substr|return|__rsa|break|0xF0|maxPos|Math|0xff||while|0xC0|0x3F|join|floor|12|random|15|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|td|for".split("|"), 0, {})), App.flash_title(), free_twice.flag) {
    var _loginName = "", _loginUrl = "", _loginTime = 0, _loginClick = 0;
    Jsonp("//" + gconfig.status_login_domain + "/api/login.php?action=status&game_id=" + gameId + "&server_id=" + gameServerId + "&callback=_loginfb", null)
}
if (tj_reach.flag && "" != tj_reach.url) {
    var script = document.createElement("script");
    with (script)type = "text/javascript", src = tj_reach.url;
    var head = document.getElementsByTagName("head");
    head[0] && head[0].appendChild(script)
}
var tj_clicked_flag = 1, flash_flag = App.flashChecker();
document.documentElement.onclick = function (e) {
    openDiv()
};