/**
 * Created by Administrator on 2016/8/8.
 */

var mmc = (function () {
    var mmc = {
        v: '1.0.0-dev',
        json: {
            encode: function (data) {
                if ("" == data) {
                    return {};
                }
                return JSON.stringify(data).replace(/"/g, '\'');
            }, decode: function (data) {
                if ("" == data) {
                    return "{}";
                }
                return JSON.parse(data.replace(/\'/ig, '\"'));
            }
        },
        debug: false,
        user: {
            info: {}, getInfo: function () {
                return this.info;
            }, getId: function () {
                return this.getInfo().userid;
            }, getUsername: function () {
                return this.getInfo().username;
            }, getNickname: function () {
                return this.getInfo().nickname;
            }, getCountry: function () {
                return this.getInfo().country;
            }, getEmail: function () {
                return this.getInfo().email;
            }, getAvatar: function () {
                return this.getInfo().avatar;
            }, isMarry: function () {
                return true == this.getInfo().marriagestatus;
            }, getPhone: function () {
                return this.getInfo().mobilephone;
            }, getScore: function () {
                return this.getInfo().score;
            }, isMan: function () {
                return 1 == this.getInfo().sex;
            }, getGender: function () {
                return this.getInfo().sex;
            }, getWork: function () {
                return this.getInfo().workstatus;
            }, getBirthday: function () {
                return this.getInfo().birthday;
            }, login: function (callback) {
                if (mmc.client.isAndroid()) {
                    if(window.lingjiWebApp){
                        return window.lingjiWebApp.MMCLogin(null == callback ? "" : callback);
                    }else{
                        return MMCLogin(null == callback ? "" : callback);
                    }
                }
                return MMCLogin(callback);
            }, register: function (callback) {
                if (mmc.client.isAndroid()) {
                    return window.lingjiWebApp.MMCRegist(null == callback ? "" : callback);
                }
                return MMCRegist(callback);
            }, isLogin: function () {
                return typeof this.getInfo().userid != 'undefined';
            }
        },
        client: {
            info: {},
            ua: window.navigator.userAgent.toLowerCase(),
            dua: window.navigator.userAgent,
            is: function (name) {
                return (new RegExp(name)).test(this.ua);
            }, isAPP: function () {
                return this.is('linghit');
            },
            isIOS: function () {
                return !!this.dua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            }, isAndroid: function () {
                return this.dua.indexOf('Android') > -1 || this.dua.indexOf('Adr') > -1;
            }, getInfo: function () {
                return this.info;
            }, getLanguage: function () {
                return this.getInfo().language;
            }, getCountry: function () {
                return this.getInfo().area;
            }, getName: function () {
                return client.info.module;
            }, getAppId: function () {
                return this.getInfo().pluginid;
            }, getUDID: function () {
                return this.getInfo().udid;
            }, getDeviceId: function () {
                return this.getInfo().deviceid;
            }, getSystemVersion: function () {
                return this.getInfo().systemversion;
            }, getPlatform: function () {
                return this.getInfo().platform;
            }, notify: function (params, callback) {
                if (mmc.client.isAndroid()) {
                    return lingjiWebApp.MMCLocalNotification(mmc.json.encode(params), null == callback ? "" : callback);
                }
                return MMCLocalNotification(params, null == callback ? "" : callback);
            }, goto: function (d, callback) {
                var data = {
                    "controller": d.controller || "",
                    "version": d.version || "",
                    "gotoType": d.type || 0,
                    "gotoParams": d.params || {}
                };
                if (mmc.client.isAndroid()) {
                    if(lingjiWebApp){
                        return lingjiWebApp.MMCGoto(mmc.json.encode(data), null == callback ? "" : callback);
                    }else{
                        return MMCGoto(mmc.json.encode(data), null == callback ? "" : callback);
                    }
                }
                return MMCGoto(data, callback);
            }, share: function (config, callback) {
                var data = {
                    "thumb": config.icon,
                    "title": config.title,
                    "description": config.desc,
                    "shareLink": config.link
                };
                if (mmc.client.isAndroid()) {
                    if(lingjiWebApp){
                        return lingjiWebApp.MMCShare(mmc.json.encode(data), null == callback ? "" : callback);
                    }else{
                        return MMCShare(mmc.json.encode(data), null == callback ? "" : callback);
                    }
                }
                return MMCShare(data, callback);
            }, comment: function () {
                if (mmc.client.isAndroid()) {
                    return lingjiWebApp.MMCComment();
                }
                return MMCComment();
            }, getTenYearsGift: function () {
                lingjiWebApp.MMCGetTenYearsGift();
            }, openWindow: function (title, url, callback) {
                var data = {gotourl: url, title: title};
                MMCOpenWindow(data, callback);
            }, getAppFlag: function () {
                var UA = this.dua.replace(/\s/g,""),
                    appFlag = 'ljms';

                var flagArr = [
                    'ljmscn', 'ljmsgm', 'ljms',
                    'zyyccn', 'zyycgm', 'zyycds', 'zyyc',
                    'smdscn', 'smdsgm', 'smds',
                    'zgshcn', 'zgshgm', 'zgsh',
                    'ziweidoushu', 'zwdscn', 'zwdsgm', 'zwds',
                    'bzppcn', 'bzppgm', 'bzpp',
                    'fslpcn', 'fslpgm', 'fslp',
                    'guanyinpusa', 'gsyps', 
                    'bmfcn', 'bmfgm', 'bmf'
                ];

                var _func = function (flag) {
                    return UA.indexOf(flag) > -1 ? flag : '';
                };

                flagArr.every(function (e, i) {
                    if(e == _func(e)){
                        appFlag = e;
                        return false;
                    }else{
                        return true;
                    }
                });

                return appFlag;
            }, getAppVersionStr: function () {
                var UA = this.dua.replace(/\s/g,"");
                var appFlag = this.getAppFlag();

                return UA.split(appFlag + '/')[1].substr(0,5);
            }, getAppVersionNum: function () {
                var str = this.getAppVersionStr();

                return str.split(".").join("") * 1;
            }
        }, alertDebug: function (data) {
            if (this.debug == true) {
                alert(data.join(' # '));
            }
        }, ready_callback: function () {
        }
    };
    mmc.ready = function (callback) {
        this.ready_callback = callback;
    };
    mmc.init = function () {
        try{
            if (this.client.isAndroid()) {
                this.user.info = this.json.decode(lingjiWebApp.getUserInfo());
                this.client.info = this.json.decode(lingjiWebApp.getDeviceInfo());
            } else if(this.client.isIOS()) {
                this.user.info = window.getUserInfo();
                this.client.info = window.getDeviceInfo();
            }
            this.alertDebug(['mmc ready']);
            this.ready_callback();
        }catch(e){
            console.warn("SDK ERR: " + e.message);
        }

        return this;
    };
    return mmc.init();
})();

module.exports = mmc;