/**
 * Created by TabTang on 2016/8/25.
 * 专门扩展方法使用
 */

//Date扩展格式化日期格式
Date.prototype.format = function format(fmt) {
  const FormatObj ={
    'M+' : this.getMonth() + 1, //月份
    'd+' : this.getDate(), // 日
    'h+' : this.getHours(), // 小时
    'm+' : this.getMinutes(), // 分
    's+' : this.getSeconds(), //
    'q+' : Math.floor( (this.getMonth() + 3) / 3 ), //季度
    'S'  : this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  } //年份，如果yy显示两位年份 如果yyyy 显示4位年份
  for (var k in FormatObj) {
    if (new RegExp( '(' + k + ')' ).test(fmt) ) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (FormatObj[k]) : (('00' + FormatObj[k]).substr(('' + FormatObj[k]).length)));
    }
  }
  return fmt;

};

//数组查找
Array.prototype.find = function find(fn) {
  for( var i = 0 ; i < this.length ; i++ ){
    if( typeof fn == 'function' ){
      if( fn.call( this , this[i] , i ) ){
        return this[i];
      }
    }else if( this[i] === fn){
      return this[i];
    }
  }
  return null;
};

//数组删除
Array.prototype.del =  function del(fn) {
  for( var i = 0 ; i < this.length ; i++ ){
    if( typeof fn == 'function' ){
      if( fn.call( this , this[i] , i ) ){
        delete this.splice(i ,1);
        break;
      }
    }else if( this[i] === fn){
      delete this.splice(i ,1);
      break;
    }
  }
};
