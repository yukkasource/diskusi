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
    let bclass = this.props.buttonclass==undefined?'btn btn-primary':'btn '+this.props.buttonclass;
    return (<button type="button" className={bclass} onClick={this.props.clickHandler}>{this.props.label}</button>);
  }
});

exports.CloseButton = React.createClass({
  render: function() {
    return(<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>);
  }
});