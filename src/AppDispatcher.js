/**
 * Created by TabTang on 2016/8/25.
 */
const Dispatcher = require('flux').Dispatcher;
const AppDispatcher = new Dispatcher;

AppDispatcher.handleViewAction = function(action){
  this.dispatch({
    source:'VIEW_ACTION',
    action:action
  });
}

module.exports = AppDispatcher;
