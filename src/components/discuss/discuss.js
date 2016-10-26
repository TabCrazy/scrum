/**
 * Created by TabTang on 2016/8/23.
 */
import React from 'react';
import DiscussHead from './discuss_head';
import DiscussStore from '../../stores/discuss_store';
import DiscussList from './discuss_list';

function getStore(){
  return {
    _data:DiscussStore.getAll()
  }
}

const Discuss = React.createClass({

  getInitialState(){
    return getStore();
  },
  componentDidMount:function(){
    DiscussStore.addChangeListener( this._onChange )
  },
  componentWillUnmount:function () {
    DiscussStore.removeChangeListener( this._onChange );
  },
  _onChange:function(){
    this.setState( getStore() );
  },

  render:function(){
    return (
      <div className="discuss">
        <DiscussHead></DiscussHead>
        <DiscussList AllData = {this.state._data}></DiscussList>
      </div>
    )
  }
});

module.exports = Discuss;
