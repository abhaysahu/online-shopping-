(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-shopping-cart-default-shopping-cart-module"],{

/***/ "./src/app/default-shopping-cart/check-out/check-out.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/default-shopping-cart/check-out/check-out.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topping {\r\n    padding-top: 80px;\r\n    padding-right: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1zaG9wcGluZy1jYXJ0L2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2hvcHBpbmctY2FydC9jaGVjay1vdXQvY2hlY2stb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wcGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/default-shopping-cart/check-out/check-out.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/default-shopping-cart/check-out/check-out.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topping\">\n<h2>{{ 'Shipping.Shopping' | translate }} </h2>\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n  <div class=\"col-6\">\n    <shipping-form [cart]=\"cart \"></shipping-form>\n  </div>\n  <div class=\"col-6\">\n    <shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n  </div>\n</div> \n</div>"

/***/ }),

/***/ "./src/app/default-shopping-cart/check-out/check-out.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/default-shopping-cart/check-out/check-out.component.ts ***!
  \************************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shares/services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartService, translate, cookie) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.translate = translate;
        this.cookie = cookie;
        this.browserLang = "";
        this.language = "";
        translate.onLangChange.subscribe(function (lang) {
            _this.browserLang = lang;
        });
        this.language = this.cookie.get("language");
        console.log(this.language);
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/default-shopping-cart/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/default-shopping-cart/check-out/check-out.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/default-shopping-cart-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/default-shopping-cart/default-shopping-cart-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DefaultShoppingCartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultShoppingCartRoutingModule", function() { return DefaultShoppingCartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/default-shopping-cart/check-out/check-out.component.ts");
/* harmony import */ var _shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares/services/auth-guard.service */ "./src/app/shares/services/auth-guard.service.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/default-shopping-cart/order-success/order-success.component.ts");
/* harmony import */ var _default_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-shopping-cart.component */ "./src/app/default-shopping-cart/default-shopping-cart.component.ts");








var routes = [
    { path: '', component: _default_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["DefaultShoppingCartComponent"],
        children: [
            { path: '', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"] },
            { path: 'check-out', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_4__["CheckOutComponent"], canActivate: [_shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
            { path: 'order-success/:id', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_6__["OrderSuccessComponent"], canActivate: [_shares_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"],] },
        ]
    },
];
var DefaultShoppingCartRoutingModule = /** @class */ (function () {
    function DefaultShoppingCartRoutingModule() {
    }
    DefaultShoppingCartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefaultShoppingCartRoutingModule);
    return DefaultShoppingCartRoutingModule;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/default-shopping-cart.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/default-shopping-cart/default-shopping-cart.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2hvcHBpbmctY2FydC9kZWZhdWx0LXNob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/default-shopping-cart/default-shopping-cart.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/default-shopping-cart/default-shopping-cart.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/default-shopping-cart/default-shopping-cart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/default-shopping-cart/default-shopping-cart.component.ts ***!
  \**************************************************************************/
/*! exports provided: DefaultShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultShoppingCartComponent", function() { return DefaultShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultShoppingCartComponent = /** @class */ (function () {
    function DefaultShoppingCartComponent() {
    }
    DefaultShoppingCartComponent.prototype.ngOnInit = function () {
    };
    DefaultShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-shopping-cart',
            template: __webpack_require__(/*! ./default-shopping-cart.component.html */ "./src/app/default-shopping-cart/default-shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./default-shopping-cart.component.css */ "./src/app/default-shopping-cart/default-shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultShoppingCartComponent);
    return DefaultShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/default-shopping-cart.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/default-shopping-cart/default-shopping-cart.module.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultShoppingCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultShoppingCartModule", function() { return DefaultShoppingCartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-shopping-cart-routing.module */ "./src/app/default-shopping-cart/default-shopping-cart-routing.module.ts");
/* harmony import */ var _shares_shares_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/shares.module */ "./src/app/shares/shares.module.ts");
/* harmony import */ var _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart-summary/shopping-cart-summary.component */ "./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-form/shipping-form.component */ "./src/app/default-shopping-cart/shipping-form/shipping-form.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/default-shopping-cart/check-out/check-out.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/default-shopping-cart/order-success/order-success.component.ts");
/* harmony import */ var _default_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default-shopping-cart.component */ "./src/app/default-shopping-cart/default-shopping-cart.component.ts");











var DefaultShoppingCartModule = /** @class */ (function () {
    function DefaultShoppingCartModule() {
    }
    DefaultShoppingCartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _default_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__["DefaultShoppingCartComponent"],
                _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartSummaryComponent"],
                _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_6__["ShippingFormComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_9__["OrderSuccessComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultShoppingCartRoutingModule"],
                _shares_shares_module__WEBPACK_IMPORTED_MODULE_4__["SharesModule"]
            ]
        })
    ], DefaultShoppingCartModule);
    return DefaultShoppingCartModule;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/order-success/order-success.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/order-success/order-success.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-jmbo{\r\n\r\n    background-image:linear-gradient(rgba(236, 216, 228, 0.7),rgba(203, 231, 229, 0.7)), url('jumbotorn.jpg');\r\n    background-size: cover;\r\n    min-height: 500px;\r\n\r\n}\r\n\r\n.text{\r\n    color: #0E41B7;\r\n    text-decoration: underline;\r\n    margin-left: 200px;\r\n    margin-top: -30px;\r\n}\r\n\r\n.lead{\r\n    font-size: 25px;\r\n}\r\n\r\n.top {\r\n    padding-top: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1zaG9wcGluZy1jYXJ0L29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBHQUEwSDtJQUMxSCx1QkFBdUI7SUFDdkIsa0JBQWtCOztDQUVyQjs7QUFFRDtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2hvcHBpbmctY2FydC9vcmRlci1zdWNjZXNzL29yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctam1ib3tcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDIzNiwgMjE2LCAyMjgsIDAuNykscmdiYSgyMDMsIDIzMSwgMjI5LCAwLjcpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvanVtYm90b3JuLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG5cclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBjb2xvcjogIzBFNDFCNztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi5sZWFke1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/default-shopping-cart/order-success/order-success.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/order-success/order-success.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n  <div class=\"jumbotron img-jmbo\">\n    <div class=\"container\">\n      <h1 class=\"display-4 text\">Thank You For Your Order</h1>\n      <br>\n      <br>\n      <br>\n\n      <p class=\"lead\">Your Order has been placed and is being processed.We will contact you soon on the phone number provided by you.</p>\n      <hr class=\"my-6\">\n      <p>Have a happy and healthy life !!!!</p>\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" routerLink=\"/products\" role=\"button\">continue</a>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/default-shopping-cart/order-success/order-success.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/order-success/order-success.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shares/services/order.service */ "./src/app/shares/services/order.service.ts");
/* harmony import */ var _shares_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shares/services/report.service */ "./src/app/shares/services/report.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _shares_services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shares/services/stock.service */ "./src/app/shares/services/stock.service.ts");







var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent(router, route, orderService, reportService, db, stockService) {
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.reportService = reportService;
        this.db = db;
        this.stockService = stockService;
        this.sales = {};
        this.stocks = {};
        this.orderId = route.snapshot.paramMap.get('id');
        console.log(this.orderId);
        // this.orderService.get(this.orderId).subscribe(orders => {
        //   this.orders = orders
        //   let name = orders.shipping.name;
        //   for(let item of orders.items )
        //     {
        //       let pusheditems = {};
        //           this.stockService.get(item.product.code).take(1).subscribe(stocks => {
        //           this.stocks = stocks
        //           this.stocks.stock = this.stocks.stock - item.quantity
        //           this.stockService.update(item.product.code, stocks)
        //           pusheditems["code"] = item.product.code;
        //           pusheditems["name"] = name;
        //           pusheditems["quantity"] = item.quantity;
        //           pusheditems["purchasePrice"] = this.stocks.price
        //           pusheditems["price"] = item.product.price;
        //           pusheditems["totalPrice"] = item.totalPrice;
        //           this.reportService.create(pusheditems,item.product.code);
        //         })
        //     }    
        // });
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/default-shopping-cart/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/default-shopping-cart/order-success/order-success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shares_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _shares_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _shares_services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"]])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/shipping-form/shipping-form.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shipping-form/shipping-form.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2hvcHBpbmctY2FydC9zaGlwcGluZy1mb3JtL3NoaXBwaW5nLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/default-shopping-cart/shipping-form/shipping-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shipping-form/shipping-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"\">{{ 'Shipping.Name' | translate }}</label>\n      <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" class=\"form-control\" required placeholder=\"{{ 'Shipping.PlaceName' | translate }}\">\n      <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n        <div *ngIf=\"name.errors.required\">{{ 'Shipping.NameRequired' | translate }}</div>\n      </div>\n      <br> \n    </div> \n    <div class=\"form-group\">\n      <label for=\"\">{{ 'Shipping.Address' | translate }}</label>\n      <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"{{ 'Shipping.PlaceAddress' | translate }}\"\n        required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n        <div *ngIf=\"addressLine1.errors.required\">{{ 'Shipping.AddressRequired' | translate }}</div>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group\"> \n      <label for=\"\">{{ 'Shipping.Pnumber' | translate }}</label>\n      <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"{{ 'Shipping.PlacePnumber' | translate }}\"\n        required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n        <div *ngIf=\"addressLine2.errors.required\">{{ 'Shipping.PnumberRequired' | translate }}</div>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group\">\n      <label for=\"\">{{ 'Shipping.City' | translate }}</label>\n      <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" placeholder=\"{{ 'Shipping.PlaceCity' | translate }}\" type=\"text\" class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n        <div *ngIf=\"city.errors.required\">{{ 'Shipping.CityRequired' | translate }}</div>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group\">\n        <label for=\"description\">{{ 'Shipping.AboutSize' | translate }}</label>\n          <textarea #description [(ngModel)]=\"shipping.description\" name=\"description\" id=\"description\" tyoe=\"text\" rows=\"8\" cols=\"80\" placeholder=\"{{ 'Shipping.PlaceAboutSize' | translate }}\" class=\"form-control\"></textarea>\n          <div class=\"alert alert-danger\" *ngIf=\"description.touched && description.invalid\">\n            <div *ngIf=\"description.errors.required\">{{ 'Shipping.AboutSizeRequired' | translate }} </div>\n        </div>\n      </div>\n    <button  \n      [disabled]=\"!f.valid\"\n      (click)=\"placeOrder()\" \n      class=\"btn btn-primary\">{{ 'Shipping.Place' | translate }}</button>\n  </form>"

/***/ }),

/***/ "./src/app/default-shopping-cart/shipping-form/shipping-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shipping-form/shipping-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shares/services/auth.service */ "./src/app/shares/services/auth.service.ts");
/* harmony import */ var _shares_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shares/services/order.service */ "./src/app/shares/services/order.service.ts");
/* harmony import */ var _shares_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shares/models/order */ "./src/app/shares/models/order.ts");
/* harmony import */ var _shares_models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shares/models/shopping-cart */ "./src/app/shares/models/shopping-cart.ts");
/* harmony import */ var _shares_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shares/services/report.service */ "./src/app/shares/services/report.service.ts");
/* harmony import */ var _shares_services_stock_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shares/services/stock.service */ "./src/app/shares/services/stock.service.ts");









var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(router, authService, orderService, reportService, stockService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.reportService = reportService;
        this.stockService = stockService;
        this.shipping = {};
        this.stocks = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var status, order, name, date, _loop_1, this_1, _i, _a, item, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        status = {
                            name: {
                                name: "Abhay sahu",
                            },
                            phone: {
                                name: "9617625945",
                            },
                            order: {
                                name: "Order is receive at shop",
                            },
                            delivery: {
                                name: "Oreder is picked up",
                            },
                            leave: {
                                name: "leave from Shop",
                            },
                            process: {
                                name: "On The Way",
                            },
                            city: {
                                name: "In Your City",
                            },
                            receive: {
                                name: "Order is delivered",
                            }
                        };
                        order = new _shares_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](this.userId, this.shipping, this.cart, status);
                        console.log(order);
                        name = order.shipping.name;
                        date = order.dataPlaced;
                        _loop_1 = function (item) {
                            var pusheditems = {};
                            console.log(item);
                            if (item.product.code) {
                                this_1.stockService.get(item.product.code).take(1).subscribe(function (stocks) {
                                    _this.stocks = stocks;
                                    _this.stocks.stock = _this.stocks.stock - item.quantity;
                                    _this.stockService.update(item.product.code, stocks);
                                    pusheditems["code"] = item.product.code;
                                    pusheditems["name"] = name;
                                    pusheditems["date"] = date;
                                    pusheditems["quantity"] = item.quantity;
                                    pusheditems["purchasePrice"] = _this.stocks.price;
                                    pusheditems["price"] = item.product.price;
                                    pusheditems["totalPrice"] = item.totalPrice;
                                    _this.reportService.create(pusheditems, item.product.code);
                                });
                            }
                            else {
                                console.log("no");
                            }
                        };
                        this_1 = this;
                        for (_i = 0, _a = order.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            _loop_1(item);
                        }
                        console.log("abhay");
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _b.sent();
                        this.router.navigate(['/shopping-cart/order-success', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shares_models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__["ShoppingCart"])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! ./shipping-form.component.html */ "./src/app/default-shopping-cart/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/default-shopping-cart/shipping-form/shipping-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shares_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shares_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _shares_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"],
            _shares_services_stock_service__WEBPACK_IMPORTED_MODULE_8__["StockService"]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LXN1bW1hcnkvc2hvcHBpbmctY2FydC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"> \n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ 'Shipping.OrderSummary' | translate }}</h5>\n    <p class=\"card-text\">{{ 'Shipping.Order1' | translate }} {{ cart.totalItemsCount }} {{ 'Shipping.Order2' | translate }}</p>\n    <ul class=\"list-group list-group-flush\">\n        <div *ngFor=\"let item of cart.items\">\n          <li *ngIf=\"item.code\"  class=\"list-group-item\">\n        {{ item.quantity }} x {{ item.title }} x {{ item.code}}\n        <div class=\"float-right\">\n          {{ item.totalPrice | currency:\"&#8377;\":true }}\n        </div>\n      </li>\n        </div>\n      \n      <li class=\"list-group-item font-weight-bold\">\n        {{ 'Shipping.Totle' | translate }}\n        <div class=\"float-right\">\n          {{ cart.totalPrice | currency:\"&#8377;\":true }}\n        </div>\n      </li>\n    </ul>\n  </div> \n</div> "

/***/ }),

/***/ "./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shares/models/shopping-cart */ "./src/app/shares/models/shopping-cart.ts");



var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shares_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"])
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! ./shopping-cart-summary.component.html */ "./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/default-shopping-cart/shopping-cart-summary/shopping-cart-summary.component.css")]
        })
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n.toping {\r\n    padding-top: 80px;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    \r\n}\r\n\r\n.top {\r\n    padding-left: 20px;\r\n   \r\n}\r\n\r\n.line {\r\n     display:inline-flex;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1COztDQUV0Qjs7QUFFRDtJQUNJLG1CQUFtQjs7Q0FFdEI7O0FBRUQ7S0FDSyxvQkFBb0I7O0NBRXhCIiwiZmlsZSI6InNyYy9hcHAvZGVmYXVsdC1zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRvcGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgIFxyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"toping\"> \n    <h1>{{ 'Shopping.ShoppingCart' | translate }} </h1>\n    <div class=\"row col-10\" *ngIf=\"cart$ | async as cart\">\n      <p>\n        {{ 'Shopping.Detailes1' | translate }} {{ cart.totalItemsCount }} {{ 'Shopping.Detailes2' | translate }}\n        <button\n        *ngIf=\"cart.items.length\"\n        (click)=\"clearCart()\"\n        class=\"btn btn-light btn-sm\">{{ 'Shopping.ClearButton' | translate }}\n      </button>\n      </p> \n      <table class=\"table\"> \n        <thead>\n          <tr>\n            <th></th>\n            <th>{{ 'Shopping.Product' | translate }}</th>\n            <th class=\"text-center\" style=\"width: 230px\">{{ 'Shopping.Quantity' | translate }}</th>\n            <th class=\"text-right\" style=\"width: 200px\">{{ 'Shopping.Price' | translate }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of cart.items\">\n            <td *ngIf=\"item.code\">\n              <div [style.backgroundImage]=\"'url(' + item.imageUrl + ')'\" class=\"thumbnail\"></div>\n            </td>    \n            <td *ngIf=\"item.code\">\n                <div *ngIf=\"show; else elseBlock\">{{ item.title }}</div>\n                <ng-template #elseBlock>{{ item.titleH }}</ng-template>\n            </td>\n            <td *ngIf=\"item.code\">\n              <product-quantity [product]=\"item\" [shopping-cart]=\"cart\"></product-quantity>\n            </td>\n            <td class=\"text-right\" *ngIf=\"item.code\">\n                <div *ngIf=\"!item.offer; else elseBlock\">\n                    <p class=\"card-text\">{{ (item.price) * item.quantity | currency: \"&#8377;\": true}} \n                    </p>\n                </div>\n                        <ng-template #elseBlock>\n                              <p> {{ item.totalPrice }}</p>   \n                        </ng-template>\n            </td>\n          </tr>  \n        </tbody>\n        <tfoot>\n          <tr>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th class=\"text-right\">{{ cart.totalPrice | currency: \"&#8377;\" :true }}</th>\n          </tr>\n        </tfoot>\n      </table>\n      <div class=\"line\"> \n      <a class=\"top\"\n        *ngIf=\"cart.items.length\"\n        routerLink=\"/shopping-cart/check-out\" \n        class=\"btn btn-primary\">{{ 'Shopping.CheckOut' | translate }}</a>\n\n        <div class=\"top\">\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">Add Product</button>\n        </div>\n\n        <div class=\"top\">\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">Manual Product</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Stock Quantity</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button> \n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n        \n        \n                <div class=\"row show-hide-message\">\n                    <div [ngClass]=\"messageClass\">\n                      {{ message }}\n                    </div>\n                  </div>\n        \n        \n                  <div class=\"form-group\">\n                    <label for=\"title\">Product Name</label>\n                    <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required placeholder=\"Product Code\">\n                    <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n                      Product Name is required\n                    </div>\n                  </div>\n                  \n                    \n                  <div class=\"form-group\"> \n                      <label for=\"weight\">Weight</label>\n                      <div class=\"input-group-prepend\">\n                        <input #weight=\"ngModel\" [(ngModel)]=\"product.weight\" name=\"weight\" id=\"weight\" class=\"form-control\" placeholder=\"500 gm or 2 kg\">\n                      </div> \n                      <div class=\"alert alert-danger\" *ngIf=\"weight.touched && weight.invalid\">\n                        Weight is required.\n                      </div>  \n                    </div>\n                    <button class=\"btn btn-primary\">Save</button>\n              </form>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">okk</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Manual Added Product</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"cart$ | async as cart\">\n\n\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Product Name</th>\n              <th scope=\"col\">Weight</th>\n              <th scope=\"col\">Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of cart.items; let i = index\">\n              <th *ngIf=\"!item.code\">{{i+1}}</th>\n              <td *ngIf=\"!item.code\">{{item.title}}</td>\n              <td *ngIf=\"!item.code\">{{item.weight}}</td>\n              <td *ngIf=\"!item.code\"><button type=\"button\" (click)=\"delete(item.keys)\" class=\"btn btn-danger\">Delete</button></td>\n            </tr>\n          </tbody>\n        </table>\n\n\n        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shares/services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");






var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService, translate, cookie, router) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.translate = translate;
        this.cookie = cookie;
        this.router = router;
        this.product = {};
        this.show = true;
        this.browserLang = "";
        this.language = "";
        translate.onLangChange.subscribe(function (lang) {
            _this.browserLang = lang;
        });
        this.language = this.cookie.get("language");
        console.log(this.language);
    }
    ShoppingCartComponent.prototype.save = function (product) {
        var _this = this;
        var random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        product.keys = random;
        product.quantity = 1;
        product.price = 0;
        this.shoppingCartService.ManualAddToCart(product).then(function (data) {
            if (data) {
                _this.messageClass = 'alert alert-success';
                _this.message = "Stock Update Success fully";
                product.name = "";
                product.weight = "";
            }
            else {
                _this.messageClass = 'alert alert-danger';
                _this.message = "Invalid";
            }
        });
    };
    ShoppingCartComponent.prototype.delete = function (id) {
        if (!confirm('Are you sure yow want to delete this Manual product?'))
            return;
        console.log(id);
        this.shoppingCartService.delete(id);
        //this.router.navigate(['/check-out']);
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.language === "en" || this.language === "")) return [3 /*break*/, 2];
                        this.show = true;
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.show = false;
                        console.log("hindi");
                        _b = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 3:
                        _b.cart$ = _c.sent();
                        _c.label = 4;
                    case 4:
                        this.translate.onLangChange.subscribe(function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a, _b;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        this.browserLang = event.lang;
                                        if (!(this.browserLang === "en" || this.browserLang === "")) return [3 /*break*/, 2];
                                        this.show = true;
                                        console.log(this.show);
                                        _a = this;
                                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                                    case 1:
                                        _a.cart$ = _c.sent();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        this.show = false;
                                        console.log(this.show);
                                        _b = this;
                                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                                    case 3:
                                        _b.cart$ = _c.sent();
                                        _c.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/default-shopping-cart/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shares/models/order.ts":
/*!****************************************!*\
  !*** ./src/app/shares/models/order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart, order) {
        this.userId = userId;
        this.shipping = shipping;
        this.order = order;
        this.items = [];
        this.dataPlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            //console.log(i);
            if (i.code) {
                return {
                    product: {
                        title: i.title,
                        imageUrl: i.imageUrl,
                        price: i.price,
                        code: i.code,
                    },
                    quantity: i.quantity,
                    totalPrice: i.totalPrice
                };
            }
            else {
                return {
                    product: {
                        price: i.price,
                        title: i.title,
                        weight: i.weight
                    },
                    quantity: i.quantity,
                    totalPrice: i.totalPrice
                };
            }
        });
    }
    return Order;
}());



/***/ })

}]);
//# sourceMappingURL=default-shopping-cart-default-shopping-cart-module.js.map