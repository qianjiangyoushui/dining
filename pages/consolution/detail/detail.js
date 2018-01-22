// pages/consolution/answer/answer.js
// pages/circle/circlelist/circlelist.js 
// pages/circle/circleadd/circleadd.js

// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../../vendor/wafer2-client-sdk/index');
var constants = require('../../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consultationId: '',
    consultation: '',
    cslt_detail: config.service.cslt_detail,
    cslt_answer: config.service.cslt_answer
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    this.setData({
      consultationId: id
    });
    console.log(id);
    qcloud.request({
      url: that.data.cslt_detail,
      data: {
        consultationId: id
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading();
        var data = res.data;
        if (data.status == 1) {
          that.setData({
            consultation: data.consultation,
          });
        } else {
          wx.showToast({
            title: '出错了',
          })
        }
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
    return {
      title: consultation.tittle,
      path: '../consolution/detail/detail/?id=' + consultation.id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  formSubmit: function (e) {
    this.setData({
      disabled: true
    });
    var that = this;
    var thedata = e.detail.value;
    thedata["consultationId"] = this.data.consultationId;
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    qcloud.request({
      // 要请求的地址
      url: this.data.cslt_answer,
      data: thedata,
      method: 'GET',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {
        console.log(result.state);
        if (result.data.status == 1) {
          wx.redirectTo({
            url: '../detail/detail?id=' + that.data.consultationId,
          })
        } else {
          showBusy("提问失败了");
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
  previewImage: function (e) {
    var index = e.currentTarget.id;
    var urls = this.data.consultation.imagesList;
    var url = new Array();
    for (var i = 0; i < urls.length; i++) {
      url.push(urls[i].path);
    }
    wx.previewImage({
      current: url[index], // 当前显示图片的http链接
      urls: url, // 需要预览的图片http链接列表
    })
  },
  previewImageSupple:function(e){
    var index = e.currentTarget.id;
    var supple = this.data.consultation.suppleaskList[index];
    var images = supple.imagesList;
    var url = new Array();
    for (var i = 0; i < images.length; i++) {
      url.push(images[i].path);
    }
    wx.previewImage({
      current: url[index], // 当前显示图片的http链接
      urls: url, // 需要预览的图片http链接列表
    })
  },
})