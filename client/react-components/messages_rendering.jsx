let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;
let FileHandlers = require('../utils/FileHandlers');

let ShowFilesButton = require('./commons').ShowFilesButton;

let FilesTable = require('./filestable').FilesTable;

let SimpleMessage= React.createClass({
  render: function() {
    let message = this.props.message;
    let showfiles = '';
    if (message.attachments.length > 0){
      showfiles = <ShowFilesButton clickHandler={this.props.clickHandler} />
    }
    return(
      <div className="bs-component well">
        <span className="label label-primary left-header">{message.user}</span>
        {message.text}
        {showfiles}
      </div>
      );
  }
});
exports.SimpleMessage = SimpleMessage;

let MessageWithAttachments = React.createClass({
  render: function() {
    let message = this.props.message;
    return(
      <div className="bs-component panel panel-default">
        <div className="panel-heading">
          <span className="label label-primary left-header">{message.user}</span>
          {message.text}
          <ShowFilesButton clickHandler={this.props.clickHandler} />
        </div>
        <div className="panel-body">
          <div className="bs-component">
            <FilesTable files={message.attachments} downloadHandler={FileHandlers.downloadHandler}/>
          </div>
        </div>
      </div>
      );
  }
});
exports.MessageWithAttachments = MessageWithAttachments;

let Message = React.createClass({
  getInitialState: function(){
    return {expanded:false};
  },
  handleShowfiles: function(){
    this.setState({expanded:!this.state.expanded});
  },
  render: function() {
    let message = this.props.message;
    if (this.state.expanded && message.attachments.length != 0) 
      return (<MessageWithAttachments key={this.props.key} message={message} clickHandler={this.handleShowfiles}/>)
        //else
        return(<SimpleMessage key={this.props.key} message={message} clickHandler={this.handleShowfiles} />);
      }
    });
exports.Message  = Message;