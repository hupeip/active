var mmc = require('./linghit.sdk');
var GoApp = function (data) {
    this.controller = data.controller;                  //参数列表中的controller
    this.type = data.type || 0;                         //参数列表中的type
    this.params = data.params;                          //参数列表中的params

    this.go();
};

var fn = GoApp.prototype;

fn.downloadUrl = {
    'android': {
        'ljms': 'http://a.app.qq.com/o/simple.jsp?pkgname=oms.mmc.fortunetelling',
        'ljmscn': 'http://a.app.qq.com/o/simple.jsp?pkgname=oms.mmc.fortunetelling',
        'ljmsgm': 'https://play.google.com/store/apps/details?id=oms.mmc.fortunetelling_gm2',
        'zyyccn': 'http://a.app.qq.com/o/simple.jsp?pkgname=oms.mmc.fortunetelling.hexagramssign.zhouyiliuyao',
        'zyycgm': 'https://play.google.com/store/apps/details?id=oms.mmc.fortunetelling_gmpay.hexagramssign.zhouyiliuyao',
        'smdscn': 'http://a.app.qq.com/o/simple.jsp?pkgname=oms.mmc.fortunetelling.copy',
        'zgshgm': 'https://play.google.com/store/apps/details?id=oms.mmc.independent_gm.zhuGeSheShu',

        'zwdscn': 'http://apps.download.linghit.com?id=14',
        'zwdsgm': 'http://apps.download.linghit.com?id=14',
        'bzppcn': 'http://apps.download.linghit.com?id=9 ',
        'bzppgm': 'http://apps.download.linghit.com?id=9 ',
        'fslpcn': 'http://apps.download.linghit.com?id=10',
        'fslpgm': 'http://apps.download.linghit.com?id=10',
        'guanyinpusa': 'https://at.umeng.com/WD8zma',
        'bmfcn': 'https://at.umeng.com/WD8zma',
        'bmfgm': 'https://at.umeng.com/WD8zma',
    },
    'ios': {
        'ljms': 'http://a.app.qq.com/o/simple.jsp?pkgname=oms.mmc.fortunetelling',
        'smds': 'https://itunes.apple.com/cn/app/id1074197466?mt=8',
        'zyycds': 'https://itunes.apple.com/cn/app/id519368267?mt=8',
        'gsyps': 'https://at.umeng.com/WD8zma',
        'bmf': 'https://at.umeng.com/WD8zma',
    }
};

fn.controllerMap = {
    'ios': {
        'dade': 'comlyldadefuzhou',                                     //灵机-大德
        'ziwei': 'comggwanziweidoushu',                                 //灵机-紫薇
        'bazi': 'comdzfbazipaipan',                                     //灵机-八字
        'qft': 'none_qft',                                              //灵机-祈福台
        'qfdd': ['none_qfmd', 'comggwanqfmdzsb'],                       //灵机-祈福点灯
        'ziweiapp': 'ziweidoushu',                                      //紫薇APP - 紫薇
        'baziapp': 'bazipaipan',                                        //八字APP - 八字
        'luopanapp': 'dade',                                            //罗盘APP - 大德
        'guanyin': 'qifumingdeng',
        'bmfapp': 'qifumingdeng'
    },
    'android': {
        'dade': 'oms.mmc.fu.HomeActivity',                                                          //大德
        'ziwei': 'oms.mmc.fortunetelling.independent.ziwei.MainActivity',                           //紫薇
        'bazi': 'oms.mmc.fortunetelling.tradition_fate.eightcharacters.MainActivity',               //八字
        'qft': 'oms.mmc.fortunetelling.pray.qifutai.MainActivity',                                  //祈福台
        'qfdd': 'oms.mmc.fortunetelling.qifumingdeng.QiFuMainActivity',                             //祈福点灯
        'ziweiapp': 'ziweidoushu',                                                                  //紫薇APP - 紫薇
        'baziapp': 'bazipaipan',                                                                    //八字APP - 八字
        'luopanapp': 'dade',                                                                         //罗盘APP - 罗盘
        'guanyin': 'qifumingdeng',
        'bmfapp': 'qifumingdeng'
    }
};

fn.versionStateMap = {
    'android': {
        'ljmscn': {'dade': 907, 'ziwei': 907, 'bazi': 907, 'qft': 907, 'qfdd': 907},
        'ljmsgm': {'dade': 842, 'ziwei': 842, 'bazi': 842, 'qft': 842, 'qfdd': 842},
        'ljms': {'dade': 907, 'ziwei': 906, 'bazi': 906, 'qft': 907, 'qfdd': 907},
        'zyyccn': {'dade': 270, 'ziwei': 270, 'bazi': 270, 'qft': 270, 'qfdd': 270},
        'zyycgm': {'dade': 143, 'ziwei': 143, 'bazi': 143, 'qft': 143, 'qfdd': 143},
        'smdscn': {'dade': 120, 'ziwei': 120, 'bazi': 120, 'qft': 120, 'qfdd': 120},
        'zgshgm': {'dade': 115, 'ziwei': 115, 'bazi': 115, 'qft': 115, 'qfdd': 115},

        'zwdscn': {'ziweiapp': 480, 'baziapp': 480, 'luopanapp': 480, 'dade': 480},
        'zwdsgm': {'ziweiapp': 486, 'baziapp': 486, 'luopanapp': 486, 'dade': 486},
        'bzppcn': {'ziweiapp': 303, 'baziapp': 303, 'luopanapp': 303, 'dade': 303},
        'bzppgm': {'ziweiapp': 300, 'baziapp': 300, 'luopanapp': 300, 'dade': 300},
        'fslpcn': {'ziweiapp': 359, 'baziapp': 359, 'luopanapp': 359, 'dade': 359},
        'fslpgm': {'ziweiapp': 112, 'baziapp': 112, 'luopanapp': 112, 'dade': 112},
        'guanyinpusa': {'dade': 200, 'ziwei': 200, 'bazi': 200, 'qft': 200, 'qfdd': 200, 'guanyin': 200},
        'bmfcn': {'dade': 200, 'ziwei': 200, 'bazi': 200, 'qft': 200, 'qfdd': 200, 'guanyin': 200, 'bmfapp': 262},
        'bmfgm': {'dade': 200, 'ziwei': 200, 'bazi': 200, 'qft': 200, 'qfdd': 200, 'guanyin': 200, 'bmfapp': 262}
        
    },
    'ios': {
        'ljms': {'dade': 852, 'ziwei': 852, 'bazi': 852, 'qft': 852, 'qfdd': 852},
        'smds': {'dade': 101, 'ziwei': 101, 'bazi': 101, 'qft': 101, 'qfdd': 101},
        'zyycds': {'dade': 233, 'ziwei': 233, 'bazi': 233, 'qft': 233, 'qfdd': 233},

        'ziweidoushu': {'ziweiapp': 0, 'baziapp': 0, 'luopanapp': 0, 'dade': 0},
        'bzpp': {'ziweiapp': 0, 'baziapp': 0, 'luopanapp': 0, 'dade': 0},
        'fslp': {'ziweiapp': 0, 'baziapp': 0, 'luopanapp': 0, 'dade': 0},
        'gsyps': {'dade': 323, 'ziwei': 323, 'bazi': 323, 'qft': 323, 'qfdd': 323, 'guanyin': 200},
        'bmf': {'dade': 200, 'ziwei': 200, 'bazi': 200, 'qft': 200, 'qfdd': 200, 'guanyin': 200, 'bmfapp': 262}

    }
};

fn.convertParams = function (goParams) {
    return {controller: goParams.controller, gotoType: goParams.type, gotoParams: goParams.params}
};

fn.getOuterToAppUrl = function (appFlag) {
    var outerToAppUrl = {
        'ljms': 'lingjiopen://m.linghit.com?content=' + fn.getBase64(fn.convertParams(this.goParams))
    };

    return outerToAppUrl[appFlag];
};

fn.goDownload = function () {
    location.href = this.downloadUrl[this.os][this.appFlag];
};

fn.goAppInner = function (goParam) {
    mmc.client.goto(goParam, "");
};

fn.goAppOuter = function () {
    var t = Date.now();
    var ifr = document.createElement('IFRAME');
    ifr.src = this.getOuterToAppUrl(this.appFlag);
    ifr.style.position = 'absolute';
    ifr.style.left = '-1000px';
    ifr.style.top = '-1000px';
    ifr.style.width = '1px';
    ifr.style.height = '1px';

    //设置一个4秒的动画，用于检查客户端是否被调起。
    ifr.style.webkitTransition = 'all 4s';
    document.body.appendChild(ifr);
    setTimeout(function() {
        ifr.addEventListener('webkitTransitionEnd', function() {
            document.body.removeChild(ifr);
            console.log(Date.now() - t);
            if( Date.now() - t < 6000 ) {
                this.goDownload();
            }
        }.bind(this), false);
        ifr.style.left = '-10px';    //动画使用
    }.bind(this), 0);
};

fn.getBase64 = function (obj) {
    return window.btoa(JSON.stringify(obj));
};

fn.setGoParams = function () {
    var controller = this.controllerMap[this.os][this.controller],
        paramsData = this.params.data;

    //针对祈福点灯IOS版本的特殊处理
    if(typeof controller == "object"){
        controller = this.versionNum == 850 ? controller[0] : controller[1];
    }

    //针对紫薇IOS和android的data不同，特殊处理
    if(this.controller == 'ziwei' && paramsData.indexOf(',') > 0){
        if(this.os == 'android'){
            paramsData = paramsData.split(',')[0];
        }else{
            paramsData = paramsData.split(',')[1];
        }
        this.params.data = paramsData;
    }

    this.goParams = {
        'controller': controller,
        'version': '',
        'type': this.type * 1 || 0,
        'params': this.params
    }
};

fn.setAppFlag = function () {
    this.appFlag = mmc.client.getAppFlag();
};

fn.setOS = function () {
    this.os = mmc.client.isAndroid() ? 'android' : (mmc.client.isIOS() ? 'ios' : 'others');
};

fn.setInApp = function () {
    this.inApp = mmc.client.isAPP();
};

fn.setVersionState = function () {
    this.versionState = mmc.client.getAppVersionNum() >= this.versionStateMap[this.os][this.appFlag][this.controller];
};

fn.config = function () {
    this.setOS();
    this.setInApp();
    this.setAppFlag();
    if(this.inApp){
        this.setVersionState();
    }
    this.setGoParams();
};

fn.go = function () {
    this.config();

    if(this.inApp){
        if(this.versionState){
            this.goAppInner(this.goParams);
        }else{
            this.goDownload();
        }
    }else{
        this.goAppOuter();
    }
};


module.exports = GoApp;
