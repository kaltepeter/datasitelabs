(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

  /***/ "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
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
  webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
  /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
  /* harmony import */ var _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-extensions/elements */ "../../node_modules/@angular-extensions/elements/__ivy_ngcc__/fesm2015/angular-extensions-elements.js");
  /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




  function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading...");
  } }
  function AppComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading failed...");
  } }
  function AppComponent_bricksburg_business_app_8_Template(rf, ctx) { if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bricksburg-business-app", 5);
  } }
  class AppComponent {
      constructor() {
          this.title = 'ng-host';
          // elementUrl = 'assets/external-business-app.bundle.js';
          this.elementUrl = 'business-app/main.js';
      }
      // elementUrl = 'https://kaylastaticpoc.z20.web.core.windows.net/bricksburg-capability-office-tower-es2015.js'
      // elementUrl='http://localhost:4202/main.8bb56814839500e632ee.js'
      // elementUrl='https://kaylastaticpoc.z20.web.core.windows.net/main-es2015.js'
      handleChange(change) { }
  }
  AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
  AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["bricksburg-root"]], decls: 13, vars: 5, consts: [[1, "flex"], ["loading", ""], ["error", ""], ["title", "Loaded Business from ng-host", 4, "axLazyElement", "axLazyElementLoadingTemplate", "axLazyElementErrorTemplate", "axLazyElementModule"], ["routerLink", "/business"], ["title", "Loaded Business from ng-host"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_bricksburg_business_app_8_Template, 1, 0, "bricksburg-business-app", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      } if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, "!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axLazyElement", ctx.elementUrl)("axLazyElementLoadingTemplate", _r0)("axLazyElementErrorTemplate", _r2)("axLazyElementModule", true);
      } }, directives: [_angular_extensions_elements__WEBPACK_IMPORTED_MODULE_1__["LazyElementDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 2em auto;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: #333;\n  width: 100vw;\n  padding: 1em;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWx0ZXBlL2RhdGEvYnJpY2tzYnVyZy9hcHBzL25nLWhvc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJhcHBzL25nLWhvc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VGIiwiZmlsZSI6ImFwcHMvbmctaG9zdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZW1vdmUgdGVtcGxhdGUgY29kZSBiZWxvd1xuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbn1cbjpob3N0IGgxIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgd2lkdGg6IDEwMHZ3O1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiLypcbiAqIFJlbW92ZSB0ZW1wbGF0ZSBjb2RlIGJlbG93XG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xufVxuXG46aG9zdCBoMSB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZzogMWVtO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"] });
  /*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
                  selector: 'bricksburg-root',
                  templateUrl: './app.component.html',
                  styleUrls: ['./app.component.scss']
              }]
      }], null, null); })();


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
  /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
  /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
  /* harmony import */ var _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-extensions/elements */ "../../node_modules/@angular-extensions/elements/__ivy_ngcc__/fesm2015/angular-extensions-elements.js");
  /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
  /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
  /* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");








  class AppModule {
  }
  AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
  AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
              _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTES"], { enableTracing: true }),
              _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_2__["LazyElementsModule"]
          ],
          _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_2__["LazyElementsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
  /*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
                  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                  imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                      _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTES"], { enableTracing: true }),
                      _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_2__["LazyElementsModule"]
                  ],
                  providers: [],
                  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
              }]
      }], null, null); })();


  /***/ }),

  /***/ "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/
  /*! exports provided: APP_ROUTES */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
  const APP_ROUTES = [
      {
          path: 'business',
          loadChildren: () => __webpack_require__.e(/*! import() | bricksburg-platform-feature */ "bricksburg-platform-feature").then(__webpack_require__.bind(null, /*! @bricksburg/platform/feature */ "../../libs/platform/feature/src/index.ts")).then(module => module.PlatformFeatureModule)
      },
      { path: '', pathMatch: 'full', redirectTo: '/business' }
  ];


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
  const environment = {
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
  /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
  /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
  /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
  /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




  if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
  }
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
      .catch(err => console.error(err));


  /***/ }),

  /***/ 0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(/*! /Users/kaltepe/data/bricksburg/apps/ng-host/src/main.ts */"./src/main.ts");


  /***/ })

  },[[0,"runtime","vendor"]]]);
  //# sourceMappingURL=main-es2015.js.map
