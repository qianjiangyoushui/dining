// pages/user/login.js
"use strict";
export default {
  config: {
    usingComponents: {
      'wxc-cc': '@minui/wxc-cc',
      'wxc-dialog': '@minui/wxc-dialog',
      'wxc-flex': '@minui/wxc-flex'
    }
  },
  data: {},
  methods: {
   
  }
};
// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var constants = require('../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../config');
var base64 = require("../images/base64");
exports.default = Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAgree: true,
    binding: config.service.binding,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  formSubmit: function (e) {
    var thedata = e.detail.value;
    var that = this;
    qcloud.request({
      // 要请求的地址
      url: that.data.binding,
      data: thedata,
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      method:"POST",

      success(result) {
        console.log('request success', result);
        if(result.data.status==1){
          var customer = result.data.customer;
          wx.redirectTo({
            url: '../circle/circle?customer=' + JSON.stringify(customer),
          })
        }else{
          wx.showModal({
            title: '绑定失败',
            content: '用户名或者密码错误...',
          })
        }
      },

      fail(error) {
        console.log('request fail', error);
      },

      complete() {
        console.log('request complete');
      }
    });
  },
  gocircle:function(){
  wx.redirectTo({
    url: '../circle/circle',
  })
  },
  previewImage: function (e) {
    var index = e.currentTarget.id;
    wx.previewImage({
      current: index, // 当前显示图片的http链接
      urls:[index]
    })
  },
})