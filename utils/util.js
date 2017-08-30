function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//格式化时间，将秒数转为0:00格式
var formate = n => {
  var minute = Math.floor(n / 60);
  var seconds = Math.ceil(n % 60);
  seconds = seconds.toString();
  seconds = seconds[1] ? seconds : '0' + seconds;
  return minute + ':' + seconds;
}
//将时间字符串转为秒数
var timeToSeconds = time => {
  var arr = time.split(':');
  return parseInt(arr[0]) * 60 + parseFloat(arr[1])
}

module.exports = {
  formatTime: formatTime,
  formate: formate,
  timeToSeconds: timeToSeconds
}
