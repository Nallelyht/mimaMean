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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-navbar></app-navbar>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-remedy/new-remedy.component */ "./src/app/new-remedy/new-remedy.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/new-remedy.service */ "./src/app/services/new-remedy.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _remedy_detail_remedy_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./remedy-detail/remedy-detail.component */ "./src/app/remedy-detail/remedy-detail.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// componentes






// servicios


// material design







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_10__["NewRemedyComponent"],
                _remedy_detail_remedy_detail_component__WEBPACK_IMPORTED_MODULE_18__["RemedyDetailComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__["CommentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"]
            ],
            imports: [
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"]
            ],
            entryComponents: [
                _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_10__["NewRemedyComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__["CommentComponent"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_14__["NewRemedyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _remedy_detail_remedy_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remedy-detail/remedy-detail.component */ "./src/app/remedy-detail/remedy-detail.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'remedyDetail/:id', component: _remedy_detail_remedy_detail_component__WEBPACK_IMPORTED_MODULE_3__["RemedyDetailComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"isLogged\">\n\n  <form class=\"example-form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" ngNativeValidate>\n    <h1 class=\"mat-h1\">Iniciar Sesión</h1>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Correo Electrónico</mat-label>\n      <input matInput [(ngModel)]=\"email\" type=\"email\" name=\"email\" required #emailUser=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" minlength=\"7\">\n    </mat-form-field>\n    <div *ngIf=\"emailUser.invalid && emailUser.touched\" class=\"input-error-message\" >\n      <div *ngIf=\"!passwordUser.dirty || passwordUser.touched\">\n        Ingresa tu correo\n      </div>\n      <div *ngIf=\"emailUser.errors.pattern\">\n        Debe ingresar un correo válido.\n      </div>\n    </div>\n\n    <mat-form-field class=\"example-full-width inputColor\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Contraseña</mat-label>\n      <input matInput [(ngModel)]=\"password\"  type=\"password\" name=\"password\" required #passwordUser=\"ngModel\" min=\"1\">\n    </mat-form-field>\n    <div *ngIf=\"passwordUser.invalid && passwordUser.touched\" class=\"input-error-message\">\n      <div *ngIf=\"!passwordUser.dirty || passwordUser.touched\">\n        Ingresa tu contraseña\n      </div>\n    </div>\n    <h2>\n      Entra con Facebook <button (click)=\"loginWithFacebook()\" >Facebook Login</button>\n    </h2>\n    <h2>\n      Entra con Google <button (click)=\"loginWithGoogle()\" >Facebook Login</button>\n    </h2>\n    <button  mat-raised-button class=\"btn\" [disabled]=\"emailUser.errors ||passwordUser.errors\">Entrar</button>\n    <p>Ya tienes cuenta? <span (click)=\"isLogged=!isLogged\" >Click aquí</span></p>\n  </form>\n</section>\n\n\n<section *ngIf=\"!isLogged\">\n  <form class=\"example-form\" #signupForm=\"ngForm\" (ngSubmit)=\"signup(signupForm)\" ngNativeValidate>\n    <h1 class=\"mat-h1\">Crear Cuenta</h1>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Nombre de Usuario</mat-label>\n      <input matInput  [(ngModel)]=\"username\" type=\"text\"  name=\"username\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Correo Electrónico</mat-label>\n      <input matInput [(ngModel)]=\"email\" type=\"text\" name=\"email\">\n    </mat-form-field>\n    <div *ngIf=\"errorMail\" class=\"input-error-message\">\n      Este correo electrónico ya está registrado\n    </div>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Contraseña</mat-label>\n      <input matInput [(ngModel)]=\"password\"  type=\"password\" name=\"password\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Repite tu Contraseña</mat-label>\n      <input matInput [(ngModel)]=\"password2\"  type=\"password\" name=\"password2\">\n    </mat-form-field>\n    <button  mat-raised-button class=\"btn\">Crear</button>\n    <p>Ya tienes cuenta? <span (click)=\"isLogged=!isLogged\" >Click aquí</span></p>\n  </form>\n</section>\n\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  margin: 100px auto 0;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  padding-bottom: 2%; }\n\n.example-full-width {\n  width: 100%; }\n\nsection {\n  justify-content: center;\n  align-items: center;\n  height: 83.5vh;\n  max-width: 80%;\n  margin: auto; }\n\nsection p > span {\n    color: #e76297;\n    cursor: pointer; }\n\nsection .input-error-message.ng-star-inserted {\n    margin-top: -3%;\n    color: red;\n    margin-bottom: 5%;\n    margin-left: 1%; }\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router, firebaseService) {
        this.authService = authService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.isLogged = false;
        this.errorMail = false;
        this.user = null;
        this.newUser = {};
        if (sessionStorage.getItem('user')) {
            this.router.navigate(['home']);
        }
    }
    AuthComponent.prototype.signup = function (auth) {
        var _this = this;
        if (auth.value.password === auth.value.password2) {
            this.newUser.username = auth.value.username;
            this.newUser.password = auth.value.password;
            this.newUser.email = auth.value.email;
            this.authService.signup(this.newUser)
                .subscribe(function (user) {
                _this.user = user;
                sessionStorage.setItem('user', JSON.stringify(user));
                _this.router.navigate(['home']);
            }, function (err) {
                _this.errorMail = true;
            });
        }
    };
    AuthComponent.prototype.login = function (auth) {
        var _this = this;
        this.authService.login(auth.value)
            .subscribe(function (user) {
            _this.user = user;
            sessionStorage.setItem('user', JSON.stringify(user));
            _this.router.navigate(['home']);
        });
    };
    AuthComponent.prototype.loginWithFacebook = function () {
        this.firebaseService.loginWithFacebook();
    };
    AuthComponent.prototype.loginWithGoogle = function () {
        this.firebaseService.loginWithGoogle();
    };
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <form class=\"example-form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" ngNativeValidate>\n    <h1 class=\"mat-h1\">Iniciar Sesión</h1>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Correo Electrónico</mat-label>\n      <input matInput [(ngModel)]=\"email\" type=\"email\" name=\"email\" required #emailUser=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" minlength=\"7\">\n    </mat-form-field>\n    <div *ngIf=\"emailUser.invalid && emailUser.touched\" class=\"input-error-message\" >\n      <div *ngIf=\"!passwordUser.dirty || passwordUser.touched\">\n        Ingresa tu correo\n      </div>\n      <div *ngIf=\"emailUser.errors.pattern\">\n        Debe ingresar un correo válido.\n      </div>\n    </div>\n\n    <mat-form-field class=\"example-full-width inputColor\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Contraseña</mat-label>\n      <input matInput [(ngModel)]=\"password\"  type=\"password\" name=\"password\" required #passwordUser=\"ngModel\" min=\"1\">\n    </mat-form-field>\n    <div *ngIf=\"passwordUser.invalid && passwordUser.touched\" class=\"input-error-message\">\n      <div *ngIf=\"!passwordUser.dirty || passwordUser.touched\">\n        Ingresa tu contraseña\n      </div>\n    </div>\n    <button  mat-raised-button class=\"btn\" [disabled]=\"emailUser.errors ||passwordUser.errors\">Entrar</button>\n    <p>Ya tienes cuenta? <span [routerLink]=\"['/signup']\">Click aquí</span></p>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  margin: 100px auto 0;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  padding-bottom: 2%; }\n\n.example-full-width {\n  width: 100%; }\n\nsection {\n  justify-content: center;\n  align-items: center;\n  height: 83.5vh;\n  max-width: 80%;\n  margin: auto; }\n\nsection p > span {\n    color: #e76297;\n    cursor: pointer; }\n\nsection .input-error-message.ng-star-inserted {\n    margin-top: -3%;\n    color: red;\n    margin-bottom: 5%;\n    margin-left: 1%; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, firebaseService) {
        this.authService = authService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.isLogged = false;
        this.errorMail = false;
        this.user = null;
        this.newUser = {};
        if (sessionStorage.getItem('user')) {
            this.router.navigate(['home']);
        }
    }
    LoginComponent.prototype.signup = function (auth) {
        var _this = this;
        if (auth.value.password === auth.value.password2) {
            this.newUser.username = auth.value.username;
            this.newUser.password = auth.value.password;
            this.newUser.email = auth.value.email;
            this.authService.signup(this.newUser)
                .subscribe(function (user) {
                _this.user = user;
                sessionStorage.setItem('user', JSON.stringify(user));
                _this.router.navigate(['home']);
            }, function (err) {
                _this.errorMail = true;
            });
        }
    };
    LoginComponent.prototype.login = function (auth) {
        var _this = this;
        this.authService.login(auth.value)
            .subscribe(function (user) {
            _this.user = user;
            sessionStorage.setItem('user', JSON.stringify(user));
            _this.router.navigate(['home']);
        });
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        this.firebaseService.loginWithFacebook();
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        this.firebaseService.loginWithGoogle();
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <form class=\"example-form\" #signupForm=\"ngForm\" (ngSubmit)=\"signup(signupForm)\" ngNativeValidate>\n    <h1 class=\"mat-h1\">Crear Cuenta</h1>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Nombre de Usuario</mat-label>\n      <input matInput  [(ngModel)]=\"username\" type=\"text\"  name=\"username\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Correo Electrónico</mat-label>\n      <input matInput [(ngModel)]=\"email\" type=\"text\" name=\"email\">\n    </mat-form-field>\n    <div *ngIf=\"errorMail\" class=\"input-error-message\">\n      Este correo electrónico ya está registrado\n    </div>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Contraseña</mat-label>\n      <input matInput [(ngModel)]=\"password\"  type=\"password\" name=\"password\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" color=\"accent\" appearance=\"outline\">\n      <mat-label>Repite tu Contraseña</mat-label>\n      <input matInput [(ngModel)]=\"password2\"  type=\"password\" name=\"password2\">\n    </mat-form-field>\n    <button  mat-raised-button class=\"btn\">Crear</button>\n    <p>Ya tienes cuenta? <span [routerLink]=\"['/login']\" >Click aquí</span></p>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  margin: 100px auto 0;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  padding-bottom: 2%; }\n\n.example-full-width {\n  width: 100%; }\n\nsection {\n  justify-content: center;\n  align-items: center;\n  height: 83.5vh;\n  max-width: 80%;\n  margin: auto; }\n\nsection p > span {\n    color: #e76297;\n    cursor: pointer; }\n\nsection .input-error-message.ng-star-inserted {\n    margin-top: -3%;\n    color: red;\n    margin-bottom: 5%;\n    margin-left: 1%; }\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, firebaseService) {
        this.authService = authService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.isLogged = false;
        this.errorMail = false;
        this.user = null;
        this.newUser = {};
        if (sessionStorage.getItem('user')) {
            this.router.navigate(['home']);
        }
    }
    SignupComponent.prototype.signup = function (auth) {
        var _this = this;
        if (auth.value.password === auth.value.password2) {
            this.newUser.username = auth.value.username;
            this.newUser.password = auth.value.password;
            this.newUser.email = auth.value.email;
            this.authService.signup(this.newUser)
                .subscribe(function (user) {
                _this.user = user;
                sessionStorage.setItem('user', JSON.stringify(user));
                _this.router.navigate(['home']);
            }, function (err) {
                _this.errorMail = true;
            });
        }
    };
    SignupComponent.prototype.login = function (auth) {
        var _this = this;
        this.authService.login(auth.value)
            .subscribe(function (user) {
            _this.user = user;
            sessionStorage.setItem('user', JSON.stringify(user));
            _this.router.navigate(['home']);
        });
    };
    SignupComponent.prototype.loginWithFacebook = function () {
        this.firebaseService.loginWithFacebook();
    };
    SignupComponent.prototype.loginWithGoogle = function () {
        this.firebaseService.loginWithGoogle();
    };
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <div class=\"title_button\">\n      <button  mat-raised-button class=\"btn\" (click)=\"addComment(body)\">Crear</button>\n      <h1 class=\"mat-h1\">\n        Nuevo Comentario\n      </h1>\n    </div>\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Descripcion</mat-label>\n      <textarea matInput #body type=\"text\" required name=\"body\"></textarea>\n    </mat-form-field>\n  </div>\n  <h2 class=\"oregano\"> Atentamente {{user.username}}.</h2>\n</section>"

/***/ }),

/***/ "./src/app/comment/comment.component.scss":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field.mat-form-field {\n  color: #106969;\n  width: 95%;\n  padding-left: 2.5%; }\n\n.title_button {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  margin: 3%; }\n\nbutton.btn.mat-raised-button {\n  align-self: baseline;\n  margin-left: 30%; }\n\n.new_ingredients {\n  display: inline-block;\n  width: 57.5%; }\n\n.new_ingredients ul {\n    display: inline-block;\n    list-style: none; }\n\n.new_ingredients ul button.mat-button.mat-icon-button.ng-star-inserted {\n      width: 20px;\n      height: 20px;\n      line-height: 20px; }\n\n.new_ingredients ul mat-icon.mat-icon.material-icons {\n      font-size: 15px;\n      width: 20px;\n      height: 20px;\n      line-height: 20px; }\n\n.input-error-message.ng-star-inserted {\n  margin-top: -3%;\n  color: red;\n  margin-left: 2.5%; }\n\nh2 {\n  text-align: right;\n  color: #106969; }\n\n.mat-bottom-sheet-container {\n  height: 45vh; }\n"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/comments.service */ "./src/app/services/comments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CommentComponent = /** @class */ (function () {
    function CommentComponent(data, bottomSheetRef, commentService) {
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.commentService = commentService;
        this.newComment = {};
        this.user = {};
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.addComment = function (comment) {
        var _this = this;
        this.newComment.idUser = this.user.id;
        this.newComment.idRemedy = this.data._id;
        this.newComment.body = comment.value;
        this.newComment.username = this.user.username;
        this.commentService.createComment(this.newComment).subscribe(function (commentNew) {
            _this.bottomSheetRef.dismiss(commentNew);
        });
    };
    CommentComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/comment/comment.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"],
            _services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"copyright\">\n        <p class=\"text-center\">\n          Diseñado por \n          <a href=\"https://github.com/Nallelyht/\" target=\"_blank\">\n            @nallelyht\n          </a>\n        </p>\n      </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding-top: .5%;\n  position: relative;\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.copyright {\n  box-sizing: border-box;\n  width: 100%;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #f5a5b8;\n  color: #106969;\n  font-family: 'Oregano';\n  text-align: center;\n  z-index: 2; }\n\n.copyright a {\n  color: #e96196; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n\tmargin: 30px 20px 10%;\n}\n\n.dashboard-card {\n\tposition: absolute;\n\ttop: 15px;\n\tleft: 15px;\n\tright: 15px;\n\tbottom: 15px;\n}\n\nbutton.more-button.mat-icon-button {\n\tposition: absolute;\n\ttop: 11px;\n\tleft: 1px;\n}\n\n.dashboard-card-content {\n\ttext-align: center;\n}\n\nbutton.mat-fab.mat-accent {\n\tposition: fixed;\n\tright: 4%;\n\ttop: 2%;\n\tz-index: 10;\n}\n\nh3 {\n\tmargin: 0;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: #106969;\n\tfont: 400 21px/21px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.header {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40vh;\n\tbackground: #c1efdf;\n}\n\na.mat-menu-item {\n\theight: auto;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"!show()\" mat-fab (click)=\"openBottomSheet()\"><mat-icon>add</mat-icon></button>\n<header class=\"header\">\n  <h1 class=\"montserrat\">REMEDIOS CASEROS</h1>\n</header>\n<div class=\"grid-container\">\n  <mat-grid-list cols=\"2\" rowHeight=\"450px\">\n    <mat-grid-tile *ngFor=\"let remedy of remedies\" [colspan]=\"1\" [rowspan]=\"1\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            <a [routerLink]=\"['/remedyDetail']\" (click)=\"viewDetails(remedy._id)\">\n              <h3>{{remedy.title}}</h3>\n            </a> \n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\" *ngIf=\"!show()\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <a mat-menu-item [routerLink]=\"['/remedyDetail']\" (click)=\"viewDetails(remedy._id)\">Comentar</a>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <mat-list *ngFor=\"let ingredient of remedy.ingredients\">\n            <mat-list-item>\n              <p mat-line>{{ingredient}}</p>\n            </mat-list-item>\n          </mat-list>\n          <div>{{remedy.description}}</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-remedy/new-remedy.component */ "./src/app/new-remedy/new-remedy.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/new-remedy.service */ "./src/app/services/new-remedy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, bottomSheet, authService, router, remediesService) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.bottomSheet = bottomSheet;
        this.authService = authService;
        this.router = router;
        this.remediesService = remediesService;
        this.user = false;
        this.remediesService.getAllRemedies().subscribe(function (res) {
            _this.remedies = res;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('user')) {
            this.user = true;
        }
    };
    HomeComponent.prototype.openBottomSheet = function () {
        var _this = this;
        var sheet = this.bottomSheet.open(_new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_3__["NewRemedyComponent"]);
        sheet.backdropClick().subscribe(function () {
            console.log('dbclicked');
        });
        sheet.afterDismissed().subscribe(function (newRemedy) {
            _this.remedies.push(newRemedy);
        });
    };
    HomeComponent.prototype.show = function () {
        return this.authService.show();
    };
    HomeComponent.prototype.viewDetails = function (idRemedy) {
        this.router.navigate(['/remedyDetail/' + idRemedy], {
            skipLocationChange: true
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_6__["NewRemedyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat:300|Oregano');\n.oregano {\n\tfont-family: 'Oregano';\n}\n.mat-sidenav-container {\n\tbackground: #fff;\n}\nmat-toolbar{\n\tposition: fixed;\n\tz-index: 10;\n}\nh1 {\n\tfont-size: 2em;\n\ttext-align: center;\n\tdisplay: inline;\n}\nimg {\n\tvertical-align: middle;\n\twidth: 100px;\n\tpadding-left: 2%;\n}\n.blank-grow {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-decoration: none;\n}\n.blank-grow:visited {\n\tcolor: #106969;\n}\n.mat-toolbar.mat-primary {\n\tbackground: #c1efdf;\n\tcolor: #106969;\n\theight: 80px;\n}\n.icon {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.icon .auth {\n\tpadding: 0 2%;\n}\nbutton.mat-button.mat-icon-button {\n\tright: 0;\n\tposition: absolute;\n}\nmat-sidenav.mat-drawer.mat-sidenav.ng-tns-c3-0.ng-trigger.ng-trigger-transform.mat-drawer-over.ng-star-inserted {\n\twidth: 30vw;\n}\na.mat-list-item {\n\tmargin-left: 9%;\n\tcolor: #106969;\n}\nspan.auth {\n\tcolor: #106969;\n\tfont-size: 1.2rem;\n}\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav >\n    <mat-nav-list>\n        <button mat-button matSuffix mat-icon-button type=\"button\" aria-label=\"Clear\" (click)=\"sidenav.close()\">\n            <mat-icon>close</mat-icon>\n          </button>\n      <a mat-list-item [routerLink]=\"['signup']\" style=\"\n      margin-top: 30%;\" (click)=\"sidenav.close()\" *ngIf=\"show()\">\n        <span class=\"auth\">Crear Cuenta</span>\n      </a>\n      <a mat-list-item [routerLink]=\"['login']\" (click)=\"sidenav.close()\" *ngIf=\"show()\">\n        <span class=\"auth\">Iniciar Sesión</span>\n      </a>\n      <a mat-list-item [routerLink]=\"['home']\" (click)=\"sidenav.close()\" style=\"margin-top: 30%;\">\n          <span class=\"auth\" *ngIf=\"!show()\">Inicio</span>\n        </a>\n      <a mat-list-item [routerLink]=\"['home']\" (click)=\"logout(); sidenav.close()\">\n        <span class=\"auth\" *ngIf=\"!show()\">Cerrar Sesión</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.open()\" fxHide=\"false\" fxHide.gt-sm>\n      <mat-icon>menu</mat-icon>\n    </button>\n    <a [routerLink]=\"['home']\" class=\"blank-grow\">\n      <h1 class=\"oregano title\"> Me Dijo Mi Má</h1>\n      <img src=\"../../assets/img/flor.png\" alt=\"flor\">\n    </a>\n<!--     <span class=\"icon\">\n      <a [routerLink]=\"['auth']\"> Cuenta </a>\n    </span> -->\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = false;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('push');
        if (sessionStorage.getItem('user') === null) {
            this.user = true;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('user') === null) {
            this.user = true;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.user = false;
        this.authService.logout();
        this.router.navigate(['home']);
    };
    NavbarComponent.prototype.show = function () {
        return this.authService.show();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/new-remedy/new-remedy.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-remedy/new-remedy.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <form #newRemedyForm=\"ngForm\" (ngSubmit)=\"createRemedy(newRemedyForm)\" ngNativeValidate>\n    <div class=\"title_button\">\n      <button  mat-raised-button class=\"btn\">Crear</button>\n      <h1 class=\"mat-h1\">\n        Crear Remedio\n      </h1>\n    </div>\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Titulo</mat-label>\n      <input matInput  [(ngModel)]=\"editable.title\" type=\"text\"  name=\"title\" #title required>\n    </mat-form-field>\n    <mat-form-field color=\"accent\" appearance=\"outline\" style=\" width: 35%;\">\n      <mat-label>Ingredientes</mat-label>\n      <input matInput [(ngModel)]=\"ingredient\"  type=\"text\" name=\"ingredient\" #addIng=\"ngModel\" >\n      <button mat-button *ngIf=\"ingredient\" matSuffix mat-icon-button type=\"button\" aria-label=\"Add\" (click)=\"addIngredient(ingredient, $event); ingredient='';\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </mat-form-field>\n    <div *ngIf=\"addIng.touched && ingredients.length == 0\" class=\"input-error-message\">\n      Debes agregar al menos un ingrediente\n    </div>\n    <div class=\"new_ingredients\">\n      <ul *ngFor=\"let item of ingredients; let i = index\">\n        <li>\n          <span #oneIngredient>{{item}}</span>\n          <button mat-button matSuffix mat-icon-button type=\"button\" (click)=\"removeIngredient(i, oneIngredient)\" >\n            <mat-icon>close</mat-icon>\n          </button></li>\n      </ul>\n    </div>\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Descripcion</mat-label>\n      <textarea matInput [(ngModel)]=\"editable.description\" type=\"text\" required name=\"description\"></textarea>\n    </mat-form-field>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/new-remedy/new-remedy.component.scss":
/*!******************************************************!*\
  !*** ./src/app/new-remedy/new-remedy.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field.mat-form-field {\n  color: #106969;\n  width: 95%;\n  padding-left: 2.5%; }\n\n.title_button {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  margin: 3%; }\n\nbutton.btn.mat-raised-button {\n  align-self: baseline;\n  margin-left: 30%; }\n\n.new_ingredients {\n  display: inline-block;\n  width: 57.5%; }\n\n.new_ingredients ul {\n    display: inline-block;\n    list-style: none; }\n\n.new_ingredients ul button.mat-button.mat-icon-button.ng-star-inserted {\n      width: 20px;\n      height: 20px;\n      line-height: 20px; }\n\n.new_ingredients ul mat-icon.mat-icon.material-icons {\n      font-size: 15px;\n      width: 20px;\n      height: 20px;\n      line-height: 20px; }\n\n.input-error-message.ng-star-inserted {\n  margin-top: -3%;\n  color: red;\n  margin-left: 2.5%; }\n"

/***/ }),

/***/ "./src/app/new-remedy/new-remedy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-remedy/new-remedy.component.ts ***!
  \****************************************************/
/*! exports provided: NewRemedyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRemedyComponent", function() { return NewRemedyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/new-remedy.service */ "./src/app/services/new-remedy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewRemedyComponent = /** @class */ (function () {
    function NewRemedyComponent(data, bottomSheetRef, remedyService) {
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.remedyService = remedyService;
        this.ingredients = [];
        this.newIngredient = {};
        this.editable = {};
        if (this.data !== null) {
            this.editable = this.data;
            this.ingredients = this.data.ingredients;
        }
    }
    NewRemedyComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    NewRemedyComponent.prototype.ngOnInit = function () {
    };
    NewRemedyComponent.prototype.createRemedy = function (remedy) {
        var _this = this;
        this.newIngredient.title = remedy.value.title;
        this.newIngredient.description = remedy.value.description;
        this.newIngredient.ingredients = this.ingredients;
        this.newIngredient.idUser = JSON.parse(sessionStorage.getItem('user')).id;
        if (this.data === null) {
            this.remedyService.createRemedy(this.newIngredient).subscribe(function (newRemedy) {
                _this.bottomSheetRef.dismiss(newRemedy);
            });
        }
        else if (this.data !== null) {
            this.newIngredient._id = this.data._id;
            this.remedyService.editOneRemedy(this.newIngredient).subscribe(function (editRemedy) {
                _this.bottomSheetRef.dismiss();
            });
        }
    };
    NewRemedyComponent.prototype.addIngredient = function (ingredient, e) {
        e.preventDefault();
        this.ingredients.push(ingredient);
    };
    NewRemedyComponent.prototype.removeIngredient = function (index) {
        var confirmation = confirm('¿Quieres eliminar el ingrediente ' + this.ingredients[index] + '?');
        if (confirmation) {
            this.ingredients.splice(index, 1);
        }
        else {
            return;
        }
    };
    NewRemedyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-remedy',
            template: __webpack_require__(/*! ./new-remedy.component.html */ "./src/app/new-remedy/new-remedy.component.html"),
            styles: [__webpack_require__(/*! ./new-remedy.component.scss */ "./src/app/new-remedy/new-remedy.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"],
            _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_2__["NewRemedyService"]])
    ], NewRemedyComponent);
    return NewRemedyComponent;
}());



/***/ }),

/***/ "./src/app/remedy-detail/remedy-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/remedy-detail/remedy-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"remedy\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <h2 class=\"mat-h1\" *ngIf=\"remedy.title\">{{remedy.title}}</h2>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title *ngIf=\"user\"> Hola {{user.username}}</mat-card-title>\n      <mat-card-subtitle>Autor: <small *ngIf=\"remedy.idUser\">{{remedy.idUser.username}}</small> </mat-card-subtitle>\n    </mat-card-header>\n<!--     <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n    <mat-card-content>\n      <h2 class=\"mat-h2\">Ingredientes</h2>\n      <ul  *ngFor=\"let ingredient of remedy.ingredients\">\n        <li>{{ingredient}}</li>\n      </ul>\n      <h2 class=\"mat-h2\">Receta</h2>\n      <p>\n        {{remedy?.description}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions *ngIf=\"show()\">\n      <button mat-button [routerLink]=\"['/signup']\"> \n        <mat-icon>comment</mat-icon>\n      </button>\n    </mat-card-actions>\n    <mat-card-actions *ngIf=\"!show()\">\n      <button mat-button (click)=\"openBottomSheet()\"> \n        <mat-icon>comment</mat-icon>\n      </button>\n<!--       <button mat-icon-button (click)=\"addFav($event)\">\n        <mat-icon [ngStyle]=\"{'color': fav ? '#e96196' : 'gray'}\">favorite</mat-icon>\n      </button> -->\n      <button mat-button (click)=\"openEdit()\" *ngIf=\"remedy.idUser\">\n          <mat-icon *ngIf=\"user.id === remedy.idUser._id\">edit</mat-icon>\n      </button>\n    </mat-card-actions>\n    <mat-card-content *ngIf=\"remedy.comments\">\n      <h2 class=\"mat-h2\">Comentarios</h2>\n      <ul *ngFor=\"let comment of remedy.comments\" class=\"commentsList\" >\n        <li>\n          <p><strong>{{comment.username}}:</strong> {{comment.body}}\n          <br>\n          <small>{{comment.created_at| date: 'dd/MM/yyyy'}}</small>\n        </p>\n          \n        </li>\n      </ul>\n    </mat-card-content>\n    <mat-card-content *ngIf=\"!remedy.comments\">\n      <h2 class=\"mat-h2\">Comentarios</h2>\n      <ul  *ngFor=\"let comment of arrayComments\" class=\"commentsList\">\n        <li>\n          <p><strong>{{comment.username}}:</strong> {{comment.body}}\n          <br>\n          <small>{{comment.created_at| date: 'dd/MM/yyyy'}}</small>\n        </p>\n          \n        </li>\n      </ul>\n    </mat-card-content>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/remedy-detail/remedy-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/remedy-detail/remedy-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 65%;\n  width: 814px;\n  height: 100%; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\nsection {\n  display: flex;\n  justify-content: center;\n  margin: 5%;\n  padding-bottom: 2%;\n  padding-top: 3%;\n  height: 80vh; }\n\nsection .mat-h1 {\n    margin: 0 20%; }\n\nsection mat-icon {\n    color: gray; }\n\nmat-card-actions.mat-card-actions.ng-star-inserted {\n  text-align: center;\n  left: 33.33%;\n  right: 33.33%; }\n\n.commentsList li {\n  list-style: none; }\n\n.commentsList li p {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/remedy-detail/remedy-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/remedy-detail/remedy-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: RemedyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemedyDetailComponent", function() { return RemedyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/new-remedy.service */ "./src/app/services/new-remedy.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-remedy/new-remedy.component */ "./src/app/new-remedy/new-remedy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RemedyDetailComponent = /** @class */ (function () {
    function RemedyDetailComponent(router, route, authService, remedyService, bottomSheet) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.remedyService = remedyService;
        this.bottomSheet = bottomSheet;
        this.remedy = {};
        this.fav = false;
        this.arrayComments = [];
        this.route.params.subscribe(function (params) {
            var idRemedy = _this.route.snapshot.params['id'];
            _this.remedyService.getOneRemedy(idRemedy).subscribe(function (oneRemedy) {
                _this.remedy = oneRemedy;
            });
        });
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    RemedyDetailComponent.prototype.addFav = function () {
        this.fav = !this.fav;
    };
    RemedyDetailComponent.prototype.ngOnInit = function () {
    };
    RemedyDetailComponent.prototype.openBottomSheet = function () {
        var _this = this;
        var sheet = this.bottomSheet.open(_comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"], {
            data: this.remedy
        });
        sheet.backdropClick().subscribe(function () {
            console.log('dbclicked');
        });
        sheet.afterDismissed().subscribe(function (comment) {
            if (_this.remedy.comments.length === 0) {
                _this.arrayComments.push(comment);
            }
            _this.remedy.comments.push(comment);
        });
    };
    RemedyDetailComponent.prototype.show = function () {
        return this.authService.show();
    };
    RemedyDetailComponent.prototype.openEdit = function () {
        var sheet = this.bottomSheet.open(_new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_6__["NewRemedyComponent"], {
            data: this.remedy
        });
        sheet.backdropClick().subscribe(function () {
            console.log('dbclicked');
        });
        sheet.afterDismissed();
    };
    RemedyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remedy-detail',
            template: __webpack_require__(/*! ./remedy-detail.component.html */ "./src/app/remedy-detail/remedy-detail.component.html"),
            styles: [__webpack_require__(/*! ./remedy-detail.component.scss */ "./src/app/remedy-detail/remedy-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_2__["NewRemedyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], RemedyDetailComponent);
    return RemedyDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        /* url = 'http://localhost:3000/api/'; */
        this.url = '/api/';
    }
    AuthService.prototype.signup = function (auth) {
        return this.http.post(this.url + 'signup', auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.login = function (auth) {
        return this.http.post(this.url + 'login', auth, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem('user');
        return this.http.get(this.url + 'logout').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (e) { return console.log(e); });
    };
    AuthService.prototype.show = function () {
        if (sessionStorage.getItem('user') === null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = /** @class */ (function () {
    function CommentsService(http) {
        this.http = http;
        /*   url = 'http://localhost:3000/api/comments/'; */
        this.url = '/api/comments/';
    }
    // get all
    CommentsService.prototype.getAllComments = function () {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // create one
    CommentsService.prototype.createComment = function (obj) {
        return this.http.post(this.url, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = {
    apiKey: 'AIzaSyATF58FiUn036PG-JWQIQ6miTMHpmnpXLw',
    authDomain: 'mima-17403.firebaseapp.com',
    databaseURL: 'https://mima-17403.firebaseio.com',
    projectId: 'mima-17403',
    storageBucket: '',
    messagingSenderId: '844003263349'
};
firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.url = '/';
        this.provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
        this.googleProvider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
    }
    FirebaseService.prototype.loginWithFacebook = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(this.provider).then(function (snap) {
            console.log(snap);
            /*  localStorage.setItem('facebookToken', JSON.stringify(snap.credential.accessToken));
             localStorage.setItem('user', JSON.stringify(snap.user));
             this._sendTokenToBackend(snap); */
        });
    };
    FirebaseService.prototype.loginWithGoogle = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(this.googleProvider).then(function (snap) {
            console.log(snap.user);
        });
    };
    FirebaseService.prototype._sendTokenToBackend = function (snap) {
        var token = snap.credential.accessToken;
        fetch(this.url + 'facebook/login', {
            method: 'post',
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(function (r) {
            if (!r.ok) {
                throw new Error();
            }
            return r.json();
        })
            .then(function (res) {
            console.log(res);
        });
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/new-remedy.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/new-remedy.service.ts ***!
  \************************************************/
/*! exports provided: NewRemedyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRemedyService", function() { return NewRemedyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewRemedyService = /** @class */ (function () {
    function NewRemedyService(http) {
        this.http = http;
        /* url = 'http://localhost:3000/api/remedies/'; */
        this.url = '/api/remedies/';
    }
    // get all remedies
    NewRemedyService.prototype.getAllRemedies = function () {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // get one remedy
    NewRemedyService.prototype.getOneRemedy = function (id) {
        return this.http.get(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // create one remedy
    NewRemedyService.prototype.createRemedy = function (obj) {
        return this.http.post(this.url, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // edit one remedy
    NewRemedyService.prototype.editOneRemedy = function (obj) {
        return this.http.put(this.url + obj._id, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // delete one remedy richard
    NewRemedyService.prototype.deleteRemedy = function (id) {
        return this.http.delete(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NewRemedyService.prototype.getNewRemedy = function () {
        var remedy;
        if (sessionStorage.getItem('newRemedy')) {
            remedy = JSON.parse(sessionStorage.getItem('newRemedy'));
            return remedy;
        }
        return;
    };
    NewRemedyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NewRemedyService);
    return NewRemedyService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nallely/code/mima/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map