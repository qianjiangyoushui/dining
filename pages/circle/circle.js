// pages/circle/circlelist/circlelist.js 
// pages/circle/circleadd/circleadd.js

// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var constants = require('../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../config');
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
    add_support: config.service.add_support,
    add_comment: config.service.add_comment,
    plat_all: config.service.plat_all,
    platByUser: config.service.platByUser,
    circleArray: [],
    tabs: [
      { title: '土豆圈', content: '内容一' },
      { title: '我发的', content: '内容二' }
    ],
    tabIndex: 0,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hidden: true,
    scrollTop: 0,
    scrollHeight: 0,
    loginUrl: config.service.loginUrl,
    grids: [{ name: '周边天气', url: 'https://nmamtf.club/images/sucai/weather.png' }, { name: '样板田', url: 'https://nmamtf.club/images/sucai/farm.png' }, { name: '我的收藏', url: 'https://nmamtf.club/images/sucai/star.png' }, { name: '查询', url: 'https://nmamtf.club/images/sucai/query.png' }, { name: '客服', url: 'https://nmamtf.club/images/sucai/customer.png' }, { name: '设置', url: 'https://nmamtf.club/images/sucai/setting.png' }],
    iconShow:false,
    user:'',
    customer:'',
    isBingding:false,
    focus:false,
    arrayIndex:0,
    fromUser:'',
    comment:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          scrollHeight: res.windowHeight
        });
      }
    });
    if (typeof (options.customer)=="undefined"){
      qcloud.request({
        url: that.data.verify_login,
        login: true,
        method: 'GET',
        success(result) {
          console.log('request success', result);
          if (result.data.status == 1) {
            var customer = result.data.customer;
            that.setData({
              isBingding: true,
              customer: customer
            })
            console.log("已绑定");
            that.loadMore(that, that.data.plat_all);
          } else {
            that.setData({
              isBingding: false
            })
            console.log("未绑定");
            that.loadMore(that, that.data.plat_all);
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
    }else{
      var customer = JSON.parse(options.customer);
      that.setData({
        isBingding: true,
        customer: customer
      })
      console.log("已绑定");
      that.loadMore(that, that.data.plat_all);
    }

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
    
    if (res.from === 'button') {
      // 来自页面内转发按钮
      var index = this.data.arrayIndex;
      var curArray = this.data.circleArray;
      var curObject = this.data.circleArray[index];
      if (curObject.operation) {
        curObject.operation = false;
        curArray[index] = curObject;
        this.setData({
          circleArray: curArray
        })
      }
      return {
        title: curObject.extendInfo.address + curObject.userUnion.unionName +
        curObject.extendInfo.unition  + curObject.catalogName + curObject.commentScore+'(分)',
        path: 'pages/circleinfo/circleinfo?id=' + curObject.id,
        imageUrl: curObject.urls[0],
        success: function (res) {
          // 转发成功
        },
        fail: function (res) {
          // 转发失败
        }
      }
      console.log(res.target)
    }
  
  },
  previewImage: function (e) {
    var index = e.currentTarget.id;
    var urls = this.data.circleArray[index].urls;
    var urls2 = this.data.circleArray[index].urls2;
    var url = new Array();
    for (var i = 0; i < urls.length; i++) {
      url.push(urls[i]);
    }
    for(var i=0;i<urls2.length;i++){
      url.push(urls2[i]);
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
      this.loadMore(that, that.data.platByUser);
    } else {
      this.loadMore(that, that.data.plat_all);
    }

    console.log("lower");
  },

 
  showIcon:function(e){
    var index = e.currentTarget.id;
    var curArray = this.data.circleArray;
    var curObject = this.data.circleArray[index];
    if (curObject.operation){
      curObject.operation=false;
      curArray[index] = curObject;
      this.setData({
        circleArray: curArray,
        arrayIndex: index,
      })
    }else{
      curObject.operation = true;
      curArray[index] = curObject;
      this.setData({
        circleArray: curArray,
        arrayIndex:index,
      })
    }
  },
  bindblur: function (e){
    console.log(e.detail.value);
          this.setData({
            focus: false,
            comment: e.detail.value
          })
          this.commentFunction();
          console.log(this.data.comment);
  },
  bindCommentClick:function(e){
    var fromUser = e.currentTarget.id;
    var index = this.data.arrayIndex;
    var curArray = this.data.circleArray;
    var curObject = this.data.circleArray[index];
    if (curObject.operation) {
      curObject.operation = false;
      curArray[index] = curObject;
      this.setData({
        circleArray: curArray,
        arrayIndex: index,
        focus:true,
        formUser: fromUser,
      })
    }
  },
  bindSupportClick: function () {
    var index = this.data.arrayIndex;
    var curArray = this.data.circleArray;
    var curObject = this.data.circleArray[index];
    var that = this;
    var theSupport;
    var return_result=0;
    qcloud.request({
      // 要请求的地址
      url: that.data.add_support,
      data: { recordId: curObject.id, supportUser: that.data.customer.customerNickname},
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: false,
      method: "GET",
      success(result) {
        that.supportFunction(result.data.support, result.data.status);
      },
      fail(error) {
        console.log('request fail', error);
      },
      complete() {
        console.log('request complete');
      }
    });
   
  },
  supportFunction: function (theSupport,status){
    var index = this.data.arrayIndex;
    var curArray = this.data.circleArray;
    var curObject = this.data.circleArray[index];
    if (this.data.isBingding&&status==1) {
      curObject.circleSupports.push(theSupport)
      curArray[index] = curObject;
      this.setData({
        circleArray: curArray,
        arrayIndex: index
      })
    }else if(status==0){
      var supportArray = new Array();
      for(var i =0;i<curObject.circleSupports.length;i++){
        if (curObject.circleSupports[i].id != theSupport.id){
          supportArray.push(curObject.circleSupports[i]);
        }
      }
      curObject.circleSupports = supportArray;
      curArray[index] = curObject;
      this.setData({
        circleArray: curArray,
        arrayIndex: index
      })
    } else {
      wx.showToast({
        title: '未绑定',
      })
    }
    if (curObject.operation) {
      curObject.operation = false;
      curArray[index] = curObject;
      this.setData({
        circleArray: curArray,
        arrayIndex: index
      })
    }
  },
  commentFunction:function(){
    var str = this.data.comment;
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    console.log("+&#aaaaa" + str + "+&#aaaaaaa");
    if(""==str){
      return false;
    }
    console.log("+&#aaaaa" + str + "+&#aaaaaaa");
    var index = this.data.arrayIndex;
    var curArray = this.data.circleArray;
    var curObject = this.data.circleArray[index];
    var that = this;
    var data = { recordId: curObject.id, formUser: this.data.customer.customerNickname, comment: this.data.comment, usertype: this.data.customer.userType};
    qcloud.request({
      // 要请求的地址
      url: that.data.add_comment,
      data: data,
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: false,
      method: "GET",
      success(result) {
        if (result.data.status == 1) {
          var array = that.data.circleArray;
          array[that.data.arrayIndex].circleComments.push(result.data.comment);
          that.setData({
            focus: false,
            circleArray: array
          })
        }
        console.log(that.data.circleArray);
      },
      fail(error) {
        console.log('request fail', error);
      },
      complete() {
        console.log('request complete');
      }
    });
  },
 loadMore: function (that, url) {
    wx.showLoading({
      title: '数据加载中',
    })
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
   var theurl = this.data.platByUser;
   var tabIndex = e.detail.key;
   if (e.detail.key == 1) {
     this.setData({
       tabIndex:1,
       circleArray: []
     });
     this.loadMore(that, that.data.platByUser);
     theurl = this.data.platByUser;

   } else {
     this.setData({
       tabIndex: 0,
       circleArray: []
     });
     this.loadMore(that, that.data.plat_all);
     theurl = this.data.plat_all;
   };
   wx.showLoading({
     title: '加载中',
   });
   console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
 }
})