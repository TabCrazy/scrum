/**
 * Created by TabTang on 2016/8/25.
 */

//Date扩展格式化日期格式
Date.prototype.format = function(fmt) {
  const FormatObj ={
    'M+' : this.getMonth() + 1, //月份
    'd+' : this.getDate(), // 日
    'h+' : this.getHours(), // 小时
    'm+' : this.getMinutes(), // 分
    's+' : this.getSeconds(), //
    'q+' : Math.floor( (this.getMonth() + 3) / 3 ), //季度
    'S'  : this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)); //年份，如果yy显示两位年份 如果yyyy 显示4位年份
  for (var k in FormatObj) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (FormatObj[k]) : (("00" + FormatObj[k]).substr(("" + FormatObj[k]).length)));
  }
  return fmt;

};
