let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let MiniButton = require('./buttons').MiniButton;

exports.FilesTable = React.createClass({
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
        <MiniButton label={'Download'}/>
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

exports.UploadFilesTable = React.createClass({
  render: function() {
    let fileRow = function(file){
      return (
        <tr key={file.id}>
        <td>{file.filename}</td>
        <td>
        <div className="bs-component">
        <div className="progress progress-striped active">
        <div className="progress-bar" style="width: 45%"></div>
        </div>
        </div>
        </td>
        <td>
        <MiniButton label={'Stop'}/>
        <MiniButton label={'Delete'}/>
        <MiniButton label={'Download'}/>
        </td>
        </tr>
        );
    };

    return (
      <table className="table table-striped table-hover ">
      <thead>
      <tr>
      <th>File</th>
      <th>Progress</th>
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