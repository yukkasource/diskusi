let React = require('react');
let mockmodel = require('./mockmodel');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;
require("bootstrap");
//require('react-bootstrap');
require("./main.less");
require("./assets/js/bootswatch");

/*
*****************************************************************
*                          BUTTONS
*****************************************************************
*/
exports.ShowFilesButton = React.createClass({
  render: function() {
    return(<div style={{display: 'block'}} className="showfiles-button" onClick={this.props.clickHandler}></div>);
  }
});

exports.MiniButton = React.createClass({
  render: function() {
    return(<a href="#" className="btn btn-primary btn-xs">{this.props.text}</a>);
  }
});