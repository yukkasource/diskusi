var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require("bootstrap");
require("./main.less");
require("./assets/js/bootswatch.js");
//require("file?name=[path][name].[ext]?[hash]!./assets/img/shopify.png")
//require("file!./assets/img/shopify.png");
//require("html!./index.html");
require("html?attrs=img:src!./index.html");