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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/new-remedy.service */ "./src/app/services/new-remedy.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
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
                _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_10__["NewRemedyComponent"]
            ],
            imports: [
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"]
            ],
            entryComponents: [
                _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_10__["NewRemedyComponent"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_new_remedy_service__WEBPACK_IMPORTED_MODULE_13__["NewRemedyService"]
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
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
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

module.exports = ".example-form {\n  margin: 100px auto 0;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85vh;\n  max-width: 80%;\n  margin: auto; }\n\nsection p > span {\n    color: #e76297;\n    cursor: pointer; }\n\nsection .input-error-message.ng-star-inserted {\n    margin-top: -3%;\n    color: red;\n    margin-bottom: 5%;\n    margin-left: 1%; }\n"

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

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n\tmargin: 30px 20px 20px;\n}\n\n.dashboard-card {\n\tposition: absolute;\n\ttop: 15px;\n\tleft: 15px;\n\tright: 15px;\n\tbottom: 15px;\n}\n\nbutton.more-button.mat-icon-button {\n\tposition: absolute;\n\ttop: 11px;\n\tleft: 1px;\n}\n\n.dashboard-card-content {\n\ttext-align: center;\n}\n\nbutton.mat-fab.mat-accent {\n\tposition: fixed;\n\tright: 4%;\n\ttop: 2%;\n\tz-index: 2;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button  mat-fab (click)=\"openBottomSheet()\"><mat-icon>add</mat-icon></button>\n<div class=\"grid-container\">\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-remedy/new-remedy.component */ "./src/app/new-remedy/new-remedy.component.ts");
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
    function HomeComponent(breakpointObserver, bottomSheet) {
        this.breakpointObserver = breakpointObserver;
        this.bottomSheet = bottomSheet;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    HomeComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_new_remedy_new_remedy_component__WEBPACK_IMPORTED_MODULE_4__["NewRemedyComponent"]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Oregano');\n.oregano {\n\tfont-family: 'Oregano';\n}\n.mat-sidenav-container {\n\tbackground: #fff;\n}\nh1 {\n\tfont-size: 2em;\n\ttext-align: center;\n\tdisplay: inline;\n}\nimg {\n\tvertical-align: middle;\n\twidth: 100px;\n\tpadding-left: 2%;\n}\n.blank-grow {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-decoration: none;\n}\n.blank-grow:visited {\n\tcolor: #106969;\n}\n.mat-toolbar.mat-primary {\n\tbackground: #c1efdf;\n\tcolor: #106969;\n\theight: 80px;\n}\n.icon {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.icon .auth {\n\tpadding: 0 2%;\n}\nbutton.mat-button.mat-icon-button {\n\tright: 0;\n\tposition: absolute;\n}\nmat-sidenav.mat-drawer.mat-sidenav.ng-tns-c3-0.ng-trigger.ng-trigger-transform.mat-drawer-over.ng-star-inserted {\n\twidth: 30vw;\n}\na.mat-list-item {\n\tmargin-left: 9%;\n\tcolor: #106969;\n}\nspan.auth {\n\tcolor: #106969;\n\tfont-size: 1.2rem;\n}\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav >\n    <mat-nav-list>\n        <button mat-button matSuffix mat-icon-button type=\"button\" aria-label=\"Clear\" (click)=\"sidenav.close()\">\n            <mat-icon>close</mat-icon>\n          </button>\n      <a mat-list-item [routerLink]=\"['auth']\" style=\"\n      margin-top: 30%;\" (click)=\"sidenav.close()\">\n        <span class=\"auth\">Crear Cuenta</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.open()\" fxHide=\"false\" fxHide.gt-sm>\n      <mat-icon>menu</mat-icon>\n    </button>\n    <a [routerLink]=\"['home']\" class=\"blank-grow\">\n      <h1 class=\"oregano title\"> Me Dijo Mi Má</h1>\n      <img src=\"../../assets/img/flor.png\" alt=\"flor\">\n    </a>\n<!--     <span class=\"icon\">\n      <a [routerLink]=\"['auth']\"> Cuenta </a>\n    </span> -->\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('push');
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
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

module.exports = "<section>\n  <form #newRemedyForm=\"ngForm\" (ngSubmit)=\"createRemedy(newRemedyForm)\" ngNativeValidate>\n    <div class=\"title_button\">\n      <button  mat-raised-button class=\"btn\">Crear</button>\n      <h1 class=\"mat-h1\">\n        Crear Remedio\n      </h1>\n    </div>\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Titulo</mat-label>\n      <input matInput  [(ngModel)]=\"title\" type=\"text\"  name=\"title\" #titleUser required>\n    </mat-form-field>\n    <mat-form-field color=\"accent\" appearance=\"outline\" style=\" width: 35%;\">\n      <mat-label>Ingredientes</mat-label>\n      <input matInput [(ngModel)]=\"ingredient\"  type=\"text\" name=\"ingredient\" #addIng=\"ngModel\" >\n      <button mat-button *ngIf=\"ingredient\" matSuffix mat-icon-button type=\"button\" aria-label=\"Add\" (click)=\"addIngredient(ingredient, $event); ingredient='';\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </mat-form-field>\n    <div *ngIf=\"addIng.touched && ingredients.length == 0\" class=\"input-error-message\">\n        Debes agregar al menos un ingrediente\n    </div>\n    <div class=\"new_ingredients\">\n      <ul *ngFor=\"let item of ingredients; let i = index\">\n        <li>\n          <span #oneIngredient>{{item}}</span>\n          <button mat-button matSuffix mat-icon-button type=\"button\" (click)=\"removeIngredient(i, oneIngredient)\" >\n          <mat-icon>close</mat-icon>\n          </button></li>\n      </ul>\n    </div>\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Descripcion</mat-label>\n      <textarea matInput [(ngModel)]=\"description\" type=\"text\" required name=\"description\"></textarea>\n    </mat-form-field>\n  </form>\n</section>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewRemedyComponent = /** @class */ (function () {
    function NewRemedyComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
        this.ingredients = [];
        this.newIngredient = {};
    }
    NewRemedyComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    NewRemedyComponent.prototype.ngOnInit = function () {
    };
    NewRemedyComponent.prototype.createRemedy = function (remedy) {
        this.newIngredient.title = remedy.value.title;
        this.newIngredient.description = remedy.value.description;
        this.newIngredient.ingredients = this.ingredients;
        console.log(this.newIngredient);
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], NewRemedyComponent);
    return NewRemedyComponent;
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
        // url = 'http://localhost:3000/api/';
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
    AuthService.prototype.getPrivatePhones = function () {
        return this.http.get(this.url + 'private', { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
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
        this.url = 'http://localhost:3000/';
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
        this.url = '/api/remedies/';
    }
    // get all remedies
    NewRemedyService.prototype.getAllremedies = function () {
        return this.http.get(this.url).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (e) { return console.log(e); });
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