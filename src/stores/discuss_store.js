/**
 * Created by TabTang on 2016/8/25.
 */
import AppDispatcher from '../AppDispatcher';
const EventEmitter =  require('events').EventEmitter;
import DiscussConstants from '../constants/discuss_constant';
import assign from 'object-assign';
//var DiscussData = require( 'json!../data/discuss_data.json');
//console.log(DiscussData);

const CHANGE_EVENT = 'change';

var _DisData;
_DisData = [
  {
    'id': 'S1000',
    'UserName': 'Jack',
    'replyDate': '2016-10-10 08:12:25',
    'replyContent': '请问Agile是什么东西',
    'replyList': [
      {
        'id': 'S1001',
        'UserName': 'Aaron',
        'replyDate': '2016-10-10 08:22:25',
        'replyContent': 'Agile是软件敏捷开发方式',
        'replyList': [],
        'like': 2,
        'headIcon':'',
        'isLike': true
      },
      {
        'id': 'S1007',
        'UserName': 'Aaron',
        'replyDate': '2016-10-10 08:22:25',
        'replyContent': 'Agile是软件敏捷开发方式',
        'replyList': [],
        'like': 7,
        'headIcon':'',
        'isLike': true
      }
    ],
    'like': 110,
    'headIcon':'',
    'isLike': false
  },
  {
    'id': 'S1002',
    'UserName': 'Tab',
    'replyDate': '2016-10-10 08:12:25',
    'replyContent': '请问Agile是什么东西',
    'replyList': [
      {
        'id': 'S1003',
        'UserName': 'Ann',
        'replyDate': '2016-10-10 08:22:25',
        'replyContent': 'Agile是软件敏捷开发方式',
        'replyList': [],
        'like': 2,
        'headIcon':'',
        'isLike': false
      },
      {
        'id': 'S1004',
        'UserName': 'JS',
        'replyDate': '2016-10-10 08:22:25',
        'replyContent': 'Agile是软件敏捷开发方式',
        'replyList': [],
        'like': 2,
        'headIcon':'',
        'isLike': false
      }
    ],
    'like': 10,
    'headIcon':'',
    'isLike': true
  }
];

function discussCreate(obj){
  var id = ( +new Date() + Math.floor( Math.random() * 999999 ) ).toString(36);
  const temp = {
    id:id,
    UserName:'TabTang',
    complete:false,
    replyContent:obj.text,
    replyDate:obj.createDate,
    replyList:[],
    headIcon:'',
    like:10,
    isLike:false
  };
  _DisData.push(temp);
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
