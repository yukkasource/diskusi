let AppDispatcher = require('../AppDispatcher');
let Constants = require('../Constants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
/*
*****************************************************************
*                        Mock DATA
*****************************************************************
*/


let _messages = [
    {id:'1',text:'Hi, How are you?', attachments:[], user:'user1'},
    {
      id:'2',
      text:'Hi, Fine thanks. I attached files', 
      attachments:[
          {
            id:'1',
            filename:'File1',
            type:'PDF',
            size:'10M',
          },
          {
            id:'2',
            filename:'File2',
            type:'JPG',
            size:'1M',
          }
      ], user:'user2'
    },
    {id:'3',text:'Thanks for files', attachments:[], user:'user1'},
    {
      id:'4',
      text:'Hi, Other',
      attachments:[
          {
            id:'1',
            filename:'File1',
            type:'PDF',
            size:'10M',
          },
          {
            id:'2',
            filename:'File2',
            type:'JPG',
            size:'1M',
          }
      ], user:'user2'
    }
];


exports.USER = 'user2';

var MessageStore = assign({}, EventEmitter.prototype,{
  emitChange: function() {
    this.emit(Constants.CHANGE_STATE);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_STATE, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_STATE, callback);
  },
  getMessages : function(){
    return _messages;
  }
});

MessageStore.dispatchToken = AppDispatcher.register(function(action) {
  var tmpFiles = [];
  switch(action.actionType) {
    case Constants.MSG_CREATE:
      console.log("create message: "+action.text);
      _messages.push({id:(_messages.length+1).toString(),text:action.text, attachments:tmpFiles, user:'user1'}); 
      tmpFiles=[];
      MessageStore.emitChange();
      break;
    case Constants.UPLOAD_FILES:
      console.log("messageStore upload: "+action.files);
      tmpFiles.push(action.files);
      MessageStore.emitChange();
      break;
    case Constants.STOP_UPLOAD_FILE:
      console.log("messageStore stop upload: "+action.file);
      MessageStore.emitChange();
      break;
    case Constants.DOWNLOAD_FILE:
      console.log("messageStore download: "+action.file);
      MessageStore.emitChange();
      break;
    case Constants.DELETE_FILE:
      console.log("messageStore delete: "+action.file);
      MessageStore.emitChange();
      break;
    default:
      // no op
  }
}); 

module.exports = MessageStore;