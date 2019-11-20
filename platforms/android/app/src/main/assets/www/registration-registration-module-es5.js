(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;width: 100%;border: 1px solid red;\">\n  <ion-card class=\"ionCard\">\n\n    <div>\n      <h3 style=\"color: azure;text-align: center;\"> Register </h3>\n    </div>\n    \n    <form action=\"\"[formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\n      <div class=\"formField\">\n        <section>\n          <header>Name</header>\n          <ion-input formControlName=\"firstName\" type=\"text\" ></ion-input>\n        </section>\n      </div>\n\n      <div class=\"formField\">\n        <section>\n          <header>Last Name</header>\n          <ion-input formControlName=\"lastName\" type=\"text\"></ion-input>\n        </section>\n      </div>\n\n      <div class=\"formField\">\n        <section>\n          <header>Email</header>\n          <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n        </section>\n      </div>\n\n      <div class=\"formField\">\n          <section>\n            <header>Password</header>\n            <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n          </section>\n      </div>\n\n      <div class=\"formField\">\n        <section>\n          <ion-button color=\"primary\" type=\"submit\" slot=\"end\">Register</ion-button>\n        </section>\n      </div>\n    </form>\n\n    <!-- horizontal hr line -->\n    <hr style=\"border: 0.1px solid rgb(58, 117, 184);\">\n    \n    <div>\n      <div>\n        <section>\n          <h6> Already Have Account ? </h6>\n          <a class=\"login\" routerLink=\"/login\">LogIn</a>\n        </section>\n      </div>\n    </div>\n\n  </ion-card>\n</div>"

/***/ }),

/***/ "./src/app/registration/registration-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");




var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
var RegistrationPageRoutingModule = /** @class */ (function () {
    function RegistrationPageRoutingModule() {
    }
    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistrationPageRoutingModule);
    return RegistrationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");








var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionCard {\n  background: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n  margin: auto;\n}\n\nion-input {\n  color: snow;\n  border: 1px solid steelblue;\n  border-radius: 10px;\n}\n\nbody {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #fff;\n  background: url('COVER_IMAGE560977350.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.formField {\n  margin: 15px;\n}\n\nheader {\n  color: thistle;\n  margin-bottom: 5px;\n}\n\n.login {\n  text-decoration: none;\n  font-size: 17px;\n  text-transform: uppercase;\n  letter-spacing: normal;\n  color: #ec8143;\n}\n\na:hover {\n  color: skyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYmljb21wL2lvbmljL215QXBwL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtBQ0FKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLDREQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uQ2FyZHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vIHRvcDogNTAlO1xuICAgIC8vIGxlZnQ6IDUwJTtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbn1cblxuaW9uLWlucHV0e1xuICAgIGNvbG9yOiBzbm93O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ09WRVJfSU1BR0U1NjA5NzczNTAuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZm9ybUZpZWxke1xuICAgIG1hcmdpbjogMTVweDtcbn1cblxuaGVhZGVye1xuICAgIGNvbG9yOnRoaXN0bGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubG9naW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6IHJnYigyMzYsIDEyOSwgNjcpO1xufVxuXG5cbmE6aG92ZXJ7XG4gICAgY29sb3I6IHNreWJsdWU7XG59IiwiLmlvbkNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IHNub3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9DT1ZFUl9JTUFHRTU2MDk3NzM1MC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5mb3JtRmllbGQge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmhlYWRlciB7XG4gIGNvbG9yOiB0aGlzdGxlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5sb2dpbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2VjODE0Mztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBza3libHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registration/registration.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(router) {
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    // firstName = new FormControl();
    // lastName = new FormControl();
    // email = new FormControl();
    // password = new FormControl();
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.onRegister = function () {
        console.log(this.registerForm.value);
        if (this.registerForm.valid) {
            this.router.navigateByUrl('login');
        }
    };
    RegistrationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.page.html"),
            styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/registration/registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es5.js.map