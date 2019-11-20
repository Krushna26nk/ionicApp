(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ion-card class=\"ionCard\">\n\n    <div>\n      <h3 style=\"color: azure;text-align: center;\"> Log In </h3>\n    </div>\n    \n    <form action=\"\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n      <div class=\"formField\">\n        <section>\n          <header>User Name</header>\n          <ion-input formControlName=\"userName\" type=\"text\" ></ion-input>\n        </section>\n      </div>\n\n      <div class=\"formField\">\n          <section>\n            <header>Password</header>\n            <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n            <a class=\"forgetPass\" routerLink=\"forget\">Forget Password ?</a>\n          </section>\n      </div>\n\n      <div class=\"formField\">\n        <section>\n          <ion-button type=\"submit\" color=\"primary\" slot=\"end\">LogIn</ion-button>\n        </section>\n      </div>\n    </form>\n\n    <!-- horizontal hr line -->\n    <hr style=\"border: 0.1px solid rgb(58, 117, 184);\">\n    \n    <div>\n      <div>\n        <section>\n          <h6> Don't Have Account ? </h6>\n          <a class=\"register\" routerLink=\"/registration\">Register</a>\n        </section>\n      </div>\n    </div>\n\n  </ion-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionCard {\n  background: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n\nion-input {\n  color: snow;\n  border: 1px solid steelblue;\n  border-radius: 10px;\n}\n\n.loginTitle {\n  font-size: 22px;\n  font-weight: 200;\n  text-transform: uppercase;\n  align-self: center;\n}\n\nbody {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #fff;\n  background: url('COVER_IMAGE560977350.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.formField {\n  margin: 15px;\n}\n\nheader {\n  color: thistle;\n  margin-bottom: 5px;\n}\n\n.register {\n  text-decoration: none;\n  font-size: 17px;\n  text-transform: uppercase;\n  letter-spacing: normal;\n  color: #ec8143;\n}\n\n.forgetPass {\n  font-size: 12px;\n  text-decoration: none;\n  text-align: center;\n}\n\na:hover {\n  color: skyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYmljb21wL2lvbmljL215QXBwL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNERBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbkNhcmR7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG5cbmlvbi1pbnB1dHtcbiAgICBjb2xvcjogc25vdztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxvZ2luVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG59XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9DT1ZFUl9JTUFHRTU2MDk3NzM1MC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5mb3JtRmllbGR7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuXG5oZWFkZXJ7XG4gICAgY29sb3I6dGhpc3RsZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZWdpc3RlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogcmdiKDIzNiwgMTI5LCA2Nyk7XG59XG5cbi5mb3JnZXRQYXNze1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hOmhvdmVye1xuICAgIGNvbG9yOiBza3libHVlO1xufSIsIi5pb25DYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IHNub3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxvZ2luVGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9DT1ZFUl9JTUFHRTU2MDk3NzM1MC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5mb3JtRmllbGQge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmhlYWRlciB7XG4gIGNvbG9yOiB0aGlzdGxlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2VjODE0Mztcbn1cblxuLmZvcmdldFBhc3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHNreWJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var LoginPage = /** @class */ (function () {
    function LoginPage(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        var inputData = JSON.stringify(this.loginForm.value);
        this.userService.login(inputData)
            .then(function (data) {
            console.log('data in then', data.userName);
            _this.router.navigateByUrl('/dashboard');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        this.loginData = {
            userName: 'Krushna26nk',
            password: '123456'
        };
    }
    UserService.prototype.login = function (data) {
        var privateData = JSON.stringify(this.loginData);
        return new Promise(function (resolve, reject) {
            if (data === privateData) {
                console.log(data);
                resolve(JSON.parse(data));
            }
            else {
                console.log('error');
                reject('error');
            }
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map