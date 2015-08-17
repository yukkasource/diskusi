let React = require('react');
let mockmodel = require('./mockmodel');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;
require("bootstrap");
//require('react-bootstrap');
require("./main.less");
require("./assets/js/bootswatch");

let buttons = require('./buttons')

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
let SimpleMessage = React.createClass({
  render: function() {
    let message = this.props.message;
    let showfiles = '';
    if (message.attachments.length > 0){
        showfiles = <buttons.ShowFilesButton clickHandler={this.props.clickHandler} />
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


let FilesTable = React.createClass({
  render: function() {
    let fileRow = function(file){
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
            <buttons.MiniButton text={'Download'}/>
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


let MessageWithAttachments = React.createClass({
  render: function() {
    let message = this.props.message;
    return(
      <div className="bs-component panel panel-default">
        <div className="panel-heading">
          <span className="label label-primary left-header">{message.user}</span>
          {message.text}
          <buttons.ShowFilesButton  clickHandler={this.props.clickHandler} />
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


let Message  = React.createClass({
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



