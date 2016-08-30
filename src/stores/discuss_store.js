/**
 * Created by TabTang on 2016/8/25.
 */
import AppDispatcher from '../AppDispatcher';
const EventEmitter =  require('events').EventEmitter;
import DiscussConstants from '../constants/discuss_constant';
import assign from 'object-assign';
var DiscussData = require( 'json!../data/discuss_data.json');

const CHANGE_EVENT = 'change';

var _DisData = DiscussData;

function discussCreate(obj){
  var id = ( +new Date() + Math.floor( Math.random() * 999999 ) ).toString(36);
  const temp = {
    id:id,
    UserName:"TabTang",
    complete:false,
    replyContent:obj.text,
    replyDate:obj.createDate,
    replyList:[],
    like:0
  };
  _DisData.push(temp);
  console.log( _DisData );
}

const DiscussStore = assign ( {} , EventEmitter.prototype , {
  getAll:function(){
    return _DisData;
  },

  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT,callback);
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register( function(action){
  var obj;
  switch (action.action.actionType){
    case DiscussConstants.DISCUSS_CREATE:
      obj = action.action.obj;
      if( obj.text.trim() !== '' ){
        discussCreate(obj);
        DiscussStore.emitChange();
      }
  }

});

module.exports = DiscussStore;
