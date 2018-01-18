// pages/setting/setting.js
// 引入 QCloud 小程序增强 SDK  

var qcloud = require('../../vendor/wafer2-client-sdk/index');
var constants = require('../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../config');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  user:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qcloud.login({
      success(result) {
        console.log('登录成功', result);
      },
      fail(error) {
        console.log('登录失败', error);
        qcloud.openSetting(function () {
          qcloud.login({
            success(result) {
              console.log('登录成功', result);
            }
          });
        }, function () {
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
  
    var user = qcloud.getUser();
    this.setData({
      user:user
    });
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
  exitWechat:function(){
    qcloud.clearUser();
    qcloud.clearSession();
    app.globalData.exitFlag = false;
    wx.reLaunch({
      url: '../bank/bank',
    }) 
  }
})