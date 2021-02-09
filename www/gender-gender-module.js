(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gender-gender-module"],{

/***/ "./src/app/gender/gender.module.ts":
/*!*****************************************!*\
  !*** ./src/app/gender/gender.module.ts ***!
  \*****************************************/
/*! exports provided: GenderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPageModule", function() { return GenderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gender_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gender.page */ "./src/app/gender/gender.page.ts");







var routes = [
    {
        path: '',
        component: _gender_page__WEBPACK_IMPORTED_MODULE_6__["GenderPage"]
    }
];
var GenderPageModule = /** @class */ (function () {
    function GenderPageModule() {
    }
    GenderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gender_page__WEBPACK_IMPORTED_MODULE_6__["GenderPage"]]
        })
    ], GenderPageModule);
    return GenderPageModule;
}());



/***/ }),

/***/ "./src/app/gender/gender.page.html":
/*!*****************************************!*\
  !*** ./src/app/gender/gender.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\n\n  <ion-button fill=\"clear\" size=\"large\" (click)=\"openModal()\"><ion-icon name=\"close-circle\" size=\"large\"></ion-icon></ion-button>\n  <div>\n    <ion-row>\n      <ion-col><ion-button size=\"large\" shape=\"round\" color=\"secondary\" (click)=\"frame('boy')\">Boy</ion-button></ion-col>\n      <ion-col><ion-button size=\"large\" shape=\"round\" color=\"secondary\" (click)=\"frame('girls')\">Girl</ion-button></ion-col>\n  </ion-row>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/gender/gender.page.scss":
/*!*****************************************!*\
  !*** ./src/app/gender/gender.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #fff url('first3.jpg') no-repeat center center / cover; }\n  ion-content ion-button {\n    position: absolute;\n    right: 0;\n    top: 15%;\n    margin: 0px; }\n  ion-content div {\n    width: 100%;\n    position: absolute;\n    top: 40%;\n    text-align: center;\n    transform: translateY(-50%); }\n  ion-content div ion-row ion-col ion-button {\n      width: 80%;\n      font-size: 25px;\n      right: 0;\n      left: 0;\n      margin: 0 auto;\n      height: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9DYWxjdWxhdG9yL3NyYy9hcHAvZ2VuZGVyL2dlbmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvRUFBYSxFQUFBO0VBRGpCO0lBSVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVyxFQUFBO0VBUG5CO0lBV1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLDJCQUEyQixFQUFBO0VBZm5DO01Bb0JvQixVQUFVO01BQ1YsZUFBZTtNQUNmLFFBQVE7TUFDUixPQUFPO01BQ1AsY0FBYztNQUNkLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dlbmRlci9nZW5kZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi9hc3NldHMvaW1nL2ZpcnN0My5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gender/gender.page.ts":
/*!***************************************!*\
  !*** ./src/app/gender/gender.page.ts ***!
  \***************************************/
/*! exports provided: GenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPage", function() { return GenderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_close_close_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/close/close.component */ "./src/app/component/close/close.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







var GenderPage = /** @class */ (function () {
    function GenderPage(modalCtrl, navCtrl, router, nativeAudio, statusBar) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.nativeAudio = nativeAudio;
        this.statusBar = statusBar;
        this.nativeAudio.preloadSimple('uniqueIdboy', 'assets/audio/boy.mp3');
        this.nativeAudio.preloadSimple('uniqueIdgirl', 'assets/audio/girl.mp3');
    }
    GenderPage.prototype.ngOnInit = function () {
    };
    GenderPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#000');
    };
    GenderPage.prototype.boyPlay = function () {
        this.nativeAudio.play('uniqueIdboy');
    };
    GenderPage.prototype.girlPlay = function () {
        this.nativeAudio.play('uniqueIdgirl');
    };
    GenderPage.prototype.frame = function (gender) {
        if (gender == 'boy')
            this.boyPlay();
        else
            this.girlPlay();
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(gender)
            }
        };
        this.router.navigate(['home'], navigationExtras);
    };
    GenderPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _component_close_close_component__WEBPACK_IMPORTED_MODULE_3__["CloseComponent"],
                            showBackdrop: true,
                            mode: "ios",
                            cssClass: 'close-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GenderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gender',
            template: __webpack_require__(/*! ./gender.page.html */ "./src/app/gender/gender.page.html"),
            styles: [__webpack_require__(/*! ./gender.page.scss */ "./src/app/gender/gender.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeAudio"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])
    ], GenderPage);
    return GenderPage;
}());



/***/ })

}]);
//# sourceMappingURL=gender-gender-module.js.map