/**
 * Created by TabTang on 2016/9/5.
 */
import React from 'react';

import DiscussItem from './discuss_item';



const ReactPropTypes = React.PropTypes;


const DiscussList = React.createClass({

  propTypes:{
    AllData:ReactPropTypes.array.isRequired
  },

  getInitialState:function(){
    return {}
  },

  render:function(){

    if( Object.keys(this.props.AllData).length < 0 ){
      return null;
    }
    const allData = this.props.AllData;
    var items = [];

    for(let i = 0 ; i < allData.length ; i++ ){
      if( allData[i].headIcon == '' ){
        //没有上传头像，取name的前两个字母
        allData[i].head = allData[i].UserName.substring(0,1).toUpperCase()  + allData[i].UserName.slice(1,2);;
      }else{
        //有上传头像，取返回图片路径
        allData[i].head = '<img src=' + allData[i].headIcon +'/>';
      }
      const item = (
        <div className = 'discuss_item' key = {allData[i].id}>
          <DiscussItem DataItem = {allData[i]} />
        </div>
      );
      items.push(item)
    }
    return (
      <div className="discuss_list">
        {items}
      </div>
    )
  }

});

module.exports = DiscussList;
