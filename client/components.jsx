/*
* IMPORTS
*/
let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;
//VIEW COMPONENT

let SimpleMessage = require('./react-components/messages_rendering').SimpleMessage;
let MessageWithAttachments = require('./react-components/messages_rendering').MessageWithAttachments;
let Message = require('./react-components/messages_rendering').Message;

//js modules
let mockmodel = require('./mockmodel');

/*
*****************************************************************
*                          ALERT 
*****************************************************************
*/
let AlertWarning = React.createClass({
  render: function() {
    return(
      <div className="bs-component">
      <div className="alert alert-dismissible alert-warning">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <h4>{this.props.alert.header}</h4>
      <p>{this.props.alert.msg}</p>
      </div>
      </div>
      );
  }
});

/*
*****************************************************************
*                        COMPONENTS
*****************************************************************
*/


let MessagesList = React.createClass({
  render: function() {
    if (this.props.messages==undefined){
      return <AlertWarning alert = {{header:'No messages',msg:''}}/>;
    }
    let ret = this.props.messages.map(function(message){
      return (<Message key={message.id} message={message}/>);
    });
    return <div>{ret}</div>;
  }
});


/*
*****************************************************************
*                        Rendering
*****************************************************************
*/
React.render(<MessagesList messages={mockmodel.MESSAGES}/>,document.getElementById('messages'));