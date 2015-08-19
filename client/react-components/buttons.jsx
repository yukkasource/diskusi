let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

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
    return(<a href="#" className="btn btn-primary btn-xs" onClick={this.props.clickHandler}>{this.props.label}</a>);
  }
});

exports.NormalButton = React.createClass({
  render: function() {
    let bclass = this.props.buttonclass!=undefined?'btn-primary':this.props.buttonclass;
    return (<button type="button" className="btn {bclass}" onClick={this.props.clickHandler}>{this.props.label}</button>);
  }
});