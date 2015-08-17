/*
*****************************************************************
*                        Mock DATA
*****************************************************************
*/
exports.MESSAGES = [
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