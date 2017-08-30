//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '首页',
    userInfo: {},
    kerstr:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindScanCode: function () {
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        console.log(res.result)
        wx.navigateTo({
          url: '../tour_info/tour_info'
        })
      },
      fail : (res) =>{
       
      },
      complete: (res) => {
       
      }
    })
  },
  searchtour : function(){
    wx.navigateTo({
      url: '../tour_search/tour_search?keystr='+this.data.kerstr
    })
    console.log(this.data.kerstr);
  },
  inputkeystr : function(e){
    this.setData({
      kerstr: e.detail.value
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
