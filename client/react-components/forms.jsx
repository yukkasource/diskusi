let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let UploadFilesTable = require('./filestable').UploadFilesTable;

exports.TextArea = React.createClass({
  render: function() {
    return(
      <textarea className="form-control" rows="3" id="textArea"></textarea>
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
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Send Message</h4>
              </div>
              <div className="modal-body">
                <p><TextArea /></p>
              </div>
              <div className="modal-footer">
                <NormalButton buttonclass"btn-default" label={'Attach Files...'} />
                <NormalButton label={'Send'} />
              </div>
              <div class="modal-body">
                <div class="bs-component">
                  <UploadFilesTable files={controller.getFiles()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});