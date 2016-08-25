/**
 * Created by TabTang on 2016/8/25.
 */
import AppDispatcher from '../AppDispatcher';
import DiscussConstants from '../constants/discuss_constant';

const DiscussAction = {
  create:function(obj){
    AppDispatcher.handleViewAction({
      actionType:DiscussConstants.DISCUSS_CREATE,
      obj:obj
    })
  }
};
module.exports = DiscussAction;
