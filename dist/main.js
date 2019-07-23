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

/***/ "./src/app/admin-auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/admin-auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
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

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: beige;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n\n<h1>Admin Manages Orders</h1>\n\n<p>\n  <input\n    #query \n    (keyup)=\"filter(query.value)\"\n    type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n</p>\n\n\n<data-table\n  [items]=\"items\"\n  [itemCount]=\"itemCount\"\n  (reload)=\"reloadItems($event)\"\n>\n \n  <data-table-column\n    [property]=\"'name'\"\n    [header]=\"'Name'\"\n    [sortable]=\"true\"\n    [resizable]=\"true\"\n  >\n  <ng-template #dataTableCell let-item=\"item\">\n    {{item.shipping.name}}\n  </ng-template>\n  </data-table-column>\n\n  <data-table-column\n    [property]=\"'date'\"\n    [header]=\"'Date'\"\n    [sortable]=\"true\"\n    [resizable]=\"true\"\n  >\n  <ng-template #dataTableCell let-item=\"item\">\n    {{item.dataPlaced | date}}\n  </ng-template>\n  </data-table-column> \n \n  <data-table-column\n    [property]=\"'$key'\"\n    [header]=\"'Bill'\"\n  >\n  <ng-template #dataTableCell let-item=\"item\">\n    <a [routerLink]=\"['/view/orders/', item.$key]\">Genrate</a>\n  </ng-template>\n</data-table-column>\n\n<data-table-column\n    [property]=\"'$key'\"\n    [header]=\"'Orders'\"\n  >\n  <ng-template #dataTableCell let-item=\"item\">\n    <a [routerLink]=\"['/view/orders/details', item.$key]\">View</a>\n  </ng-template>\n</data-table-column>\n</data-table>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/order.service */ "./src/app/order.service.ts");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");




var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(orderService) {
        var _this = this;
        this.orderService = orderService;
        this.items = [];
        this.subscription = orderService.getOrders()
            .subscribe(function (orders) {
            _this.filteredOrders = _this.orders = orders;
            _this.initializeTable(orders);
        });
    }
    AdminOrdersComponent.prototype.initializeTable = function (orders) {
        var _this = this;
        this.tableResource = new angular5_data_table__WEBPACK_IMPORTED_MODULE_3__["DataTableResource"](orders);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminOrdersComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminOrdersComponent.prototype.filter = function (query) {
        this.filteredOrders = (query) ?
            this.orders.filter(function (o) { return o.shipping.name.toLowerCase().includes(query.toLowerCase()); }) :
            this.orders;
        this.initializeTable(this.filteredOrders);
    };
    AdminOrdersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! ./admin-orders.component.html */ "./src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: beige;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n<p>\n    <a class=\"abhay\" routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Product</a>\n</p>\n<p>\n  <input\n    #query \n    (keyup)=\"filter(query.value)\"\n    type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n</p>\n\n\n<data-table\n  [items]=\"items\"\n  [itemCount]=\"itemCount\"\n  (reload)=\"reloadItems($event)\"\n>\n \n  <data-table-column\n    [property]=\"'title'\"\n    [header]=\"'Title'\"\n    [sortable]=\"true\"\n    [resizable]=\"true\"\n  >\n  </data-table-column>\n\n  <data-table-column\n    [property]=\"'price'\"\n    [header]=\"'Price'\"\n    [sortable]=\"true\"\n    [resizable]=\"true\"\n  >\n  <ng-template #dataTableCell let-item=\"item\">\n    {{ item.price | currency:\"&#8377;\": true }}\n  </ng-template>\n  </data-table-column> \n \n  <data-table-column\n    [property]=\"'$key'\"\n  >\n  <ng-template #dataTableCell let-item=\"item\">\n      <a [routerLink]=\"['/admin/products/', item.$key]\">Edit</a>\n  </ng-template>\n</data-table-column>\n</data-table>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");



//import { DataTableResource } from 'angular-4-data-table';

var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        this.subscription = this.productService.getAll()
            .subscribe(function (products) {
            _this.filteredProducts = _this.products = products;
            _this.initializeTable(products);
            // this.tableResource = new DataTableResource(products);
            // this.tableResource.query({ offset: 0})
            //   .then(items => this.items = items);
            // this.tableResource.count()
            //   .then(count => this.itemCount = count);
        });
        // console.log(this.productService.getAll())
    }
    AdminProductsComponent.prototype.initializeTable = function (products) {
        var _this = this;
        this.tableResource = new angular5_data_table__WEBPACK_IMPORTED_MODULE_3__["DataTableResource"](products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) {
            _this.items = items;
            console.log(_this.items);
        });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminProductsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminProductsComponent.prototype.filter = function (query) {
        this.filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
        this.initializeTable(this.filteredProducts);
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n          <div class=\"form-group\">\n            <label for=\"code\">Product Code</label>\n            <input #code=\"ngModel\" [(ngModel)]=\"product.code\" name=\"code\" id=\"code\" type=\"text\" class=\"form-control\" required placeholder=\"Product Code\">\n            <div class=\"alert alert-danger\" *ngIf=\"code.touched && code.invalid\">\n              Product Code is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input #name=\"ngModel\" [(ngModel)]=\"product.name\" name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" required placeholder=\"Big Name\">\n              <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n                Product Full Name is Required.\n              </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required placeholder=\"Short Title\">\n            <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n              Title is required.\n            </div>\n          </div>\n          <div class=\"form-group\"> \n              <label for=\"price\">Price</label>\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">&#8377;</span>\n                <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" placeholder=\"35.00\" required [min]=\"0\">\n              </div> \n              <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n                <div *ngIf=\"price.errors.required\">Price is required.</div>\n                <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n              </div>\n              \n            </div>\n          <div class=\"form-group\">\n              <label for=\"category\">Category</label>\n              <select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n                <option value=\"\"></option>  \n                <option *ngFor=\"let c of categories$ | async\" [value]=\"c.$key\">\n                  {{ c.name }}\n                </option>\n              </select>\n              <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n                  Category is required.\n              </div>\n          </div>\n        \n          <div class=\"form-group\">\n              <label for=\"imageUrl\">Image URL</label >\n              <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type= \"text\" class=\"form-control\" required url placeholder=\"https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\">\n              <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\n                <div *ngIf=\"imageUrl.errors.url\">please enter a valid URL.</div>  \n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"description\">Description</label>\n                  <textarea #description [(ngModel)]=\"product.description\" name=\"description\" id=\"description\" tyoe=\"text\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\"></textarea>\n                  <div class=\"alert alert-danger\" *ngIf=\"description.touched && description.invalid\">\n                    <div *ngIf=\"description.errors.required\">description is required.</div>\n                </div>\n              </div>\n          \n            <button class=\"btn btn-primary\">Save</button>\n            <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n      </form>\n  </div>\n  <div class=\"col-md-4\">\n    <product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/category.service */ "./src/app/category.service.ts");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");






var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.get(this.id).take(1).subscribe(function (p) { return _this.product = p; });
    }
    ProductFormComponent.prototype.save = function (product) {
        console.log(this.product);
        if (this.id)
            this.productService.update(this.id, product);
        else
            this.productService.create(product);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure yow want to delete this product?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/product-form/product-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            src_app_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
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



var routes = [];
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

module.exports = "<bs-navbar></bs-navbar>\n\n\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");





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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bs-navbar/bs-navbar.component */ "./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/check-out/check-out.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/order-success/order-success.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-auth-guard.service */ "./src/app/admin-auth-guard.service.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./category.service */ "./src/app/category.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./products/product-filter/product-filter.component */ "./src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/product-card/product-card.component.ts");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./product-quantity/product-quantity.component */ "./src/app/product-quantity/product-quantity.component.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./order.service */ "./src/app/order.service.ts");
/* harmony import */ var _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shopping-cart-summary/shopping-cart-summary.component */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shipping-form/shipping-form.component */ "./src/app/shipping-form/shipping-form.component.ts");
/* harmony import */ var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./view-order/view-order.component */ "./src/app/view-order/view-order.component.ts");
/* harmony import */ var _developers_developers_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./developers/developers.component */ "./src/app/developers/developers.component.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _phone_phone_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./phone/phone.component */ "./src/app/phone/phone.component.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./window.service */ "./src/app/window.service.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./firstpage/firstpage.component */ "./src/app/firstpage/firstpage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _ppp_ppp_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ppp/ppp.component */ "./src/app/ppp/ppp.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");



















































//import { ProductCardComponent } from './product-card/product-card.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_14__["BsNavbarComponent"],
                _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_44__["FirstpageComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_19__["MyOrdersComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_20__["AdminProductsComponent"],
                _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_21__["AdminOrdersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__["ProductFormComponent"],
                _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_31__["ProductFilterComponent"],
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_32__["ProductCardComponent"],
                _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_34__["ProductQuantityComponent"],
                _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_36__["ShoppingCartSummaryComponent"],
                _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_37__["ShippingFormComponent"],
                _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_38__["ViewOrderComponent"],
                _developers_developers_component__WEBPACK_IMPORTED_MODULE_39__["DevelopersComponent"],
                _phone_phone_component__WEBPACK_IMPORTED_MODULE_41__["PhoneComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_43__["WelcomeComponent"],
                _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_44__["FirstpageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_46__["FooterComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_47__["ProductDetailsComponent"],
                _ppp_ppp_component__WEBPACK_IMPORTED_MODULE_48__["PppComponent"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_49__["ViewDetailsComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_50__["BannerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_9__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_40__["ParticlesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_43__["WelcomeComponent"] },
                    { path: 'firstpage', component: _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_44__["FirstpageComponent"] },
                    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"] },
                    { path: 'products/details/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_47__["ProductDetailsComponent"] },
                    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
                    { path: 'login/phone/number', component: _phone_phone_component__WEBPACK_IMPORTED_MODULE_41__["PhoneComponent"] },
                    { path: 'developer', component: _developers_developers_component__WEBPACK_IMPORTED_MODULE_39__["DevelopersComponent"] },
                    { path: 'ppp', component: _ppp_ppp_component__WEBPACK_IMPORTED_MODULE_48__["PppComponent"] },
                    { path: 'check-out', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]] },
                    { path: 'order-success/:id', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__["OrderSuccessComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"],] },
                    { path: 'my/orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_19__["MyOrdersComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]] },
                    { path: 'admin/products/new',
                        component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__["ProductFormComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AdminAuthGuardService"]]
                    },
                    {
                        path: 'admin/products/:id',
                        component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__["ProductFormComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AdminAuthGuardService"]]
                    },
                    {
                        path: 'admin/products',
                        component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_20__["AdminProductsComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AdminAuthGuardService"]]
                    },
                    { path: 'admin/orders',
                        component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_21__["AdminOrdersComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AdminAuthGuardService"]]
                    },
                    {
                        path: 'footer',
                        component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_46__["FooterComponent"]
                    },
                    { path: 'check-out/:id', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AdminAuthGuardService"]] },
                    { path: 'view/orders/:id',
                        component: _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_38__["ViewOrderComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]]
                    },
                    { path: 'view/orders/details/:id',
                        component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_49__["ViewDetailsComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]]
                    }
                ]),
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatSortModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"],
                _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AdminAuthGuardService"],
                _user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"],
                _category_service__WEBPACK_IMPORTED_MODULE_29__["CategoryService"],
                _product_service__WEBPACK_IMPORTED_MODULE_30__["ProductService"],
                _shopping_cart_service__WEBPACK_IMPORTED_MODULE_33__["ShoppingCartService"],
                _order_service__WEBPACK_IMPORTED_MODULE_35__["OrderService"],
                _window_service__WEBPACK_IMPORTED_MODULE_42__["WindowService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
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

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");









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

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner img {width:100%;}\r\n\r\n.banner-box {position: relative;}\r\n\r\nh1 {font-size: 2.4rem;margin-bottom: 30px;}\r\n\r\n.intro-text { width:100%; position: absolute; top:30%; text-align: center; color:#fff;}\r\n\r\n.intro-text-box { width: 62%;margin: auto;background-color: rgba(96, 96, 96, 0.6);padding: 20px;border: 10px solid #808080;}\r\n\r\n.intro-text-box h1 {font-size:3em;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsV0FBVyxDQUFDOztBQUV6QixhQUFhLG1CQUFtQixDQUFDOztBQUVqQyxJQUFJLGtCQUFrQixvQkFBb0IsQ0FBQzs7QUFFM0MsY0FBYyxXQUFXLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQzs7QUFDdkYsa0JBQWtCLFdBQVcsYUFBYSx3Q0FBd0MsY0FBYywyQkFBMkIsQ0FBQzs7QUFDNUgsb0JBQW9CLGNBQWMsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIgaW1nIHt3aWR0aDoxMDAlO31cclxuXHJcbi5iYW5uZXItYm94IHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5cclxuaDEge2ZvbnQtc2l6ZTogMi40cmVtO21hcmdpbi1ib3R0b206IDMwcHg7fVxyXG5cclxuLmludHJvLXRleHQgeyB3aWR0aDoxMDAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDozMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6I2ZmZjt9XHJcbi5pbnRyby10ZXh0LWJveCB7IHdpZHRoOiA2MiU7bWFyZ2luOiBhdXRvO2JhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDk2LCA5NiwgMC42KTtwYWRkaW5nOiAyMHB4O2JvcmRlcjogMTBweCBzb2xpZCAjODA4MDgwO31cclxuLmludHJvLXRleHQtYm94IGgxIHtmb250LXNpemU6M2VtO30iXX0= */"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"banner\">\n  <div class=\"banner-box\">\n    <img src=\"assets/images/banner.jpg\" alt=\"banner\" />\n  </div>\n</section>  -->\n\n\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" height=\"400\" src=\"assets/images/banner.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" height=\"400\" src=\"assets/images/banner1.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" height=\"400\" src=\"assets/images/banner2.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.dropdown-toggle{\r\n    cursor: pointer;\r\n}\r\n\r\n.bg-blue {background-color:#007EDB;}\r\n\r\n.navbar-brand img { height:30px; }\r\n\r\n.navbar-dark .navbar-nav .nav-link {color:#fff;}\r\n\r\n.navbar-dark .navbar-nav .active .nav-link {color:#fff;} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnMtbmF2YmFyL2JzLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRCxVQUFVLHlCQUF5QixDQUFDOztBQUNwQyxvQkFBb0IsWUFBWSxFQUFFOztBQUNsQyxvQ0FBb0MsV0FBVyxDQUFDOztBQUNoRCw0Q0FBNEMsV0FBVyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvYnMtbmF2YmFyL2JzLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kcm9wZG93bi10b2dnbGV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iZy1ibHVlIHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdFREI7fVxyXG4ubmF2YmFyLWJyYW5kIGltZyB7IGhlaWdodDozMHB4OyB9XHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge2NvbG9yOiNmZmY7fVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLmFjdGl2ZSAubmF2LWxpbmsge2NvbG9yOiNmZmY7fSAiXX0= */"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-blue fixed-top\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/products\">\n        <img src=\"assets/images/logo.png\" alt=\"Angular Project\" />\n        <!-- <i class=\"fa fa-leaf\" aria-hidden=\"true\"></i> -->\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n        <ul class=\"nav navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n              <i class=\"fa fa-shopping-cart\" style=\"font-size: 16px\" aria-hidden=\"true\"></i>\n              <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$ | async as cart\">\n                {{ cart.totalItemsCount }} \n              </span>\n            </a>\n          </li> \n        </ul>\n\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" #searchInput type=\"text\"   \n            [placeholder]=\"PlaceHolderText\"\n            (keyup.enter)=\"OnSearch(searchInput.value)\">\n\n          </form> -->\n\n\n        \n        <ul class=\"nav navbar-nav\">\n            <ng-template #anonymousUser>\n              <li *ngIf=\"!(user$ | async)\" class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n              </li>\n            </ng-template>\n            <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n              <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{ appUser.name }}\n              </a>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n                <!-- <a class=\"dropdown-item\" routerLink=\"/footer\">footer</a> -->\n               <!-- <a class=\"dropdown-item\" routerLink=\"/developer\">Developers</a> -->\n                <ng-container *ngIf=\"appUser.isAdmin\">\n                    <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n                    <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>    \n                </ng-container>\n                <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n              </div>\n            </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");




var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
        this.PlaceHolderText = "Search...";
    }
    BsNavbarComponent.prototype.OnSearch = function (serchText) {
        console.log(this.searchText);
    };
    BsNavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        console.log(this.appUser);
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BsNavbarComponent.prototype, "PlaceHolderText", void 0);
    BsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
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
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', {
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

/***/ "./src/app/check-out/check-out.component.css":
/*!***************************************************!*\
  !*** ./src/app/check-out/check-out.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/check-out/check-out.component.html":
/*!****************************************************!*\
  !*** ./src/app/check-out/check-out.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Shopping </h2>\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n  <div class=\"col-6\">\n    <shipping-form [cart]=\"cart \"></shipping-form>\n  </div>\n  <div class=\"col-6\">\n    <shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/check-out/check-out.component.ts":
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");



var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
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
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/check-out/check-out.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/developers/developers.component.css":
/*!*****************************************************!*\
  !*** ./src/app/developers/developers.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: courier;\r\n    color: aliceblue;\r\n\r\n}\r\n\r\nh1 {   \r\n    \r\n    color:black;\r\n    text-align: center;\r\n    font-family:  cursive;\r\n    font-size: 100px;\r\n    position: relative;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.priyesh {\r\n        position: relative;\r\n        \r\n        margin-top: 50px;\r\n        \r\n        \r\n        \r\n         }\r\n\r\n.center {\r\n        position: absolute;\r\n        bottom:0;\r\n        top:250px;\r\n        left: 200px;\r\n        -webkit-transform: translate(-50%, -50%);\r\n                transform: translate(-50%, -50%);\r\n        font-size: 25px;\r\n        font-weight:700;\r\n        color:black;\r\n        text-align: center;\r\n        font-family: cursive;\r\n    }\r\n\r\n.text1 {    \r\n        position: absolute;\r\n        font-size: 16px;\r\n        font-family: cursive;\r\n        text-align: center;\r\n        font-weight: 550;\r\n        margin-right: 10px;\r\n        margin-left: 25px;\r\n    \r\n       \r\n   }\r\n\r\n.img {\r\n    border-radius: 50px;\r\n    display: block;\r\n    opacity: 0.7;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    border: 2px black solid;\r\n\r\n\r\n }\r\n\r\n.overlay {\r\n        position: absolute;\r\n        bottom: 100%;\r\n        left: 52px;\r\n        right: 0;\r\n        background-color:white;\r\n        overflow: hidden;\r\n        width: 300px;\r\n        height:0;\r\n        border-radius: 50px;\r\n        transition: .5s ease;\r\n        opacity: 0.7;\r\n     }\r\n\r\n.text {\r\n        white-space: nowrap; \r\n        color:black;\r\n        font-size: 20px;\r\n        position: absolute;\r\n        overflow: hidden;\r\n        top: 50%;\r\n        left: 50%;\r\n        -webkit-transform: translate(-50%, -50%);\r\n                transform: translate(-50%, -50%);\r\n        -ms-transform: translate(-50%, -50%);\r\n    }\r\n\r\n.priyesh:hover .overlay {\r\n                        bottom: 0;\r\n                        height: 100%;\r\n                    }\r\n\r\n.cont1 {\r\n      display: inline-flex;\r\n      flex-wrap: wrap;\r\n      flex-direction: row;\r\n   }\r\n\r\nbody {\r\n    font:normal 75% Arial, Helvetica, sans-serif;\r\n    background-color: aliceblue;\r\n    width:119%;\r\n    margin-left: -9%;\r\n }\r\n\r\n#particlecheck{\r\n     border: 2px red dashed;\r\n }\r\n\r\n.main{\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\n.title{\r\n    margin-top: -2%;\r\n    width: 100%;\r\n\r\n    \r\n}\r\n\r\n.headingi{\r\n    word-break: break-all;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCOztDQUVwQjs7QUFFRDs7SUFFSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7Q0FFcEI7O0FBRUQ7UUFDUSxtQkFBbUI7O1FBRW5CLGlCQUFpQjs7OztVQUlmOztBQUVWO1FBQ1EsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxVQUFVO1FBQ1YsWUFBWTtRQUNaLHlDQUFpQztnQkFBakMsaUNBQWlDO1FBQ2pDLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixxQkFBcUI7S0FDeEI7O0FBRUw7UUFDUSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0I7OztJQUd0Qjs7QUFFSjtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCOzs7RUFHMUI7O0FBRUY7UUFDUSxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFdBQVc7UUFDWCxTQUFTO1FBQ1QsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsU0FBUztRQUNULG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsYUFBYTtNQUNmOztBQUVOO1FBQ1Esb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixTQUFTO1FBQ1QsVUFBVTtRQUNWLHlDQUFpQztnQkFBakMsaUNBQWlDO1FBQ2pDLHFDQUFxQztLQUN4Qzs7QUFDTDt3QkFDd0IsVUFBVTt3QkFDVixhQUFhO3FCQUNoQjs7QUFFckI7TUFDTSxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtJQUN0Qjs7QUFFSjtJQUNJLDZDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7QUFFRDtLQUNJLHVCQUF1QjtFQUMxQjs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7OztDQUdmOztBQUNEO0lBQ0ksc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbn1cclxuXHJcbmgxIHsgICBcclxuICAgIFxyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn1cclxuXHJcbi5wcml5ZXNoIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgfVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgIHRvcDoyNTBweDtcclxuICAgICAgICBsZWZ0OiAyMDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIH1cclxuXHJcbi50ZXh0MSB7ICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgXHJcbiAgICAgICBcclxuICAgfVxyXG5cclxuLmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG5cclxuXHJcbiB9XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICBsZWZ0OiA1MnB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgfVxyXG5cclxuLnRleHQge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG4ucHJpeWVzaDpob3ZlciAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi5jb250MSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIH1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udDpub3JtYWwgNzUlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB3aWR0aDoxMTklO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05JTtcclxuIH1cclxuXHJcbiAjcGFydGljbGVjaGVja3tcclxuICAgICBib3JkZXI6IDJweCByZWQgZGFzaGVkO1xyXG4gfVxyXG5cclxuLm1haW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBcclxufVxyXG4uaGVhZGluZ2l7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/developers/developers.component.html":
/*!******************************************************!*\
  !*** ./src/app/developers/developers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Developers</title>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n </head>\n    <body>\n            <div className=\"main\">\n        <particles  [params]=\"myParams\" [style]=\"myStyle\"></particles>\n           <div class=\"title\"> <h1 class=\"headingi\">Developers</h1> </div>\n        \n            <div class=\"cont1\">\n            \n        <div class=\"priyesh\">\n            <img class=\"img\" [src]=\"(featuredPhotoStream | async)?.url2\" alt=\"priyesh pic\" width=\"300px\" height=\"320px\" >\n            <div class=\"center\">Priyesh Rathore \n            <div class=\"text1\">MEAN Stack Developer </div>\n            </div>\n           <div class=\"overlay\">\n                   <div class=\"text\">\n                       <a href=\"https://www.facebook.com/priyesh.rathore.98\" target=\"_blank\" class=\"fa fa-facebook-square\" style=\"font-size:50px\"></a>\n                       <a href=\"https://www.linkedin.com/in/priyesh-rathore-08679917b/\" target=\"_blank\" class=\"fa fa-linkedin-square\" style=\"font-size:50px\"></a>\n                      <a href=\"https://github.com/priyesh2206\" class=\"fa fa-github-square\" target=\"_blank\" style=\"font-size:50px\"></a>\n                   </div>\n            </div>\n        </div>\n        <div class=\"priyesh\">\n            <img class=\"img\" [src]=\"(featuredPhotoStream | async)?.url4\" alt=\"prashant pic\" width=\"300px\" height=\"320px\" >\n            <div class=\"center\">Prashant Singh\n              <div class=\"text1\">MEAN Stack Developer </div>\n            </div>\n            <div class=\"overlay\">\n                    <div class=\"text\">\n                            <a href=\"https://www.facebook.com/ps0798\" target=\"_blank\"  class=\"fa fa-facebook-square\" style=\"font-size:50px\"></a>\n                            <a href=\"#\" target=\"_blank\"  class=\"fa fa-linkedin-square\" style=\"font-size:50px\"></a>\n                            <a href=\"https://github.com/ps0798\" target=\"_blank\"  class=\"fa fa-github-square\" style=\"font-size:50px\"></a>\n                    </div>\n            </div>\n        </div>\n        <div class=\"priyesh\">\n                <img class=\"img\" [src]=\"(featuredPhotoStream | async)?.url3\" alt=\"abhay pic\" width=\"300px\" height=\"320px\" >\n                <div class=\"center\">Abhay Sahu\n                <div class=\"text1\">MEAN Stack Developer</div>\n                </div>\n                <div class=\"overlay\">\n                        <div class=\"text\">\n                                <a href=\"https://www.facebook.com/abhay.sahu.528\" target=\"_blank\" class=\"fa fa-facebook-square\" style=\"font-size:50px\"></a>\n                                <a href=\"https://www.linkedin.com/in/abhay-sahu-4ab3ba183/\" target=\"_blank\" class=\"fa fa-linkedin-square\" style=\"font-size:50px\"></a>\n                                <a href=\"https://github.com/abhaysahu\" target=\"_blank\" class=\"fa fa-github-square\" style=\"font-size:50px\"></a>\n                        </div>\n                </div>\n            </div>\n            </div>\n            </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n            <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n            </body>\n    </html>"

/***/ }),

/***/ "./src/app/developers/developers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/developers/developers.component.ts ***!
  \****************************************************/
/*! exports provided: DevelopersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersComponent", function() { return DevelopersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var DevelopersComponent = /** @class */ (function () {
    function DevelopersComponent(db) {
        this.db = db;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.featuredPhotoStream = this.db.object('/photos');
    }
    DevelopersComponent.prototype.ngOnInit = function () {
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
    DevelopersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-developers',
            template: __webpack_require__(/*! ./developers.component.html */ "./src/app/developers/developers.component.html"),
            styles: [__webpack_require__(/*! ./developers.component.css */ "./src/app/developers/developers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], DevelopersComponent);
    return DevelopersComponent;
}());



/***/ }),

/***/ "./src/app/firstpage/firstpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/firstpage/firstpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0cGFnZS9maXJzdHBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/firstpage/firstpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/firstpage/firstpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n<app-products></app-products>\n\n"

/***/ }),

/***/ "./src/app/firstpage/firstpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/firstpage/firstpage.component.ts ***!
  \**************************************************/
/*! exports provided: FirstpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstpageComponent", function() { return FirstpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstpageComponent = /** @class */ (function () {
    function FirstpageComponent() {
    }
    FirstpageComponent.prototype.ngOnInit = function () {
    };
    FirstpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'firstpage',
            template: __webpack_require__(/*! ./firstpage.component.html */ "./src/app/firstpage/firstpage.component.html"),
            styles: [__webpack_require__(/*! ./firstpage.component.css */ "./src/app/firstpage/firstpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstpageComponent);
    return FirstpageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-area{\r\n\tpadding: 90px 0 60px 0;\r\n\tbackground: #262626;\r\n\tcolor: #fff;\r\n}\r\n\r\n.footer-social{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.single-footer h3{\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 25px;\r\n\tcolor: #fafafa;\r\n\tfont-family: Merienda;\r\n}\r\n\r\n.link-area li{\r\n\tpadding: 5px 5px 5px 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.link-area li a{\r\n\ttext-transform: capitalize;\r\n\tcolor: #ddd;\r\n\tfont-family: Merienda;\r\n}\r\n\r\n.link-area li a i{\r\n\tmargin-right: 10px;\r\n\tcolor: #ddd;\r\n}\r\n\r\n.link-area{\r\n\tpadding: 0;\r\n}\r\n\r\n.single-footer p{\r\n\tfont-family: Merienda;\r\n}\r\n\r\n.footer-social li a{\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tdisplay: inline-block;\r\n\tbackground: #000;\r\n\r\n}\r\n\r\n.footer-social li a i{\r\n\tcolor: #fff;\r\n\tpadding: 8px;\r\n}\r\n\r\n.widget li{\r\n\tfloat: left;\r\n\twidth: 50%;\r\n}\r\n\r\n.widget li a img{\r\n\tmargin-bottom: -10px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n}\r\n\r\n.copyright-area{\r\n\tbackground: #000;\r\n\tpadding: 30px 0;\r\n\tmargin-top: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.copyright-area p{\r\n\tfont-weight: 600;\r\n\tcolor: #fafafa;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQyx1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsV0FBVztDQUNYOztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsaUJBQWlCOztDQUVqQjs7QUFHRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYOztBQUVEO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3Rlci1hcmVhe1xyXG5cdHBhZGRpbmc6IDkwcHggMCA2MHB4IDA7XHJcblx0YmFja2dyb3VuZDogIzI2MjYyNjtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWx7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNpbmdsZS1mb290ZXIgaDN7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdGNvbG9yOiAjZmFmYWZhO1xyXG5cdGZvbnQtZmFtaWx5OiBNZXJpZW5kYTtcclxufVxyXG5cclxuLmxpbmstYXJlYSBsaXtcclxuXHRwYWRkaW5nOiA1cHggNXB4IDVweCAwO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rLWFyZWEgbGkgYXtcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRjb2xvcjogI2RkZDtcclxuXHRmb250LWZhbWlseTogTWVyaWVuZGE7XHJcbn1cclxuXHJcbi5saW5rLWFyZWEgbGkgYSBpe1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRjb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmxpbmstYXJlYXtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2luZ2xlLWZvb3RlciBwe1xyXG5cdGZvbnQtZmFtaWx5OiBNZXJpZW5kYTtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWwgbGkgYXtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblxyXG59XHJcblxyXG5cclxuLmZvb3Rlci1zb2NpYWwgbGkgYSBpe1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLndpZGdldCBsaXtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkZ2V0IGxpIGEgaW1ne1xyXG5cdG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmNvcHlyaWdodC1hcmVhe1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0cGFkZGluZzogMzBweCAwO1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0LWFyZWEgcHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGNvbG9yOiAjZmFmYWZhO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<footer>\n\t\t<div id=\"footer-area\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t<h3>About Divinector</h3>\n\t\t\t\t\t\t\t<p>A new place for shopping for girls, we have morden purse, all imported lingeries, fancy nighty, cosmatics, imitation jewellery, jeans, top, kurti.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"footer-social list-inline\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://www.facebook.com/Sparkles_Perfect_Fashion_Destination-597561527352697/\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-amazon\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> \n\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t\t<h3>Shop Owner</h3>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ul class=\"link-area\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-male\" aria-hidden=\"true\"></i>Ghanshyam Sahu</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-phone\"></i>9424658428</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>shyam.sap01@gmail.com</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-map\"></i>Hanuman Colony, Opposite of Rajshree A.B road guna</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t<h3>Develop By</h3>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ul class=\"link-area\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-male\" aria-hidden=\"true\"></i>Abhay Sahu</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-phone\"></i>9617625945</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>shuabhay545@gmail.com</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-map\"></i>subhash colony A.B road guna</a></li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<ul class=\"footer-social list-inline\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://www.facebook.com/abhay.sahu.528\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/abhay-sahu-4ab3ba183/\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"https://github.com/abhaysahu\"><i class=\"fa fa-github\"></i></a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"single-footer\">\n\t\t\t\t\t\t\t\t<h3>Photo Gallary</h3>\n\t\t\t\t\t\t\t\t<ul class=\"link-area widget list-inline\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/2.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/3.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../assets/images/4.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"copyright-area text-center\">\n\t\t\t\t\t\t\t<p>&copy; 2019, All Right Reserved, copyright</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n</div>\n\t\t</div>\n\t</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{ \r\n    font-size: 15px;\r\n    width: 200px;\r\n    height:50px; \r\n    font-family: cursive;\r\n    font-weight: 1000;\r\n    background-color: black;\r\n    color:white;\r\n    border: 2px red solid;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixzQkFBc0I7O0NBRXpCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0eyBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDo1MHB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div>\n      \n          <button (click)=\"login()\" type=\"button\" class=\"btn btn-primary\" class=\"text\"><i class=\"fa fa-google\" style=\"font-size:25px;color:red\"></i>Login with Google</button>\n          <!-- <a routerLink=\"/login/phone/number\" class=\"btn btn-primary\">Login with Phone Number</a> -->\n       </div>"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(db, auth) {
        this.db = db;
        this.auth = auth;
        this.featuredPhotoStream = this.db.object('/photos');
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/order-cart.ts":
/*!**************************************!*\
  !*** ./src/app/models/order-cart.ts ***!
  \**************************************/
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

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.items = [];
        this.dataPlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart-item.ts":
/*!**********************************************!*\
  !*** ./src/app/models/shopping-cart-item.ts ***!
  \**********************************************/
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

/***/ "./src/app/models/shopping-cart.ts":
/*!*****************************************!*\
  !*** ./src/app/models/shopping-cart.ts ***!
  \*****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/models/shopping-cart-item.ts");


var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
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

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customer Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead> \n  <tbody> \n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.dataPlaced | date}}</td>\n      <td>\n          <a [routerLink]=\"['/view/orders/details', order.$key]\">View</a>\n      </td>\n    </tr>\n  </tbody>  \n</table>\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");




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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order-success/order-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-success/order-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-jmbo{\r\n\r\n    background-image:linear-gradient(rgba(236, 216, 228, 0.7),rgba(203, 231, 229, 0.7)), url('jumbotorn.jpg');\r\n    background-size: cover;\r\n    min-height: 500px;\r\n\r\n}\r\n\r\n.text{\r\n    color: #0E41B7;\r\n    text-decoration: underline;\r\n    margin-left: 200px;\r\n    margin-top: -30px;\r\n}\r\n\r\n.lead{\r\n    font-size: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEdBQXVIO0lBQ3ZILHVCQUF1QjtJQUN2QixrQkFBa0I7O0NBRXJCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWptYm97XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyMzYsIDIxNiwgMjI4LCAwLjcpLHJnYmEoMjAzLCAyMzEsIDIyOSwgMC43KSksIHVybCgnLi4vLi4vYXNzZXRzL2p1bWJvdG9ybi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuXHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgY29sb3I6ICMwRTQxQjc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4ubGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/order-success/order-success.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-success/order-success.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron img-jmbo\">\n<div class=\"container\">\n    <h1 class=\"display-4 text\">Thank You For Your Order</h1>\n    <br>\n    <br>\n    <br>\n\n    <p class=\"lead\">Your Order has been placed and is being processed.We will contact you soon on the phone number provided by you.</p>\n    <hr class=\"my-6\">\n    <p>Have a happy and healthy life !!!!</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" routerLink=\"/products\" role=\"button\">continue</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order-success/order-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-success/order-success.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/order-success/order-success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/order.service.ts":
/*!**********************************!*\
  !*** ./src/app/order.service.ts ***!
  \**********************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart.service.ts");




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
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
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

/***/ "./src/app/phone/phone.component.css":
/*!*******************************************!*\
  !*** ./src/app/phone/phone.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lL3Bob25lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/phone/phone.component.html":
/*!********************************************!*\
  !*** ./src/app/phone/phone.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"user\">\n  <h1>Sign In with Your Phone Number</h1>\n\n  <label for=\"phone\">Phone Number</label><br>\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.country\"  class=\"input\" placeholder=\"1\"    maxlength=\"3\">\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.area\"     class=\"input\" placeholder=\"949\"  maxlength=\"3\">\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.prefix\"   class=\"input\" placeholder=\"555\"  maxlength=\"3\">\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.line\"     class=\"input\" placeholder=\"5555\" maxlength=\"4\">\n\n  <div id=\"recaptcha-container\"></div>\n\n  <button (click)=\"sendLoginCode()\">SMS Text Login Code</button>\n\n  <div *ngIf=\"windowRef.confirmationResult\">\n    <hr>\n    <label for=\"code\">Enter your Verification Code Here</label><br>\n    <input type=\"text\" name=\"code\" [(ngModel)]=\"verificationCode\">\n\n    <button (click)=\"verifyLoginCode()\">Verify</button>\n  </div>\n\n</div>\n\n<div *ngIf=\"user\">\n  You have successfully logged in with your phone number!\n\n  UserId: {{ user?.uid }}\n\n</div>"

/***/ }),

/***/ "./src/app/phone/phone.component.ts":
/*!******************************************!*\
  !*** ./src/app/phone/phone.component.ts ***!
  \******************************************/
/*! exports provided: PhoneNumber, PhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumber", function() { return PhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneComponent", function() { return PhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/firebase-browser.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var PhoneNumber = /** @class */ (function () {
    function PhoneNumber() {
    }
    Object.defineProperty(PhoneNumber.prototype, "e164", {
        // format phone numbers as E.164
        get: function () {
            var num = this.country + this.area + this.prefix + this.line;
            return "+" + num;
        },
        enumerable: true,
        configurable: true
    });
    return PhoneNumber;
}());

var PhoneComponent = /** @class */ (function () {
    function PhoneComponent(win) {
        this.win = win;
        this.phoneNumber = new PhoneNumber();
    }
    PhoneComponent.prototype.ngOnInit = function () {
        this.windowRef = this.win.windowRef;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].RecaptchaVerifier('recaptcha-container');
        this.windowRef.recaptchaVerifier.render();
    };
    PhoneComponent.prototype.sendLoginCode = function () {
        var _this = this;
        var appVerifier = this.windowRef.recaptchaVerifier;
        var num = this.phoneNumber.e164;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithPhoneNumber(num, appVerifier)
            .then(function (result) {
            _this.windowRef.confirmationResult = result;
        })
            .catch(function (error) { return console.log(error); });
    };
    PhoneComponent.prototype.verifyLoginCode = function () {
        var _this = this;
        this.windowRef.confirmationResult
            .confirm(this.verificationCode)
            .then(function (result) {
            _this.user = result.user;
            console.log(_this.user);
        })
            .catch(function (error) { return console.log(error, "Incorrect code entered?"); });
    };
    PhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phone',
            template: __webpack_require__(/*! ./phone.component.html */ "./src/app/phone/phone.component.html"),
            styles: [__webpack_require__(/*! ./phone.component.css */ "./src/app/phone/phone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
    ], PhoneComponent);
    return PhoneComponent;
}());



/***/ }),

/***/ "./src/app/ppp/ppp.component.css":
/*!***************************************!*\
  !*** ./src/app/ppp/ppp.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\r\n\r\nhtml {\r\n\tdisplay: grid;\r\n\tmin-height: 100%;\r\n}\r\n\r\nbody {\r\n\tdisplay: grid;\r\n\tbackground: #E0C9CB;\r\n\tfont-family: \"Lato\", sans-serif;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.container{\r\n\tposition: relative;\r\n\tmargin: auto;\r\n\toverflow: hidden;\r\n\twidth: 720px;\r\n\theight: 550px;\r\n\tbackground: #F5F5F5;\r\n\tbox-shadow: 5px 5px 15px rgba(186,126,1, 0.5);\r\n\tborder-radius: 10px;\r\n}\r\n\r\nimg {\r\n\twidth: 350px;\r\n\theight: 500px;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.product {\r\n\tposition: absolute;\r\n\twidth: 40%;\r\n\theight: 100%;\r\n\ttop: 10%;\r\n\tleft: 60%;\r\n\r\n}\r\n\r\nh1 {\r\n\tfont-size: 1.5em;\r\n\tcolor: #4E4E4E;\r\n\tmargin-top: -5px;\r\n}\r\n\r\nh2 {\r\n\tcolor: #C3A1A0;\r\n\tmargin-top: -5px;\r\n}\r\n\r\n.desc {\r\n\ttext-transform: none;\r\n\tletter-spacing: 0;\r\n\tmargin-bottom: 17px;\r\n\tcolor: #4E4E4E;\r\n\tfont-size: .9em;\r\n\tline-height: 1.6em;\r\n\tmargin-right: 25px;\r\n\ttext-align: justify;\r\n}\r\n\r\nbutton {\r\n\tbackground: #cda9ac;\r\n\tpadding: 10px;\r\n\tdisplay: inline-block;\r\n\toutline: 0;\r\n\tborder: 0;\r\n\tmargin: -1px;\r\n\tborder-radius: 2px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tcolor: #F5F5F5;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground: #BA7E7E;\r\n\ttransition: all .4s ease-in-out;\r\n}\r\n\r\n.add {\r\n\twidth: 67%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHBwL3BwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9FQUFvRTs7QUFFcEU7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCOztBQUdEO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixnQ0FBZ0M7Q0FDaEMsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsOENBQThDO0NBQzlDLG9CQUFvQjtDQUNwQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsU0FBUztDQUNULFVBQVU7O0NBRVY7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFVBQVU7Q0FDVixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixnQ0FBZ0M7Q0FDaEM7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1giLCJmaWxlIjoic3JjL2FwcC9wcHAvcHBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDBcIik7XHJcblxyXG5odG1sIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5ib2R5IHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGJhY2tncm91bmQ6ICNFMEM5Q0I7XHJcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdpZHRoOiA3MjBweDtcclxuXHRoZWlnaHQ6IDU1MHB4O1xyXG5cdGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMTg2LDEyNiwxLCAwLjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdGhlaWdodDogNTAwcHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0b3A6IDEwJTtcclxuXHRsZWZ0OiA2MCU7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRjb2xvcjogIzRFNEU0RTtcclxuXHRtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcblx0Y29sb3I6ICNDM0ExQTA7XHJcblx0bWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDE3cHg7XHJcblx0Y29sb3I6ICM0RTRFNEU7XHJcblx0Zm9udC1zaXplOiAuOWVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjY2RhOWFjO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdG1hcmdpbjogLTFweDtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGNvbG9yOiAjRjVGNUY1O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjQkE3RTdFO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hZGQge1xyXG5cdHdpZHRoOiA2NyU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ppp/ppp.component.html":
/*!****************************************!*\
  !*** ./src/app/ppp/ppp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> {{\"hi\" + Data}} </h1>"

/***/ }),

/***/ "./src/app/ppp/ppp.component.ts":
/*!**************************************!*\
  !*** ./src/app/ppp/ppp.component.ts ***!
  \**************************************/
/*! exports provided: PppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PppComponent", function() { return PppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PppComponent = /** @class */ (function () {
    function PppComponent() {
        this.processing = true;
    }
    PppComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PppComponent.prototype, "Data", void 0);
    PppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ppp',
            template: __webpack_require__(/*! ./ppp.component.html */ "./src/app/ppp/ppp.component.html"),
            styles: [__webpack_require__(/*! ./ppp.component.css */ "./src/app/ppp/ppp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PppComponent);
    return PppComponent;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-card/product-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card-footer{\r\n    padding: 0;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.card-footer button{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciBidXR0b257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product-card/product-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-card/product-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n    <a [routerLink]=\"['/products/details/', product.$key]\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to Shop\" >\n  <img *ngIf=\"product.imageUrl\" height=\"270\" width=\"40\" class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"{{ product.title }}\">\n  </a> \n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ product.title }}</h5>\n    <p class=\"card-text\">{{ product.price | currency: \"&#8377;\": true}}</p>\n  </div> \n  <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n    <button  \n      *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity \"\n      (click)=\"addToCart()\"\n      class=\"btn btn-secondary btn-block\">Add to Cart</button>\n      <ng-template #updateQuantity>\n        <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\"></product-quantity>\n      </ng-template> \n  </div> \n</div> "

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/models/shopping-cart.ts");




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        //let cart = this.cartService.getOrCreateCart();
        this.cartService.addToCart(this.product);
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
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/product-card/product-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\r\n\r\nhtml {\r\n  display: grid;\r\n  height: 600px\r\n\r\n}\r\n\r\nbody {\r\n\tdisplay: grid;\r\n\tbackground: #E0C9CB;\r\n\tfont-family: \"Lato\", sans-serif;\r\n  text-transform: uppercase;\r\n  \r\n}\r\n\r\n.container{\r\n\tposition: relative;\r\n\tmargin: auto;\r\n\toverflow: hidden;\r\n\twidth: 720px;\r\n\theight: 520px;\r\n\tbackground: #F5F5F5;\r\n\tbox-shadow: 5px 5px 15px rgba(186,126,1, 0.5);\r\n  border-radius: 10px;\r\n  margin-top: -5%\r\n}\r\n\r\nimg {\r\n\twidth: 350px;\r\n\theight: 490px;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.product {\r\n\tposition: absolute;\r\n\twidth: 40%;\r\n\theight: 100%;\r\n\ttop: 10%;\r\n\tleft: 60%;\r\n\r\n}\r\n\r\nh1 {\r\n\tfont-size: 1.5em;\r\n\tcolor: #4E4E4E;\r\n\tmargin-top: -5px;\r\n}\r\n\r\nh2 {\r\n\tcolor: #C3A1A0;\r\n\tmargin-top: -5px;\r\n}\r\n\r\n.desc {\r\n\ttext-transform: none;\r\n\tletter-spacing: 0;\r\n\tmargin-bottom: 17px;\r\n\tcolor: #4E4E4E;\r\n\tfont-size: .9em;\r\n\tline-height: 1.6em;\r\n\tmargin-right: 25px;\r\n  text-align: justify;\r\n  height: 280px;\r\n}\r\n\r\nbutton {\r\n\tbackground: #cda9ac;\r\n\tpadding: 10px;\r\n\tdisplay: inline-block;\r\n\toutline: 0;\r\n\tborder: 0;\r\n\tmargin: -1px;\r\n\tborder-radius: 2px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tcolor: #F5F5F5;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground: #BA7E7E;\r\n\ttransition: all .4s ease-in-out;\r\n}\r\n\r\n.add {\r\n\twidth: 67%;\r\n}\r\n\r\n.picbig{\r\n  position: absolute;\r\n  width: 0px;\r\n  transition: width 0.3s linear 0s;\r\n}\r\n\r\n.pic:hover + .picbig{\r\n  width: 400px;\r\n  height: 700px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9FQUFvRTs7QUFFcEU7RUFDRSxjQUFjO0VBQ2QsYUFBYTs7Q0FFZDs7QUFHRDtDQUNDLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsZ0NBQWdDO0VBQy9CLDBCQUEwQjs7Q0FFM0I7O0FBR0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsY0FBYztDQUNkLG9CQUFvQjtDQUNwQiw4Q0FBOEM7RUFDN0Msb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsYUFBYTtDQUNiLFNBQVM7Q0FDVCxVQUFVOztDQUVWOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0VBQ2xCLG9CQUFvQjtFQUNwQixjQUFjO0NBQ2Y7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsVUFBVTtDQUNWLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGdDQUFnQztDQUNoQzs7QUFFRDtDQUNDLFdBQVc7Q0FDWDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBRVgsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMFwiKTtcclxuXHJcbmh0bWwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiA2MDBweFxyXG5cclxufVxyXG5cclxuXHJcbmJvZHkge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YmFja2dyb3VuZDogI0UwQzlDQjtcclxuXHRmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdpZHRoOiA3MjBweDtcclxuXHRoZWlnaHQ6IDUyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMTg2LDEyNiwxLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTUlXHJcbn1cclxuXHJcbmltZyB7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdGhlaWdodDogNDkwcHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0b3A6IDEwJTtcclxuXHRsZWZ0OiA2MCU7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRjb2xvcjogIzRFNEU0RTtcclxuXHRtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcblx0Y29sb3I6ICNDM0ExQTA7XHJcblx0bWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDE3cHg7XHJcblx0Y29sb3I6ICM0RTRFNEU7XHJcblx0Zm9udC1zaXplOiAuOWVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQ6ICNjZGE5YWM7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0b3V0bGluZTogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0bWFyZ2luOiAtMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Y29sb3I6ICNGNUY1RjU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNCQTdFN0U7XHJcblx0dHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFkZCB7XHJcblx0d2lkdGg6IDY3JTtcclxufVxyXG5cclxuLnBpY2JpZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3MgbGluZWFyIDBzO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgbGluZWFyIDBzO1xyXG59XHJcblxyXG4ucGljOmhvdmVyICsgLnBpY2JpZ3tcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t<meta http-equiv=\"X-UA-Compartible\" content=\"ie=edge\">\n\t<title>Product Landing page</title>\n</head>\n<body>\n\n\t<div class=\"container\" *ngIf=\"products$ | async as product\">\n    <img *ngIf=\"product.imageUrl\" [src]=\"product.imageUrl\" alt=\"{{ product.title }}\">\n\n    <div class=\"product\">\n\t\t\t<!-- <p>{{ product.name }}</p> -->\n\t\t\t<h1>{{ product.name }}</h1>\n      <h2> {{ product.price | currency: \"&#8377;\": true}}</h2>\n      \n\t\t\t<pre class=\"desc\">{{ product.description}}</pre>\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<button type=\"button\" (click)=\"back()\" class=\"add\" >back</button>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\t\n\n\t</div>\n\n</body>\n</html>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/models/shopping-cart.ts");







var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, db, route, productService, cartService) {
        this.router = router;
        this.db = db;
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.showActions = true;
        this.id = route.snapshot.paramMap.get('id');
        this.products$ = productService.get(this.id);
        console.log(this.products$);
    }
    ProductDetailsComponent.prototype.back = function () {
        this.router.navigate(['products']);
    };
    ProductDetailsComponent.prototype.ngOnInit = function () {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__["ShoppingCart"])
    ], ProductDetailsComponent.prototype, "shoppingCart", void 0);
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product-quantity/product-quantity.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtcXVhbnRpdHkvcHJvZHVjdC1xdWFudGl0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product-quantity/product-quantity.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col-2\">\n      <button\n        (click)=\"removeFromCart()\"\n        class=\"btn btn-secondary btn-block\">-</button>\n    </div>\n    <div class=\"col text-center\">\n        {{ shoppingCart.getQuantity(product) }} in cart\n    </div>\n    <div class=\"col-2\">\n      <button\n        (click)=\"addToCart()\"\n        class=\"btn btn-secondary btn-block\">+</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product-quantity/product-quantity.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");



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
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/product-quantity/product-quantity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
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
    ProductService.prototype.create = function (product) {
        return this.db.list('/product').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/product');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/product/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/product/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/product/' + productId).remove();
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

/***/ "./src/app/products/product-filter/product-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sticky-top{\r\n    top: 80px;\r\n}\r\n\r\n.dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n.topnav a:hover, .dropdown:hover .dropbtn {\r\n    background-color: #555;\r\n    color: white;\r\n  }\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n.dropdown .dropbtn {\r\n    font-size: 17px;    \r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    margin: 0;\r\n  }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1maWx0ZXIvcHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtHQUNsQjs7QUFDRDtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0dBQ2Q7O0FBQ0Q7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtHQUNkOztBQUVEO0lBQ0UsZUFBZTtHQUNoQjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsV0FBVztHQUNaOztBQUlEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0dBQ1giLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdGlja3ktdG9we1xyXG4gICAgdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAudG9wbmF2IGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG5cclxuICBcclxuICAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZm9udC1zaXplOiAxN3B4OyAgICBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n    <div class=\"list-group\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary dropdown-toggle dropbtn bg-dark\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Categories\n            </button>\n            <div class=\"dropdown-menu\">\n                <a  \n                class=\"dropdown-item\"\n                [class.active]=\"!category\"\n                routerLink='/products'>All Categories</a>\n                <div role=\"separator\" class=\"dropdown-divider\"></div>\n                <a \n                  *ngFor=\"let c of categories$ | async\" \n                  routerLink=\"/products\"\n                  [queryParams]=\"{ category: c.$key }\"\n                  class=\"dropdown-item\"\n                  [class.active]=\"category == c.$key\">\n                  {{ c.name }}\n                </a>\n            </div>\n          </div> \n        \n      </div>\n\n</div>\n\n\n\n <!-- <div class=\"sticky-top\">\n  <div class=\"list-group\">\n    <a\n      class=\"list-group-item list-group-item-action\"\n      [class.active]=\"!category\"\n      routerLink=\"/products\"\n      >All Categories</a>\n    <a \n      *ngFor=\"let c of categories$ | async\" \n      routerLink=\"/products\"\n      [queryParams]=\"{ category: c.$key }\"\n      class=\"list-group-item list-group-item-action\"\n      [class.active]=\"category === c.$key\"\n      >\n      {{ c.name }}\n    </a>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/category.service */ "./src/app/category.service.ts");



var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductFilterComponent.prototype, "Category", void 0);
    ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/products/product-filter/product-filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    height: 52px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n                            \n                <product-filter [category]=\"category\"></product-filter>\n            </div>\n     <input \n            [(ngModel)]=\"searchTerm\"\n            type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\" placeholder=\"Search...\">\n            <br>\n\n        <app-banner></app-banner>\n\n        <div class=\"container\">\n            <br>\n            \n                <div class=\"row\">\n                    <ng-container *ngFor=\"let p of filteredProducts; let i = index\">\n                        <div class=\"col-md-3 col-sm-6\">\n                            <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n                        </div>\n                    </ng-container>  \n                </div>\n        </div> \n</div>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productsService, categoryService, shoppingCartService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
        productsService.getAll().subscribe(function (products) {
            _this.products = products;
            route.queryParamMap.subscribe(function (params) {
                _this.category = params.get('category');
                _this.filteredProducts = (_this.category) ?
                    _this.products.filter(function (p) { return p.category === _this.category; }) :
                    _this.products;
            });
        });
        this.categories$ = categoryService.getAll();
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
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nLWZvcm0vc2hpcHBpbmctZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"\">Name</label>\n      <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" class=\"form-control\" required placeholder=\"Full Name\">\n      <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n        <div *ngIf=\"name.errors.required\">Name is required.</div>\n      </div>\n      <br>\n    </div> \n    <div class=\"form-group\">\n      <label for=\"\">Address</label>\n      <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"Address Line1\"\n        required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n        <div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required.</div>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group\"> \n      <label for=\"\">Phone number</label>\n      <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"vaild phone number (9745632158)\"\n        required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n        <div *ngIf=\"addressLine2.errors.required\">Phone number is required.</div>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group\">\n      <label for=\"\">City And Pincode</label>\n      <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" placeholder=\"City, Pincode\" type=\"text\" class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n        <div *ngIf=\"city.errors.required\">City is required.</div>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group\">\n        <label for=\"description\">About the Size</label>\n          <textarea #description [(ngModel)]=\"shipping.description\" name=\"description\" id=\"description\" tyoe=\"text\" rows=\"8\" cols=\"80\" placeholder=\"Size of one product in one line\" class=\"form-control\"></textarea>\n          <div class=\"alert alert-danger\" *ngIf=\"description.touched && description.invalid\">\n            <div *ngIf=\"description.errors.required\">description is required.</div>\n        </div>\n      </div>\n    <button \n      [disabled]=\"!f.valid\"\n      (click)=\"placeOrder()\" \n      class=\"btn btn-primary\">Place Order</button>\n  </form>"

/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/order */ "./src/app/models/order.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/models/shopping-cart.ts");







var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(router, authService, orderService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shipping = {};
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
            var order, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new _models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](this.userId, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        this.router.navigate(['/order-success', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_shopping_cart__WEBPACK_IMPORTED_MODULE_6__["ShoppingCart"])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! ./shipping-form.component.html */ "./src/app/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shipping-form/shipping-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQtc3VtbWFyeS9zaG9wcGluZy1jYXJ0LXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"> \n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Order Summary</h5>\n    <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in your shopping cart.</p>\n    <ul class=\"list-group list-group-flush\">\n      <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n        {{ item.quantity }} x {{ item.title }}\n        <div class=\"float-right\">\n          {{ item.totalPrice | currency:\"&#8377;\":true }}\n        </div>\n      </li>\n      <li class=\"list-group-item font-weight-bold\">\n        Total \n        <div class=\"float-right\">\n          {{ cart.totalPrice | currency:\"&#8377;\":true }}\n        </div>\n      </li>\n    </ul>\n  </div> \n</div> "

/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/models/shopping-cart.ts");



var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"])
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! ./shopping-cart-summary.component.html */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.css")]
        })
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/shopping-cart.service.ts ***!
  \******************************************/
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
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/shopping-cart */ "./src/app/models/shopping-cart.ts");






var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
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
    ShoppingCartService.prototype.addToCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem(product, -1);
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
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dataCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
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
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: quantity
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart </h1>\n<div class=\"row col-10\" *ngIf=\"cart$ | async as cart\">\n  <p>\n    You have {{ cart.totalItemsCount }} items in your shopping cart.\n    <button\n    *ngIf=\"cart.items.length\"\n    (click)=\"clearCart()\"\n    class=\"btn btn-light btn-sm\">Clear Shopping Cart</button>\n  </p> \n  <table class=\"table\"> \n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th class=\"text-center\" style=\"width: 230px\">Quantity</th>\n        <th class=\"text-right\" style=\"width: 200px\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items\">\n        <td>\n          <div [style.backgroundImage]=\"'url(' + item.imageUrl + ')'\" class=\"thumbnail\"></div>\n        </td>    \n        <td>\n          {{ item.title }}\n        </td>\n        <td>\n          <product-quantity [product]=\"item\" [shopping-cart]=\"cart\"></product-quantity>\n        </td>\n        <td class=\"text-right\">\n          {{ item.totalPrice | currency: \"&#8377;\" : true }}\n        </td>\n      </tr>  \n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th class=\"text-right\">{{ cart.totalPrice | currency: \"&#8377;\" :true }}</th>\n      </tr>\n    </tfoot>\n  </table>\n  <a\n    *ngIf=\"cart.items.length\"\n    routerLink=\"/check-out\" \n    class=\"btn btn-primary\">Check Out</a>\n</div>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
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
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
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
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
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

/***/ "./src/app/view-details/view-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-details/view-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZGV0YWlscy92aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Order Detailes \n</h1>\n\n\n<table class=\"table\" *ngIf=\"order$ | async as order\"> \n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th class=\"text-center\">Quantity</th>\n        <th class=\"text-center\" >Price</th>\n        <th class=\"text-center\" >Total Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of order.items\">\n        <td>\n          <div [style.backgroundImage]=\"'url(' + item.product.imageUrl + ')'\" class=\"thumbnail\"></div>\n        </td>    \n        <td>\n          {{ item.product.title }}\n        </td>\n        <td class=\"text-center\">\n          {{item.quantity}}\n        </td>\n        <td class=\"text-center\">\n            {{ item.product.price | currency: \"&#8377;\" : true }}\n          </td>\n        <td class=\"text-center\">\n          {{ item.totalPrice | currency: \"&#8377;\" : true }}\n        </td>\n      </tr>  \n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th class=\"text-center\">{{ this.SumOfQuantity }}</th>\n        <th></th>\n        <th class=\"text-center\">{{ this.SumOfPrice | currency: \"&#8377;\": true }}</th>\n      </tr>\n    </tfoot>\n  </table>\n\n  <div>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">About Size</button>\n      <br>\n  </div>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Size Of Product</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\" *ngIf=\"order$ | async as order\">\n            <pre>{{order.shipping.description}}</pre>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">okk</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  "

/***/ }),

/***/ "./src/app/view-details/view-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-details/view-details.component.ts ***!
  \********************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/order-cart */ "./src/app/models/order-cart.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(router, route, db, orderService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.orderService = orderService;
        this.SumOfQuantity = 0;
        this.SumOfPrice = 0;
        this.orderId = route.snapshot.paramMap.get('id');
        this.order$ = orderService.get(this.orderId);
        orderService.get(this.orderId).subscribe(function (orders) {
            _this.orders = orders;
            for (var _i = 0, _a = orders.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.SumOfQuantity = _this.SumOfQuantity + item.quantity;
                _this.SumOfPrice = _this.SumOfPrice + item.totalPrice;
            }
        });
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_order_cart__WEBPACK_IMPORTED_MODULE_2__["OrderCart"])
    ], ViewDetailsComponent.prototype, "cart", void 0);
    ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-details',
            template: __webpack_require__(/*! ./view-details.component.html */ "./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.css */ "./src/app/view-details/view-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/view-order/view-order.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-order/view-order.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    margin: 0 0 20px 0;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    color: #3aabf0;\r\n  }\r\n\r\n  .address {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      margin: 0 0 20px 0;\r\n  }\r\n\r\n  .from p, .for p {\r\n    color: #787878;\r\n  }\r\n\r\n  .signature {\r\n    padding-top: 36px;\r\n  }\r\n\r\n  .container{\r\n    background-color: beige;\r\n}\r\n\r\n  body\r\n{\r\n    font-family: Arial;\r\n    font-size: 10pt;\r\n}\r\n\r\n  table\r\n{\r\n    border: 1px solid #ccc;\r\n    border-collapse: collapse;\r\n}\r\n\r\n  table th\r\n{\r\n    background-color: #F7F7F7;\r\n    color: #333;\r\n    font-weight: bold;\r\n}\r\n\r\n  table th, table td\r\n{\r\n    padding: 5px;\r\n    border: 1px solid #ccc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1vcmRlci92aWV3LW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsZUFBZTtHQUNoQjs7RUFFRDtNQUNJLGNBQWM7TUFDZCwrQkFBK0I7TUFDL0IsbUJBQW1CO0dBQ3RCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLHdCQUF3QjtDQUMzQjs7RUFFRDs7SUFFSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztFQUNEOztJQUVJLHVCQUF1QjtJQUN2QiwwQkFBMEI7Q0FDN0I7O0VBQ0Q7O0lBRUksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0VBQ0Q7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgY29sb3I6ICMzYWFiZjA7XHJcbiAgfVxyXG5cclxuICAuYWRkcmVzcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmZyb20gcCwgLmZvciBwIHtcclxuICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ25hdHVyZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuYm9keVxyXG57XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxudGFibGVcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGFibGUgdGhcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxudGFibGUgdGgsIHRhYmxlIHRkXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-order/view-order.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-order/view-order.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div id=\"content\" #content>\n\n            <h2 style=\"text-align:center;\">Order Summary </h2>\n          \n            <div class=\"header\">\n                THE SPARKLES\n            </div>\n           \n            <div class=\"address\" *ngIf=\"order$ | async as order\">\n              <div class=\"for\">\n                <h3>Invoice For</h3>\n                <p>\n                  {{order.shipping.name}} <br /> {{order.shipping.addressLine1}} <br /> {{order.shipping.city}} <br /> {{order.shipping.addressLine2}}\n                </p>\n              </div>\n          \n              <div class=\"from\">\n                <h3>From</h3>\n                <p>\n                    \n                  The Sparkles<br /> Hanuman Colony, Opposite of Rajshree Bhojnalaya <br /> Guna(473001) M.P  <br /> 9424658428\n                </p>\n              </div>\n            </div>\n          \n          \n            <div>\n              <h4 style=\"padding-top:10px;\">Order Details</h4>\n              <table class=\"table\" *ngIf=\"order$ | async as order\">\n                  <thead>\n                    <tr>\n                      <th>ProductName</th> \n                      <th>Price</th>\n                      <th>Quantity</th>\n                      <th>TotalPrice</th> \n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of order.items\">\n                      <td> {{ item.product.title }} </td>\n                      <td> {{ item.product.price | currency: \"&#8377;\": true }} </td>\n                      <td> {{ item.quantity }} </td>\n                      <td> {{ item.totalPrice | currency: \"&#8377;\": true }} </td>\n                    </tr>\n                    <tr>\n                      <th>Total</th>\n                      <td> </td>\n                      <td> {{ this.SumOfQuantity }} </td>\n                      <td> {{ this.SumOfPrice | currency: \"&#8377;\": true }} </td>\n                    </tr>\n                  </tbody>\n                </table>\n                \n                <div class=\"signature\">\n                  Signature: ________________\n                </div>\n                <br>\n                <br>\n            </div>\n          </div>\n          \n\n          <div>\n              <button class=\"btn btn-primary\" (click)=\"downloadPDF()\">Save Bill</button>\n              <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n              <br>\n          </div>\n\n\n        </div> \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/view-order/view-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-order/view-order.component.ts ***!
  \****************************************************/
/*! exports provided: ViewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderComponent", function() { return ViewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_order_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/order-cart */ "./src/app/models/order-cart.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);








var ViewOrderComponent = /** @class */ (function () {
    function ViewOrderComponent(router, route, db, orderService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.orderService = orderService;
        this.SumOfQuantity = 0;
        this.SumOfPrice = 0;
        this.orderId = route.snapshot.paramMap.get('id');
        this.order$ = orderService.get(this.orderId);
        orderService.get(this.orderId).subscribe(function (orders) {
            _this.orders = orders;
            for (var _i = 0, _a = orders.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.SumOfQuantity = _this.SumOfQuantity + item.quantity;
                _this.SumOfPrice = _this.SumOfPrice + item.totalPrice;
            }
        });
    }
    ViewOrderComponent.prototype.downloadPDF = function () {
        {
            var data = document.getElementById('content');
            html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(data).then(function (canvas) {
                // Few necessary setting options  
                var imgWidth = 200;
                var pageHeight = 400;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var contentDataURL = canvas.toDataURL('image/png');
                var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__('p', 'mm', 'a4'); // A4 size page of PDF  
                var position = 0;
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                pdf.save('MYPdf.pdf'); // Generated PDF   
            });
        }
    };
    ViewOrderComponent.prototype.delete = function () {
        if (!confirm('Are you sure yow want to delete this product?'))
            return;
        this.orderService.delete(this.orderId);
        this.router.navigate(['my/orders']);
    };
    ViewOrderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_order_cart__WEBPACK_IMPORTED_MODULE_5__["OrderCart"])
    ], ViewOrderComponent.prototype, "cart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ViewOrderComponent.prototype, "content", void 0);
    ViewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'view-order',
            template: __webpack_require__(/*! ./view-order.component.html */ "./src/app/view-order/view-order.component.html"),
            styles: [__webpack_require__(/*! ./view-order.component.css */ "./src/app/view-order/view-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], ViewOrderComponent);
    return ViewOrderComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slideshow{\r\n\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    height: 600px;\r\n    box-sizing: border-box;\r\n    margin-top: -40px;\r\n\r\n}\r\n\r\n.text{\r\n    text-align: center;\r\n    color: red;\r\n    text-shadow: 4px 4px black;\r\n    font-size: 4.5em;\r\n    \r\n}\r\n\r\n.content {\r\n    margin: auto;\r\n    width: 210px;\r\n    -webkit-perspective: 650px;\r\n            perspective: 650px;\r\n    position: relative;\r\n    padding-top: 80px;\r\n}\r\n\r\n.content-carrousel{\r\n    width: 100%;\r\n    position: absolute;\r\n    float: right;\r\n    -webkit-animation: rotar 15s infinite linear;\r\n            animation: rotar 15s infinite linear;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n\r\n.content-carrousel:hover{\r\n    -webkit-animation-play-state: paused;\r\n            animation-play-state: paused;\r\n    cursor: pointer;\r\n}\r\n\r\n.content-carrousel figure{\r\n    width: 100%;\r\n    height: 170px;\r\n    border: 1px solid #4d444d;\r\n    overflow: hidden;\r\n    position: absolute;\r\n}\r\n\r\n.content-carrousel figure:nth-child(1){\r\n    -webkit-transform: rotateY(0deg) translateZ(350px);\r\n            transform: rotateY(0deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(2){\r\n    -webkit-transform: rotateY(40deg) translateZ(350px);\r\n            transform: rotateY(40deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(3){ \r\n    -webkit-transform: rotateY(80deg) translateZ(350px); \r\n            transform: rotateY(80deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(4){\r\n    -webkit-transform: rotateY(120deg) translateZ(350px);\r\n            transform: rotateY(120deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(5){\r\n    -webkit-transform: rotateY(160deg) translateZ(350px);\r\n            transform: rotateY(160deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(6){\r\n    -webkit-transform: rotateY(200deg) translateZ(350px);\r\n            transform: rotateY(200deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(7){\r\n    -webkit-transform: rotateY(240deg) translateZ(350px);\r\n            transform: rotateY(240deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(8){\r\n    -webkit-transform: rotateY(280deg) translateZ(350px);\r\n            transform: rotateY(280deg) translateZ(350px);\r\n}\r\n\r\n.content-carrousel figure:nth-child(9){\r\n    -webkit-transform: rotateY(320deg) translateZ(350px);\r\n            transform: rotateY(320deg) translateZ(350px);\r\n}\r\n\r\n.shadow{\r\n    position: absolute;\r\n    box-shadow: 0px 0px 20px 0px #000;\r\n    border-radius: 2px;\r\n}\r\n\r\n.content-carrousel img{\r\n    image-rendering: auto;\r\n    transition: all 300ms;\r\n    width: 100%;\r\n    height: 100%; \r\n}\r\n\r\n.content-carrousel img:hover{\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    transition: all 300ms;\r\n}\r\n\r\n@-webkit-keyframes rotar{\r\n    from{ \r\n        -webkit-transform: rotateY(0deg); \r\n                transform: rotateY(0deg);\r\n    } to{\r\n        -webkit-transform: rotateY(360deg);\r\n                transform: rotateY(360deg);\r\n    }\r\n}\r\n\r\n@keyframes rotar{\r\n    from{ \r\n        -webkit-transform: rotateY(0deg); \r\n                transform: rotateY(0deg);\r\n    } to{\r\n        -webkit-transform: rotateY(360deg);\r\n                transform: rotateY(360deg);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7Q0FFckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixpQkFBaUI7O0NBRXBCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxtREFBMkM7WUFBM0MsMkNBQTJDO0NBQzlDOztBQUNEO0lBQ0ksb0RBQTRDO1lBQTVDLDRDQUE0QztDQUMvQzs7QUFDRDtJQUNJLG9EQUE0QztZQUE1Qyw0Q0FBNEM7Q0FDL0M7O0FBQ0Q7SUFDSSxxREFBNkM7WUFBN0MsNkNBQTZDO0NBQ2hEOztBQUNEO0lBQ0kscURBQTZDO1lBQTdDLDZDQUE2QztDQUNoRDs7QUFDRDtJQUNJLHFEQUE2QztZQUE3Qyw2Q0FBNkM7Q0FDaEQ7O0FBQ0Q7SUFDSSxxREFBNkM7WUFBN0MsNkNBQTZDO0NBQ2hEOztBQUNEO0lBQ0kscURBQTZDO1lBQTdDLDZDQUE2QztDQUNoRDs7QUFDRDtJQUNJLHFEQUE2QztZQUE3Qyw2Q0FBNkM7Q0FDaEQ7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7S0FDNUIsQ0FBQztRQUNFLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0tBQzlCO0NBQ0o7O0FBTkQ7SUFDSTtRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0tBQzVCLENBQUM7UUFDRSxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtLQUM5QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVzaG93e1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG5cclxufVxyXG5cclxuLnRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDQuNWVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA2NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jYXJyb3VzZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGFuaW1hdGlvbjogcm90YXIgMTVzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5jb250ZW50LWNhcnJvdXNlbDpob3ZlcntcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGQ0NDRkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgxKXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgyKXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg0MGRlZykgdHJhbnNsYXRlWigzNTBweCk7XHJcbn1cclxuLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoMyl7IFxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDgwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg0KXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxMjBkZWcpIHRyYW5zbGF0ZVooMzUwcHgpO1xyXG59XHJcbi5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDUpe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE2MGRlZykgdHJhbnNsYXRlWigzNTBweCk7XHJcbn1cclxuLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoNil7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjAwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg3KXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyNDBkZWcpIHRyYW5zbGF0ZVooMzUwcHgpO1xyXG59XHJcbi5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDgpe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4MGRlZykgdHJhbnNsYXRlWigzNTBweCk7XHJcbn1cclxuLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoOSl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzIwZGVnKSB0cmFuc2xhdGVaKDM1MHB4KTtcclxufVxyXG4uc2hhZG93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5jb250ZW50LWNhcnJvdXNlbCBpbWd7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbn1cclxuXHJcbi5jb250ZW50LWNhcnJvdXNlbCBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhcntcclxuICAgIGZyb217IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIH0gdG97XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <title>3D Swipe Slider</title>\n    </head>\n  <body>\n      <bs-navbar></bs-navbar>  \n   \n    <div class=\"slideshow\" >\n        <particles  [params]=\"myParams\" [style]=\"myStyle\"></particles>\n        <h1 class=\"text\">THE SPARKLES</h1>\n        <a routerLink=\"/products\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to Shop\" >\n      <div class=\"content\">\n        <div class=\"content-carrousel\"> \n          <figure class=\"shodw\"><img src=\"../../assets/1.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/2.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/3.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/4.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/5.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/6.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/7.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/8.jpg\"></figure>\n          <figure class=\"shodw\"><img src=\"../../assets/9.jpg\"></figure>\n        </div>\n      </div> \n      </a>\n    </div>\n  </body>\n  </html>"

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

/***/ "./src/app/window.service.ts":
/*!***********************************!*\
  !*** ./src/app/window.service.ts ***!
  \***********************************/
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

module.exports = __webpack_require__(/*! C:\Users\chiku\Desktop\angular\oshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map