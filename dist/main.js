(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./default-product/default-product.module": [
		"./src/app/default-product/default-product.module.ts",
		"default-product-default-product-module"
	],
	"./default-shopping-cart/default-shopping-cart.module": [
		"./src/app/default-shopping-cart/default-shopping-cart.module.ts",
		"default-shopping-cart-default-shopping-cart-module"
	],
	"./layouts/default/default.module": [
		"./src/app/layouts/default/default.module.ts",
		"layouts-default-default-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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



var routes = [
    {
        // loadChildren: './admin-orders/admin-orders.module#AdminOrdersModule'
        path: 'dashboards',
        loadChildren: './layouts/default/default.module#DefaultModule'
    },
    {
        path: 'products',
        loadChildren: './default-product/default-product.module#DefaultProductModule'
    },
    {
        path: 'shopping-cart',
        loadChildren: './default-shopping-cart/default-shopping-cart.module#DefaultShoppingCartModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n\n\n \n\n  <router-outlet></router-outlet>\n\n  "

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
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shares/services/user.service */ "./src/app/shares/services/user.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bs-navbar/bs-navbar.component */ "./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shares/services/auth-guard.service */ "./src/app/shares/services/auth-guard.service.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var _bs_navbar_bs_navbar_modules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bs-navbar/bs-navbar.modules */ "./src/app/bs-navbar/bs-navbar.modules.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_order_details_user_order_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-order-details/user-order-details.component */ "./src/app/user-order-details/user-order-details.component.ts");
/* harmony import */ var _my_orders_orders_status_orders_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-orders/orders-status/orders-status.component */ "./src/app/my-orders/orders-status/orders-status.component.ts");
/* harmony import */ var _shares_services_missingtemplate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shares/services/missingtemplate.component */ "./src/app/shares/services/missingtemplate.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");


























//import { ProductCardComponent } from './product-card/product-card.component';
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_9__["BsNavbarComponent"],
                //AddstockComponent,
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_10__["MyOrdersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _my_orders_orders_status_orders_status_component__WEBPACK_IMPORTED_MODULE_20__["OrdersStatusComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__["EditProfileComponent"],
                _user_order_details_user_order_details_component__WEBPACK_IMPORTED_MODULE_19__["UserOrderDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_23__["CustomFormsModule"],
                //DefaultModule,
                //ProductsModule,
                //SharesModule,
                _bs_navbar_bs_navbar_modules__WEBPACK_IMPORTED_MODULE_17__["NavbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_14__["ParticlesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"]]
                    },
                    isolate: false
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
                    //{path: 'add', component: AddstockComponent},
                    { path: 'my/orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_10__["MyOrdersComponent"], canActivate: [_shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
                    { path: 'edit/profile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__["EditProfileComponent"], canActivate: [_shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
                    {
                        path: 'view/orders/details/:id', component: _user_order_details_user_order_details_component__WEBPACK_IMPORTED_MODULE_19__["UserOrderDetailsComponent"], canActivate: [_shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
                    },
                ]),
            ],
            providers: [
                { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["MissingTranslationHandler"], useClass: _shares_services_missingtemplate_component__WEBPACK_IMPORTED_MODULE_21__["MyMissingTranslationHandler"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.dropdown-toggle{\r\n    cursor: pointer;\r\n}\r\n\r\n.bg-blue {background-color:#007EDB;}\r\n\r\n.navbar-brand img { height:30px; }\r\n\r\n.navbar-dark .navbar-nav .nav-link {color:#fff;}\r\n\r\n.navbar-dark .navbar-nav .active .nav-link {color:#fff;}\r\n\r\n.text{ \r\n    font-size: 15px;\r\n    width: 200px;\r\n    height:50px; \r\n    font-family: cursive;\r\n    font-weight: 1000;\r\n    background-color: black;\r\n    color:white;\r\n    border: 2px red solid;\r\n    padding-left: 20px;\r\n    \r\n}\r\n\r\n.modal-body {\r\n\r\n    padding-left: 140px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnMtbmF2YmFyL2JzLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRCxVQUFVLHlCQUF5QixDQUFDOztBQUNwQyxvQkFBb0IsWUFBWSxFQUFFOztBQUNsQyxvQ0FBb0MsV0FBVyxDQUFDOztBQUNoRCw0Q0FBNEMsV0FBVyxDQUFDOztBQUl4RDtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1COztDQUV0Qjs7QUFHRDs7SUFFSSxvQkFBb0I7OztDQUd2QiIsImZpbGUiOiJzcmMvYXBwL2JzLW5hdmJhci9icy1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmctYmx1ZSB7YmFja2dyb3VuZC1jb2xvcjojMDA3RURCO31cclxuLm5hdmJhci1icmFuZCBpbWcgeyBoZWlnaHQ6MzBweDsgfVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtjb2xvcjojZmZmO31cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgLm5hdi1saW5rIHtjb2xvcjojZmZmO30gXHJcblxyXG5cclxuXHJcbi50ZXh0eyBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDo1MHB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubW9kYWwtYm9keSB7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiAxNDBweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-blue fixed-top\" *ngIf='!showNav'>\n  <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/products\">\n        <img src=\"assets/images/logo.png\" alt=\"Angular Project\" />\n        <!-- <i class=\"fa fa-leaf\" aria-hidden=\"true\"></i> -->\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n        <ul class=\"nav navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n              <i class=\"fa fa-shopping-cart\" style=\"font-size: 16px\" aria-hidden=\"true\"></i>\n              <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$ | async as cart\">\n                {{ cart.totalItemsCount }} \n              </span>\n            </a>\n          </li> \n        </ul>\n\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" #searchInput type=\"text\"   \n            [placeholder]=\"PlaceHolderText\"\n            (keyup.enter)=\"OnSearch(searchInput.value)\">\n\n          </form> -->\n\n          <ul class=\"nav navbar-nav\">\n\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ 'Sel_lang' | translate }}\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" (click)=\"changeLanguage('en')\">{{ 'Languages.English' | translate }}</a>\n              <a class=\"dropdown-item\" (click)=\"changeLanguage('hi')\">{{ 'Languages.Hindi' | translate }}</a>\n            </div>\n          </li>\n\n        </ul>\n\n\n        \n        <ul class=\"nav navbar-nav\">\n            <ng-template #anonymousUser>\n              <li *ngIf=\"!(user$ | async)\" class=\"nav-item\">\n                <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">Add Stock</button> -->\n\n                  <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal1\">Login</a>\n              </li>\n            </ng-template>\n            <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n              <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{ appUser.name }}\n              </a>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" routerLink=\"/my/orders\">{{ 'MyOrdersLink' | translate }}</a>\n                <a class=\"dropdown-item\" routerLink=\"/edit/profile\">Edit Profile</a>\n            \n                <ng-container *ngIf=\"appUser.isAdmin\">\n                    <a class=\"dropdown-item\" routerLink=\"/dashboards\">Dashboard</a>  \n              \n                </ng-container>\n                <a class=\"dropdown-item\" (click)=\"logout()\">{{ 'LogOutLink' | translate }}</a>\n              </div>\n            </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"modal fade\" id=\"exampleModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel1\">Login With Anyone</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button> \n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"items-center\">\n          <button (click)=\"login()\" type=\"button\" class=\"btn btn-primary\" class=\"text\"><i class=\"fa fa-google\" style=\"font-size:25px;color:red\"></i>Login with Google</button>\n          <br>\n          <br>\n          <button (click)=\"loginFaceBook()\" type=\"button\" class=\"btn btn-primary\" class=\"text\" style=\"padding-left: 10px;\"><i class=\"fa fa-facebook\" style=\"font-size:25px;color:red\"></i>Login with FaceBook</button>\n        \n          <!-- <a routerLink=\"/login/phone/number\" class=\"btn btn-primary\">Login with Phone Number</a> -->\n        </div>\n        \n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">okk</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.ts ***!
  \**************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");








var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, cookie, shoppingCartService, translate, activatedRoute, db) {
        this.auth = auth;
        this.cookie = cookie;
        this.shoppingCartService = shoppingCartService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.db = db;
        this.showNav = false;
        this.language = this.cookie.get("language");
        translate.addLangs(["en", "hi"]);
        translate.setDefaultLang(this.language);
        if (!this.language) {
            this.cookie.set("language", "en");
            console.log(this.language);
            var browserLang = translate.getBrowserLang();
            translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
        }
    }
    BsNavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    BsNavbarComponent.prototype.loginFaceBook = function () {
        this.auth.loginFaceBook();
    };
    BsNavbarComponent.prototype.changeLanguage = function (lang) {
        this.cookie.set("language", lang);
        this.translate.use(lang);
    };
    BsNavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // subscribe to router event
                        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
                            var locale = param['locale'];
                            if (locale !== undefined) {
                                _this.translate.use(locale);
                            }
                        });
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.modules.ts":
/*!************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.modules.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shares_shares_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/shares.module */ "./src/app/shares/shares.module.ts");




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shares_shares_module__WEBPACK_IMPORTED_MODULE_3__["SharesModule"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n\n\n          <div class=\"form-group\">\n              <label for=\"name\">Name </label>\n              <input #name=\"ngModel\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" required placeholder=\"Big Name\">\n              <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n                Product Full Name is Required.\n              </div>\n          </div>\n\n\n          <div class=\"form-group\"> \n              <label for=\"number\">Number</label>\n              <div class=\"input-group-prepend\">\n                <input #number=\"ngModel\" [(ngModel)]=\"user.number\" name=\"number\" id=\"number\" type=\"number\" class=\"form-control\" placeholder=\"35.00\" required [min]=\"0\">\n              </div> \n              <div class=\"alert alert-danger\" *ngIf=\"number.touched && number.invalid\">\n                <div *ngIf=\"number.errors.required\">Number is required.</div>\n             </div>  \n            </div>\n\n            <div class=\"form-group\">\n                <label>Select Language</label>\n                <div class=\"form-control\">\n                  <label for=\"male\" class=\"radio-inline\">\n                    <input type=\"radio\" value=\"male\" name=\"gender\" [(ngModel)]=\"user.gender\">\n                     Male\n                  </label>\n    \n                  <label for=\"female\" class=\"radio-inline\">\n                      <input type=\"radio\" value=\"female\" name=\"gender\" [(ngModel)]=\"user.gender\">\n                      Female\n                    </label>\n                </div>\n            </div>\n    \n\n          \n            <button class=\"btn btn-primary\">Save</button>\n       </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _shares_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/services/user.service */ "./src/app/shares/services/user.service.ts");




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(auth, userService) {
        var _this = this;
        this.auth = auth;
        this.userService = userService;
        this.user = {};
        this.auth.appUser$.subscribe(function (appUser) {
            _this.appUser = appUser;
            console.log(appUser.$key);
        });
    }
    EditProfileComponent.prototype.save = function (user) {
        this.userService.update(this.appUser.$key, user);
    };
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shares_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{ \r\n    font-size: 15px;\r\n    width: 200px;\r\n    height:50px; \r\n    font-family: cursive;\r\n    font-weight: 1000;\r\n    background-color: black;\r\n    color:white;\r\n    border: 2px red solid;\r\n    \r\n}\r\n\r\n\r\n.top {\r\n    padding-top: 80px;\r\n    padding-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixzQkFBc0I7O0NBRXpCOzs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7IFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCByZWQgc29saWQ7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50b3Age1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n  <button (click)=\"login()\" type=\"button\" class=\"btn btn-primary\" class=\"text\"><i class=\"fa fa-google\" style=\"font-size:25px;color:red\"></i>Login with Google</button>\n  <button (click)=\"loginFaceBook()\" type=\"button\" class=\"btn btn-primary\" class=\"text\"><i class=\"fa fa-facebook\" style=\"font-size:25px;color:red\"></i>Login with FaceBook</button>\n\n  <!-- <a routerLink=\"/login/phone/number\" class=\"btn btn-primary\">Login with Phone Number</a> -->\n</div>"

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
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(db, auth) {
        this.db = db;
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent.prototype.loginFaceBook = function () {
        this.auth.loginFaceBook();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\r\n    padding-top: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n  <h1>Customer Orders</h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>OrderId</th>\n        <th>Name</th>\n        <th>Date</th>\n        <th></th>\n      </tr>\n    </thead> \n    <tbody> \n      <tr *ngFor=\"let order of orders$ | async\">\n        <td>{{ order.$key }}</td>\n        <td>{{ order.shipping.name }}</td>\n        <td>{{ order.dataPlaced | date}}</td>\n        <td>\n            <a [routerLink]=\"['/view/orders/details', order.$key]\">View</a>\n        </td>\n      </tr>\n    </tbody>  \n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _shares_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/services/order.service */ "./src/app/shares/services/order.service.ts");




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(authService, orderService) {
        this.authService = authService;
        this.orderService = orderService;
        this.orders$ = authService.user$.switchMap(function (u) { return orderService.getOrdersByUser(u.uid); });
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shares_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/orders-status/orders-status.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/my-orders/orders-status/orders-status.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-backdrop {\r\n    position: relative;\r\n  }\r\n\r\n.modal-dialog {\r\n      padding-top: 40px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL29yZGVycy1zdGF0dXMvb3JkZXJzLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0dBQ3BCOztBQUVIO01BQ00sa0JBQWtCO0dBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL29yZGVycy1zdGF0dXMvb3JkZXJzLXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/my-orders/orders-status/orders-status.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/my-orders/orders-status/orders-status.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Order Status \n</h1>\n\n<div *ngIf=\"order$ | async as order\">\n\n<table class=\"table\"> \n   <thead>\n     <tr>\n       <th>Order Status</th>\n       <th>Date</th>\n       <th>Time</th>\n     </tr>\n   </thead>\n   <tbody>\n     <tr *ngIf=\"order.order.order.status\">\n       <td>{{ order.order.order.name }} </td>\n       <td>{{ order.order.order.dataCreated | date }}</td>\n       <td>{{ order.order.order.dataCreated | date : 'HH:mm:ss' }}</td>\n     </tr>\n     \n     <tr *ngIf=\"order.order.leave.status\">\n       <td>{{ order.order.leave.name }}</td>  \n       <td>{{ order.order.leave.dataCreated | date  }}</td>  \n       <td>{{ order.order.leave.dataCreated | date : 'HH:mm:ss' }}</td> \n     </tr>\n\n     <tr *ngIf=\"order.order.process.status\">\n       <td>{{ order.order.process.name }}</td>  \n       <td>{{ order.order.process.dataCreated | date  }}</td>  \n       <td>{{ order.order.process.dataCreated | date : 'HH:mm:ss' }}</td>  \n     </tr>\n\n     <tr *ngIf=\"order.order.city.status\">\n       <td>{{ order.order.city.name }}</td>    \n       <td>{{ order.order.city.dataCreated | date }}</td>\n       <td>{{ order.order.city.dataCreated | date : 'HH:mm:ss' }}</td>\n     </tr>\n\n     <tr *ngIf=\"order.order.delivery.status\">\n       <td>{{ order.order.delivery.name }}</td>   \n       <td>{{ order.order.delivery.dataCreated | date  }}</td> \n       <td>{{ order.order.delivery.dataCreated | date : 'HH:mm:ss' }}</td>\n     </tr>\n\n     <tr *ngIf=\"order.order.receive.status\">\n       <td>{{ order.order.receive.name }}</td>\n       <td>{{ order.order.receive.dataCreated | date  }}</td> \n       <td>{{ order.order.receive.dataCreated | date : 'HH:mm:ss' }}</td>     \n     </tr>\n   </tbody>\n </table>\n\n</div>"

/***/ }),

/***/ "./src/app/my-orders/orders-status/orders-status.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/my-orders/orders-status/orders-status.component.ts ***!
  \********************************************************************/
/*! exports provided: OrdersStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersStatusComponent", function() { return OrdersStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _shares_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shares/services/order.service */ "./src/app/shares/services/order.service.ts");
/* harmony import */ var _shares_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shares/services/category.service */ "./src/app/shares/services/category.service.ts");







var OrdersStatusComponent = /** @class */ (function () {
    function OrdersStatusComponent(router, route, db, auth, orderService, categoryService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.auth = auth;
        this.orderService = orderService;
        this.categoryService = categoryService;
        this.orders = {};
        this.categories = {};
        this.product = {};
        this.orderId = route.snapshot.paramMap.get('id');
        this.order$ = orderService.get(this.orderId);
        orderService.get(this.orderId).subscribe(function (orders) {
            _this.orders = orders;
            console.log(_this.orders);
        });
    }
    OrdersStatusComponent.prototype.save = function (product) {
        var status = product.category;
        console.log(status);
        this.orderService.update(status, this.orderId);
    };
    OrdersStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.appUser$.subscribe(function (appUser) {
            _this.appUser = appUser;
            console.log(_this.appUser);
        });
    };
    OrdersStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-status',
            template: __webpack_require__(/*! ./orders-status.component.html */ "./src/app/my-orders/orders-status/orders-status.component.html"),
            styles: [__webpack_require__(/*! ./orders-status.component.css */ "./src/app/my-orders/orders-status/orders-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shares_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _shares_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
    ], OrdersStatusComponent);
    return OrdersStatusComponent;
}());



/***/ }),

/***/ "./src/app/shares/models/order-cart.ts":
/*!*********************************************!*\
  !*** ./src/app/shares/models/order-cart.ts ***!
  \*********************************************/
/*! exports provided: OrderCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCart", function() { return OrderCart; });
var OrderCart = /** @class */ (function () {
    function OrderCart() {
        this.items = [];
    }
    return OrderCart;
}());



/***/ }),

/***/ "./src/app/shares/models/shopping-cart-item.ts":
/*!*****************************************************!*\
  !*** ./src/app/shares/models/shopping-cart-item.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () { return this.price * this.quantity; },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/shares/models/shopping-cart.ts":
/*!************************************************!*\
  !*** ./src/app/shares/models/shopping-cart.ts ***!
  \************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/shares/models/shopping-cart-item.ts");


var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            console.log(item);
            // title: item.title,
            // imageUrl: item.imageUrl,
            // price: item.price, 
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartItem"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { $key: productId })));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        var item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.itemsMap)
                count += this.itemsMap[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/shares/product-card/product-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shares/product-card/product-card.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card-footer{\r\n    padding: 0;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.card-footer button{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkLWZvb3RlcntcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIGJ1dHRvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shares/product-card/product-card.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shares/product-card/product-card.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n    <a [routerLink]=\"['/products/products/details/', product.$key]\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to Shop\" >\n  <img *ngIf=\"product.imageUrl\" height=\"270\" width=\"40\" class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"{{ product.title }}\">\n  </a> \n \n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ product.title }}</h5>\n\n    <div *ngIf=\"!product.offer; else elseBlock\">\n        <p class=\"card-text\" style=\"color: #B12704; font-size: 21px\">{{ product.price | currency: \"&#8377;\": true}} \n          <p style=\"color: green; font-size: 16px\">No Offer\n        </p>\n    </div>\n            <ng-template #elseBlock>\n              <p class=\"card-text\">\n                  <div>  \n                  <p style=\"color: #B12704; font-size: 21px\"> {{ (product.price) - (product.price * (product.offer/100))  }}\n                      <del style=\"color: black; font-size: 14px\">{{ product.price | currency: \"&#8377;\": true}}</del>\n                      <span style=\"color: black; font-size: 14px\"> Save {{ (product.price * (product.offer/100)) | currency: \"&#8377;\": true }} </span>\n                      <span style=\"color: green; font-size: 16px\">  {{ product.offer }}% Off</span>\n                  \n                  </p>\n                  \n                </div>\n              \n            </ng-template>\n    \n  </div> \n  <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n    <button  \n      *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity \"\n      (click)=\"addToCart()\"\n      class=\"btn btn-secondary btn-block\">{{ 'someOther.add_to_cart' | translate }}</button>\n      <ng-template #updateQuantity>\n        <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\"></product-quantity>\n      </ng-template> \n  </div> \n</div>  "

/***/ }),

/***/ "./src/app/shares/product-card/product-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shares/product-card/product-card.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/shares/models/shopping-cart.ts");




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
        console.log(this.product);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('show-actions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shopping-cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_shopping_cart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/shares/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/shares/product-card/product-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shares/product-quantity/product-quantity.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shares/product-quantity/product-quantity.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9wcm9kdWN0LXF1YW50aXR5L3Byb2R1Y3QtcXVhbnRpdHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shares/product-quantity/product-quantity.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shares/product-quantity/product-quantity.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col-2\">\n      <button\n        (click)=\"removeFromCart()\"\n        class=\"btn btn-secondary btn-block\">-</button>\n    </div>\n    <div class=\"col text-center\">\n        {{ shoppingCart.getQuantity(product) }} {{ 'Shopping.Cart' | translate }}\n    </div>\n    <div class=\"col-2\">\n      <button\n        (click)=\"addToCart()\"\n        class=\"btn btn-secondary btn-block\">+</button>\n    </div>\n  </div>\n\n\n  "

/***/ }),

/***/ "./src/app/shares/product-quantity/product-quantity.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shares/product-quantity/product-quantity.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");



var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        //let cart = this.cartService.getOrCreateCart();
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shopping-cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/shares/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/shares/product-quantity/product-quantity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/shares/services/admin-auth-guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shares/services/admin-auth-guard.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/shares/services/user.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        return this.auth.appUser$
            .map(function (appUser) { return appUser.isAdmin; });
    };
    AdminAuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "./src/app/shares/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shares/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shares/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shares/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/firebase-browser.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/shares/services/user.service.ts");









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, userService, route) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.loginFaceBook = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shares/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shares/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAllEnglish = function () {
        return this.db.list('/categories/English', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService.prototype.getAllHindi = function () {
        return this.db.list('/categories/Hindi', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shares/services/excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shares/services/excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/shares/services/missingtemplate.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shares/services/missingtemplate.component.ts ***!
  \**************************************************************/
/*! exports provided: MyMissingTranslationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMissingTranslationHandler", function() { return MyMissingTranslationHandler; });
var MyMissingTranslationHandler = /** @class */ (function () {
    function MyMissingTranslationHandler() {
    }
    MyMissingTranslationHandler.prototype.handle = function (params) {
        console.log(params);
        return 'Translations not available for ' + params.key;
    };
    return MyMissingTranslationHandler;
}());



/***/ }),

/***/ "./src/app/shares/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shares/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");




var OrderService = /** @class */ (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    OrderService.prototype.placeOrder = function (order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(order);
                        return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.get = function (orderId) {
        return this.db.object('/orders/' + orderId);
    };
    OrderService.prototype.delete = function (orderId) {
        return this.db.object('/orders/' + orderId).remove();
    };
    OrderService.prototype.update = function (statu, orderId) {
        return this.db.object('/orders/' + orderId + '/order/' + statu).update({
            status: "true",
            dataCreated: new Date().getTime()
        });
    };
    OrderService.prototype.updateRate = function (product, orderId) {
        console.log(product);
        console.log(orderId);
        this.db.object('/orders/' + orderId + '/items/' + product.code + '/product/').update({
            price: product.price
        });
        return this.db.object('/orders/' + orderId + '/items/' + product.code).update({
            totalPrice: product.price
        });
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', {
            query: {
                orderByChild: 'userId',
                equalTo: userId
            }
        });
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], OrderService);
    return OrderService;
}());

//let id = this.route.snapshot.paramMap.get('id');
//if (id) this.orderService.get(id).take(1).subscribe(o => this.order = o);


/***/ }),

/***/ "./src/app/shares/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shares/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    //create the product part.
    ProductService.prototype.createBoth = function (product, key) {
        var toSend = this.db.object("/product/both/" + key);
        toSend.set(product);
    };
    //get all the data from  product in hindi or english.
    ProductService.prototype.getAll = function () {
        return this.db.list('/product/english');
    };
    ProductService.prototype.getAllBoth = function () {
        return this.db.list('/product/both');
    };
    ProductService.prototype.getBoth = function (productId) {
        return this.db.object('/product/both/' + productId);
    };
    ProductService.prototype.updateBoth = function (productId, product) {
        return this.db.object('/product/both/' + productId).update(product);
    };
    ProductService.prototype.deleteBoth = function (productId) {
        return this.db.object('/product/both/' + productId).remove();
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shares/services/report.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shares/services/report.service.ts ***!
  \***************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var ReportService = /** @class */ (function () {
    function ReportService(db) {
        this.db = db;
    }
    // get(saleId): Promise<string>
    // {console.log("reports");
    //   return this.db.object('/report/' + saleId).map((response: Response) => response.json)
    // }
    ReportService.prototype.getall = function (saleId) {
        return this.db.list('/report/' + saleId);
    };
    ReportService.prototype.create = function (sale, key) {
        // return this.db.list('/report').push(sale);
        var toSend = this.db.list("/report/" + key + "/");
        return toSend.push(sale);
    };
    ReportService.prototype.update = function (sale, saleId) {
        this.db.object('/report/' + saleId).update(sale);
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/shares/services/shopping-cart.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shares/services/shopping-cart.service.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/shares/models/shopping-cart.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/app/shares/services/product.service.ts");







var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db, productService) {
        this.db = db;
        this.productService = productService;
        this.products = {};
    }
    ShoppingCartService.getCart = function () {
        throw new Error("Method not implemented.");
    };
    ShoppingCartService.prototype.getCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId)
                                .map(function (x) { return new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__["ShoppingCart"](x.items); })];
                }
            });
        });
    };
    // async getCartHindi(): Promise<Observable<ShoppingCart>> {
    //   let cartId = await this.getOrCreateCartId();
    //   return this.db.object('/shopping-carts/' + cartId
    //   )
    //     .map(x => new ShoppingCart(x.itemsorders));
    // }
    ShoppingCartService.prototype.ManualAddToCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ManualupdateItem(product);
                return [2 /*return*/, true];
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.productService.getBoth(product.$key).take(1).subscribe(function (products) {
                    _this.products = products;
                    _this.updateItem(_this.products, 1);
                    //this.updateItemStock(this.products, -1)
                });
                this.productService.getBoth(product.$key).take(1).subscribe(function (products) {
                    _this.products = products;
                    _this.products.name = _this.products.nameH;
                    _this.products.title = _this.products.titleH;
                    //this.updateItemOrderStock(this.products, -1)
                });
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.productService.getBoth(product.$key).take(1).subscribe(function (products) {
                    _this.products = products;
                    _this.updateItem(_this.products, -1);
                    //this.updateItemStock(this.products, 1)
                });
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        this.db.object('/shopping-carts/' + cartId + '/itemsorders').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItemStock = function (product, change) {
        product.stock = product.stock + change;
        this.productService.updateBoth(product.$key, product);
        console.log("English");
    };
    ShoppingCartService.prototype.updateItemOrderStock = function (product, change) {
        product.stock = product.stock + change;
        this.productService.updateBoth(product.$key, product);
        console.log("hindi");
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dataCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getItemorder = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/itemsorders/' + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, item$;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.$key);
                        item$.take(1).subscribe(function (item) {
                            var quantity = (item.quantity || 0) + change;
                            if (quantity === 0)
                                item$.remove();
                            else
                                item$.update({
                                    //product: product,
                                    titleH: product.titleH,
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: (product.price - (product.price * product.offer / 100)),
                                    code: product.code,
                                    quantity: quantity,
                                    offer: product.offer,
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.ManualupdateItem = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, key, toSend;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        key = product.keys;
                        toSend = this.db.object("/shopping-carts/" + cartId + "/items/" + key);
                        toSend.set(product);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.delete = function (id) {
        var cartId = localStorage.getItem('cartId');
        return this.db.object("/shopping-carts/" + cartId + "/items/" + id).remove();
    };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shares/services/stock.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shares/services/stock.service.ts ***!
  \**************************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var StockService = /** @class */ (function () {
    function StockService(db) {
        this.db = db;
    }
    StockService.prototype.get = function (stockId) {
        return this.db.object('/product/both/' + stockId);
    };
    StockService.prototype.getAll = function () {
        return this.db.list('/product/both');
    };
    StockService.prototype.create = function (product, key) {
        // return this.db.list('/stock').push(product);
        var toSend = this.db.object("/stock/" + key);
        toSend.set(product);
    };
    StockService.prototype.update = function (stockId, product) {
        return this.db.object('/product/both/' + stockId).update(product);
    };
    StockService.prototype.delete = function (stockId) {
        return this.db.object('/stock/' + stockId).remove();
    };
    StockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "./src/app/shares/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shares/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        console.log(user);
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            dataCreated: new Date().getTime()
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService.prototype.update = function (uid, user) {
        return this.db.object('/users/' + uid).update(user);
    };
    UserService.prototype.getAll = function () {
        return this.db.list('/users');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shares/services/window.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shares/services/window.service.ts ***!
  \***************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/app/shares/shares-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shares/shares-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesRoutingModule", function() { return SharesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SharesRoutingModule = /** @class */ (function () {
    function SharesRoutingModule() {
    }
    SharesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharesRoutingModule);
    return SharesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shares/shares.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shares/shares.module.ts ***!
  \*****************************************/
/*! exports provided: createTranslateLoader, SharesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesModule", function() { return SharesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shares_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shares-routing.module */ "./src/app/shares/shares-routing.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/shares/services/auth-guard.service.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/shares/services/admin-auth-guard.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/shares/services/user.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/category.service */ "./src/app/shares/services/category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/product.service */ "./src/app/shares/services/product.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/order.service */ "./src/app/shares/services/order.service.ts");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/window.service */ "./src/app/shares/services/window.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/stock.service */ "./src/app/shares/services/stock.service.ts");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/report.service */ "./src/app/shares/services/report.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/excel.service */ "./src/app/shares/services/excel.service.ts");
/* harmony import */ var _services_missingtemplate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/missingtemplate.component */ "./src/app/shares/services/missingtemplate.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/shares/product-card/product-card.component.ts");
/* harmony import */ var _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product-quantity/product-quantity.component */ "./src/app/shares/product-quantity/product-quantity.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");































function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var SharesModule = /** @class */ (function () {
    function SharesModule() {
    }
    SharesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_20__["ProductCardComponent"],
                _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_21__["ProductQuantityComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
                _shares_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_23__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_25__["DataTableModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_26__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forChild([]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"]]
                    },
                    isolate: false
                }),
            ],
            exports: [
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_20__["ProductCardComponent"],
                _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_21__["ProductQuantityComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_23__["CustomFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_25__["DataTableModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_26__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"].forRoot().ngModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"],
                _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuardService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
                _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartService"],
                _services_order_service__WEBPACK_IMPORTED_MODULE_11__["OrderService"],
                _services_window_service__WEBPACK_IMPORTED_MODULE_12__["WindowService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"],
                _services_stock_service__WEBPACK_IMPORTED_MODULE_14__["StockService"],
                _services_report_service__WEBPACK_IMPORTED_MODULE_15__["ReportService"],
                _services_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"],
                { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["MissingTranslationHandler"], useClass: _services_missingtemplate_component__WEBPACK_IMPORTED_MODULE_17__["MyMissingTranslationHandler"] }
            ],
        })
    ], SharesModule);
    return SharesModule;
}());



/***/ }),

/***/ "./src/app/user-order-details/user-order-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/user-order-details/user-order-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n.top {\r\n    padding-top: 80px;\r\n    padding-left: 20px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.tops {\r\n    padding-left: 20px;\r\n}\r\n\r\n.abhay {\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.line {\r\n    display:inline-flex;\r\n\r\n}\r\n\r\n.modal-backdrop{\r\n    position: relative;\r\n  }\r\n\r\n.modal-dialog {\r\n      padding-top: 40px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1vcmRlci1kZXRhaWxzL3VzZXItb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG9CQUFvQjs7Q0FFdkI7O0FBR0Q7SUFDSSxtQkFBbUI7R0FDcEI7O0FBRUQ7TUFDSSxrQkFBa0I7R0FDckIiLCJmaWxlIjoic3JjL2FwcC91c2VyLW9yZGVyLWRldGFpbHMvdXNlci1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRvcHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYWJoYXkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuXHJcbn1cclxuXHJcblxyXG4ubW9kYWwtYmFja2Ryb3B7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user-order-details/user-order-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user-order-details/user-order-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\"> \n  <h1>\n    {{ 'Shopping.Order' | translate }}\n  </h1>\n  \n  <div *ngIf=\"order$ | async as order\">\n  \n  <table class=\"table\"> \n      <thead>\n        <tr>\n          <th></th>\n          <th>{{ 'Shopping.Product' | translate }}</th>\n          <th class=\"text-center\">{{ 'Shopping.Quantity' | translate }}</th>\n          <th class=\"text-center\" >{{ 'Shopping.Price' | translate }}</th>\n          <th class=\"text-center\" >{{ 'Shopping.Total' | translate }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of order.items\">\n          <td *ngIf=\"item.product.price!=0\">\n            <div [style.backgroundImage]=\"'url(' + item.product.imageUrl + ')'\" class=\"thumbnail\"></div>\n          </td>    \n          <td *ngIf=\"item.product.price!=0\">\n            {{ item.product.title }}\n          </td>\n          <td class=\"text-center\" *ngIf=\"item.product.price!=0\">\n            {{item.quantity}}\n          </td>\n          <td class=\"text-center\" *ngIf=\"item.product.price!=0\">\n              {{ item.product.price | currency: \"&#8377;\" : true }}\n            </td>\n          <td class=\"text-center\" *ngIf=\"item.product.price!=0\">\n            {{ item.totalPrice | currency: \"&#8377;\" : true }}\n          </td>\n        </tr>  \n      </tbody>\n      <tfoot>\n        <tr>\n          <th></th>\n          <th></th>\n          <th class=\"text-center\">{{ this.SumOfQuantity }}</th>\n          <th></th>\n          <th class=\"text-center\">{{ this.SumOfPrice | currency: \"&#8377;\": true }}</th>\n        </tr>\n      </tfoot>\n    </table>\n   \n    <div class=\"line\">\n      \n        <div class=\"tops\">\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">Manual Product</button>\n        </div>\n  \n        <div class=\"tops\">\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg1\">Order Status</button>\n        </div>\n  \n        <!-- <div class=\"tops\">\n          <a  [routerLink]=\"['/order/status/', order.$key]\" class=\"btn btn-primary\">Order Status</a> \n        </div> -->\n  \n    </div>\n  \n  </div>\n  \n  </div>\n  \n      \n  \n  \n  \n  \n  \n  \n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" data-backdrop=\"false\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n  \n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Manual Added Product</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" *ngIf=\"order$ | async as order\">\n  \n  \n  \n          <table class=\"table\" *ngIf=\"appUser; else anonymousUser\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Product Name</th>\n                <th scope=\"col\">Weight</th>\n                <th scope=\"col\" *ngIf=\"appUser.isAdmin\">Edit</th>\n              </tr>\n            </thead> \n            <tbody>\n              <tr *ngFor=\"let item of order.items; let i = index\">\n                <th *ngIf=\"!item.product.code\">{{i}}</th>\n                <td *ngIf=\"!item.product.code\">{{item.product.title}}</td>\n                <td *ngIf=\"!item.product.code\">{{item.product.weight}}</td>\n                <td *ngIf=\"!item.product.code\">\n  \n                  <div>    \n                    <ng-container *ngIf=\"appUser.isAdmin\">\n                      <div>\n                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg2\">Edit</button>\n                      </div>                  \n                    </ng-container>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  \n  \n  <div class=\"modal fade bd-example-modal-lg1\" tabindex=\"-1\" data-backdrop=\"false\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n  \n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel1\">Order Status</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <app-orders-status></app-orders-status>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/user-order-details/user-order-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-order-details/user-order-details.component.ts ***!
  \********************************************************************/
/*! exports provided: UserOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderDetailsComponent", function() { return UserOrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_models_order_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/models/order-cart */ "./src/app/shares/models/order-cart.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _shares_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shares/services/order.service */ "./src/app/shares/services/order.service.ts");







var UserOrderDetailsComponent = /** @class */ (function () {
    function UserOrderDetailsComponent(router, route, db, auth, orderService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.auth = auth;
        this.orderService = orderService;
        this.product = {};
        this.stock = {};
        this.SumOfQuantity = 0;
        this.SumOfPrice = 0;
        this.orderId = route.snapshot.paramMap.get('id');
        this.order$ = orderService.get(this.orderId);
        orderService.get(this.orderId).subscribe(function (orders) {
            _this.orders = orders;
            console.log(orders.items);
            for (var _i = 0, _a = orders.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.SumOfQuantity = _this.SumOfQuantity + item.quantity;
                _this.SumOfPrice = _this.SumOfPrice + item.totalPrice;
            }
        });
    }
    UserOrderDetailsComponent.prototype.save = function (product) {
        console.log(product);
        this.orderService.updateRate(product, this.orderId).then(function (data) {
            console.log(data);
        });
        // this.shoppingCartService.ManualAddToCart(product).then(data=>{
        //   if(data)
        //   {
        //     this.messageClass = 'alert alert-success';
        //     this.message = "Stock Update Success fully";
        //     product.name = "";
        //     product.weight = "";
        //   }
        //   else
        //   {
        //     this.messageClass = 'alert alert-danger';
        //     this.message = "Invalid"
        //   }
        // })
    };
    UserOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.appUser$.subscribe(function (appUser) {
            _this.appUser = appUser;
            console.log(_this.appUser);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shares_models_order_cart__WEBPACK_IMPORTED_MODULE_2__["OrderCart"])
    ], UserOrderDetailsComponent.prototype, "cart", void 0);
    UserOrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-order-details',
            template: __webpack_require__(/*! ./user-order-details.component.html */ "./src/app/user-order-details/user-order-details.component.html"),
            styles: [__webpack_require__(/*! ./user-order-details.component.css */ "./src/app/user-order-details/user-order-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _shares_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]])
    ], UserOrderDetailsComponent);
    return UserOrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\r\n    padding-top: 90px;\r\n}\r\n\r\n.slideshow{\r\n\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    height: 600px;\r\n    box-sizing: border-box;\r\n    margin-top: -40px;\r\n\r\n}\r\n\r\n.text{\r\n    text-align: center;\r\n    color: red;\r\n    text-shadow: 4px 4px black;\r\n    font-size: 4.5em;\r\n    \r\n}\r\n\r\n.content {\r\n    margin: auto;\r\n    width: 210px;\r\n    -webkit-perspective: 650px;\r\n            perspective: 650px;\r\n    position: relative;\r\n    padding-top: 80px;\r\n}\r\n\r\n.content-carrousel{\r\n    width: 100%;\r\n    position: absolute;\r\n    float: right;\r\n    -webkit-animation: rotar 15s infinite linear;\r\n            animation: rotar 15s infinite linear;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n\r\n.content-carrousel:hover{\r\n    -webkit-animation-play-state: paused;\r\n            animation-play-state: paused;\r\n    cursor: pointer;\r\n}\r\n\r\n.content-carrousel figure{\r\n    width: 100%;\r\n    height: 170px;\r\n    border: 1px solid #4d444d;\r\n    overflow: hidden;\r\n    position: absolute;\r\n}\r\n\r\n.content-carrousel figure:nth-child(1){\r\n    -webkit-transform: rotateY(0deg) translateZ(350px);\r\n            transform: rotateY(0deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(2){\r\n    -webkit-transform: rotateY(40deg) translateZ(350px);\r\n            transform: rotateY(40deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(3){ \r\n    -webkit-transform: rotateY(80deg) translateZ(350px); \r\n            transform: rotateY(80deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(4){\r\n    -webkit-transform: rotateY(120deg) translateZ(350px);\r\n            transform: rotateY(120deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(5){\r\n    -webkit-transform: rotateY(160deg) translateZ(350px);\r\n            transform: rotateY(160deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(6){\r\n    -webkit-transform: rotateY(200deg) translateZ(350px);\r\n            transform: rotateY(200deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(7){\r\n    -webkit-transform: rotateY(240deg) translateZ(350px);\r\n            transform: rotateY(240deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(8){\r\n    -webkit-transform: rotateY(280deg) translateZ(350px);\r\n            transform: rotateY(280deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(9){\r\n    -webkit-transform: rotateY(320deg) translateZ(350px);\r\n            transform: rotateY(320deg) translateZ(350px);\r\n}\r\n\r\n.shadow{\r\n    position: absolute;\r\n    box-shadow: 0px 0px 20px 0px #000;\r\n    border-radius: 2px;\r\n}\r\n\r\n.content-carrousel img{\r\n    image-rendering: auto;\r\n    transition: all 300ms;\r\n    width: 100%;\r\n    height: 100%; \r\n}\r\n\r\n.content-carrousel img:hover{\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    transition: all 300ms;\r\n}\r\n\r\n@-webkit-keyframes rotar{\r\n    from{ \r\n        -webkit-transform: rotateY(0deg); \r\n                transform: rotateY(0deg);\r\n    } to{\r\n        -webkit-transform: rotateY(360deg);\r\n                transform: rotateY(360deg);\r\n    }\r\n}\r\n\r\n@keyframes rotar{\r\n    from{ \r\n        -webkit-transform: rotateY(0deg); \r\n                transform: rotateY(0deg);\r\n    } to{\r\n        -webkit-transform: rotateY(360deg);\r\n                transform: rotateY(360deg);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7Q0FFckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixpQkFBaUI7O0NBRXBCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxtREFBMkM7WUFBM0MsMkNBQTJDO0NBQzlDOztBQUNEO0lBQ0ksb0RBQTRDO1lBQTVDLDRDQUE0QztDQUMvQzs7QUFDRDtJQUNJLG9EQUE0QztZQUE1Qyw0Q0FBNEM7Q0FDL0M7O0FBQ0Q7SUFDSSxxREFBNkM7WUFBN0MsNkNBQTZDO0NBQ2hEOztBQUNEO0lBQ0kscURBQTZDO1lBQTdDLDZDQUE2QztDQUNoRDs7QUFDRDtJQUNJLHFEQUE2QztZQUE3Qyw2Q0FBNkM7Q0FDaEQ7O0FBQ0Q7SUFDSSxxREFBNkM7WUFBN0MsNkNBQTZDO0NBQ2hEOztBQUNEO0lBQ0kscURBQTZDO1lBQTdDLDZDQUE2QztDQUNoRDs7QUFDRDtJQUNJLHFEQUE2QztZQUE3Qyw2Q0FBNkM7Q0FDaEQ7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7S0FDNUIsQ0FBQztRQUNFLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0tBQzlCO0NBQ0o7O0FBTkQ7SUFDSTtRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0tBQzVCLENBQUM7UUFDRSxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtLQUM5QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uc2xpZGVzaG93e1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG5cclxufVxyXG5cclxuLnRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDQuNWVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA2NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jYXJyb3VzZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGFuaW1hdGlvbjogcm90YXIgMTVzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5jb250ZW50LWNhcnJvdXNlbDpob3ZlcntcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGQ0NDRkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgxKXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgyKXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg0MGRlZykgdHJhbnNsYXRlWigzNTBweCk7XHJcbn1cclxuLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoMyl7IFxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDgwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg0KXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxMjBkZWcpIHRyYW5zbGF0ZVooMzUwcHgpO1xyXG59XHJcbi5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDUpe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE2MGRlZykgdHJhbnNsYXRlWigzNTBweCk7XHJcbn1cclxuLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoNil7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjAwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg3KXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyNDBkZWcpIHRyYW5zbGF0ZVooMzUwcHgpO1xyXG59XHJcbi5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDgpe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4MGRlZykgdHJhbnNsYXRlWigzNTBweCk7XHJcbn1cclxuLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoOSl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzIwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uc2hhZG93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5jb250ZW50LWNhcnJvdXNlbCBpbWd7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbn1cclxuXHJcbi5jb250ZW50LWNhcnJvdXNlbCBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhcntcclxuICAgIGZyb217IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIH0gdG97XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"top\">\n  <div class=\"slideshow\" >\n          <particles  [params]=\"myParams\" [style]=\"myStyle\"></particles>\n          <h1 class=\"text\">THE SPARKLES</h1>\n          <a routerLink=\"/products\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to Shop\" >\n        <div class=\"content\">\n          <div class=\"content-carrousel\"> \n            <figure class=\"shodw\"><img src=\"../../assets/1.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/2.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/3.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/4.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/5.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/6.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/7.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/8.jpg\"></figure>\n            <figure class=\"shodw\"><img src=\"../../assets/9.jpg\"></figure>\n          </div>\n        </div> \n        </a>\n      </div>\n\n    </div>\n  "

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.myStyle = {};
        this.myParams = {};
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': '0',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 900
                    }
                },
                "color": {
                    "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 15
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1.5,
                        "opacity_min": 0.15,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3.0,
                    "random": false,
                    "anim": {
                        "enable": true,
                        "speed": 3,
                        "size_min": 0.15,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 110,
                    "color": "#2822e5",
                    "opacity": 0.4,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 1.6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCl123xQ1DLgcgTp9mQ1TRUDFPJ_ypuDu4",
        authDomain: "oshop-6f69e.firebaseapp.com",
        databaseURL: "https://oshop-6f69e.firebaseio.com",
        projectId: "oshop-6f69e",
        storageBucket: "oshop-6f69e.appspot.com",
        messagingSenderId: "758513578168"
    }
};


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
    production: false,
    firebase: {
        apiKey: "AIzaSyCl123xQ1DLgcgTp9mQ1TRUDFPJ_ypuDu4",
        authDomain: "oshop-6f69e.firebaseapp.com",
        databaseURL: "https://oshop-6f69e.firebaseio.com",
        projectId: "oshop-6f69e",
        storageBucket: "oshop-6f69e.appspot.com",
        messagingSenderId: "758513578168"
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\oshop\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map