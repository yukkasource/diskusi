var AppDispatcher = require('../AppDispatcher');
var Constants = require('../Constants');

var FileActions = {

  /**
   * @param  {string} text
   */
  uploadFiles: function(files) {
    AppDispatcher.dispatch({
      actionType: Constants.UPLOAD_FILES,
      files: files
    });
  },
  stopUploadFile: function(file) {
    AppDispatcher.dispatch({
      actionType: Constants.STOP_UPLOAD_FILE,
      file: file
    });
  },
  deleteFile: function(file) {
    AppDispatcher.dispatch({
      actionType: Constants.DOWNLOAD_FILE,
      file: file
    });
  },
  downloadFile: function(file) {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE_FILE,
      file: file
    });
  },

}

module.exports = FileActions;