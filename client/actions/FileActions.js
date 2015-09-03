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


}

module.exports = FileActions;