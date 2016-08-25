/**
 * Created by TabTang on 2016/8/23.
 */
import React from 'react';
import DiscussHead from './discuss_head';

const Discuss = React.createClass({
  render:function(){
    return (
      <div className="discuss">
        <DiscussHead></DiscussHead>
      </div>
    )
  }
});

module.exports = Discuss;
