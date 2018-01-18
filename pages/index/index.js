// pages/circle/circlelist/circlelist.js 
// pages/circle/circleadd/circleadd.js

// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var constants = require('../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../config');
// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
});

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
});

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};
var loginStatus = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verify_login: config.service.verify_login
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qcloud.clearSession();
    var that = this;
    

      // 登录之前需要调用 qcloud.setLoginUrl() 设置登录地址，不过我们在 app.js 的入口里面已经调用过了，后面就不用再调用了
      qcloud.login({
        success(result) {
          console.log('登录成功', result);
        },
        fail(error) {
          console.log('登录失败', error);
          qcloud.openSetting(function(){
            qcloud.login({
              success(result) {
                console.log('登录成功', result);
              }
            });
          },function(){
            wx.redirectTo({
              url: '../erro/erro',
            })
          })
        }
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
consolutionList:function(){
  wx.navigateTo({
    url: '../consolution/list/list',
  })
},
  weather:function(){
    wx.navigateTo({
      url: '../weather/weather'
    })
  },
  protection:function(){
    wx.navigateTo({
      url: '../protection/protection',
    })
  }
})