// pages/caculate/caculate.js
var qcloud = require('../../vendor/wafer2-client-sdk/index');

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
    weather_list_url: config.service.weather_listUrl,
    scheduleArray: '',
    size: '',
    countries: ["兴业", "博白", "北流","陆川","容县","玉州","县城"],
    tabs: [
      { title: '玉林市', content: '内容一' },
      { title: '博白', content: '内容二' },
      { title: '北流', content: '内容三' },
      { title: '陆川', content: '内容四' },
      { title: '容县', content: '内容五' },
      { title: '玉州', content: '内容六' },
      { title: '兴业', content: '内容七' }
    ],
    countryIndex: 0,
    country:'xingye',
    isshow:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function (e) {
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
  bindCountryChange: function (e) {
    var value = e.detail.value;
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryIndex: e.detail.value
    });
    if (value==0){
      this.setData({
        country: 'xingye'
      });
    } if (value == 1) {
      this.setData({
        country: 'bobai'
      });
    } if (value == 2) {
      this.setData({
        country: 'beiliu'
      });
    } if (value == 3) {
      this.setData({
        country: 'luchuan'
      });
    } if (value == 4) {
      this.setData({
        country: 'rongxian'
      });
    } if (value == 5) {
      this.setData({
        country: 'yuzhou'
      });
    } if (value == 6) {
      this.setData({
        country: 'qu'
      });
    }
  },
  onClick: function (e) {
    if (e.detail.key == 0) {
      this.requestData("qu")
    }
    if (e.detail.key == 1) {
      this.requestData("bobai")
    }
    if (e.detail.key == 2) {
      this.requestData("beiliu")
    }
    if (e.detail.key == 3) {
      this.requestData("luchuan")
    }
    if (e.detail.key == 4) {
      this.requestData("rongxian")
    }
    if (e.detail.key == 5) {
      this.requestData("yuzhou")
    }
    if (e.detail.key == 5) {
      this.requestData("xingye")
    }
  },
  requestData:function(id){
    var that = this;
    qcloud.request({
      // 要请求的地址
      url: this.data.weather_list_url,
      method: 'GET',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      data:{"country":id},
      success(result) {
        wx.hideLoading();
        showSuccess('请求成功完成');
        console.log('request success', result);
        if (result.data.state != 0) {
          that.setData({
            scheduleArray: result.data.content,
            isshow: 1
          }
          );
        } else {
          showSuccess('请求异常，请输入数字');
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
  }
})