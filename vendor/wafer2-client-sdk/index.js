var constants = require('./lib/constants');
var login = require('./lib/login');
var Session = require('./lib/session');
var request = require('./lib/request');
var Tunnel = require('./lib/tunnel');

var exports = module.exports = {
    login: login.login,
    setLoginUrl: login.setLoginUrl,
    LoginError: login.LoginError,
    openSetting: login.openSetting,
    clearSession: Session.clear,
    getSession:Session.get,
    request: request.request,
    RequestError: request.RequestError,
    getUser: Session.getUser,
    setUser: Session.setUser,
    clearUser: Session.clearUser,
    Tunnel: Tunnel,
};

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
    if (key.indexOf('ERR_') === 0) {
        exports[key] = constants[key];
    }
});