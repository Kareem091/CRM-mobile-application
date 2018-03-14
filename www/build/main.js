webpackJsonp([2],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_userService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_alert_alert_controller__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_ParamService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_loading_loading_controller__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var RegisterPage = (function () {
    function RegisterPage(platform, facebook, failMsgCtrl, afAuth, nav, loadingCtrl, param, navParams, userServ) {
        this.platform = platform;
        this.facebook = facebook;
        this.failMsgCtrl = failMsgCtrl;
        this.afAuth = afAuth;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.param = param;
        this.navParams = navParams;
        this.userServ = userServ;
        this.user = {};
        this.info = {};
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().createUserWithEmailAndPassword(this.user.email, this.user.password);
                    if (result) {
                        this.createNewUser(this.user);
                        this.storeLoggedInUser(this.user.email);
                    }
                }
                catch (e) {
                    console.error(e);
                    this.presentFailMsg(e);
                    this.nav.pop();
                }
                return [2 /*return*/];
            });
        });
    };
    // login with facebook and go to home page
    RegisterPage.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result_1, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.facebook.login(['email', 'public_profile']).then(function (res) {
                                var facebookCredential = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                                var facenbookInfo = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().signInWithCredential(facebookCredential);
                                console.log(facenbookInfo);
                                if (result_1) {
                                    _this.getFacebookLoggedInUser();
                                    _this.storeLoggedInUser(_this.user.email);
                                }
                            })];
                    case 1:
                        result_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].FacebookAuthProvider())];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            this.getFacebookLoggedInUser();
                            this.storeLoggedInUser(this.user.email);
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.presentFailMsg(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.getFacebookLoggedInUser = function () {
        var user = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser;
        if (user != null) {
            var profileInfo = {};
            user.providerData.forEach(function (profile) {
                profileInfo = profile;
            });
            this.info = user;
            this.transformUserData(this.info, profileInfo.uid);
        }
    };
    RegisterPage.prototype.transformUserData = function (infoUI, uid) {
        this.user.displayName = infoUI.displayName;
        this.user.email = infoUI.email;
        this.user.photoURL = infoUI.photoURL;
        this.user.phoneNumber = infoUI.phoneNumber;
        this.user.providerId = infoUI.providerId;
        this.user.uid = uid;
        this.user.fullPhoto = "https://graph.facebook.com/" + uid + "/picture?width=1024&height=1024";
    };
    RegisterPage.prototype.storeLoggedInUser = function (email) {
        var _this = this;
        console.log('storeLoggedInUser:: ' + email);
        this.userServ.getUserByEmail(email).subscribe(function (data) {
            if (data) {
                _this.user = data;
                _this.param.setLoggedInUser(_this.user);
            }
            else {
                console.log("User with email '" + email + "' not found, returning to list");
            }
        });
        this.presentLoadingDefault();
    };
    RegisterPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Hello'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, 5000);
    };
    RegisterPage.prototype.createNewUser = function (logedInUser) {
        var _this = this;
        this.userServ.createUser(logedInUser).subscribe(function (data) { console.log(data); }, function (error) { return _this.presentFailMsg(error); });
    };
    RegisterPage.prototype.presentFailMsg = function (msg) {
        var alert = this.failMsgCtrl.create({
            title: 'Email Not Found',
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\register\register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content" style="width: 250px;">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      Sign up to see photos and videos from your friends.\n    </div>\n\n    <div>\n      <button ion-button icon-only block color="blue" style="text-transform: none;" (click)="facebookLogin()">\n        <ion-icon name="logo-facebook"></ion-icon>Sign Up with Faceboook\n      </button>\n\n    </div>\n\n    <div>\n      <p text-center ion-text color="dynamicColor">Or</p>\n    </div>\n    <!-- Login form -->\n\n    <div>\n      <form class="list-form">\n        <ion-item>\n          <ion-label floating>\n            <!-- <ion-icon name="mail" item-start class="text-primary"></ion-icon>-->\n            Email\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="user.email" [ngModelOptions]="{standalone: true}"></ion-input>\n        </ion-item>\n       \n        <ion-item>\n          <ion-label floating>\n            <!-- <ion-icon name="mail" item-start class="text-primary"></ion-icon>-->\n            Display Name\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="user.displayName" [ngModelOptions]="{standalone: true}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Gender</ion-label>\n            <ion-select [(ngModel)]="user.gender" [ngModelOptions]="{standalone: true}">\n              <ion-option value="Female">Female</ion-option>\n              <ion-option value="Male">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        <ion-item>\n          <ion-label floating>\n            <!-- <ion-icon name="lock" item-start class="text-primary" ></ion-icon>-->\n            Password\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="user.password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n        </ion-item>\n      </form>\n    </div>\n    <div margin-top>\n      <button ion-button icon-start block color="blue" style="text-transform: none;" tappable (click)="register()">\n\n        SIGN UP\n      </button>\n    </div>\n\n    <div class="col-md-4 col-md-offset-4">By signing up, you agree to our Terms & Privacy Policy</div>\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_platform__["a" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_platform__["a" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_alert_alert_controller__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__api_ParamService__["a" /* ParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__api_ParamService__["a" /* ParamsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__api_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_userService__["a" /* UserService */]) === "function" && _j || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		723,
		1
	],
	"../pages/register/register.module": [
		724,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_ParamService__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(param, navCtrl) {
        this.param = param;
        this.navCtrl = navCtrl;
        this.user = {};
        this.user = this.param.getLoggedInUser();
        console.log('constractor AboutPage user id: ' + this.user.id);
        console.log('constractor AboutPage user email  : ' + this.user.email);
        console.log('constractor AboutPage user about: ' + this.user.about);
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        var user = this.param.getLoggedInUser();
        console.log('ionViewWillEnter AboutPage');
        console.log('ionViewWillEnter AboutPage user id: ' + user.id);
        console.log('ionViewWillEnter AboutPage user email: ' + user.email);
        console.log('ionViewWillEnter AboutPage user about: ' + user.about);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_ParamService__["a" /* ParamsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_userService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_ParamService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(param, navCtrl, userServ, loadingController) {
        this.param = param;
        this.navCtrl = navCtrl;
        this.userServ = userServ;
        this.loadingController = loadingController;
        this.user = {};
        this.user = this.param.getLoggedInUser();
        this.user.fullPhoto = this.param.getFullPhoto();
        console.log('fullPhone------------- ' + this.user.fullPhoto);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="">\n      <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Welcome</ion-title>\n    </ion-navbar>\n    <ion-toolbar color="secondary">\n      <ion-title>Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n    <div class="login-content" >\n  <h2>{{ user?.displayName }}</h2>\n  <h2>Welcome to Kiki entertainment App!</h2>\n  \n<p>Currently, this app is underdevelopment</p>\n<p>we are very happy to join us, just login and we will sent you notification once we are done</p>\n\n<ion-card *ngIf="user">\n  <ion-card-header>{{ user?.displayName }}</ion-card-header>\n  <img [src]="user?.fullPhoto" alt="Description"/>\n  <ion-card-content>\n    <p>Email: {{ user?.email }}</p>\n    </ion-card-content>\n</ion-card>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_ParamService__["a" /* ParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_ParamService__["a" /* ParamsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__api_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_userService__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_userService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsPage = (function () {
    function FriendsPage(navCtrl, userServ, loadingController) {
        this.navCtrl = navCtrl;
        this.userServ = userServ;
        this.loadingController = loadingController;
    }
    FriendsPage.prototype.ngOnInit = function () {
        this.getUsers();
    };
    FriendsPage.prototype.getUsers = function () {
        var _this = this;
        // make variable that create the component
        var loader = this.loadingController.create({
            content: 'Loading Users...'
            //spinner: 'dots'
        });
        loader.present().then(function () {
            // and then() call api service to fetch data
            _this.userServ.getUsers().subscribe(function (data) {
                // set the fetched data
                _this.users = data;
                console.log(_this.users.photoURL);
                // close the loading component
                loader.dismiss();
            });
        });
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\friends\friend.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Users\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="login-content">\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let user of users">\n          <ion-item> \n              <ion-card>\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img [src]="user.photoURL">\n\n                  </ion-avatar>\n                  <h2>{{user.displayName}}</h2>\n                  <p>{{user.nickName}}</p>\n                </ion-item>\n                <img src="https://i.ytimg.com/vi/RqRNd4UyA4c/maxresdefault.jpg" />\n                <ion-card-content>\n                  <ion-card-title>\n                      <p>{{user.nickName}}</p> is a {{user.about}} \n                  </ion-card-title>\n                  <p>\n                    \n                  </p>\n                </ion-card-content>\n                <ion-row>\n                  <ion-col>\n                    <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>54 Likes</div>\n                  </button>\n                  </ion-col>\n                  <ion-col>\n                    <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>40 Comments</div>\n                  </button>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\friends\friend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__api_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__api_userService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_gallary_gallary__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_friends_friend__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__api_ParamService__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_gallary_gallary__["a" /* GallaryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_friends_friend__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionic3_start_theme',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_gallary_gallary__["a" /* GallaryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_friends_friend__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_24__api_ParamService__["a" /* ParamsService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_20__api_userService__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParamsService = (function () {
    function ParamsService() {
        this.userinfoServ = {};
    }
    ParamsService.prototype.setLoggedInUser = function (userinfoServ) {
        console.log('setUser: ' + userinfoServ.email);
        this.userinfoServ = userinfoServ;
        console.log('setUser this : ' + this.userinfoServ.email);
        console.log('setUser about gettter: ' + this.userinfoServ.fullPhoto);
    };
    ParamsService.prototype.getLoggedInUser = function () {
        console.log('getUser email gettter: ' + this.userinfoServ.email);
        console.log('getUser id gettter: ' + this.userinfoServ.id);
        console.log('getUser about gettter: ' + this.userinfoServ.about);
        console.log('getUser about gettter: ' + this.userinfoServ.fullPhoto);
        return this.userinfoServ;
    };
    ParamsService.prototype.setFullPhoto = function (fullPhoto) {
        console.log(' PARAM:  fullPhoto:   ' + fullPhoto);
        this.fullPhoto = fullPhoto;
    };
    ParamsService.prototype.getFullPhoto = function () {
        console.log(' PARAM: this fullPhoto:   ' + this.fullPhoto);
        return this.fullPhoto;
    };
    ParamsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParamsService);
    return ParamsService;
}());

//# sourceMappingURL=ParamService.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._url = 'https://crmapplication-all.herokuapp.com/api';
    }
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this._url + "/geti?id=" + id);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.put(this._url + "/new", user);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this._url + "/allusers");
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this._url + "/update?id=" + id, user);
    };
    UserService.prototype.getUserByEmail = function (email) {
        return this.http.get(this._url + "/gete?email=" + email);
    };
    UserService.prototype.getUserByPhone = function (phone) {
        return this.http.get(this._url + "/getp?phone=" + phone);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=userService.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_loading_loading_controller__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(loadingController, platform, statusBar, splashScreen, keyboard, facebook) {
        this.loadingController = loadingController;
        this.facebook = facebook;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.logout = function () {
        this.presentLoadingDefault();
    };
    MyApp.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingController.create({
            spinner: 'dots',
            content: 'Bye..'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.facebook.logout();
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>App 4 Entertainment</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-list-header>EXPLORE</ion-list-header>\n            <button menuClose ion-item (click)="goHome()">Home</button>\n            <button menuClose ion-item (click)="logout()">Logout</button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    // Initialize Firebase
    firebase: {
        apiKey: "AIzaSyCMHR787FqjuHjRrgYx79VxKTwL53_0ydI",
        authDomain: "kiki-crm.firebaseapp.com",
        databaseURL: "https://kiki-crm.firebaseio.com",
        projectId: "kiki-crm",
        storageBucket: "kiki-crm.appspot.com",
        messagingSenderId: "83206054583"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GallaryPage = (function () {
    function GallaryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GallaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallary',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\gallary\gallary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img src="img/nin-live.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Nine Inch Nails Live\n            </ion-card-title>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\gallary\gallary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], GallaryPage);
    return GallaryPage;
}());

//# sourceMappingURL=gallary.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friend__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_ParamService__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(param) {
        this.param = param;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__friends_friend__["a" /* FriendsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Friends" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_ParamService__["a" /* ParamsService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_userService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_ParamService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var LoginPage = (function () {
    function LoginPage(facebook, failMsgCtrl, afAuth, nav, forgotCtrl, menu, userServ, platform, loadingCtrl, param, toastCtrl) {
        this.facebook = facebook;
        this.failMsgCtrl = failMsgCtrl;
        this.afAuth = afAuth;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.userServ = userServ;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.param = param;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.info = {};
        this.menu.swipeEnable(false);
    }
    // login with facebook and go to home page
    LoginPage.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result_1, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.facebook.login(['email', 'public_profile']).then(function (res) {
                                var facebookCredential = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                                var facenbookInfo = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().signInWithCredential(facebookCredential);
                                console.log(facenbookInfo);
                                if (result_1) {
                                    _this.getFacebookLoggedInUser();
                                    _this.storeLoggedInUser(_this.user.email);
                                }
                            })];
                    case 1:
                        result_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider())];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            this.getFacebookLoggedInUser();
                            this.storeLoggedInUser(this.user.email);
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.presentFailMsg(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // login with email and go to home page
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Login: ');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.storeLoggedInUser(user.email);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        this.presentFailMsg(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getFacebookLoggedInUser = function () {
        var user = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser;
        if (user != null) {
            var profileInfo = {};
            user.providerData.forEach(function (profile) {
                profileInfo = profile;
            });
            this.info = user;
            this.transformUserData(this.info, profileInfo.uid);
        }
    };
    LoginPage.prototype.transformUserData = function (infoUI, uid) {
        console.log('uid::::::--- ' + uid);
        this.user.displayName = infoUI.displayName;
        this.user.email = infoUI.email;
        this.user.photoURL = infoUI.photoURL;
        this.user.phoneNumber = infoUI.phoneNumber;
        this.user.providerId = infoUI.providerId;
        this.user.uid = uid;
        this.param.setFullPhoto("https://graph.facebook.com/" + uid + "/picture?width=1024&height=1024");
        // this.user.fullPhoto = "https://graph.facebook.com/" + uid + "/picture?width=1024&height=1024";
    };
    LoginPage.prototype.storeLoggedInUser = function (email) {
        var _this = this;
        console.log('storeLoggedInUser:: ' + email);
        this.userServ.getUserByEmail(email).subscribe(function (data) {
            if (data) {
                _this.user = data;
                _this.param.setLoggedInUser(_this.user);
            }
            else {
                console.log("User with email '" + email + "' not found, returning to list");
            }
        });
        this.presentLoadingDefault();
    };
    LoginPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Hello'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, 5000);
    };
    // go to register page
    LoginPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        var auth = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]();
                        var userEmail = data.email;
                        console.log("---------- userEmail" + userEmail);
                        auth.sendPasswordResetEmail(userEmail).then(function () {
                            console.log("email sent");
                            console.log('Send clicked');
                            var toast = this.toastCtrl.create({
                                message: 'Email was sended successfully',
                                duration: 3000,
                                position: 'top',
                                cssClass: 'dark-trans',
                                closeButtonText: 'OK',
                                showCloseButton: true
                            });
                            toast.present();
                        }).catch(function (error) { return _this.presentFailMsg(error); });
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.presentFailMsg = function (msg) {
        var alert = this.failMsgCtrl.create({
            title: 'Email Not Found',
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page" item-height="200" item-width="100">\n  <div class="login-content" style="width: 290px;">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n      </h2>\n    </div>\n    <!-- Login form -->\n    <div>\n      <button ion-button icon-only block color="blue" style="text-transform: none;" (click)="facebookLogin()">\n        <ion-icon name="logo-facebook"></ion-icon>Log in with Faceboook\n      </button>\n\n    </div>\n    <div>\n      <form class="list-form">\n        <ion-item>\n          <ion-label floating >\n            <!-- <ion-icon name="mail" item-start class="text-primary"></ion-icon>-->\n            Email\n          </ion-label>\n          <ion-input  type="text" [(ngModel)]="user.email" [ngModelOptions]="{standalone: true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>\n            <!-- <ion-icon name="lock" item-start class="text-primary" ></ion-icon>-->\n            Password\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="user.password" [ngModelOptions]="{standalone: true}"></ion-input>\n        </ion-item>\n      </form>\n    </div>\n\n    <!--<p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>-->\n\n    <div>\n      <button ion-button icon-start block color="blue" style="text-transform: none; height: 30px;" tappable (click)="login(user)">\n        <ion-icon name="log-in"></ion-icon>\n        Log in\n      </button>\n    </div>\n    <div text-center margin-top>\n\n      <span ion-text color="dark" tappable (click)="forgotPass()">Forgot password?\n      </span>\n\n    </div>\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="dark" tappable (click)="register()">Don\'t have an account?\n        <strong>Sign up</strong>\n      </span>\n    </div>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\InSpace\CRM\CRM-mobile-application\CRM-mobile-application\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__api_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__api_userService__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__api_ParamService__["a" /* ParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__api_ParamService__["a" /* ParamsService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _l || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map