/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


// const msg: string = "Hello!";
// alert(msg);
function loadCssFile(filename) {
  var headTag = document.getElementsByTagName("head")[0];
  var oldStyle = document.querySelector("head link[href*='styles']");
  if (oldStyle != null) {
    headTag.removeChild(oldStyle);
  }
  var newCssStyle = document.createElement("link");
  newCssStyle.setAttribute("rel", "stylesheet");
  newCssStyle.setAttribute("type", "text/css");
  newCssStyle.setAttribute("href", filename);
  headTag.appendChild(newCssStyle);
}
var noStyle = "";
var firstStyle = "styles/style1.css";
var secondStyle = "styles/style2.css";
var styles = [noStyle, firstStyle, secondStyle];
function generateCssLinks(styles) {
  var footerElement = document.getElementById("style_change");
  var _loop = function _loop(i) {
    var button = document.createElement("button");
    if (i == 0) {
      button.textContent = "brak css";
    } else {
      button.textContent = "css#0" + i;
    }
    button.addEventListener("click", function () {
      loadCssFile(styles[i]);
    });
    footerElement === null || footerElement === void 0 ? void 0 : footerElement.appendChild(button);
  };
  for (var i = 0; i < 3; i++) {
    _loop(i);
  }
}
generateCssLinks(styles);
/******/ })()
;