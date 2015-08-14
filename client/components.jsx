var React = require('react');
var mockmodel = require('./mockmodel');
var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require("bootstrap");
//require('react-bootstrap');
require("./main.less");
require("./assets/js/bootswatch");

/*
*****************************************************************
*                          BUTTONS
*****************************************************************
*/
var ShowFilesButton = React.createClass({
  render: function() {
    return(<div style={{display: 'block'}} id="showfiles-button" className="btn btn-primary btn-xs">&lt; &gt;</div>);
  }
});

var MiniButton = React.createClass({
  render: function() {
    return(<a href="#" className="btn btn-primary btn-xs">{this.props.text}</a>);
  }
});

/*
*****************************************************************
*                          ALERT 
*****************************************************************
*/
var AlertWarning = React.createClass({
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
var SimpleMessage = React.createClass({
  render: function() {
    var message = this.props.message;
    var showfiles = '';
    if (message.attachments.length > 0){
        showfiles = <ShowFilesButton />
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


var FilesTable = React.createClass({
  render: function() {
    var fileRow = function(file){
      return (
        <tr key={file.id}>
          <td>{file.filename}</td>
          <td>
            {file.type}
          </td>
          <td>
            {file.size}
          </td>
          <td>
            <MiniButton text={'Download'}/>
          </td>
        </tr>
        );
    };

    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>File</th>
            <th>File type</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.files.map(fileRow)}
        </tbody>
      </table> 
      );
  }
});

var MessageAttachments = React.createClass({
  render: function() {
    var message = this.props.message;
    return(
      <div className="bs-component panel panel-default">
        <div className="panel-heading">
          <span className="label label-primary left-header">{message.user}</span>
          {message.text}
          <ShowFilesButton />
        </div>
        <div className="panel-body">
          <div className="bs-component">
            <FilesTable files={message.attachments} />
          </div>
        </div>
      </div>
      );
  }
});


var MessagesList = React.createClass({
  render: function() {
    if (this.props.messages==undefined){
      return <AlertWarning alert = {{header:'No messages',msg:''}}/>;
    }
    var ret = this.props.messages.map(function(message){
      if (message.attachments.length == 0)
        return (<SimpleMessage key={message.id} message={message}/>);
      //else
      return (<MessageAttachments key={message.id} message={message}/>);
      
    });
    return <div>{ret}</div>;
  }
});

var MESSAGES = [
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
    {id:'3',text:'Thanks for files', attachments:[], user:'user1'}
];

var USER = 'user2';

React.render(<MessagesList messages={MESSAGES}/>,document.getElementById('messages'));



