/**
 * Created by TabTang on 2016/9/25.
 */

import React from 'react';
const ReactPropTypes = React.PropTypes;
import {Icon} from 'antd';


const LikeBut =  React.createClass({

  propTypes:{
    likeData:ReactPropTypes.object,
    callback:ReactPropTypes.func
  },

  getInitialState:function(){
    return {
      flag:this.props.likeData.isLike
    }
  },

  _onClick:function(){
    // 如已经是点赞状态，点击后取消点赞，反之设置为点赞状态，setState 改变按钮状态。
    if( this.state.flag ){
      this.setState({ flag: false });
    }else{
      this.setState({ flag: true });
    }
    // 如已经是点赞状态，点击后取消点赞 输出flase 反之 输出 true 做为回调函数参数传出给到使用此组件
    const temp = this.state.flag ? false : true;
    const obj = {
      flag:temp,
      id:this.props.likeData.id
    };
    this.props.callback( obj );

  },

  render:function(){
    const cls = this.state.flag ? 'sign' : 'unmark' ;
    return (
      <span className = {cls} onClick = {this._onClick}>
        <Icon type="like" />({this.props.likeData.like})
      </span>
    )
  }

});

module.exports = LikeBut;
