// pages/index/index-my-purchasing-info/index-my-purchasing-info.js
const app = getApp()

Page({
  data: {
    scores: 60,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listData1: [
      { "one": "红富士苹果", "two": "12.00", "three": "0.263", "four": "3.16元" },
      { "one": "云南冰糖麒麟瓜", "two": "7.00", "three": "1.05", "four": "7.35元" }
    ],
    listData2: [
      { "one": "红富士苹果", "two": "12.00", "three": "0.263", "four": "3.16元" },
      { "one": "云南冰糖麒麟瓜", "two": "7.00", "three": "1.05", "four": "7.35元" },
      { "one": "小台芒", "two": "11.96", "three": "0.26", "four": "3.11元" }
    ]
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(e.detail.userInfo)
  },

  saoma: function (e) {
    wx.scanCode({
      success: (res) => {
        console.log(res)
          wx.showToast({
          icon: 'success',
          duration: 1000
        })
      }
    })
  },

  zanweikaifa: function (e) {
    console.log(e)
    wx.showToast({
      title: '暂未开发',
      icon: 'loading',
      duration: 1000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  
  }
})