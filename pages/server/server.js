//server.js
//获取应用实例
var app = getApp()
Page({
 data:{
  array:[{
    id:"1",
    title:"节目表",
    img:"/image/server/program.png",
    summary:"具有贵州特色文化活动，丰富的民俗表演，水景水秀，采用声...",
    tourl:"../program_info/program_info"
  },{
    id:"2",
    title:"餐厅",
    img:"/image/server/restaurant.png",
    summary:"这里拥有贵州各种美食，贵州第一只名鸡，惠水马肉，鸭溪凉粉...",
    tourl: "../restaurant/restaurant"
  },{
    id:"3",
    title:"住宿",
    img:"/image/server/facilitate.png",
    summary:"住宿便利，舒适环境，有五星酒店，精品客栈、主题名宿，商务酒店等",
    tourl: "../hotel/hotel"
  }, {
    id: "4",
    title: "智能问答",
    img: "/image/server/smatr_chat.png",
    summary: "智能问答精确的定位游客所需要的提问知识，通过与游客进行交互...",
    tourl: "../chat/chat"
  },{
    id:"5",
    title:"客服",
    img:"/image/server/custom_service.png",
    summary:" 电话：4009009995 \r\n 邮箱：1084786610@qq.com"
  }]
 },
 calling: function (event) {
   var title = event.currentTarget.dataset.title;
   console.log(title)
   if (title =="客服"){
      wx.makePhoneCall({
        phoneNumber: '电话：4009009995', 
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
   }

 }
})
