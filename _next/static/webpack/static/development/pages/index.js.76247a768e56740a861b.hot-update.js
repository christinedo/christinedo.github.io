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
  }, "li.jsx-2354446052{list-style:none;}li.jsx-2354446052:nth-child(1){width:calc((100% - 100px) / 2);}li.jsx-2354446052:nth-child(2){width:calc((100% - 50px) / 2);margin-top:200px;}li.jsx-2354446052:nth-child(3){width:calc((100% - (100px * 2)) / 2);margin-left:100px;margin-top:50px;}img.jsx-2354446052{width:100%;height:auto;background:pink;}p.jsx-2354446052{padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFHeUIsQUFJZSxBQUlELEFBS08sQUFNMUIsQUFNTSxXQUxMLEtBbkJkLENBeUJBLE1BTGtCLE9BWkMsQ0FKbkIsTUFTb0IsRUFRcEIsUUFaQSxRQUtrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2NocmlzdGluZWRvL0Ryb3Bib3gvY2hyaXN0aW5lZG8uZ2l0aHViLmlvL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3BlcnNvbmFsLXdlYnNpdGUnLFxuICAgICAgdGl0bGU6ICdQZXJzb25hbCBXZWJzaXRlJyxcbiAgICAgIGltYWdlOiAnL3BvcnRmb2xpby5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGluZWRvL2NocmlzdGluZWRvLmdpdGh1Yi5pbydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndG9wLWhhdCcsXG4gICAgICB0aXRsZTogJ1RvcCBIYXQgU3RvcmllcycsXG4gICAgICBpbWFnZTogJy90b3BoYXQuZ2lmJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc3RpbmVkby90b3AtaGF0LXN0b3JpZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211aXItd29vZHMnLFxuICAgICAgdGl0bGU6ICdNdWlyIFdvb2RzIENvZmZlZSBIb3VzZScsXG4gICAgICBpbWFnZTogJy9td2NoLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL25vc2xwLW13Y2guaGVyb2t1YXBwLmNvbS8nXG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGkga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9e3Bvc3QuaWR9PlxuICAgIDxhIGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSAvPlxuICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxuICAgIDwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDIpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMTAwcHggKiAyKSkgLyAyKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdHMtY29udGFpbmVyJyBpZD0ncHJvamVjdHMnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5GZWF0dXJlZCBQcm9qZWN0czwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdwcm9qZWN0cyc+XG4gICAgICAgIHtnZXRQcm9qZWN0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiBjYWxjKDI4cHggKyAxLjI1dncpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

var Projects = function Projects() {
  return __jsx("section", {
    id: "projects",
    className: "jsx-2707695093" + " " + 'projects-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2707695093" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2707695093" + " " + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Featured Projects"), __jsx("ul", {
    className: "jsx-2707695093" + " " + 'projects',
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
    id: "2707695093",
    __self: this
  }, ".projects-container.jsx-2707695093{height:100%;padding-top:100px;}.section-title.jsx-2707695093{font-size:calc(28px + 1.25vw);font-weight:500;margin-bottom:40px;text-align:center;}.projects.jsx-2707695093{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RpbmVkby9Ecm9wYm94L2NocmlzdGluZWRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFTyxBQUd1QixBQUtrQixBQU9qQixZQVhLLGtCQUNwQixBQUlrQixnQkFDRyxtQkFDRCxTQUtZLFNBSmhDLDBHQUtpQix5REFDakIiLCJmaWxlIjoiL1VzZXJzL2NocmlzdGluZWRvL0Ryb3Bib3gvY2hyaXN0aW5lZG8uZ2l0aHViLmlvL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3BlcnNvbmFsLXdlYnNpdGUnLFxuICAgICAgdGl0bGU6ICdQZXJzb25hbCBXZWJzaXRlJyxcbiAgICAgIGltYWdlOiAnL3BvcnRmb2xpby5qcGcnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGluZWRvL2NocmlzdGluZWRvLmdpdGh1Yi5pbydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndG9wLWhhdCcsXG4gICAgICB0aXRsZTogJ1RvcCBIYXQgU3RvcmllcycsXG4gICAgICBpbWFnZTogJy90b3BoYXQuZ2lmJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc3RpbmVkby90b3AtaGF0LXN0b3JpZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211aXItd29vZHMnLFxuICAgICAgdGl0bGU6ICdNdWlyIFdvb2RzIENvZmZlZSBIb3VzZScsXG4gICAgICBpbWFnZTogJy9td2NoLmpwZycsXG4gICAgICB1cmw6ICdodHRwczovL25vc2xwLW13Y2guaGVyb2t1YXBwLmNvbS8nXG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGkga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9e3Bvc3QuaWR9PlxuICAgIDxhIGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSAvPlxuICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxuICAgIDwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDIpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMTAwcHggKiAyKSkgLyAyKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdHMtY29udGFpbmVyJyBpZD0ncHJvamVjdHMnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5GZWF0dXJlZCBQcm9qZWN0czwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdwcm9qZWN0cyc+XG4gICAgICAgIHtnZXRQcm9qZWN0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiBjYWxjKDI4cHggKyAxLjI1dncpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/christinedo/Dropbox/christinedo.github.io/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.76247a768e56740a861b.hot-update.js.map