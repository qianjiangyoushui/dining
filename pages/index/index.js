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

Page({

  /**
   * 页面的初始数据
   */
  data: {
    verify_login: config.service.verify_login,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      qcloud.login({
        success(result) {
          //showSuccess('登录成功');
          console.log('登录成功', result);
          qcloud.request({
            // 要请求的地址
            url: that.data.verify_login,
            // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
            login: false,
            method: 'GET',

            success(result) {
              console.log('request success', result);
              if (result.data.status==1){
                var customer = result.data.customer;
                wx.redirectTo({
                  url: '../circle/circle?customer=' + JSON.stringify(customer),
                })
              }else{
                wx.redirectTo({
                  url: '../user/login',
                })
              }
            },

            fail(error) {
              showModel('请求失败', error);
              console.log('request fail', error);
            },

            complete() {
              console.log('request complete');
            }
          });
        },

        fail(error) {
          showModel('登录失败', error);
          //console.log('登录失败', error);
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

})