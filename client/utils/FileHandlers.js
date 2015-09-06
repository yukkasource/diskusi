let FileActions = require('../actions/FileActions');

let FileHandlers = {
	uploadHandler: function(files){
    FileActions.uploadFiles(files);
  },
  deleteHandler: function(file){
    FileActions.deleteFile(file);
  },
  downloadHandler: function(file){
    FileActions.downloadFile(file);
  },
  stopHandler: function(file){
    FileActions.stopUploadFile(file);
  }
}
module.exports = FileHandlers;