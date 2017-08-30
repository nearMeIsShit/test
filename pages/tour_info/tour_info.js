var time = require('../../utils/util')
var initData = {
  avatarUrl : "",
  nickName : "",
  inputstr :"",
  tour_img: "/image/tour_info/im_banner.png",
  tour_name: "水秀景观",
  desc: "&nbsp;&nbsp;水景水秀，采用声、光、电等高科技手段，以水为主要表现元素，让水舞动起来，变化成形态各异的图案，跟着音乐律动，展现水的不同姿态，将水文化做到极致。采用全息投影技术、呈现出“水上芭蕾、民族歌舞”的表演模式，实现“白天一景、晚上一秀”的水文化体验。",
  open_time : "19:00-20:00",
  isPlaying: false,
  cur_time: "0:00",
  total_time: "0:00",
  duration: 0,
  current: 0,
  item: {
    id: '',
    title: "此时此刻",
    author: "许巍",
    pic: "/image/1.jpg",
    song_url: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
  },
  comment_total:2,
  array:[
    {
      avatarUrl: "/image/tour_info/ic_1.png",
      nickName: "游客",
      comment_time: "1天前",
      comment: "真是令人流连忘返啊。舒适！"
    },
    {
      avatarUrl: "/image/tour_info/ic_2.png",
      nickName: "游客",
      comment_time: "1天前",
      comment: "天然氧吧，周末的好去处"
    }
  ]
}
var app = getApp()
Page({
  data: Object.assign({
    height: 220,
    played_list: [],
  }, initData),
  onLoad: function (option) {
    if (option.id) {
      time.getSong(option.id).then(data => {
        this.setData({
          item: {
            id: option.id,
            title: data.songinfo.title,
            author: data.songinfo.author,
            pic: data.songinfo.pic_premium,
            song_url: data.bitrate.file_link
          }
        })
        loadPage(this);
        savePlayed(this);
      })
    } else {
      getPlayed(this)
      loadPage(this);
    }

  },
  onShow: function () {
    getPlayed(this)
  },
  //播放暂停
  playSong: function () {
    if (!this.data.isPlaying) {
      play(this);
    } else {
      wx.pauseBackgroundAudio({})
      this.setData({
        isPlaying: false
      })
    }
  },
  //拖动滚动条
  changeSongPross: function (e) {
    this.setData({
      current: e.detail.value,
      cur_time: time.formate(e.detail.value)
    })
    play(this)
  },

  //输入评论内容
  inputkeystr: function (e) {
    this.setData({
      inputstr: e.detail.value
    })
  },
  //开始评论
  comment : function(){
    if (this.data.inputstr==""){
      wx.showModal({
        title: '提示',
        content: '请先输入评论内容',
        showCancel : false,
        success: function (res) {
          if (res.confirm) {
            //console.log('用户点击确定')
          } 
        }
      })
    }else{
        var newarray = [
          {
            avatarUrl: "/image/tour_info/ic_2.png",
            nickName: "游客",
            comment_time: "刚刚",
            comment: this.data.inputstr
          }
        ]
        this.data.array = newarray.concat(this.data.array);
        this.data.comment_total = this.data.comment_total + 1;
        this.setData({
          array: this.data.array,
          comment_total : this.data.comment_total,
          inputstr : ""
        })
    }
  }

})

//播放、暂停
function play(page) {

    wx.createVideoContext('myVideo').pause();
 
  
  wx.playBackgroundAudio({
    dataUrl: page.data.item.song_url,
    success: function (res) {
      wx.seekBackgroundAudio({
        position: page.data.current
      })
    }
  })
  page.setData({
    isPlaying: true
  })
}
//播放中
function playing(page) {
  wx.getBackgroundAudioPlayerState({
    success: function (res) {
      if (!page.data.duration) {
        page.setData({
          duration: parseInt(res.duration),
          total_time: time.formate(res.duration)
        })
      }
      if (res.status == 1) {
        page.setData({
          current: res.currentPosition,
          cur_time: time.formate(res.currentPosition)
        })
      }
      //循环播放,这里存在bug，差值可能为1
      if (page.data.duration - page.data.current <= 1) {
        page.setData({
          current: 0,
          cur_time: '0:00'
        })
        play(page)
      }
    }
  })
}


function loadPage(page) {
  //播放
  //play(page);
  //记录播放状态
  playing(page);
  setInterval(function () {
    playing(page)
  }, 1000);
}
//存储播放了的音乐
function savePlayed(page) {
  var playedList = wx.getStorageSync('played');
  var newList = [];
  var flag = true;
  if (playedList) {
    for (var i = 0; i < playedList.length; i++) {
      if (playedList[i].id == page.data.item.id) {
        flag = false;
      }
      newList.push(playedList[i]);
    }
  }
  if (flag) {
    newList.push(page.data.item)
    wx.setStorageSync('played', newList)
  }
  page.setData({
    played_list: newList
  })
}

//获取播放过的音乐
function getPlayed(page) {
  var playedList = wx.getStorageSync('played');
  var newList = [];
  if (playedList && playedList.length > 0) {
    for (var i = 0; i < playedList.length; i++) {
      newList.push(playedList[i]);
    }
    page.setData({
      played_list: newList,
      item: newList[newList.length - 1]
    })
  }
}
