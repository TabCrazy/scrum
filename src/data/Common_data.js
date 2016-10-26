/**
 * Created by TabTang on 2016/8/30.
 * 存储项目常用的公共信息、例如当前登录者、当前打开的项目等
 */
const CommonData = {
  //当前登录者信息
  CurrentLoggedData: {},
  //获得当前登录信息并存储
  setCurrentLoggedData:function(data){
    this.CurrentLoggedData["name"]="TabTang";
    this.CurrentLoggedData["id"]="100000";
  },
  //当前登录者信息使用时调用方法
  getCurrentLoggedData:function(){
    return this.CurrentLoggedData;
  }

}
module.exports = CommonData;
