// pages/circle/circleadd/circleadd.js

// 引入 QCloud 小程序增强 SDK    
var qcloud = require('../../../vendor/wafer2-client-sdk/index');
var constants = require('../../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../../config');

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
var successUp = 0;
var failUp = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    address: '',
    plantArea: '',
    latitude: '',
    longitude: '',
    cslt_add: config.service.cslt_add,
    cslt_list: config.service.cslt_list,
    cslt_detail: config.service.cslt_detail,
    supple: config.service.supple,
    cslt_upload: config.service.cslt_upload,
    processesIndex: 0,
    disabled: false,
    tittleFocus: false,
    tittleNum: 0,
    consultationId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      consultationId:id
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
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths);
        console.log(res.tempFiles);
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  chooseSite: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          address: res.address,
          plantArea: res.name,
          latitude: res.latitude,
          longitude: res.longitude,
        });
      },
    })
  },
  formSubmit: function (e) {
    var that = this;
    var thedata = e.detail.value;
    var str = thedata.tittle;
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
    thedata['consultationId'] = this.data.consultationId;
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    qcloud.request({
      // 要请求的地址
      url: this.data.supple,
      data: thedata,
      method: 'GET',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {
        console.log(result.state);
        if (result.data.status == 1) {
          showSuccess('请求成功完成');
          console.log('request success', result);
          var fileArray = that.data.files;
          if (fileArray.length > 0) {
            for (var i = 0; i < fileArray.length; i++) {
              that.uploadDIY(fileArray, successUp, failUp, i, fileArray.length, result.data.consultation.id);
            }
          } else {
            wx.redirectTo({
              url: '../list/list?index=1',
              success: function (res) {
                wx.showToast({
                  title: '成功提交',
                })
              },
              fail: function (res) {
                wx.showToast({
                  title: '跳转失败',
                })
              },
              complete: function (res) { },
            });
          }
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
  uploadDIY(filePaths, successUp, failUp, i, length, circleId) {
    wx.showLoading({
      title: '加载中',
    });
    var that = this;
    var header = {};
    header[constants.WX_HEADER_SKEY] = qcloud.getSession();
    console.log("开始提交文件" + header[constants.WX_HEADER_SKEY]);
    wx.uploadFile({
      url: that.data.cslt_upload,
      filePath: filePaths[i],
      header: header,
      name: 'file',
      formData: {
        'consultationId': circleId
      },
      success: (resp) => {
        successUp++;
      },
      fail: (res) => {
        failUp++;
      },
      complete: () => {
        i++;
        if (i == length) {
          wx.hideLoading();
          showSuccess('发布完成');
          wx.redirectTo({
            url: '../list/list?index=1',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          });

          /****上传完毕后关闭页面，刷新到土豆圈列表 */
        }
        else {  //递归调用uploadDIY函数
          // this.uploadDIY(filePaths, successUp, failUp, i, length, circleId);
        }
      },
    });
  },
  bindProcessChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      processesIndex: e.detail.value
    })
  },
  tittleInput: function (e) {
    this.setData({
      tittleNum: e.detail.value.length
    });
  }
})