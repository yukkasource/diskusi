let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let UploadFilesTable = require('./filestable').UploadFilesTable;
let NormalButton = require('./buttons').NormalButton;
let CloseButton = require('./buttons').CloseButton;
let controller = require('../mock-controller');

let TextArea = React.createClass({
  render: function() {
    return(
      <textarea className="form-control" rows="3"></textarea>
      );
  }
});

exports.CreateMessage = React.createClass({
  render: function() {
    return(
      <div className="bs-component">
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <CloseButton />
                <h4 className="modal-title">{'Send Message'}</h4>
              </div>
              <div className="modal-body">
                <p><TextArea /></p>
              </div>
              <div className="modal-footer">
                <NormalButton buttonclass={'btn-default'} label={'Attach Files...'} />
                <NormalButton label={'Send'} />
              </div>
              <div className="modal-body">
                <div className="bs-component">
                  <UploadFilesTable files={controller.getFiles()} />
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});