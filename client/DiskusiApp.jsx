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

let CreateMessage = require('./react-components/CreateMessage');

//js modules
let MessageStore = require('./store/mock-store');

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
function getStateFromStores(){
  return {
      messages: MessageStore.getMessages(),
    };
}

let MessagesList = React.createClass({
  getInitialState: function(){
    return getStateFromStores()
  },
  componentDidMount: function() {
    MessageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this._onChange);
  },
  render: function() {
    if (this.state.messages == undefined){
      return <AlertWarning alert = {{header:'No messages',msg:''}}/>;
    }
    let ret = this.state.messages.map(function(message){
      return (<Message key={message.id} message={message}/>);
    });
    return <div>{ret}</div>;
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});


/*
*****************************************************************
*                        Rendering
*****************************************************************
*/
React.render(<MessagesList />,document.getElementById('messages'));
React.render(<CreateMessage />,document.getElementById('insert-comment'));