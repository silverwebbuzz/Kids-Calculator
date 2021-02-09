(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-first-module"],{

/***/ "./src/app/first/first.module.ts":
/*!***************************************!*\
  !*** ./src/app/first/first.module.ts ***!
  \***************************************/
/*! exports provided: FirstPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageModule", function() { return FirstPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first.page */ "./src/app/first/first.page.ts");







var routes = [
    {
        path: '',
        component: _first_page__WEBPACK_IMPORTED_MODULE_6__["FirstPage"]
    }
];
var FirstPageModule = /** @class */ (function () {
    function FirstPageModule() {
    }
    FirstPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_first_page__WEBPACK_IMPORTED_MODULE_6__["FirstPage"]]
        })
    ], FirstPageModule);
    return FirstPageModule;
}());



/***/ }),

/***/ "./src/app/first/first.page.html":
/*!***************************************!*\
  !*** ./src/app/first/first.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n<ion-label>Kids Calculator</ion-label>\n<img src=\"../../assets/img/round.png\" routerLink=\"/gender\"/>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/first/first.page.scss":
/*!***************************************!*\
  !*** ./src/app/first/first.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #fff url('first2.jpg') no-repeat center center / cover; }\n  ion-content ion-label {\n    top: 30%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    position: absolute;\n    font-weight: bold;\n    font-size: 25px;\n    color: deepskyblue; }\n  ion-content img {\n    height: 100px;\n    width: 100px;\n    top: 50%;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    transform: translateY(-50%);\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9DYWxjdWxhdG9yL3NyYy9hcHAvZmlyc3QvZmlyc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0VBQWEsRUFBQTtFQURqQjtJQUlRLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQVgxQjtJQWVRLGFBQWE7SUFDYixZQUFZO0lBQ1osUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0L2ZpcnN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9maXJzdDIuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgdG9wOiAzMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBjb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/first/first.page.ts":
/*!*************************************!*\
  !*** ./src/app/first/first.page.ts ***!
  \*************************************/
/*! exports provided: FirstPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPage", function() { return FirstPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var FirstPage = /** @class */ (function () {
    function FirstPage(router, statusBar) {
        this.router = router;
        this.statusBar = statusBar;
        console.log("firstPage");
    }
    FirstPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['gender']);
        }, 3000);
    };
    FirstPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#000');
    };
    FirstPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.page.html */ "./src/app/first/first.page.html"),
            styles: [__webpack_require__(/*! ./first.page.scss */ "./src/app/first/first.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], FirstPage);
    return FirstPage;
}());



/***/ })

}]);
//# sourceMappingURL=first-first-module.js.map