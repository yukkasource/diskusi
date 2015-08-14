var React = require('react');
window.React = React;
require('./components');
var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require("bootstrap");
//require('react-bootstrap');
require("./main.less");
require("./assets/js/bootswatch");
require("file?name=index.html!./index.html");
require("file?name=mockup.html!./mockup.html");
//require("file?name=[path][name].[ext]?[hash]!./assets/img/shopify.png")
//require("file!./assets/img/shopify.png");
//require("html!./index.html");
//require("html?attrs=img:src!./index.html");