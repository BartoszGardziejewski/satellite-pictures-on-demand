(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n\r\n  <h4> change password </h4>\r\n  <div class=\"infoBox\">\r\n    <p [hidden]=\"!badPasswords\" > {{error_text}} </p>\r\n    <p [hidden]=\"!actionComplete\" > {{info_text}} </p>\r\n    <div *ngIf=\"badPasswords\" >\r\n      <p *ngFor=\"let value of passwordErrors\"> {{value}} </p>\r\n    </div>\r\n  </div>\r\n  <form class=\"customForm\" #formData = \"ngForm\" (ngSubmit) = \"changePassword(formData)\" >\r\n    <input class=\"textInput\" type = \"password\" (focus)=\"badPasswords = false\" [class.wrongInput]=\"badPasswords\" name = \"newpassword\" placeholder = \"new password\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" type = \"password\" (focus)=\"badPasswords = false\" [class.wrongInput]=\"badPasswords\" name = \"renewpassword\" placeholder = \"reenter new password\" ngModel>\r\n    <br/>\r\n    <input type = \"submit\" value = \"change password\" class=\"customButton\">\r\n  </form>\r\n\r\n  <br/>\r\n  <button (click)=\"logout()\" class=\"customButton removeButton\" >LOGOUT</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, data) {
        var _this = this;
        this.router = router;
        this.data = data;
        this.badPasswords = false;
        this.actionComplete = false;
        this.logout = function () {
            _this.data.logout().subscribe(function (data) {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('csrftoken');
                _this.data.setToken('');
            });
            _this.router.navigateByUrl('/');
        };
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.changePassword = function (formData) {
        var _this = this;
        this.badPasswords = false;
        if (formData.value.newpassword === formData.value.renewpassword) {
            this.data.changePassword(formData.value.newpassword, formData.value.oldpassword).subscribe(function (data) {
                _this.actionComplete = true;
                _this.info_text = 'password changed';
            }, function (error) {
                if (error.status === 400) {
                    if (error.error['new_password2'] !== undefined) {
                        _this.passwordErrors = error.error['new_password2'];
                    }
                    _this.badPasswords = true;
                }
                else if (error.status === 504) {
                    _this.error_text = 'server is not responding';
                    _this.badPasswords = true;
                }
            });
        }
        else {
            this.error_text = 'passwords are different';
            this.badPasswords = true;
        }
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/add-subscription/add-subscription.component.html":
/*!******************************************************************!*\
  !*** ./src/app/add-subscription/add-subscription.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n  <div class=\"backButton\" (click)=\"backToSubscription()\"> Back </div>\r\n  <h2> insert subscription data </h2>\r\n  <form class=\"customForm\" #formData = \"ngForm\" (ngSubmit) = \"onClickSubmit(formData)\" >\r\n    <input class=\"textInput\" type = \"text\" name = \"name\" placeholder = \"subscription name\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" type = \"text\" name = \"coordinates\" placeholder = \"coordinates\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" type = \"text\" name = \"end_date\" placeholder = \"end date (yyyy-mm-dd) \" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" type = \"text\" name = \"periodicity\" placeholder = \"periodicity in weeks\" ngModel>\r\n    <br/>\r\n    <input type = \"submit\" value = \"create subscription\" class=\"customButton\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-subscription/add-subscription.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/add-subscription/add-subscription.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backButton {\n  display: flex;\n  position: relative;\n  font-size: 25px;\n  left: 50px;\n  top: 20px;\n  padding: 4px 9px; }\n\n.backButton:hover {\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 15px;\n  border-left: #222222 3px solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXN1YnNjcmlwdGlvbi9EOlxcU3R1ZGlhXFxTZW1lc3QwOFxcSVRfQVBQXFxSZXBvXFxzYXRlbGxpdGUtcGljdHVyZXMtb24tZGVtYW5kXFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxhZGQtc3Vic2NyaXB0aW9uXFxhZGQtc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUVsQixnQkFBZTtFQUVmLFdBQVU7RUFDVixVQUFTO0VBRVQsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZ0JBQWU7RUFFZixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLCtCQUE4QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdWJzY3JpcHRpb24vYWRkLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrQnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBmb250LXNpemU6IDI1cHg7XHJcblxyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgdG9wOiAyMHB4O1xyXG5cclxuICBwYWRkaW5nOiA0cHggOXB4O1xyXG59XHJcbi5iYWNrQnV0dG9uOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgcGFkZGluZzogNHB4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAjMjIyMjIyIDNweCBzb2xpZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-subscription/add-subscription.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-subscription/add-subscription.component.ts ***!
  \****************************************************************/
/*! exports provided: AddSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubscriptionComponent", function() { return AddSubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddSubscriptionComponent = /** @class */ (function () {
    function AddSubscriptionComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AddSubscriptionComponent.prototype.ngOnInit = function () {
    };
    AddSubscriptionComponent.prototype.onClickSubmit = function (formData) {
        var _this = this;
        var subscription = {
            id: null,
            name: formData.value.name,
            coordinates: formData.value.coordinates,
            periodicity: formData.value.periodicity,
            end_date: formData.value.end_date
        };
        this.dataService.addSubscription(subscription).subscribe(function (data) {
            _this.router.navigateByUrl('/subscriptions');
        }, function (error) {
        });
    };
    AddSubscriptionComponent.prototype.backToSubscription = function () {
        this.router.navigate(['/subscriptions']);
    };
    AddSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-subscription',
            template: __webpack_require__(/*! ./add-subscription.component.html */ "./src/app/add-subscription/add-subscription.component.html"),
            styles: [__webpack_require__(/*! ./add-subscription.component.scss */ "./src/app/add-subscription/add-subscription.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSubscriptionComponent);
    return AddSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscriptions/subscriptions.component */ "./src/app/subscriptions/subscriptions.component.ts");
/* harmony import */ var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscription/subscription.component */ "./src/app/subscription/subscription.component.ts");
/* harmony import */ var _add_subscription_add_subscription_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-subscription/add-subscription.component */ "./src/app/add-subscription/add-subscription.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'offer', component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__["OfferComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'subscriptions', component: _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_7__["SubscriptionsComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"] },
    { path: 'subscription/:id', component: _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__["SubscriptionComponent"] },
    { path: 'addSubscription', component: _add_subscription_add_subscription_component__WEBPACK_IMPORTED_MODULE_9__["AddSubscriptionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <app-navigation></app-navigation>\r\n\r\n  <section class=\"mainPage\" >\r\n    <p class=\"sourceName\"><a href=\"https://www.nasa.gov/mission_pages/station/multimedia/gallery/iss027e036716.html\">https://www.nasa.gov/mission_pages/station/multimedia/gallery/iss027e036716.html</a></p>\r\n    <router-outlet></router-outlet>\r\n  </section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: grid;\n  grid-template-rows: 100px auto;\n  height: 100%;\n  background-color: black; }\n\n.mainPage {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  background-color: black;\n  background-image: url(\"https://www.nasa.gov/sites/default/files/images/557885main_iss027e036716_full.jpg\");\n  background-size: cover; }\n\n.mainPage .sourceName {\n    position: fixed;\n    bottom: 5px;\n    left: 10px; }\n\n.mainPage .sourceName a {\n      font-weight: lighter;\n      font-size: 10px;\n      color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFN0dWRpYVxcU2VtZXN0MDhcXElUX0FQUFxcUmVwb1xcc2F0ZWxsaXRlLXBpY3R1cmVzLW9uLWRlbWFuZFxcQW5ndWxhckFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLCtCQUE4QjtFQUM5QixhQUFZO0VBQ1osd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsYUFBWTtFQUVaLFdBQVU7RUFDVixVQUFTO0VBQ1Qsd0JBQXVCO0VBQ3ZCLDJHQUEwRztFQUMxRyx1QkFBc0IsRUFhdkI7O0FBcEJEO0lBV0ksZ0JBQWU7SUFDZixZQUFXO0lBQ1gsV0FBVSxFQU1YOztBQW5CSDtNQWVNLHFCQUFvQjtNQUNwQixnQkFBZTtNQUNmLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWFpblBhZ2V7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5uYXNhLmdvdi9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ltYWdlcy81NTc4ODVtYWluX2lzczAyN2UwMzY3MTZfZnVsbC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcblxyXG4gIC5zb3VyY2VOYW1le1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYXtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subscriptions/subscriptions.component */ "./src/app/subscriptions/subscriptions.component.ts");
/* harmony import */ var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subscription/subscription.component */ "./src/app/subscription/subscription.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _subsciption_thumbnail_subsciption_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subsciption-thumbnail/subsciption-thumbnail.component */ "./src/app/subsciption-thumbnail/subsciption-thumbnail.component.ts");
/* harmony import */ var _add_subscription_add_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-subscription/add-subscription.component */ "./src/app/add-subscription/add-subscription.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _offer_offer_component__WEBPACK_IMPORTED_MODULE_10__["OfferComponent"],
                _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_11__["SubscriptionsComponent"],
                _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_12__["SubscriptionComponent"],
                _subsciption_thumbnail_subsciption_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__["SubsciptionThumbnailComponent"],
                _add_subscription_add_subscription_component__WEBPACK_IMPORTED_MODULE_15__["AddSubscriptionComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_16__["AccountComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        //  urlBase = 'http://localhost:8000/';
        //  urlBase = 'http://localhost:5000/api/v1/';
        this.urlBase = '/api/v1/';
        this.token = '';
    }
    DataService.prototype.getURLbase = function () {
        return this.urlBase;
    };
    DataService.prototype.getToke = function () {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken') === null || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken') === undefined) {
            return '';
        }
        return ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken');
    };
    DataService.prototype.setToken = function (token) {
        this.token = token;
    };
    DataService.prototype.logout = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken')
        });
        return this.http.post(this.urlBase + 'auth/logout/', {}, { headers: headers });
    };
    DataService.prototype.getUser = function () {
        return this.username;
    };
    DataService.prototype.getSubscriptions = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken'),
            'Authorization': 'Token ' + this.token
        });
        return this.http.get(this.urlBase + 'subscriptions', { headers: headers });
    };
    DataService.prototype.getSubscription = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken'),
            'Authorization': 'Token ' + this.token
        });
        return this.http.get(this.urlBase + 'subscriptions/' + id, { headers: headers });
    };
    DataService.prototype.addSubscription = function (subscription) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken'),
            'Authorization': 'Token ' + this.token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('user_id', this.token);
        params = params.append('name', subscription.name);
        params = params.append('coordinates', subscription.coordinates);
        params = params.append('periodicity', subscription.periodicity);
        params = params.append('end_date', subscription.end_date);
        return this.http.post(this.urlBase + 'subscriptions/', {
            'name': subscription.name,
            'coordinates': subscription.coordinates,
            'periodicity': subscription.periodicity,
            'end_date': subscription.end_date
        }, { params: params, headers: headers });
    };
    DataService.prototype.removeSubscription = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken'),
            'Authorization': 'Token ' + this.token
        });
        return this.http.delete(this.urlBase + 'subscriptions/' + id + '/', { headers: headers });
    };
    DataService.prototype.login = function (username, password) {
        this.username = username;
        return this.http.post(this.urlBase + 'auth/login/', { 'username': username, 'password': password });
    };
    DataService.prototype.register = function (username, password, email, first_name, last_name) {
        this.username = username;
        return this.http.post(this.urlBase + 'auth/registration/', {
            'username': username,
            'email': email,
            'password1': password,
            'password2': password,
            'first_name': first_name,
            'last_name': last_name
        }, {});
    };
    DataService.prototype.changePassword = function (newPassword, oldPassword) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken'),
            'Authorization': 'Token ' + this.token
        });
        return this.http.post(this.urlBase + 'auth/password/change/', {
            new_password1: newPassword,
            new_password2: newPassword
        }, { headers: headers });
    };
    DataService.prototype.getPhotos = function (subscriptionId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-CSRFTOKEN': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('csrftoken'),
            'Authorization': 'Token ' + this.token
        });
        return this.http.get(this.urlBase + 'subscriptions/' + subscriptionId + '/photos/', { headers: headers });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n  <h2 class=\"pageHeader\">Welcome in satellite picture on demand service</h2>\r\n  <div class=\"textFrame\">\r\n    <p>\r\n      Welcome, this site allows companies and individual client to create accounts and subscribe in order to receive satellite pictures of given area in give time interval\r\n    </p>\r\n    <br/>\r\n    <p>\r\n      You can see more about what wy provide in offer section\r\n    </p>\r\n    <br/>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n  <h3>LOGIN</h3>\r\n  <div class=\"infoBox\">\r\n    <p [hidden]=\"!badParameters\" > {{error_text}} </p>\r\n  </div>\r\n  <form class=\"customForm\" #formData = \"ngForm\" (ngSubmit) = \"onClickSubmit(formData)\" >\r\n    <input class=\"textInput\" (focus)=\"cleanError()\" [class.wrongInput]=\"badParameters\" type = \"text\" name = \"username\" placeholder = \"username\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" (focus)=\"cleanError()\" [class.wrongInput]=\"badParameters\" type = \"password\" name = \"password\" placeholder = \"password\" ngModel>\r\n    <br/>\r\n    <input type = \"submit\" value = \"login\" class=\"customButton\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, router) {
        this.data = data;
        this.router = router;
        this.badParameters = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickSubmit = function (loginData) {
        var _this = this;
        this.badParameters = false;
        var username = loginData.value.username;
        var password = loginData.value.password;
        this.data.login(username, password).subscribe(function (data) {
            _this.performLogin(data.key);
        }, function (error) {
            if (error.status === 400) {
                _this.badParameters = true;
                _this.error_text = 'bad username or password';
            }
            else if (error.status === 504) {
                _this.badParameters = true;
                _this.error_text = 'server is not responding';
            }
        });
    };
    LoginComponent.prototype.performLogin = function (token) {
        if (token !== '') {
            this.data.setToken(token);
            this.router.navigateByUrl('/subscriptions');
        }
    };
    LoginComponent.prototype.cleanError = function () {
        this.badParameters = false;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topBar\">\r\n\r\n  <div class=\"topMenu\">\r\n    <ul>\r\n      <ul></ul>\r\n      <ul>\r\n        <li><a routerLink=\"/\" [class.currentPage]=\"currentUrl == '/'\" >Home</a></li>\r\n        <li><a routerLink=\"/offer\" [class.currentPage]=\"currentUrl == '/offer'\">Offer</a></li>\r\n        <li *ngIf=\"data.getToke() !== ''\" ><a routerLink=\"/subscriptions\" [class.currentPage]=\"currentUrl == '/subscriptions'\">Subscriptions</a></li>\r\n      </ul>\r\n      <ul>\r\n        <li *ngIf=\"data.getToke() === ''\" ><a routerLink=\"/login\" [class.currentPage]=\"currentUrl == '/login'\">Login</a></li>\r\n        <li *ngIf=\"data.getToke() === ''\" ><a routerLink=\"/register\" [class.currentPage]=\"currentUrl == '/register'\" class=\"diffButton\">Register</a></li>\r\n        <li *ngIf=\"data.getToke() !== ''\" ><a routerLink=\"/account\" [class.currentPage]=\"currentUrl == '/account'\">Account</a></li>\r\n      </ul>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topBar {\n  padding: 10px;\n  margin: 0;\n  height: 100%;\n  background-color: #000; }\n  .topBar .topMenu {\n    margin: 10px;\n    border-bottom: #DDDDDD 3px solid;\n    border-radius: 20px; }\n  .topBar .topMenu a {\n      color: #DDD;\n      text-transform: uppercase; }\n  .topBar .topMenu h2 {\n      text-align: center;\n      margin: 0; }\n  .topBar .topMenu h2 a {\n        cursor: default;\n        color: #22DDDD;\n        font-size: 30px;\n        font-weight: bold; }\n  .topBar .topMenu ul {\n      display: grid;\n      grid-template-columns: 20% 60% 25%; }\n  .topBar .topMenu ul ul {\n        padding: 0 10px;\n        display: flex;\n        margin-top: 30px;\n        justify-content: center; }\n  .topBar .topMenu ul ul li {\n          float: left;\n          list-style: none;\n          margin-right: 30px;\n          text-align: center; }\n  .topBar .topMenu ul ul li a {\n            font-size: 23px;\n            padding: 4px 9px; }\n  .topBar .topMenu ul ul li a:hover {\n            padding: 4px 6px;\n            border-right: #DDDDDD 3px solid;\n            border-left: #DDDDDD 3px solid;\n            border-radius: 15px;\n            color: #FFFFFF;\n            -webkit-animation-name: hover;\n                    animation-name: hover;\n            -webkit-animation-duration: 500ms;\n                    animation-duration: 500ms;\n            -webkit-animation-iteration-count: initial;\n                    animation-iteration-count: initial; }\n  .topBar .topMenu ul ul li a:focus {\n            outline-color: #22DDDD; }\n  .topBar .topMenu ul ul li .currentPage {\n            padding: 4px 6px;\n            border-right: #DDDDDD 3px solid;\n            border-left: #DDDDDD 3px solid;\n            border-radius: 15px;\n            color: #22DDDD; }\n  @-webkit-keyframes hover {\n  0% {\n    border-radius: 8px; }\n  100% {\n    border-radius: 15px; } }\n  @keyframes hover {\n  0% {\n    border-radius: 8px; }\n  100% {\n    border-radius: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9EOlxcU3R1ZGlhXFxTZW1lc3QwOFxcSVRfQVBQXFxSZXBvXFxzYXRlbGxpdGUtcGljdHVyZXMtb24tZGVtYW5kXFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYTtFQUNiLFVBQVM7RUFDVCxhQUFZO0VBQ1osdUJBQXNCLEVBNEV2QjtFQWhGRDtJQU9JLGFBQVk7SUFDWixpQ0FBZ0M7SUFDaEMsb0JBQW1CLEVBc0VwQjtFQS9FSDtNQVlNLFlBQVc7TUFDWCwwQkFBeUIsRUFDMUI7RUFkTDtNQWlCTSxtQkFBa0I7TUFDbEIsVUFBUyxFQU9WO0VBekJMO1FBb0JRLGdCQUFlO1FBQ2YsZUFBYztRQUNkLGdCQUFlO1FBQ2Ysa0JBQWlCLEVBQ2xCO0VBeEJQO01BNEJNLGNBQWE7TUFDYixtQ0FBa0MsRUFpRG5DO0VBOUVMO1FBZ0NRLGdCQUFlO1FBQ2YsY0FBYTtRQUNiLGlCQUFnQjtRQUNoQix3QkFBdUIsRUEwQ3hCO0VBN0VQO1VBc0NVLFlBQVc7VUFDWCxpQkFBZ0I7VUFDaEIsbUJBQWtCO1VBQ2xCLG1CQUFrQixFQW1DbkI7RUE1RVQ7WUFpRFksZ0JBQWU7WUFDZixpQkFBZ0IsRUFDakI7RUFuRFg7WUFzRFksaUJBQWdCO1lBQ2hCLGdDQUErQjtZQUMvQiwrQkFBOEI7WUFDOUIsb0JBQW1CO1lBQ25CLGVBQWM7WUFFZCw4QkFBcUI7b0JBQXJCLHNCQUFxQjtZQUNyQixrQ0FBeUI7b0JBQXpCLDBCQUF5QjtZQUN6QiwyQ0FBa0M7b0JBQWxDLG1DQUFrQyxFQUNuQztFQS9EWDtZQWtFWSx1QkFBc0IsRUFDdkI7RUFuRVg7WUFzRVksaUJBQWdCO1lBQ2hCLGdDQUErQjtZQUMvQiwrQkFBOEI7WUFDOUIsb0JBQW1CO1lBQ25CLGVBQWMsRUFDZjtFQU9YO0VBQ0U7SUFBTSxtQkFBa0IsRUFBQTtFQUN4QjtJQUFRLG9CQUFtQixFQUFBLEVBQUE7RUFGN0I7RUFDRTtJQUFNLG1CQUFrQixFQUFBO0VBQ3hCO0lBQVEsb0JBQW1CLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wQmFye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cclxuICAudG9wTWVudXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206ICNEREREREQgM3B4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICBhe1xyXG4gICAgICBjb2xvcjogI0RERDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICBoMntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGNvbG9yOiAjMjJEREREO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNjAlIDI1JTtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmRpZmZCdXR0b24ge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpZmZCdXR0b246aG92ZXIge1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA5cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogI0RERERERCAzcHggc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAjREREREREIDNweCBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogaG92ZXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluaXRpYWw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmUtY29sb3I6ICMyMkREREQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmN1cnJlbnRQYWdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAjREREREREIDNweCBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6ICNEREREREQgM3B4IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyRERERDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaG92ZXIge1xyXG4gIDAlICAge2JvcmRlci1yYWRpdXM6IDhweDt9XHJcbiAgMTAwJSAgIHtib3JkZXItcmFkaXVzOiAxNXB4O31cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, data) {
        var _this = this;
        this.router = router;
        this.data = data;
        router.events.subscribe(function (navi) { return _this.bindOnNavigation(navi); });
    }
    NavigationComponent.prototype.bindOnNavigation = function (navi) {
        if (navi.url !== undefined && navi.url !== null) {
            this.currentUrl = navi.url;
        }
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/offer/offer.component.html":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n  <h2 class=\"pageHeader\">Our offer</h2>\r\n  <div class=\"textFrame\">\r\n    <p>\r\n      right now we have one offer, that is account with one subscription for 100$ monthly and every extra subscription to same account 30$ monthly\r\n    </p>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/offer/offer.component.scss":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVyL29mZmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/offer/offer.component.ts":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OfferComponent = /** @class */ (function () {
    function OfferComponent() {
    }
    OfferComponent.prototype.ngOnInit = function () {
    };
    OfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.scss */ "./src/app/offer/offer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n  <h3>CREATE ACCOUNT</h3>\r\n  <div class=\"infoBox\">\r\n    <div *ngIf=\"badUser\" >\r\n      <p *ngFor=\"let value of usernameErrors\"> {{value}} </p>\r\n    </div>\r\n    <div *ngIf=\"badEmail\" >\r\n      <p *ngFor=\"let value of emailErrors\"> {{value}} </p>\r\n    </div>\r\n    <div *ngIf=\"badPasswords\" >\r\n      <p *ngFor=\"let value of passwordErrors\"> {{value}} </p>\r\n    </div>\r\n  </div>\r\n  <form class=\"customForm\" #formData = \"ngForm\" (ngSubmit) = \"onClickSubmit(formData)\" >\r\n    <input class=\"textInput\" (focus)=\"badUser=false\" [class.wrongInput]=\"badUser\" type = \"text\" name = \"username\" placeholder = \"username\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" (focus)=\"badPasswords=false\" [class.wrongInput]=\"badPasswords\" type = \"password\" name = \"password\" placeholder = \"password\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" (focus)=\"badPasswords=false\" [class.wrongInput]=\"badPasswords\" type = \"password\" name = \"repassword\" placeholder = \"reenter password\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" (focus)=\"badEmail=false\" [class.wrongInput]=\"badEmail\" type = \"text\" name = \"email\" placeholder = \"email\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" type = \"text\" name = \"firstName\" placeholder = \"first_name\" ngModel>\r\n    <br/>\r\n    <input class=\"textInput\" type = \"text\" name = \"lastName\" placeholder = \"last_name\" ngModel>\r\n    <br/>\r\n    <input type = \"submit\" value = \"create account\" class=\"customButton\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.badPasswords = false;
        this.badEmail = false;
        this.badUser = false;
        this.error_text = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onClickSubmit = function (formData) {
        var _this = this;
        this.badPasswords = false;
        this.badEmail = false;
        this.badUser = false;
        if (formData.value.password === formData.value.repassword) {
            this.dataService.register(formData.value.username, formData.value.password, formData.value.email, formData.value.firstName, formData.value.lastName)
                .subscribe(function (data) {
                if (data.key !== undefined && data.key !== null) {
                    _this.performRegister(data.key);
                }
            }, function (error) {
                console.log(error);
                if (error.status === 400) {
                    console.log(error.error);
                    if (error.error['username'] !== undefined) {
                        _this.usernameErrors = error.error['username'];
                        _this.badUser = true;
                    }
                    if (error.error['email'] !== undefined) {
                        _this.emailErrors = error.error['email'];
                        _this.badEmail = true;
                    }
                    if (error.error['password1'] !== undefined) {
                        _this.passwordErrors = error.error['password1'];
                        _this.badPasswords = true;
                    }
                }
                else if (error.status === 504) {
                    _this.error_text = 'server is not responding';
                }
            });
        }
        else {
            this.passwordErrors = new Array();
            this.passwordErrors.push('passwords are different');
            this.badPasswords = true;
        }
    };
    RegisterComponent.prototype.performRegister = function (token) {
        if (token !== '') {
            this.dataService.setToken(token);
            this.router.navigateByUrl('/subscriptions');
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/subsciption-thumbnail/subsciption-thumbnail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/subsciption-thumbnail/subsciption-thumbnail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subscriptionFrame\" (click)=\"moveToSubscription()\">\r\n    <div class=\"photoContainer\">\r\n      <img src=\"../../favicon.ico\" alt=\"test photo\">\r\n    </div>\r\n    <div class=\"textContainer\">\r\n    <h3> {{subscription.name}}  </h3>\r\n    <p>\r\n      valid to {{subscription.end_date}}\r\n    </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/subsciption-thumbnail/subsciption-thumbnail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/subsciption-thumbnail/subsciption-thumbnail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscriptionFrame {\n  background-color: #222222;\n  color: #DDDDDD;\n  margin: 5px;\n  padding: 10px;\n  border-left: #44FFFF 5px solid;\n  border-right: #44FFFF 5px solid;\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: 100px auto; }\n\n.subscriptionFrame:hover {\n  cursor: pointer;\n  border-left: #88FFFF 6px solid;\n  border-right: #88FFFF 6px solid; }\n\n.photoContainer {\n  width: 100%;\n  overflow: hidden; }\n\n.photoContainer img {\n    height: 100px;\n    width: 100px;\n    vertical-align: middle;\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NpcHRpb24tdGh1bWJuYWlsL0Q6XFxTdHVkaWFcXFNlbWVzdDA4XFxJVF9BUFBcXFJlcG9cXHNhdGVsbGl0ZS1waWN0dXJlcy1vbi1kZW1hbmRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXHN1YnNjaXB0aW9uLXRodW1ibmFpbFxcc3Vic2NpcHRpb24tdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQXlCO0VBRXpCLGVBQWM7RUFFZCxZQUFXO0VBQ1gsY0FBYTtFQUViLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0Isb0JBQW1CO0VBRW5CLGNBQWE7RUFDYixrQ0FBaUMsRUFDbEM7O0FBRUQ7RUFDRSxnQkFBZTtFQUVmLCtCQUE4QjtFQUM5QixnQ0FBK0IsRUFFaEM7O0FBRUQ7RUFDRSxZQUFXO0VBRVgsaUJBQWdCLEVBU2pCOztBQVpEO0lBTUksY0FBYTtJQUNiLGFBQVk7SUFFWix1QkFBc0I7SUFDdEIsc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3Vic2NpcHRpb24tdGh1bWJuYWlsL3N1YnNjaXB0aW9uLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzY3JpcHRpb25GcmFtZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG5cclxuICBjb2xvcjogI0RERERERDtcclxuXHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgYm9yZGVyLWxlZnQ6ICM0NEZGRkYgNXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogIzQ0RkZGRiA1cHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb25GcmFtZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBib3JkZXItbGVmdDogIzg4RkZGRiA2cHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAjODhGRkZGIDZweCBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5waG90b0NvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/subsciption-thumbnail/subsciption-thumbnail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/subsciption-thumbnail/subsciption-thumbnail.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubsciptionThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsciptionThumbnailComponent", function() { return SubsciptionThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SubsciptionThumbnailComponent = /** @class */ (function () {
    function SubsciptionThumbnailComponent(router) {
        this.router = router;
    }
    SubsciptionThumbnailComponent.prototype.ngOnInit = function () {
    };
    SubsciptionThumbnailComponent.prototype.moveToSubscription = function () {
        this.router.navigate(['/subscription', this.subscription.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubsciptionThumbnailComponent.prototype, "subscription", void 0);
    SubsciptionThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subsciption-thumbnail',
            template: __webpack_require__(/*! ./subsciption-thumbnail.component.html */ "./src/app/subsciption-thumbnail/subsciption-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./subsciption-thumbnail.component.scss */ "./src/app/subsciption-thumbnail/subsciption-thumbnail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubsciptionThumbnailComponent);
    return SubsciptionThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/subscription/subscription.component.html":
/*!**********************************************************!*\
  !*** ./src/app/subscription/subscription.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\"  *ngIf=\"subscription\">\r\n  <div class=\"backButton\" (click)=\"backToSubscription()\"> Back </div>\r\n  <h2>{{subscription.name}}</h2>\r\n  <p>\r\n    location: {{subscription.coordinates}}\r\n    <br/>\r\n    valid to: {{subscription.end_date}}\r\n  </p>\r\n  <div class=\"customButton removeButton\" (click)=\"removeSubscription()\">\r\n    remove Subscription\r\n  </div>\r\n\r\n  <div class=\"contentContainer\">\r\n  <ul *ngIf=\"photos\">\r\n    <li *ngFor=\"let photo of photos\"> <img src={{photo.image_file_ref_path}} > <p>{{photo.date}}</p> </li>\r\n  </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/subscription/subscription.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/subscription/subscription.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }\n  ul li {\n    display: block;\n    float: left;\n    list-style: none;\n    margin-top: 50px;\n    text-align: center;\n    align-items: center; }\n  ul li img {\n      width: 200px;\n      height: 200px; }\n  .backButton {\n  display: flex;\n  position: relative;\n  font-size: 25px;\n  left: 50px;\n  top: 20px;\n  padding: 4px 9px; }\n  .backButton:hover {\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 15px;\n  border-left: #222222 3px solid; }\n  .contentContainer {\n  overflow-y: scroll;\n  max-height: 65vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaXB0aW9uL0Q6XFxTdHVkaWFcXFNlbWVzdDA4XFxJVF9BUFBcXFJlcG9cXHNhdGVsbGl0ZS1waWN0dXJlcy1vbi1kZW1hbmRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXHN1YnNjcmlwdGlvblxcc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLDZEQUE0RCxFQWM3RDtFQWhCRDtJQUlJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsb0JBQW1CLEVBTXBCO0VBZkg7TUFZTSxhQUFZO01BQ1osY0FBYSxFQUNkO0VBSUw7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBRWxCLGdCQUFlO0VBRWYsV0FBVTtFQUNWLFVBQVM7RUFFVCxpQkFBZ0IsRUFDakI7RUFDRDtFQUNFLGdCQUFlO0VBRWYsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQiwrQkFBOEIsRUFDL0I7RUFFRDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgbGl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2tCdXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbiAgbGVmdDogNTBweDtcclxuICB0b3A6IDIwcHg7XHJcblxyXG4gIHBhZGRpbmc6IDRweCA5cHg7XHJcbn1cclxuLmJhY2tCdXR0b246aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6ICMyMjIyMjIgM3B4IHNvbGlkO1xyXG59XHJcblxyXG4uY29udGVudENvbnRhaW5lcntcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgbWF4LWhlaWdodDogNjV2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/subscription/subscription.component.ts":
/*!********************************************************!*\
  !*** ./src/app/subscription/subscription.component.ts ***!
  \********************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) { return _this.setSubscription(params.get('id')); });
    };
    SubscriptionComponent.prototype.setSubscription = function (id) {
        var _this = this;
        console.log(id);
        this.dataService.getSubscription(id).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.subscription = data;
            _this.dataService.getPhotos(_this.subscription.id).subscribe(function (photos) {
                console.log(JSON.stringify(photos));
                _this.photos = photos;
            });
        });
    };
    SubscriptionComponent.prototype.removeSubscription = function () {
        var _this = this;
        this.dataService.removeSubscription(this.subscription.id).subscribe(function (data) {
            _this.router.navigate(['/subscriptions']);
        });
    };
    SubscriptionComponent.prototype.backToSubscription = function () {
        this.router.navigate(['/subscriptions']);
    };
    SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.component.html */ "./src/app/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/subscription/subscription.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/subscriptions/subscriptions.component.html":
/*!************************************************************!*\
  !*** ./src/app/subscriptions/subscriptions.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBackground\">\r\n  <h1> Welcome {{data.getUser()}}</h1>\r\n  <ul>\r\n    <li (click)=\"addSubscription()\"  class=\"customButton\"><h4 style=\"margin: 5px\">ADD SUBSCRIPTION</h4></li>\r\n  </ul>\r\n  <ul class=\"contentContainer\">\r\n    <li *ngFor=\"let subscripion of subscriptions\"> <app-subsciption-thumbnail [subscription]=\"subscripion\"></app-subsciption-thumbnail> </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/subscriptions/subscriptions.component.scss":
/*!************************************************************!*\
  !*** ./src/app/subscriptions/subscriptions.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  justify-content: center; }\n  ul li {\n    list-style: none;\n    margin-top: 30px;\n    text-align: center; }\n  .contentContainer {\n  overflow-y: scroll;\n  max-height: 50vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaXB0aW9ucy9EOlxcU3R1ZGlhXFxTZW1lc3QwOFxcSVRfQVBQXFxSZXBvXFxzYXRlbGxpdGUtcGljdHVyZXMtb24tZGVtYW5kXFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxzdWJzY3JpcHRpb25zXFxzdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXVCLEVBT3hCO0VBUkQ7SUFHSSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUNuQjtFQUlIO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmlwdGlvbnMvc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRlbnRDb250YWluZXJ7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1heC1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/subscriptions/subscriptions.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/subscriptions/subscriptions.component.ts ***!
  \**********************************************************/
/*! exports provided: SubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsComponent", function() { return SubscriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SubscriptionsComponent = /** @class */ (function () {
    function SubscriptionsComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    SubscriptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.getToke() === '') {
            this.router.navigateByUrl('/');
        }
        else {
            this.data.getSubscriptions().subscribe(function (data) {
                console.log(JSON.stringify(data));
                _this.subscriptions = data;
                _this.subscriptionsJSON = JSON.stringify(data);
            });
        }
    };
    SubscriptionsComponent.prototype.addSubscription = function () {
        this.router.navigateByUrl('/addSubscription');
    };
    SubscriptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscriptions',
            template: __webpack_require__(/*! ./subscriptions.component.html */ "./src/app/subscriptions/subscriptions.component.html"),
            styles: [__webpack_require__(/*! ./subscriptions.component.scss */ "./src/app/subscriptions/subscriptions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SubscriptionsComponent);
    return SubscriptionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Studia\Semest08\IT_APP\Repo\satellite-pictures-on-demand\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map