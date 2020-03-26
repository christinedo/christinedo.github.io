webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function getProjects() {
  return [{
    id: 'personal-website',
    title: 'Personal Website',
    image: '/portfolio.jpg',
    url: 'https://github.com/christinedo/christinedo.github.io'
  }, {
    id: 'top-hat',
    title: 'Top Hat Stories',
    image: '/tophat.gif',
    url: 'https://github.com/christinedo/top-hat-stories'
  }, {
    id: 'muir-woods',
    title: 'Muir Woods Coffee House',
    image: '/mwch.jpg',
    url: 'https://noslp-mwch.herokuapp.com/'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    key: post.id,
    className: "jsx-652501576" + " " + (post.id || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    href: post.url,
    className: "jsx-652501576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: post.image,
    className: "jsx-652501576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-652501576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "652501576",
    __self: this
  }, "li.jsx-652501576{list-style:none;}li.jsx-652501576:nth-child(1){width:calc((100% - 100px) / 2);}li.jsx-652501576:nth-child(2){width:calc((100% - 50px) / 2);margin-top:200px;}li.jsx-652501576:nth-child(3){width:calc((100% - (100px * 2)) / 2);margin-left:100px;margin-top:50px;}img.jsx-652501576{width:100%;height:auto;background:pink;}p.jsx-652501576{padding-top:10px;}@media all and (max-width:800px){li.jsx-652501576:nth-child(1),li.jsx-652501576:nth-child(2),li.jsx-652501576:nth-child(3){width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFHeUIsQUFJZSxBQUlELEFBS08sQUFNMUIsQUFNTSxBQU9KLFdBWkQsQUFjWixLQWpDRixDQXlCQSxNQUxrQixPQVpDLENBSm5CLE1BU29CLEVBUXBCLFFBWkEsUUFLa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6ICdwZXJzb25hbC13ZWJzaXRlJyxcbiAgICAgIHRpdGxlOiAnUGVyc29uYWwgV2Vic2l0ZScsXG4gICAgICBpbWFnZTogJy9wb3J0Zm9saW8uanBnJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc3RpbmVkby9jaHJpc3RpbmVkby5naXRodWIuaW8nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3RvcC1oYXQnLFxuICAgICAgdGl0bGU6ICdUb3AgSGF0IFN0b3JpZXMnLFxuICAgICAgaW1hZ2U6ICcvdG9waGF0LmdpZicsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aW5lZG8vdG9wLWhhdC1zdG9yaWVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdtdWlyLXdvb2RzJyxcbiAgICAgIHRpdGxlOiAnTXVpciBXb29kcyBDb2ZmZWUgSG91c2UnLFxuICAgICAgaW1hZ2U6ICcvbXdjaC5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9ub3NscC1td2NoLmhlcm9rdWFwcC5jb20vJ1xuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpIGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPXtwb3N0LmlkfT5cbiAgICA8YSBocmVmPXtwb3N0LnVybH0+XG4gICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gLz5cbiAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICA8L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyAyKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIGxpOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gKDEwMHB4ICogMikpIC8gMik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICBsaTpudGgtY2hpbGQoMSksXG4gICAgICAgIGxpOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdHMtY29udGFpbmVyJyBpZD0ncHJvamVjdHMnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5GZWF0dXJlZCBQcm9qZWN0czwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdwcm9qZWN0cyc+XG4gICAgICAgIHtnZXRQcm9qZWN0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLnByb2plY3RzIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

var Projects = function Projects() {
  return __jsx("section", {
    id: "projects",
    className: "jsx-3121099491" + " " + 'projects-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3121099491" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3121099491" + " " + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Featured Projects"), __jsx("ul", {
    className: "jsx-3121099491" + " " + 'projects',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, getProjects().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3121099491",
    __self: this
  }, ".projects-container.jsx-3121099491{height:100%;padding-top:100px;}h2.jsx-3121099491{margin-bottom:40px;text-align:center;}.projects.jsx-3121099491{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}@media all and (max-width:800px){.projects.jsx-3121099491{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GTyxBQUd1QixBQUtPLEFBS04sQUFPVyxZQWhCTixPQUtBLFdBSnBCLE9BS0EscUNBSWdDLElBTzlCLCtHQU5lLHlEQUNqQiIsImZpbGUiOiIvVXNlcnMvY2hyaXN0aW5lZG8vRHJvcGJveC9jaHJpc3RpbmVkby5naXRodWIuaW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiAncGVyc29uYWwtd2Vic2l0ZScsXG4gICAgICB0aXRsZTogJ1BlcnNvbmFsIFdlYnNpdGUnLFxuICAgICAgaW1hZ2U6ICcvcG9ydGZvbGlvLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aW5lZG8vY2hyaXN0aW5lZG8uZ2l0aHViLmlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICd0b3AtaGF0JyxcbiAgICAgIHRpdGxlOiAnVG9wIEhhdCBTdG9yaWVzJyxcbiAgICAgIGltYWdlOiAnL3RvcGhhdC5naWYnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGluZWRvL3RvcC1oYXQtc3RvcmllcydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbXVpci13b29kcycsXG4gICAgICB0aXRsZTogJ011aXIgV29vZHMgQ29mZmVlIEhvdXNlJyxcbiAgICAgIGltYWdlOiAnL213Y2guanBnJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbm9zbHAtbXdjaC5oZXJva3VhcHAuY29tLydcbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaSBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT17cG9zdC5pZH0+XG4gICAgPGEgaHJlZj17cG9zdC51cmx9PlxuICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2V9IC8+XG4gICAgICA8cD57cG9zdC50aXRsZX08L3A+XG4gICAgPC9hPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBsaTpudGgtY2hpbGQoMikge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gMik7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgfVxuXG4gICAgICBsaTpudGgtY2hpbGQoMykge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICgxMDBweCAqIDIpKSAvIDIpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHBpbms7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgbGk6bnRoLWNoaWxkKDEpLFxuICAgICAgICBsaTpudGgtY2hpbGQoMiksXG4gICAgICAgIGxpOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9J3Byb2plY3RzLWNvbnRhaW5lcicgaWQ9J3Byb2plY3RzJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSc+RmVhdHVyZWQgUHJvamVjdHM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT0ncHJvamVjdHMnPlxuICAgICAgICB7Z2V0UHJvamVjdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2plY3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.e4bf28bc294418331fe7.hot-update.js.map