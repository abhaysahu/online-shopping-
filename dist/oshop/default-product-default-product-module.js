(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-product-default-product-module"],{

/***/ "./src/app/default-product/banner/banner.component.css":
/*!*************************************************************!*\
  !*** ./src/app/default-product/banner/banner.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner img {width:100%;}\r\n\r\n.banner-box {position: relative;}\r\n\r\nh1 {font-size: 2.4rem;margin-bottom: 30px;}\r\n\r\n.intro-text { width:100%; position: absolute; top:30%; text-align: center; color:#fff;}\r\n\r\n.intro-text-box { width: 62%;margin: auto;background-color: rgba(96, 96, 96, 0.6);padding: 20px;border: 10px solid #808080;}\r\n\r\n.intro-text-box h1 {font-size:3em;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1wcm9kdWN0L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLFdBQVcsQ0FBQzs7QUFFekIsYUFBYSxtQkFBbUIsQ0FBQzs7QUFFakMsSUFBSSxrQkFBa0Isb0JBQW9CLENBQUM7O0FBRTNDLGNBQWMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7O0FBQ3ZGLGtCQUFrQixXQUFXLGFBQWEsd0NBQXdDLGNBQWMsMkJBQTJCLENBQUM7O0FBQzVILG9CQUFvQixjQUFjLENBQUMiLCJmaWxlIjoic3JjL2FwcC9kZWZhdWx0LXByb2R1Y3QvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciBpbWcge3dpZHRoOjEwMCU7fVxyXG5cclxuLmJhbm5lci1ib3gge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcblxyXG5oMSB7Zm9udC1zaXplOiAyLjRyZW07bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcblxyXG4uaW50cm8tdGV4dCB7IHdpZHRoOjEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjMwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjojZmZmO31cclxuLmludHJvLXRleHQtYm94IHsgd2lkdGg6IDYyJTttYXJnaW46IGF1dG87YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgOTYsIDk2LCAwLjYpO3BhZGRpbmc6IDIwcHg7Ym9yZGVyOiAxMHB4IHNvbGlkICM4MDgwODA7fVxyXG4uaW50cm8tdGV4dC1ib3ggaDEge2ZvbnQtc2l6ZTozZW07fSJdfQ== */"

/***/ }),

/***/ "./src/app/default-product/banner/banner.component.html":
/*!**************************************************************!*\
  !*** ./src/app/default-product/banner/banner.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"banner\">\n  <div class=\"banner-box\">\n    <img src=\"assets/images/banner.jpg\" alt=\"banner\" />\n  </div>\n</section>  -->\n\n\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" height=\"400\" src=\"assets/images/banner.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" height=\"400\" src=\"assets/images/banner1.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" height=\"400\" src=\"assets/images/banner2.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/default-product/banner/banner.component.ts":
/*!************************************************************!*\
  !*** ./src/app/default-product/banner/banner.component.ts ***!
  \************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/default-product/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/default-product/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/default-product/default-product-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/default-product/default-product-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultProductRoutingModule", function() { return DefaultProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/default-product/products/products.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/default-product/product-details/product-details.component.ts");
/* harmony import */ var _default_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-product.component */ "./src/app/default-product/default-product.component.ts");






var routes = [
    { path: '', component: _default_product_component__WEBPACK_IMPORTED_MODULE_5__["DefaultProductComponent"],
        children: [
            { path: '', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
            { path: 'products/details/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"] },
        ]
    }
];
var DefaultProductRoutingModule = /** @class */ (function () {
    function DefaultProductRoutingModule() {
    }
    DefaultProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefaultProductRoutingModule);
    return DefaultProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/default-product/default-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/default-product/default-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtcHJvZHVjdC9kZWZhdWx0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/default-product/default-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/default-product/default-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/default-product/default-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/default-product/default-product.component.ts ***!
  \**************************************************************/
/*! exports provided: DefaultProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultProductComponent", function() { return DefaultProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultProductComponent = /** @class */ (function () {
    function DefaultProductComponent() {
    }
    DefaultProductComponent.prototype.ngOnInit = function () {
    };
    DefaultProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-product',
            template: __webpack_require__(/*! ./default-product.component.html */ "./src/app/default-product/default-product.component.html"),
            styles: [__webpack_require__(/*! ./default-product.component.css */ "./src/app/default-product/default-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultProductComponent);
    return DefaultProductComponent;
}());



/***/ }),

/***/ "./src/app/default-product/default-product.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/default-product/default-product.module.ts ***!
  \***********************************************************/
/*! exports provided: DefaultProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultProductModule", function() { return DefaultProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-product-routing.module */ "./src/app/default-product/default-product-routing.module.ts");
/* harmony import */ var _shares_shares_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/shares.module */ "./src/app/shares/shares.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/default-product/products/products.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/default-product/banner/banner.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/default-product/product-details/product-details.component.ts");
/* harmony import */ var _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-filter/product-filter.component */ "./src/app/default-product/product-filter/product-filter.component.ts");
/* harmony import */ var _default_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default-product.component */ "./src/app/default-product/default-product.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/default-product/footer/footer.component.ts");











var DefaultProductModule = /** @class */ (function () {
    function DefaultProductModule() {
    }
    DefaultProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
                _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_8__["ProductFilterComponent"],
                _default_product_component__WEBPACK_IMPORTED_MODULE_9__["DefaultProductComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_product_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultProductRoutingModule"],
                _shares_shares_module__WEBPACK_IMPORTED_MODULE_4__["SharesModule"],
            ]
        })
    ], DefaultProductModule);
    return DefaultProductModule;
}());



/***/ }),

/***/ "./src/app/default-product/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/default-product/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-area{\r\n\tpadding: 90px 0 60px 0;\r\n\tbackground: #262626;\r\n\tcolor: #fff;\r\n}\r\n\r\n.footer-social{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.single-footer h3{\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 25px;\r\n\tcolor: #fafafa;\r\n\tfont-family: Merienda;\r\n}\r\n\r\n.link-area li{\r\n\tpadding: 5px 5px 5px 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.link-area li a{\r\n\ttext-transform: capitalize;\r\n\tcolor: #ddd;\r\n\tfont-family: Merienda;\r\n}\r\n\r\n.link-area li a i{\r\n\tmargin-right: 10px;\r\n\tcolor: #ddd;\r\n}\r\n\r\n.link-area{\r\n\tpadding: 0;\r\n}\r\n\r\n.single-footer p{\r\n\tfont-family: Merienda;\r\n}\r\n\r\n.footer-social li a{\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tdisplay: inline-block;\r\n\tbackground: #000;\r\n\r\n}\r\n\r\n.footer-social li a i{\r\n\tcolor: #fff;\r\n\tpadding: 8px;\r\n}\r\n\r\n.widget li{\r\n\tfloat: left;\r\n\twidth: 50%;\r\n}\r\n\r\n.widget li a img{\r\n\tmargin-bottom: -10px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n}\r\n\r\n.copyright-area{\r\n\tbackground: #000;\r\n\tpadding: 30px 0;\r\n\tmargin-top: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.copyright-area p{\r\n\tfont-weight: 600;\r\n\tcolor: #fafafa;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1wcm9kdWN0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlCQUFpQjs7Q0FFakI7O0FBR0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiOztBQUVEO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osYUFBYTtDQUNiOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtcHJvZHVjdC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyLWFyZWF7XHJcblx0cGFkZGluZzogOTBweCAwIDYwcHggMDtcclxuXHRiYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9vdGVyLXNvY2lhbHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLWZvb3RlciBoM3tcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0Y29sb3I6ICNmYWZhZmE7XHJcblx0Zm9udC1mYW1pbHk6IE1lcmllbmRhO1xyXG59XHJcblxyXG4ubGluay1hcmVhIGxpe1xyXG5cdHBhZGRpbmc6IDVweCA1cHggNXB4IDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmxpbmstYXJlYSBsaSBhe1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdGNvbG9yOiAjZGRkO1xyXG5cdGZvbnQtZmFtaWx5OiBNZXJpZW5kYTtcclxufVxyXG5cclxuLmxpbmstYXJlYSBsaSBhIGl7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdGNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4ubGluay1hcmVhe1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaW5nbGUtZm9vdGVyIHB7XHJcblx0Zm9udC1mYW1pbHk6IE1lcmllbmRhO1xyXG59XHJcblxyXG4uZm9vdGVyLXNvY2lhbCBsaSBhe1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLXNvY2lhbCBsaSBhIGl7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ud2lkZ2V0IGxpe1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWRnZXQgbGkgYSBpbWd7XHJcblx0bWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0LWFyZWF7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRwYWRkaW5nOiAzMHB4IDA7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtYXJlYSBwe1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Y29sb3I6ICNmYWZhZmE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/default-product/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/default-product/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<footer>\n\t\t<div id=\"footer-area\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t<h3>{{ 'Footer.Divinector' | translate }}</h3>\n\t\t\t\t\t\t\t<p>{{ 'Footer.Place' | translate }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"footer-social list-inline\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://www.facebook.com/Sparkles_Perfect_Fashion_Destination-597561527352697/\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-amazon\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> \n\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t\t<h3>{{ 'Footer.Owner' | translate }}</h3>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ul class=\"link-area\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-male\" aria-hidden=\"true\"></i>{{ 'Footer.OwnerName' | translate }}</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-phone\"></i>{{ 'Footer.OwnerNumber' | translate }}</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>{{ 'Footer.OwnerEmail' | translate }}</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-map\"></i>{{ 'Footer.OwnerAddress' | translate }}</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t<h3>{{ 'Footer.Develop' | translate }}</h3>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ul class=\"link-area\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-male\" aria-hidden=\"true\"></i>{{ 'Footer.DevelopName' | translate }}</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-phone\"></i>{{ 'Footer.DevelopNumber' | translate }}</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>{{ 'Footer.DevelopEmail' | translate }}</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-map\"></i>{{ 'Footer.DevelopAddress' | translate }}</a></li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<ul class=\"footer-social list-inline\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://www.facebook.com/abhay.sahu.528\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/abhay-sahu-4ab3ba183/\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://github.com/abhaysahu\"><i class=\"fa fa-github\"></i></a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t\t<h3>{{ 'Footer.Photo' | translate }}</h3>\n\t\t\t\t\t\t\t\t<ul class=\"link-area widget list-inline\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/2.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/3.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/4.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"copyright-area text-center\">\n\t\t\t\t\t\t\t<p>&copy; 2020, All Right Reserved, copyright</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n</div>\n\t\t</div>\n\t</footer>\n"

/***/ }),

/***/ "./src/app/default-product/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/default-product/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/default-product/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/default-product/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/default-product/product-details/product-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/default-product/product-details/product-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\r\n\r\nhtml {\r\n  display: grid;\r\n  height: 100%;\r\n  padding-top: 50px;\r\n\r\n}\r\n\r\nbody {\r\n\tdisplay: grid;\r\n\tbackground: #E0C9CB;\r\n\tpadding-top: 140px;\r\n\tfont-family: \"Lato\", sans-serif;\r\n  text-transform: uppercase;\r\n  \r\n}\r\n\r\n.container{\r\n\tposition: relative;\r\n\tmargin: auto;\r\n\toverflow: hidden;\r\n\twidth: 720px;\r\n\theight: 520px;\r\n\tbackground: #F5F5F5;\r\n\tbox-shadow: 5px 5px 15px rgba(186,126,1, 0.5);\r\n  \tborder-radius: 10px;\r\n  \tmargin-top: -5%\r\n}\r\n\r\nimg {\r\n\twidth: 350px;\r\n\theight: 490px;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.product {\r\n\tposition: absolute;\r\n\twidth: 40%;\r\n\theight: 100%;\r\n\ttop: 10%;\r\n\tleft: 60%;\r\n\r\n}\r\n\r\nh1 {\r\n\tfont-size: 1.5em;\r\n\tcolor: #4E4E4E;\r\n\tmargin-top: -5px;\r\n}\r\n\r\nh2 {\r\n\tcolor: #C3A1A0;\r\n\tmargin-top: -5px;\r\n}\r\n\r\n.desc {\r\n\ttext-transform: none;\r\n\tletter-spacing: 0;\r\n\tmargin-bottom: 17px;\r\n\tcolor: #4E4E4E;\r\n\tfont-size: .9em;\r\n\tline-height: 1.6em;\r\n\tmargin-right: 25px;\r\n  text-align: justify;\r\n  height: 280px;\r\n}\r\n\r\nbutton {\r\n\tbackground: #cda9ac;\r\n\tpadding: 10px;\r\n\tdisplay: inline-block;\r\n\toutline: 0;\r\n\tborder: 0;\r\n\tmargin: -1px;\r\n\tborder-radius: 2px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tcolor: #F5F5F5;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground: #BA7E7E;\r\n\ttransition: all .4s ease-in-out;\r\n}\r\n\r\n.add {\r\n\twidth: 67%;\r\n}\r\n\r\n.picbig{\r\n  position: absolute;\r\n  width: 0px;\r\n  transition: width 0.3s linear 0s;\r\n}\r\n\r\n.pic:hover + .picbig{\r\n  width: 400px;\r\n  height: 700px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1wcm9kdWN0L3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7O0FBRXBFO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7O0NBRW5COztBQUdEO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsZ0NBQWdDO0VBQy9CLDBCQUEwQjs7Q0FFM0I7O0FBR0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsY0FBYztDQUNkLG9CQUFvQjtDQUNwQiw4Q0FBOEM7R0FDNUMsb0JBQW9CO0dBQ3BCLGVBQWU7Q0FDakI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsYUFBYTtDQUNiLFNBQVM7Q0FDVCxVQUFVOztDQUVWOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0VBQ2xCLG9CQUFvQjtFQUNwQixjQUFjO0NBQ2Y7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsVUFBVTtDQUNWLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGdDQUFnQztDQUNoQzs7QUFFRDtDQUNDLFdBQVc7Q0FDWDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBRVgsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDBcIik7XHJcblxyXG5odG1sIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHJcbn1cclxuXHJcblxyXG5ib2R5IHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGJhY2tncm91bmQ6ICNFMEM5Q0I7XHJcblx0cGFkZGluZy10b3A6IDE0MHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDcyMHB4O1xyXG5cdGhlaWdodDogNTIwcHg7XHJcblx0YmFja2dyb3VuZDogI0Y1RjVGNTtcclxuXHRib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgxODYsMTI2LDEsIDAuNSk7XHJcbiAgXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFx0bWFyZ2luLXRvcDogLTUlXHJcbn1cclxuXHJcbmltZyB7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdGhlaWdodDogNDkwcHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0b3A6IDEwJTtcclxuXHRsZWZ0OiA2MCU7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRjb2xvcjogIzRFNEU0RTtcclxuXHRtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcblx0Y29sb3I6ICNDM0ExQTA7XHJcblx0bWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDE3cHg7XHJcblx0Y29sb3I6ICM0RTRFNEU7XHJcblx0Zm9udC1zaXplOiAuOWVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQ6ICNjZGE5YWM7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0b3V0bGluZTogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0bWFyZ2luOiAtMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Y29sb3I6ICNGNUY1RjU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNCQTdFN0U7XHJcblx0dHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFkZCB7XHJcblx0d2lkdGg6IDY3JTtcclxufVxyXG5cclxuLnBpY2JpZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3MgbGluZWFyIDBzO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgbGluZWFyIDBzO1xyXG59XHJcblxyXG4ucGljOmhvdmVyICsgLnBpY2JpZ3tcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/default-product/product-details/product-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/default-product/product-details/product-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t<meta http-equiv=\"X-UA-Compartible\" content=\"ie=edge\">\n\t<title>Product Landing page</title>\n</head>\n<body>\n\n\t<div class=\"container\" *ngIf=\"products\">\n    <img *ngIf=\"products.imageUrl\" [src]=\"products.imageUrl\" alt=\"{{ products.title }}\">\n\n    <div class=\"product\">\n\t\t\t<!-- <p>{{ product.name }}</p> -->\n\t\t\t<h1>{{ products.name }}</h1>\n      <h2> {{ products.price | currency: \"&#8377;\": true}}</h2>\n      \n\t\t\t<pre class=\"desc\">{{ products.description}}</pre>\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<button type=\"button\" (click)=\"back()\" class=\"add\" >back</button>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\t\n\n\t</div>\n\n</body>\n</html>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/default-product/product-details/product-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/default-product/product-details/product-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shares/services/product.service */ "./src/app/shares/services/product.service.ts");
/* harmony import */ var _shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shares/services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");
/* harmony import */ var _shares_models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shares/models/shopping-cart */ "./src/app/shares/models/shopping-cart.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, db, route, translate, cookie, productService, cartService) {
        var _this = this;
        this.router = router;
        this.db = db;
        this.route = route;
        this.translate = translate;
        this.cookie = cookie;
        this.productService = productService;
        this.cartService = cartService;
        this.showActions = true;
        this.products = {};
        this.browserLang = "";
        this.language = "";
        translate.onLangChange.subscribe(function (lang) {
            _this.browserLang = lang;
        });
        this.language = this.cookie.get("language");
        if (this.language === "en" || this.language === "") {
            this.id = route.snapshot.paramMap.get('id');
            productService.getBoth(this.id).subscribe(function (products) {
                _this.products = products;
            });
        }
        else {
            this.id = route.snapshot.paramMap.get('id');
            productService.getBoth(this.id).subscribe(function (products) {
                _this.products = products;
                _this.products.name = _this.products.nameH;
                _this.products.description = _this.products.descriptionH;
            });
        }
    }
    ProductDetailsComponent.prototype.back = function () {
        this.router.navigate(['products']);
    };
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.browserLang = event.lang;
            console.log(_this.browserLang);
            if (_this.browserLang === "en" || _this.browserLang === "") {
                _this.id = _this.route.snapshot.paramMap.get('id');
                _this.productService.getBoth(_this.id).subscribe(function (products) {
                    _this.products = products;
                });
            }
            else {
                _this.id = _this.route.snapshot.paramMap.get('id');
                _this.productService.getBoth(_this.id).subscribe(function (products) {
                    _this.products = products;
                    _this.products.name = _this.products.nameH;
                    _this.products.description = _this.products.descriptionH;
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductDetailsComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('show-actions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductDetailsComponent.prototype, "showActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shopping-cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shares_models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__["ShoppingCart"])
    ], ProductDetailsComponent.prototype, "shoppingCart", void 0);
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/default-product/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/default-product/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
            _shares_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/default-product/product-filter/product-filter.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/default-product/product-filter/product-filter.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sticky-top{\r\n    top: 80px;\r\n}\r\n\r\n.dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n.topnav a:hover, .dropdown:hover .dropbtn {\r\n    background-color: #555;\r\n    color: white;\r\n  }\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n.dropdown .dropbtn {\r\n    font-size: 17px;    \r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    margin: 0;\r\n  }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1wcm9kdWN0L3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtDQUNiOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7R0FDbEI7O0FBQ0Q7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtHQUNkOztBQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZDs7QUFFRDtJQUNFLGVBQWU7R0FDaEI7O0FBRUQ7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLFdBQVc7R0FDWjs7QUFJRDtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYIiwiZmlsZSI6InNyYy9hcHAvZGVmYXVsdC1wcm9kdWN0L3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN0aWNreS10b3B7XHJcbiAgICB0b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC50b3BuYXYgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7ICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/default-product/product-filter/product-filter.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/default-product/product-filter/product-filter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n    <div class=\"list-group\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary dropdown-toggle dropbtn bg-dark\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ 'Product.Category' | translate }}\n            </button>\n            <div class=\"dropdown-menu\">\n                <a  \n                class=\"dropdown-item\"\n                [class.active]=\"!category\"\n                routerLink='/products'>{{ 'Product.All-Categories' | translate }}</a>\n                <div role=\"separator\" class=\"dropdown-divider\"></div>\n                <a \n                  *ngFor=\"let c of categories$ | async\" \n                  routerLink=\"/products\"\n                  [queryParams]=\"{ category: c.$key }\"\n                  class=\"dropdown-item\"\n                  [class.active]=\"category == c.$key\">\n                  {{ c.name }}\n                </a>\n            </div>\n          </div>  \n        \n      </div>\n\n</div>\n\n\n\n <!-- <div class=\"sticky-top\">\n  <div class=\"list-group\">\n    <a\n      class=\"list-group-item list-group-item-action\"\n      [class.active]=\"!category\"\n      routerLink=\"/products\"\n      >All Categories</a>\n    <a \n      *ngFor=\"let c of categories$ | async\" \n      routerLink=\"/products\"\n      [queryParams]=\"{ category: c.$key }\"\n      class=\"list-group-item list-group-item-action\"\n      [class.active]=\"category === c.$key\"\n      >\n      {{ c.name }} \n    </a>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/default-product/product-filter/product-filter.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/default-product/product-filter/product-filter.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shares_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shares/services/category.service */ "./src/app/shares/services/category.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService, translate, cookie) {
        var _this = this;
        this.categoryService = categoryService;
        this.translate = translate;
        this.cookie = cookie;
        this.browserLang = "";
        this.language = "";
        translate.onLangChange.subscribe(function (lang) {
            _this.browserLang = lang;
        });
        this.language = this.cookie.get("language");
        console.log(this.language);
        if (this.language === "en" || this.language === "") {
            this.categories$ = categoryService.getAllEnglish();
        }
        else {
            this.categories$ = categoryService.getAllHindi();
        }
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.browserLang = event.lang;
            if (_this.browserLang === "en" || _this.browserLang === "") {
                _this.categories$ = _this.categoryService.getAllEnglish();
            }
            else {
                _this.categories$ = _this.categoryService.getAllHindi();
            }
            //console.log(this.browserLang);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductFilterComponent.prototype, "Category", void 0);
    ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/default-product/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/default-product/product-filter/product-filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shares_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/default-product/products/products.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/default-product/products/products.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    height: 52px;\r\n}\r\n\r\n.top {\r\n    padding-top: 80px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1wcm9kdWN0L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9kZWZhdWx0LXByb2R1Y3QvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/default-product/products/products.component.html":
/*!******************************************************************!*\
  !*** ./src/app/default-product/products/products.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"input-group mb-3\" class=\"top\">\n        <div class=\"input-group-prepend\">            \n                <product-filter [category]=\"category\"></product-filter>\n            \n     <input \n            [(ngModel)]=\"searchTerm\"\n            type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\" placeholder=\"{{ 'Product.Search' | translate }}\">\n            <br>\n        </div>\n\n        <app-banner></app-banner>\n\n        <div >\n            <br>\n            \n                <div class=\"row\">\n                    <ng-container *ngFor=\"let p of filteredProducts; let i = index\">\n                        <div class=\"col-md-3 col-sm-4\">\n                            <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n                        </div>\n                    </ng-container>  \n                </div>\n        </div>  \n</div>\n\n\n<app-footer></app-footer>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/default-product/products/products.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/default-product/products/products.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shares_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shares/services/category.service */ "./src/app/shares/services/category.service.ts");
/* harmony import */ var src_app_shares_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shares/services/product.service */ "./src/app/shares/services/product.service.ts");
/* harmony import */ var src_app_shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shares/services/shopping-cart.service */ "./src/app/shares/services/shopping-cart.service.ts");








var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productsService, categoryService, translate, cookie, shoppingCartService) {
        var _this = this;
        this.route = route;
        this.productsService = productsService;
        this.categoryService = categoryService;
        this.translate = translate;
        this.cookie = cookie;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
        this.language = "";
        this.browserLang = "";
        translate.onLangChange.subscribe(function (lang) {
            _this.browserLang = lang;
        });
        this.language = this.cookie.get("language");
        if (this.language == "en" || this.language == "") {
            console.log("yes");
            this.categories$ = categoryService.getAllEnglish();
            productsService.getAllBoth().subscribe(function (products) {
                _this.products = products;
                route.queryParamMap.subscribe(function (params) {
                    _this.category = params.get('category');
                    _this.filteredProducts = (_this.category) ?
                        _this.products.filter(function (p) { return p.category === _this.category; }) :
                        _this.products;
                });
            });
        }
        else {
            this.categories$ = categoryService.getAllHindi();
            productsService.getAllBoth().subscribe(function (products) {
                for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                    var hindi = products_1[_i];
                    hindi.name = hindi.nameH;
                    hindi.title = hindi.titleH;
                }
                _this.products = products;
                route.queryParamMap.subscribe(function (params) {
                    _this.category = params.get('category');
                    _this.filteredProducts = (_this.category) ?
                        _this.products.filter(function (p) { return p.category === _this.category; }) :
                        _this.products;
                });
            });
        }
    }
    Object.defineProperty(ProductsComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredProducts = this.filtereProducts(value);
        },
        enumerable: true,
        configurable: true
    });
    ProductsComponent.prototype.filtereProducts = function (searchString) {
        return this.products.filter(function (product) {
            return product.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent())
                            .subscribe(function (cart) { return _this.cart = cart; });
                        this.translate.onLangChange.subscribe(function (event) {
                            _this.browserLang = event.lang;
                            if (_this.browserLang === "en" || _this.browserLang === "") {
                                _this.categories$ = _this.categoryService.getAllEnglish();
                                _this.productsService.getAllBoth().subscribe(function (products) {
                                    _this.products = products;
                                    _this.route.queryParamMap.subscribe(function (params) {
                                        _this.category = params.get('category');
                                        _this.filteredProducts = (_this.category) ?
                                            _this.products.filter(function (p) { return p.category === _this.category; }) :
                                            _this.products;
                                    });
                                });
                            }
                            else {
                                _this.categories$ = _this.categoryService.getAllHindi();
                                _this.productsService.getAllBoth().subscribe(function (products) {
                                    for (var _i = 0, products_2 = products; _i < products_2.length; _i++) {
                                        var hindi = products_2[_i];
                                        hindi.name = hindi.nameH;
                                        hindi.title = hindi.titleH;
                                    }
                                    _this.products = products;
                                    _this.route.queryParamMap.subscribe(function (params) {
                                        _this.category = params.get('category');
                                        _this.filteredProducts = (_this.category) ?
                                            _this.products.filter(function (p) { return p.category === _this.category; }) :
                                            _this.products;
                                    });
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/default-product/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/default-product/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shares_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            src_app_shares_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            src_app_shares_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default-product-default-product-module.js.map