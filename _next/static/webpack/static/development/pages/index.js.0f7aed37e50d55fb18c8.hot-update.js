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
    image: '/tophat2.gif',
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
    className: "jsx-786305027" + " " + (post.id || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    href: post.url,
    className: "jsx-786305027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: post.image,
    className: "jsx-786305027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-786305027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "786305027",
    __self: this
  }, "li.jsx-786305027{list-style:none;}li.jsx-786305027:nth-child(1){width:calc((100% - 100px) / 2);}li.jsx-786305027:nth-child(2){width:calc((100% - 50px) / 2);margin-top:200px;}li.jsx-786305027:nth-child(3){width:calc((100% - (100px * 2)) / 2);margin-left:100px;margin-top:50px;}img.jsx-786305027{width:100%;height:auto;background:pink;}p.jsx-786305027{padding-top:10px;}@media all and (max-width:800px){li.jsx-786305027:nth-child(1),li.jsx-786305027:nth-child(2),li.jsx-786305027:nth-child(3){width:100%;margin:0;padding-bottom:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFHeUIsQUFJZSxBQUlELEFBS08sQUFNMUIsQUFNTSxBQU9KLFdBWkQsQUFhRCxLQWhDYixDQXlCQSxHQVF3QixHQWJOLE9BWkMsQ0FKbkIsTUFTb0IsRUFRcEIsQ0FhRSxPQXpCRixRQUtrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2NocmlzdGluZWRvL0Ryb3Bib3gvY2hyaXN0aW5lZG8uZ2l0aHViLmlvL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3BlcnNvbmFsLXdlYnNpdGUnLFxuICAgICAgdGl0bGU6ICdQZXJzb25hbCBXZWJzaXRlJyxcbiAgICAgIGltYWdlOiAnL3BvcnRmb2xpby5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGluZWRvL2NocmlzdGluZWRvLmdpdGh1Yi5pbydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndG9wLWhhdCcsXG4gICAgICB0aXRsZTogJ1RvcCBIYXQgU3RvcmllcycsXG4gICAgICBpbWFnZTogJy90b3BoYXQyLmdpZicsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aW5lZG8vdG9wLWhhdC1zdG9yaWVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdtdWlyLXdvb2RzJyxcbiAgICAgIHRpdGxlOiAnTXVpciBXb29kcyBDb2ZmZWUgSG91c2UnLFxuICAgICAgaW1hZ2U6ICcvbXdjaC5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9ub3NscC1td2NoLmhlcm9rdWFwcC5jb20vJ1xuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpIGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPXtwb3N0LmlkfT5cbiAgICA8YSBocmVmPXtwb3N0LnVybH0+XG4gICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gLz5cbiAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICA8L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyAyKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIGxpOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gKDEwMHB4ICogMikpIC8gMik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICBsaTpudGgtY2hpbGQoMSksXG4gICAgICAgIGxpOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0cy1jb250YWluZXInIGlkPSdwcm9qZWN0cyc+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnPkZlYXR1cmVkIFByb2plY3RzPC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3Byb2plY3RzJz5cbiAgICAgICAge2dldFByb2plY3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

var Projects = function Projects() {
  return __jsx("section", {
    id: "projects",
    className: "jsx-3121099491" + " " + 'projects-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3121099491" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3121099491" + " " + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Featured Projects"), __jsx("ul", {
    className: "jsx-3121099491" + " " + 'projects',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, getProjects().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3121099491",
    __self: this
  }, ".projects-container.jsx-3121099491{height:100%;padding-top:100px;}h2.jsx-3121099491{margin-bottom:40px;text-align:center;}.projects.jsx-3121099491{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}@media all and (max-width:800px){.projects.jsx-3121099491{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GTyxBQUd1QixBQUtPLEFBS04sQUFPVyxZQWhCTixPQUtBLFdBSnBCLE9BS0EscUNBSWdDLElBTzlCLCtHQU5lLHlEQUNqQiIsImZpbGUiOiIvVXNlcnMvY2hyaXN0aW5lZG8vRHJvcGJveC9jaHJpc3RpbmVkby5naXRodWIuaW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiAncGVyc29uYWwtd2Vic2l0ZScsXG4gICAgICB0aXRsZTogJ1BlcnNvbmFsIFdlYnNpdGUnLFxuICAgICAgaW1hZ2U6ICcvcG9ydGZvbGlvLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aW5lZG8vY2hyaXN0aW5lZG8uZ2l0aHViLmlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICd0b3AtaGF0JyxcbiAgICAgIHRpdGxlOiAnVG9wIEhhdCBTdG9yaWVzJyxcbiAgICAgIGltYWdlOiAnL3RvcGhhdDIuZ2lmJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc3RpbmVkby90b3AtaGF0LXN0b3JpZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211aXItd29vZHMnLFxuICAgICAgdGl0bGU6ICdNdWlyIFdvb2RzIENvZmZlZSBIb3VzZScsXG4gICAgICBpbWFnZTogJy9td2NoLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL25vc2xwLW13Y2guaGVyb2t1YXBwLmNvbS8nXG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGkga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9e3Bvc3QuaWR9PlxuICAgIDxhIGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSAvPlxuICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxuICAgIDwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDIpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMTAwcHggKiAyKSkgLyAyKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIGxpOm50aC1jaGlsZCgxKSxcbiAgICAgICAgbGk6bnRoLWNoaWxkKDIpLFxuICAgICAgICBsaTpudGgtY2hpbGQoMykge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9J3Byb2plY3RzLWNvbnRhaW5lcicgaWQ9J3Byb2plY3RzJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSc+RmVhdHVyZWQgUHJvamVjdHM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT0ncHJvamVjdHMnPlxuICAgICAgICB7Z2V0UHJvamVjdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2plY3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.0f7aed37e50d55fb18c8.hot-update.js.map