let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let UploadFilesTable = require('./filestable').UploadFilesTable;
let NormalButton = require('./commons').NormalButton;
let CloseButton = require('./commons').CloseButton;
let TextArea = require('./commons').TextArea;
let store = require('../store/mock-store');
let FileActions = require('../actions/FileActions');



let CreateMessage = React.createClass({
  getInitialState: function(){
    return  {
              newMessage:false,
              attachFiles:false
            };
  },
  handleNewMessage: function(){
    this.setState(
      {
        newMessage:!this.state.newMessage,
        attachFiles:false
      });
  },
  handleAttachFiles: function(){
    this.setState(
      {
        newMessage:this.state.newMessage,
        attachFiles:true
      });
    
  },
  handleClose: function(){
    this.setState(
      {
        newMessage:!this.state.newMessage,
        attachFiles:false
      });
  },
  uploadFile: function(files){
    FileActions.uploadFiles(files);
  },
  render: function() {
    if (this.state.newMessage){
      let uploadForm = '';
      if (this.state.attachFiles){
        uploadForm = 
        <div>
          <UploadFilesTable uploadHandler={this.uploadFile}/>
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
                  <p><TextArea id="message-text"/></p>
                </div>
                <div className="modal-footer">
                  <NormalButton buttonclass={'btn-default'} label={'Attach Files...'} clickHandler={this.handleAttachFiles}  />
                  <NormalButton label={'Send'} />
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