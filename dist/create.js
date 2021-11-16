"use strict";
(self["webpackChunkrestourant"] = self["webpackChunkrestourant"] || []).push([["create"],{

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createContainer = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(createContainer)
createContainer.classList.add('container');

const container = document.querySelector('.container')

 function createElement(name, element, className, targetAppend, text) {
    name = document.createElement(`${element}`)
    name.classList.add(`${className}`)
    if (targetAppend) { 
       document.querySelector(`.${targetAppend}`).appendChild(name)
    }
    else {
        container.appendChild(name)
    }
    if (text) {
        name.textContent = text 
    }
    let rere = name
    return {rere}
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createElement.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvdXJhbnQvLi9zcmMvY3JlYXRlRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhaW5lcilcbmNyZWF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXG5cbiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGVsZW1lbnQsIGNsYXNzTmFtZSwgdGFyZ2V0QXBwZW5kLCB0ZXh0KSB7XG4gICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcbiAgICBpZiAodGFyZ2V0QXBwZW5kKSB7IFxuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldEFwcGVuZH1gKS5hcHBlbmRDaGlsZChuYW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0ZXh0IFxuICAgIH1cbiAgICBsZXQgcmVyZSA9IG5hbWVcbiAgICByZXR1cm4ge3JlcmV9XG59O1xuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnR9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==