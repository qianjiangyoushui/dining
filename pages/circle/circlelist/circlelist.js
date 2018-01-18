// pages/circle/circlelist/circlelist.js
// pages/circle/circleadd/circleadd.js

// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../../vendor/wafer2-client-sdk/index');
var constants = require('../../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../../config');
var base64 = require("../../images/base64");
// 显示繁忙提示
var sliderWidth = 96;
var page = 0;
var size = 5;
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;
// 请求数据
Page({

  /**
   * 页面的初始数据
   */
  data: {

    circle_list_Url: config.service.circle_listUrl,
    circle_mylist_Url: config.service.circle_mylistUrl,
    imageUrl: 'https://nmamtf.club/images/sucai/photo_camera.png',
    circleArray:[],
    circle_background: base64.circle_background,
    images:'',
    tabs: [{ title: '土豆圈', content: '内容一' },
      { title: '我发的', content: '内容二' }],
    tabIndex:0,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hidden: true,
    scrollTop: 0,
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
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
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          scrollHeight: res.windowHeight
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    page = 0;
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
    page = 0;
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
takePoatoCircle:function(){
  wx.navigateTo({
    url: '../circleadd/circleadd',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
},
previewImage: function (e) {
  var index = e.currentTarget.id;
  var imagelist = this.data.circleArray[index].imagesList;
  var images =new Array();
  for (var i = 0; i < imagelist.length; i++){
    var path = imagelist[i].path;
    images[i]=path;
  } 
    wx.previewImage({ 
      current: images[0], // 当前显示图片的http链接
          urls: images, // 需要预览的图片http链接列表
    })
},
onClick: function (e) {
  page = 0;
  var that = this;
  var theurl = this.data.circle_mylist_Url;
  var tabIndex = e.detail.key;
  if (e.detail.key==1){
    this.setData({
      circleArray: []
    });
    this.loadMore(that, that.data.circle_mylist_Url);
    theurl = this.data.circle_mylist_Url;
  }else{
    this.setData({
      circleArray: []
    });
    this.loadMore(that, that.data.circle_list_Url);
    theurl = this.data.circle_list_Url;
  };
  this.setData({
    tabIndex: tabIndex
  });
},
bindDownLoad: function () {
  var that = this;
  page++;
  if(this.data.tabIndex==1){
    this.loadMore(that, that.data.circle_mylist_Url);
  }else{
    this.loadMore(that, that.data.circle_list_Url);
  }
  
  console.log("lower");
},
scroll: function (event) {
  //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
  this.setData({
    scrollTop: event.detail.scrollTop
  });
},
topLoad: function (event) {
  //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
  page = 0;
  this.setData({
    list: [],
    scrollTop: 0
  });
  this.loadMore(this);
  console.log("lower");
},
loadMore: function (that, url) {
  that.setData({
    hidden: false
  });
  qcloud.request({
    url: url,
    data: {
      page: page,
      size: size
    },
    method: 'GET',
    success: function (res) {
      wx.hideLoading();
      //console.info(that.data.list);
      var list = that.data.circleArray;
      for (var i = 0; i < res.data.content.length; i++) {
        list.push(res.data.content[i]);
      }
      that.setData({
        circleArray: list,
        page: res.data.page,
        size: res.data.size
      });
      console.log(res.data.page);
      that.setData({
        hidden: true
      });
    }
  });
},
})