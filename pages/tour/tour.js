//tour.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array:[{
      id:1,
      img : "/image/tour/im_guiyanggushijie.png",
      title: "太阳广场",
      summary : "充满仪式感的入口广场，彰显民族文化，少数民族的建筑风格，广场地面用祥云图案设计..."
    },
    {
      id:2,
      img : "/image/tour/im_shuixiujingguan.png",
      title: "游客服务中心",
      summary : "客服务中心，占地面积3万平方米，同样以民族元素为特色建造。它临近主出入口和停车..."
    },
    {
      id:3,
      img : "/image/tour/im_taiyangguangchang.png",
      title: "贵阳故事街",
      summary : "贵阳故事街以民国风为主题打造，建筑还原了老贵阳市井文化、院落文化、府邸文化。贵..."
    },
    {
      id:4,
      img : "/image/tour/im_wolongfeipu.png",
      title: "滨水休闲区",
      summary : "滨水休闲区临水而建，集商业、休闲、娱乐、住宿等功能于一体，是观赏水秀表演的最佳..."
    },
    {
      id:5,
      img : "/image/tour/im_youkezhognxin.png",
      title: "水秀景观",
      summary : "水景水秀，采用声、光、电等高科技手段，以水为主要表现元素，让水舞动起来，变化成..."
    },
    {
      id:6,
      img : "/image/tour/im_guiyanggushijie.png",
      title: "卧龙飞瀑",
      summary : "卧龙飞瀑宽二十余米，高十余米。卧龙飞瀑和上游的卧龙湖组合在一起像天上的水龙一般..."
    },
    {
      id:7,
      img : "/image/tour/im_shuixiujingguan.png",
      title: "梦草园",
      summary : "梦草园是明末清初贵州著名诗人吴中蕃(1617-1695)的故居，吴中蕃诞生于贵阳城西梦草池..."
    },
    {
      id:8,
      img : "/image/tour/im_taiyangguangchang.png",
      title: "石蚌滩",
      summary : "沾撒的泉水由山洞流出，形成动静两景色，悬崖上生长着葱绿的植物，长廊与楼榭利于悬崖..."
    },
    {
      id:9,
      img : "/image/tour/im_wolongfeipu.png",
      title: "崆灵洞",
      summary : "崆灵洞即为龙潭洞水洞，可乘船游览，游洞内奇观，有如置身仙境，该洞全长约1200米，最..."
    },
     {
      id:10,
      img : "/image/tour/im_youkezhognxin.png",
      title: "银河宫",
      summary : "银河宫即为龙潭洞旱洞，分为三层，全长近2000米，洞中有一天然石桥——奈何桥，它座落在..."
    }
    ]
  },
  toInfo:function(event){
    var id = event.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '../tour_info/tour_info'
    })
  }
  
})
