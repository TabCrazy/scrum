/**
 * Created by TabTang on 2016/9/5.
 */

import React from 'react';
import {Icon} from 'antd';
import LikeBut from '../public/like_but';

const ReactPropTypes = React.PropTypes;


const DiscussItem = React.createClass({

  propTypes:{
    DataItem:ReactPropTypes.object,
    UserName:ReactPropTypes.string,
    replyDate:ReactPropTypes.string
  },

  _like:function(obj){
    console.log(obj)
  },

  render:function(){
    const ItemData = this.props.DataItem;
    const reItemData = this.props.DataItem.replyList
    const RepItem = [];

    if( reItemData.length > 0 ){
      var item;

      for(let i = 0 ; i < reItemData.length ; i++ ){

        if( reItemData[i].headIcon == '' ){
          //没有上传头像，取name的前两个字母
          reItemData[i].head = reItemData[i].UserName.substring(0,1).toUpperCase();
        }else{
          //有上传头像，取返回图片路径
          reItemData[i].head = '<img src=' + reItemData[i].headIcon +'/>';
        };


        item = (
          <div className="rep_item" key = {reItemData[i].id}>
            <div className="rep_item_head">
              <div className="repitem_head">{reItemData[i].head}</div>
              <div className="repitem_name">{reItemData[i].UserName}</div>
              <div className="repitem_date">{reItemData[i].replyDate}</div>
            </div>
            <div className="dis_item_cont">
              {reItemData[i].replyContent}
              <div className="item_operate">
                <LikeBut callback={this._like} likeData={reItemData[i]} />
                <span><Icon type="message" /></span>
              </div>
            </div>
          </div>
        );
      }
      RepItem.push(item);
    };


    return (
      <div>
          <div className="dis_item_head">
            <div className="item_head">{ItemData.head}</div>
            <div className="item_name">{ItemData.UserName}</div>
            <div className="item_date">{ItemData.replyDate}</div>
          </div>
          <div className="dis_item_cont">
            {ItemData.replyContent}
            <div className="item_operate">
              <LikeBut callback={this._like} likeData={ItemData} />
              <span><Icon type="message" /></span>
            </div>
          </div>
          <div className="dis_item_reply">
            {RepItem}
          </div>
      </div>
    )
  }
});
module.exports = DiscussItem;
