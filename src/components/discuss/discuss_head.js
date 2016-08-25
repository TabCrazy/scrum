/**
 * Created by TabTang on 2016/8/23.
 */
import React from 'react';
import {Button,Icon} from 'antd';
import DiscussAction from '../../actions/discuss_action';
require( '../../extension/extension' );

const ReactPropTypes = React.PropTypes;

const DiscussHead = React.createClass({

  propTypes:{
    className: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    value: ReactPropTypes.string
  },

  getInitialState:function(){
    return {
      value : '',
    }
  },

  _save:function(){
    var obj = {
      text:this.state.value,
      createDate:new Date().format('yyyy-MM-dd hh:mm:ss')
    };
    if( obj.text.trim() ){
      DiscussAction.create(obj);
    }
    console.log(obj);
    this.setState({
      value : '',
    });
  },

  _textAreaChange:function(event){
    this.setState({
      value : event.target.value
    });
  },

  render:function(){
    const style = this.props.className ? 'discuss_head' + this.props.className : 'discuss_head';
    return (
      <div className={style} >
        <div className="discuss_text">
          <textarea
            onChange = { this._textAreaChange }
            value = { this.state.value }
            placeholder = { this.props.placeholder }
          ></textarea>
        </div>
        <div className="discuss_option">
          <span className = "option_icon"><Icon type="link" /></span>
          <Button type="primary" onClick = { this._save }>Post</Button>
        </div>
      </div>
    )
  }
});
module.exports = DiscussHead;
