// pages/circle/circlelist/circlelist.js 
// pages/circle/circleadd/circleadd.js

// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../../vendor/wafer2-client-sdk/index');
var constants = require('../../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../../config');
// 显示繁忙提示


// 显示失败提示

var sliderWidth = 96;
var page = 0;
var size = 5;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verify_login: config.service.verify_login,
    binding: config.service.binding,
    cslt_list: config.service.cslt_list,
    circleArray: [],
    tabs: [
      { title: '已解决', content: '内容一' },
      { title: '待解决', content: '内容二' }
    ],
    tabIndex: 0,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hidden: true,
    scrollTop: 0,
    scrollHeight: 0,
    loginUrl: config.service.loginUrl,
    iconShow: false,
    user: '',
    customer: '',
    isBingding: false,
    focus: false,
    arrayIndex: 0,
    fromUser: '',
    comment: '',
    search:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var user = qcloud.getUser();
    this.setData({
      user:user,
    });
    var index = options.index;
    if(index==1){
      this.setData({
        tabIndex: 1,
      });
    }
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          scrollHeight: res.windowHeight
        });
      }
    });
    //this.loadMore(this, this.data.cslt_list);
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
  onShareAppMessage: function (res) {

  },
  previewImage: function (e) {
    var index = e.currentTarget.id;
    var urls = this.data.circleArray[index].imagesList;
    var url = new Array();
    for (var i = 0; i < urls.length; i++) {
      url.push(urls[i].path);
    }
    wx.previewImage({
      current: url[0], // 当前显示图片的http链接
      urls: url, // 需要预览的图片http链接列表
    })
  },
  bindDownLoad: function () {
    var that = this;
    page++;
    if (this.data.tabIndex == 1) {
      this.loadMore(that, that.data.cslt_list,1);
    } else {
      this.loadMore(that, that.data.cslt_list,2);
    }

    console.log("lower");
  },
  loadMore: function (that, url,status) {
    var search = this.data.search;
    var data = new Object();
    search = search.replace(/(^\s*)|(\s*$)/g, "");
    if ("" != search) {
      data['key'] = search;
    }
    data['status'] = status;
    data['page']=page;
    data['size']=size;
    wx.showLoading({
      title: '数据加载中',
    })
    that.setData({
      hidden: false
    });
    qcloud.request({
      url: url,
      data: data,
      method: 'GET',
      success: function (res) {
        wx.hideLoading();
        var list = that.data.circleArray;
        for (var i = 0; i < res.data.content1.length; i++) {
          list.push(res.data.content1[i]);
        }
        that.setData({
          circleArray: list,
          page: res.data.page,
          size: res.data.size
        });
        that.setData({
          hidden: true
        });
      }
    });
  },
  onClick: function (e) {
    page = 0;
    var that = this;
    var theurl = this.data.cslt_list;
    var tabIndex = e.detail.key;
    if (e.detail.key == 1) {
      this.setData({
        tabIndex: 1,
        circleArray: []
      });
      this.loadMore(that, that.data.cslt_list,1);
      theurl = this.data.platByUser;

    } else {
      this.setData({
        tabIndex: 0,
        circleArray: []
      });
      this.loadMore(that, that.data.cslt_list,2);
      theurl = this.data.cslt_list;
    };
  },
  takeAsk:function(){
    wx.navigateTo({url: '../add/add',})
  },
  viewDetail:function(e){
    var index = e.currentTarget.id;
    var obj = this.data.circleArray[index];
    wx.navigateTo({
      url: '../detail/detail?id='+obj.id,
    })
    console.log(obj);
  },
  reply:function(e){
    var index = e.currentTarget.id;
    var obj = this.data.circleArray[index];
    wx.navigateTo({
      url: '../answer/answer?id=' + obj.id,
    })
  },
  formSubmit:function(e){
    var thedata = e.detail.value;
    var search = thedata.search;
    var that = this;
    search = search.replace(/(^\s*)|(\s*$)/g, "");
    if ("" == search) {
      this.setData({
        search: '',
        circleArray: []
      })
    }else{
      this.setData({
        search: search,
        circleArray: []
      }); 
    }
    if (this.data.tabIndex == 1) {
      this.loadMore(that, that.data.cslt_list, 1);
    } else {
      this.loadMore(that, that.data.cslt_list, 2);
    };
  },
  supple:function(e){
    var index = e.currentTarget.id;
    var obj = this.data.circleArray[index];
    wx.navigateTo({
      url: '../supplement/supplement?id=' + obj.id,
    })
  },
  answer:function(e){
    var index = e.currentTarget.id;
    var obj = this.data.circleArray[index];
    wx.navigateTo({
      url: '../suppleanswer/suppleanswer?id=' + obj.id,
    })
  }
})