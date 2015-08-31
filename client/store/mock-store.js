let AppDispatcher = require('../AppDispatcher');

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
  /*switch(action.actionType) {
    case Constants.MSG_CREATE:
      
      break;
    case Constants.FILEUPL_CREATE:
      
      break;
    default:
      // no op
  }*/
}); 

module.exports = MockStore;