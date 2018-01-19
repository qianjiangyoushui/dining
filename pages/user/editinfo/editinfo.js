// pages/user/editinfo/editinfo.js
var qcloud = require('../../../vendor/wafer2-client-sdk/index');
var constants = require('../../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edit_info: config.service.edit_info,
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
  formSubmit: function (e) {
    var that = this;
    var thedata = e.detail.value;
    var str = thedata.name;
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    if ("" == str) {
      this.setData({
        tittleFocus: true
      });
      return false;
    }
    /***先保存主体信息，返回主体id，然后将图片保存到这个id所关联的信息下 */
    this.setData({
      disabled: true
    });
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    qcloud.request({
      // 要请求的地址
      url: this.data.edit_info,
      data: thedata,
      method: 'GET',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {
        console.log(result.data.status + result.data.user.name);
        if (result.data.status==1){
          var user = result.data.user;
          qcloud.setUser(user);
          wx.switchTab({
            url: '../../setting/setting',
          })
        }
        //wx.navigateTo({ url: 'confirm' });
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
})