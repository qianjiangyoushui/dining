var constants = require('./constants');
var SESSION_KEY = 'weapp_session_' + constants.WX_SESSION_MAGIC_ID;
var USER_KEY = constants.WX_USER;
var Session = {
    get: function () {
        return wx.getStorageSync(SESSION_KEY) || null;
    },

    set: function (session) {
        wx.setStorageSync(SESSION_KEY, session);
    },

    clear: function () {
        wx.removeStorageSync(SESSION_KEY);
    },
    setUser:function(user){
      wx.setStorageSync(USER_KEY, user);
    },
    getUser:function(){
      return wx.getStorageSync(USER_KEY) || null;
    },
    clearUser:function(){
      wx.removeStorageSync(USER_KEY);
    }
};

module.exports = Session;