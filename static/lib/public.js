var path = require("path");
var langJS = require("./lang.js");
var cookie = require("./commonCookie.js");
var _ = require('underscore');
var GoApp = require('./goApp.js');

//记住这里的特殊处理
Object.prototype.document = window.document;
Object.prototype.location = window.location;
var $ = require('zepto');
delete(Object.prototype.document);
delete(Object.prototype.location);

var publicJS = {};

publicJS.selfAdaptive = function () {
    // deicePixelRatio: 设备像素
    if (!devicePixelRatio) {
        devicePixelRatio = 1;
    }
    var scale = 1 / devicePixelRatio;
    //设置meta 压缩界面 模拟设备的高分辨率
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    //debounce 为节流函数，引入underscoure即可。
    window.onresize = _.debounce(function () {
        var prevClientWidth = publicJS.localData.getItem("currentClientWidth");
        var deviceWidth = document.documentElement.clientWidth;// > 2000 ? 2000 : document.documentElement.clientWidth;

        //按照640像素下字体为100px的标准来，得到一个字体缩放比例值 6.4
        document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
        window.scrollTo(0, publicJS.localData.getItem("winScrollY"));

        if (prevClientWidth == deviceWidth) {
            return true;
        }
        publicJS.localData.setItem("currentClientWidth", document.documentElement.clientWidth);
        //console.log(deviceWidth);
    }, 100);
};

publicJS.getRequest = function () {
    var url = location.hash, //获取url中"#"符后的字串
        str = "",
        strs = "",
        theRequest = {};

    if (location.search.length) {
        url = location.search.substr(1);
    }

    if (url.indexOf("?") != -1) {
        str = url.substr(url.indexOf("?") + 1, 99);
    } else {
        str = url;
    }

    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }

    //console.log(theRequest);

    return theRequest;
};

publicJS.localData = {
    //默认sessionStorage
    setItem: function (key, val) {
        sessionStorage.setItem(key, val);
    },
    getItem: function (key) {
        return sessionStorage.getItem(key);
    },
    removeItem: function (key) {
        sessionStorage.removeItem(key);
    },
    //localStorage方式
    LS: {
        setItem: function (key, val) {
            localStorage.setItem(key, val);
        },
        getItem: function (key) {
            return localStorage.getItem(key);
        },
        removeItem: function (key) {
            localStorage.removeItem(key);
        }
    },
    CK: {
        setItem: function (key, val, vEnd, sPath, sDomain, bSecure) {
            cookie.setItem(key, val, vEnd, sPath, sDomain, bSecure);
        },
        getItem: function (key) {
            return cookie.getItem(key);
        },
        removeItem: function (key) {
            cookie.removeItem(key);
        }
    }
};

publicJS.isNull = function (val) {
    return val == "undefined" || val == undefined || val == "" || val == "null" || val == null;
};

publicJS.arrayToObject = function (arr) {
    var obj = {};
    for (var i in arr) {
        obj[arr[i].name] = arr[i].value;
    }
    return obj;
};

publicJS.saveCurrentScrollY = _.debounce(function () {
    publicJS.localData.setItem("winScrollY", window.scrollY);
}, 100);

//保存百度统计的单页点击信息
publicJS.saveHmtData = function () {
    //统计代码
    var path = window.location,
        pathname = path.pathname,
        hash = path.hash,
        search = path.search,
        url = "";

    if (hash.indexOf("?") > -1) {
        url = pathname + hash;
    } else {
        url = pathname + search + hash;
    }

    try{
        //_hmt.push(['_setAutoPageview', false]);
        //百度
        _hmt.push(['_trackPageview', url]);
        //友盟
        _czc.push(["_trackPageview", url]);
        //console.log(_hmt);
    }catch(e){
        console.warn("统计代码加载错误：" + e.message);
    }
};

//初始化微信分享功能
publicJS.initWxShareFunc = function (d) {
    $.ajax({
        type: "GET",
        url: "./../../../../newyear2017/BackendSource/index.php",
        data: {
            url: location.href.split('#')[0]
        },
        success: function (data) {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }

            if (data.status != 1) {
                console.warn("输入参数错误！");
                return false;
            }

            var shareData = {
                title: d.title,  // 分享标题（朋友圈限26个字，好友限22个汉字）
                link: window.location.href,
                imgUrl: d.imgUrl,
                desc: d.desc,  // 分享描述（限40个汉字）
                success: function () {
                    //todo
                },
                cancel: function () {
                    //todo
                }
            };

            data.content.debug = false;
            data.content.jsApiList = ["onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"];
            wx.config(data.content);
            //wx.config({
            //    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //    appId: 'wx58f1a8237defa1fa', // 必填，公众号的唯一标识
            //    timestamp: 1480649497, // 必填，生成签名的时间戳
            //    nonceStr: 'asdas', // 必填，生成签名的随机串
            //    signature: '307f95278955c6d88105506c5224e60da7a76e6b',// 必填，签名，见附录1
            //    jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            //});
            wx.ready(function () {
                //分享给好友
                wx.onMenuShareAppMessage(shareData);
                //分享到朋友圈
                wx.onMenuShareTimeline(shareData);
                //分享到QQ
                wx.onMenuShareQQ(shareData);
                //分享到微博
                wx.onMenuShareWeibo(shareData);
                //分享到QQ空间
                wx.onMenuShareQZone(shareData);
            });
        },
        error: function (data) {
            console.warn(data.status);
        }
    });
};

//true/1：繁体，false/0：简体
publicJS.getLang = function () {
    /**
     * 获取客户
     * @returns object = {
     *      p: 100,    //配合在线拉起客户端支付的版本号(最低100)
     *      lang: 1    //0简体 1繁体
     * }
     */
    function getQueryFromUA() {
        var ua = navigator.userAgent,    // + '{p/100}{lang/1}'|'{p/在线支付版本号}{lang/当前页面显示的语言(0简体1繁体)}',
            matchArr = ua.match(/{[^}]+}/g),
            query = {};

        if (matchArr && matchArr.length > 0) {
            matchArr.forEach(function (v) {
                var kv = v.replace(/{|}/g, '').split('/');
                query[kv[0]] = kv[1];
            });
        }

        return query;
    }

    /**
     *
     * @returns object {
     *      flag: boolean,    //true时才用下面的lang判断语言, false说明没有获取到客户端的语言信息
     *      lang: 1    //0简体 1繁体
     * }
     */
    function pageLangValidate() {
        var query = getQueryFromUA(),
            lang = query.lang || '';
        if (/^(0|1)$/.test(lang)) {
            return {
                flag: true,
                lang: lang
            }
        } else {
            return {
                flag: false,
                lang: null
            }
        }
    }

    //return 1;
    return pageLangValidate().lang;
};

//true/1：繁体，false/0：简体
publicJS.setCNLang = function () {
    //var lang = publicJS.localData["LS"].getItem("lang") ? publicJS.localData["LS"].getItem("lang")*1 : 0;
    //lang = 1;
    var lang = publicJS.getLang();

    if (lang == 1) {
        //繁体
        langJS.jf.convertText(document.documentElement, true);
    } else {
        //默认简体
        //简体
        langJS.jf.convertText(document.documentElement, false);
    }
    //console.log(this.generateUUID());
};

publicJS.generateUUID = function() {
    var d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    //return uuid;
};

publicJS.couponTimes = {
    getNowDate: function () {
        return new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate();
    },
    getHitEggTimes: function () {
        return JSON.parse(publicJS.localData['LS'].getItem("hitEggTimes")) || [];
    },
    getThisTimesData: function () {
        return _.findWhere(this.getHitEggTimes(), {"date": this.getNowDate()});
    },
    getTimes: function () {
        return times = this.getThisTimesData() ? this.getThisTimesData().times : 1;
    },
    setTimes: function () {
        var times = this.getTimes(),
            nowDate = this.getNowDate(),
            hitEggTimes = this.getHitEggTimes(),
            thisTimesData = this.getThisTimesData(),
            newTimesData = {"date": nowDate, "times": times + 1};

        if(thisTimesData){
            hitEggTimes.pop();
        }
        hitEggTimes.push(newTimesData);
        publicJS.localData['LS'].setItem("hitEggTimes", JSON.stringify(hitEggTimes));
    },
    clearTimes: function () {
        publicJS.localData['LS'].removeItem("hitEggTimes");
    },
    clearCoupons: function () {
        publicJS.localData["CK"].removeItem("COUPONS");
    }
};

publicJS.getSortedCoupons = function () {
    var coupons = JSON.parse(publicJS.localData["CK"].getItem("COUPONS"));
    coupons = _.where(coupons, {isValid: true});
    coupons = coupons.sort(function(a, b){
        if(a.val < b.val) return 1;
    });

    return coupons;
};

publicJS.addCouponCodeToLink = function (code) {
    var cookieCouponData = publicJS.getSortedCoupons();

    //console.log(cookieCouponData);

    if(cookieCouponData.length > 0){
        $("a[data-flag='outer']").each(function(){
            if(this.href.indexOf("code=") > -1){
                this.href = this.href.replace(/code=\w{6}/, "code=" + cookieCouponData[0].code);
            }else{
                if(this.href.indexOf("?") > -1){
                    this.href += "&code=" + cookieCouponData[0].code;
                }else{
                    this.href += "?code=" + cookieCouponData[0].code;
                }
            }
        });
    }
};

publicJS.goAPP = function (e, d) {
    var goType = $(e.currentTarget).data('gotype');
    var controller = $(e.currentTarget).data('controller') || d;
    var type = $(e.currentTarget).data('type');

    var data = {
        'controller': controller,
        'type': type,
        'params': goType ? {"data": goType + ""} : {}
    };

    new GoApp(data);
};

publicJS.getCoupon = function (data) {
    $.ajax({
        type: 'POST',
        url:'../BackendSource/getCode.php',
        data: {type: data.couponType || 1},                //1: 1~10随机金额；2: 5~8随机金额
        dataType: 'json',
        success: function(d){
            if(d){
                //console.log("获取优惠券成功。type: " + data.couponType);
                var cookieCouponData = JSON.parse(publicJS.localData["CK"].getItem("COUPONS")) || [];

                if(cookieCouponData.length < 9){
                    cookieCouponData.push(d);
                    publicJS.localData['CK'].setItem("COUPONS", JSON.stringify(cookieCouponData), null, "/");
                    publicJS.addCouponCodeToLink();
                }
            }else{
                alert('优惠券获取失败！');
            }
        },
        error: function(xhr, type){
            alert("网络连接错误！");
        }
    });
};

publicJS.loadHitEgg = function (Coupon) {
    var redpackage = publicJS.getRequest().redpackage;
    var hideGoldEgg = publicJS.localData['LS'].getItem('showGoldEgg') == '0' || redpackage == '1';
    if(!hideGoldEgg){
        var coupon = new Coupon();
    }
    if(redpackage == '1'){
        publicJS.getCoupon({couponType: 3});
    }
};

module.exports = publicJS;