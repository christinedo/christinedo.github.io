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
    className: "jsx-2354446052" + " " + (post.id || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    href: post.url,
    className: "jsx-2354446052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: post.image,
    className: "jsx-2354446052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-2354446052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2354446052",
    __self: this
  }, "li.jsx-2354446052{list-style:none;}li.jsx-2354446052:nth-child(1){width:calc((100% - 100px) / 2);}li.jsx-2354446052:nth-child(2){width:calc((100% - 50px) / 2);margin-top:200px;}li.jsx-2354446052:nth-child(3){width:calc((100% - (100px * 2)) / 2);margin-left:100px;margin-top:50px;}img.jsx-2354446052{width:100%;height:auto;background:pink;}p.jsx-2354446052{padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFHeUIsQUFJZSxBQUlELEFBS08sQUFNMUIsQUFNTSxXQUxMLEtBbkJkLENBeUJBLE1BTGtCLE9BWkMsQ0FKbkIsTUFTb0IsRUFRcEIsUUFaQSxRQUtrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2NocmlzdGluZWRvL0Ryb3Bib3gvY2hyaXN0aW5lZG8uZ2l0aHViLmlvL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3BlcnNvbmFsLXdlYnNpdGUnLFxuICAgICAgdGl0bGU6ICdQZXJzb25hbCBXZWJzaXRlJyxcbiAgICAgIGltYWdlOiAnL3BvcnRmb2xpby5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGluZWRvL2NocmlzdGluZWRvLmdpdGh1Yi5pbydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndG9wLWhhdCcsXG4gICAgICB0aXRsZTogJ1RvcCBIYXQgU3RvcmllcycsXG4gICAgICBpbWFnZTogJy90b3BoYXQuZ2lmJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc3RpbmVkby90b3AtaGF0LXN0b3JpZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211aXItd29vZHMnLFxuICAgICAgdGl0bGU6ICdNdWlyIFdvb2RzIENvZmZlZSBIb3VzZScsXG4gICAgICBpbWFnZTogJy9td2NoLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL25vc2xwLW13Y2guaGVyb2t1YXBwLmNvbS8nXG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGkga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9e3Bvc3QuaWR9PlxuICAgIDxhIGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSAvPlxuICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxuICAgIDwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDIpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMTAwcHggKiAyKSkgLyAyKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdHMtY29udGFpbmVyJyBpZD0ncHJvamVjdHMnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5GZWF0dXJlZCBQcm9qZWN0czwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdwcm9qZWN0cyc+XG4gICAgICAgIHtnZXRQcm9qZWN0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLnByb2plY3RzIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

var Projects = function Projects() {
  return __jsx("section", {
    id: "projects",
    className: "jsx-3121099491" + " " + 'projects-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3121099491" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3121099491" + " " + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Featured Projects"), __jsx("ul", {
    className: "jsx-3121099491" + " " + 'projects',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, getProjects().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3121099491",
    __self: this
  }, ".projects-container.jsx-3121099491{height:100%;padding-top:100px;}h2.jsx-3121099491{margin-bottom:40px;text-align:center;}.projects.jsx-3121099491{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}@media all and (max-width:800px){.projects.jsx-3121099491{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFTyxBQUd1QixBQUtPLEFBS04sQUFPVyxZQWhCTixPQUtBLFdBSnBCLE9BS0EscUNBSWdDLElBTzlCLCtHQU5lLHlEQUNqQiIsImZpbGUiOiIvVXNlcnMvY2hyaXN0aW5lZG8vRHJvcGJveC9jaHJpc3RpbmVkby5naXRodWIuaW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiAncGVyc29uYWwtd2Vic2l0ZScsXG4gICAgICB0aXRsZTogJ1BlcnNvbmFsIFdlYnNpdGUnLFxuICAgICAgaW1hZ2U6ICcvcG9ydGZvbGlvLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aW5lZG8vY2hyaXN0aW5lZG8uZ2l0aHViLmlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICd0b3AtaGF0JyxcbiAgICAgIHRpdGxlOiAnVG9wIEhhdCBTdG9yaWVzJyxcbiAgICAgIGltYWdlOiAnL3RvcGhhdC5naWYnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGluZWRvL3RvcC1oYXQtc3RvcmllcydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbXVpci13b29kcycsXG4gICAgICB0aXRsZTogJ011aXIgV29vZHMgQ29mZmVlIEhvdXNlJyxcbiAgICAgIGltYWdlOiAnL213Y2guanBnJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbm9zbHAtbXdjaC5oZXJva3VhcHAuY29tLydcbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaSBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT17cG9zdC5pZH0+XG4gICAgPGEgaHJlZj17cG9zdC51cmx9PlxuICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2V9IC8+XG4gICAgICA8cD57cG9zdC50aXRsZX08L3A+XG4gICAgPC9hPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBsaTpudGgtY2hpbGQoMikge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gMik7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgfVxuXG4gICAgICBsaTpudGgtY2hpbGQoMykge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICgxMDBweCAqIDIpKSAvIDIpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHBpbms7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0cy1jb250YWluZXInIGlkPSdwcm9qZWN0cyc+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnPkZlYXR1cmVkIFByb2plY3RzPC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3Byb2plY3RzJz5cbiAgICAgICAge2dldFByb2plY3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.3eecf1f9e1b8d423c3c9.hot-update.js.map