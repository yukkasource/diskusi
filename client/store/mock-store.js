let AppDispatcher = require('../AppDispatcher');
var Constants = require('../Constants');
/*
*****************************************************************
*                        Mock DATA
*****************************************************************
*/


let MESSAGES = [
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

var MockStore = {
  getFiles : function(){
    return [
      {
        id:'1',
        filename:'File1',
        progress:'45'
      },
      {
        id:'2',
        filename:'File2',
        progress:'100'
      }
    ];
  },
  getMessages : function(){
    return MESSAGES;
  }
};

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.MSG_CREATE:
      console.log("create message: "+action.text);
      break;

    case Constants.UPLOAD_FILES:
      console.log("mockStore upload: "+action.files);
      break;
    case Constants.STOP_UPLOAD_FILE:
      console.log("mockStore stop upload: "+action.file);
      break;
    case Constants.DOWNLOAD_FILE:
      console.log("mockStore download: "+action.file);
      break;
    case Constants.DELETE_FILE:
      console.log("mockStore delete: "+action.file);
      break;
    default:
      // no op
  }
}); 

module.exports = MockStore;