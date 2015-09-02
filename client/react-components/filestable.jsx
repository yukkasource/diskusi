let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let MiniButton = require('./commons').MiniButton;
let NormalButton = require('./commons').NormalButton;

function getProgress(filename){return 1;}

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

let UploadButton = React.createClass({
  render: function() {
    return(
      <form encType="multipart/form-data">
        <div className="fileUpload btn btn-primary" >
          {this.props.label}
          <input id="image-file" type="file" multiple className="upload" onChange={this.props.clickHandler}/>
        </div>
      </form>
      );
  }
});

let UploadingFilesTable = React.createClass({
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
            <td colSpan="4"><UploadButton label={'Add Files...'} clickHandler={this.props.addFileHandler}/></td>
          </tr>
        </tbody>
      </table> 
      );
  }
});

exports.UploadFilesTable = React.createClass({
  getInitialState: function(){
    return  {
      files:[],
    };
  },
  addFileHandler: function(e) {
    let files = e.target.files;
    //console.log('Received files: ', files);
    let id = this.state.files.length;
    for (let i=0; i<files.length;i++,id++){
      //console.log('adding: ', i);
      this.state.files.push({
          id: id+1,
          filename: files[i].name,
          progress: (getProgress(files[i].name) / files[i].size ) *100
      });
    }
    this.setState({files:this.state.files});

    /**
    * Calling the upload handler that uploads the file on server
    */ 
    this.props.uploadHandler(files);
  },
  render: function() {
    return(
      <UploadingFilesTable 
        files={this.state.files} 
        addFileHandler={this.addFileHandler}/>
        );
  }
});