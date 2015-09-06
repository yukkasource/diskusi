var AppDispatcher = require('../AppDispatcher');
var Constants = require('../Constants');

var Actions = {

  /**
   * @param  {string} text
   */
  createMessage: function(text) {
    AppDispatcher.dispatch({
      actionType: Constants.MSG_CREATE,
      text: text
    });
  },


}

module.exports = Actions;