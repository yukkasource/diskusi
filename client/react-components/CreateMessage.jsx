let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let UploadFilesTable = require('./filestable').UploadFilesTable;
let NormalButton = require('./commons').NormalButton;
let CloseButton = require('./commons').CloseButton;
let TextArea = require('./commons').TextArea;
let store = require('../store/mock-store');
let Actions = require('../actions/Actions');
let FileHandlers = require('../utils/FileHandlers');



let CreateMessage = React.createClass({
  getInitialState: function(){
    return {
      value:'',
      newMessage:false,
      attachFiles:false
    };
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value,
      newMessage:this.state.newMessage,
      attachFiles:this.state.attachFiles
    });
  },
  handleNewMessage: function(){
    this.setState(
      {
        value:this.state.value,
        newMessage:!this.state.newMessage,
        attachFiles:false
      });
  },
  handleAttachFiles: function(){
    this.setState(
      {
        value:this.state.value,
        newMessage:this.state.newMessage,
        attachFiles:true
      });
    
  },
  handleClose: function(){
    this.setState(
      {
        value:'',
        newMessage:!this.state.newMessage,
        attachFiles:false
      });
  },
  sendHandler: function(){
    Actions.createMessage(this.state.value);
    this.handleClose();
  },

  render: function() {
    let value = this.state.value;
    if (this.state.newMessage){
      let uploadForm = '';
      if (this.state.attachFiles){
        uploadForm = 
        <div>
          <UploadFilesTable 
            uploadHandler={FileHandlers.uploadHandler}
            deleteHandler={FileHandlers.deleteHandler}
            downloadHandler={FileHandlers.downloadHandler}
            stopHandler={FileHandlers.stopHandler}/>
          <div className="modal-footer"></div>
        </div>
      }
      var formNewMessage = 
        <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <CloseButton clickHandler={this.handleClose}/>
                  <h4 className="modal-title">{'Send Message'}</h4>
                </div>
                <div className="modal-body">
                  <p><TextArea value={value} onChange={this.handleChange}/></p>
                </div>
                <div className="modal-footer">
                  <NormalButton buttonclass={'btn-default'} label={'Attach Files...'} clickHandler={this.handleAttachFiles}  />
                  <NormalButton label={'Send'} clickHandler={this.sendHandler} active={this.state.value!=''}/>
                </div>
                <div className="modal-body">
                  <div className="bs-component">
                    {uploadForm}
                  </div>
                </div>
              </div>
            </div>
          </div>
    }else{
      var formNewMessage = <NormalButton label={'New Message...'} clickHandler={this.handleNewMessage} />
    }
    return(
      <div className="bs-component">
        {formNewMessage}
      </div>
      );
  }
});

module.exports = CreateMessage;