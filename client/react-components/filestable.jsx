let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let MiniButton = require('./buttons').MiniButton;
let NormalButton = require('./buttons').NormalButton;

exports.FilesTable = React.createClass({
  render: function() {
    let fileRow = function(file){
      return (
        <tr key={file.id}>
          <td>{file.id}</td>
          <td>{file.filename}</td>
          <td>
            {file.type}
          </td>
          <td>
            {file.size}
          </td>
          <td>
            <MiniButton label={'Download'}/>&nbsp;
          </td>
        </tr>
        );
    };

    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
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
      let progressBarStatusClass = file.progress=='100'?'progress-bar progress-bar-success':'progress-bar';
      let progressDivClass = file.progress=='100'?'progress progress-striped':'progress progress-striped active';
      let actions = file.progress=='100'?[['1','Delete'],['2','Download']]:[['1','Stop']];
      let actionButtons = actions.map(function(action){
        return (<MiniButton key={action[0]} label={action[1]} />);
      });
      return (
        <tr key={file.id}>
          <td>{file.id}</td>
          <td>{file.filename}</td>
          <td>
            <div className="bs-component">
              <div className={progressDivClass}>
                <div className={progressBarStatusClass} style={{width: file.progress+'%'}}></div>
              </div>
            </div>
          </td>
          <td>
            {actionButtons}
          </td>
        </tr>
        );
    };

    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>File</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.files.map(fileRow)}
          <tr>
            <td colSpan="4"><NormalButton label={'Add File...'} /></td>
          </tr>
        </tbody>
      </table> 
      );
  }
});