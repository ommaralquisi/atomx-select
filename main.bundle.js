webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiMock/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 0, name: 'Pena Gibson' },
            { id: 1, name: 'Geneva Henderson' },
            { id: 2, name: 'Graciela Burt' },
            { id: 3, name: 'Schultz Hancock' },
            { id: 4, name: 'Fletcher Terrell' },
            { id: 5, name: 'Tessa Wallace' },
            { id: 6, name: 'Kristie Stokes' },
            { id: 7, name: 'Lewis Wong' },
            { id: 8, name: 'Annmarie Salas' },
            { id: 9, name: 'Gamble Lambert' },
            { id: 10, name: 'Vazquez English' },
            { id: 11, name: 'Welch Ramirez' },
            { id: 12, name: 'Myrtle Kirkland' },
            { id: 13, name: 'Mosley Wiley' },
            { id: 14, name: 'Cooke Ray' },
            { id: 15, name: 'Corina Conley' },
            { id: 16, name: 'Gladys Monroe' },
            { id: 17, name: 'Keith Wise' },
            { id: 18, name: 'Marcy Ayala' },
            { id: 19, name: 'Duncan Alexander' },
            { id: 20, name: 'Carroll Caldwell' },
            { id: 21, name: 'Susanne Perry' },
            { id: 22, name: 'Ruby Welch' },
            { id: 23, name: 'Garrison Boyle' },
            { id: 24, name: 'Robbie Tillman' },
            { id: 25, name: 'Fowler Roth' },
            { id: 26, name: 'Clayton Kinney' },
            { id: 27, name: 'York Johnson' },
            { id: 28, name: 'Daugherty Cooper' },
            { id: 29, name: 'Kendra Stone' },
            { id: 30, name: 'Cohen Rocha' },
            { id: 31, name: 'Tara Norris' },
            { id: 32, name: 'Harper Carr' },
            { id: 33, name: 'Mcknight King' },
            { id: 34, name: 'Berry Mcmahon' },
            { id: 35, name: 'Ruth Pitts' },
            { id: 36, name: 'Houston Phillips' },
            { id: 37, name: 'Crosby Summers' },
            { id: 38, name: 'Woods Travis' },
            { id: 39, name: 'Ebony Chase' },
            { id: 40, name: 'Randi Estes' },
            { id: 41, name: 'Genevieve Reeves' },
            { id: 42, name: 'Christy Estrada' },
            { id: 43, name: 'Wilma Oconnor' },
            { id: 44, name: 'Pauline Walker' },
            { id: 45, name: 'Julianne Calderon' },
            { id: 46, name: 'Nola Gregory' },
            { id: 47, name: 'Macdonald Sawyer' },
            { id: 48, name: 'Latonya Cain' },
            { id: 49, name: 'Catherine Dotson' }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\n  <div class=\"container\">\n    <h3 class=\"display-4\">atomx-select</h3>\n    <p>\n      <small>Angular library aim to replace ui select library for angularJs</small>\n    </p>\n    <a href=\"https://github.com/ommaralquisi/atomx-select\" class=\"btn btn-light\" role=\"button\" aria-disabled=\"true\">View on GitHub</a>\n  </div>\n</article>\n\n<div class=\"container\">\n\n  <h2>\n    <small class=\"text-muted\">Demo with static data</small>\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <atomx-select propertyName=\"name\" (pasteHandler)=\"onPast($event)\" [popupOption]=\"true\" [dataService]=\"names\">\n\n          </atomx-select>\n          {{selectedNames | json}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <div>\n    <tabset>\n      <tab heading=\"Markup\" id=\"tab1\"><pre>\n            <code class=\"language-markup\">\n&lt;atomx-select propertyName=\"name\"\n              (pasteHandler)=\"onPast($event)\"\n              [popupOption]=\"true\"\n              [dataService]=\"names\"&gt;\n&lt;/atomx-select&gt;\n          </code></pre>\n      </tab>\n      <tab heading=\"Typescript\"><pre>\n            <code class=\"lang-typescript\">\nimport &#123;Component, OnInit &#125; from '@angular/core';\nimport &#123;DataService&#125; from 'atomx-select';\n\n@Component(&#123;\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n&#125;)\nexport class AppComponent implements OnInit &#123;\nnames: DataService;\nnamesList = [\n    &#123;id: 1, name: 'firstName'&#125;,\n    &#123;id: 2, name: 'secondName'&#125;,\n    &#123;id: 3, name: 'address'&#125;,\n    &#123;id: 4, name: 'street'&#125;,\n    &#123;id: 5, name: 'city'&#125;,\n    &#123;id: 6, name: 'zip code'&#125;,\n    &#123;id: 7, name: 'code'&#125;\n  ];\nselectedNames = [\n    &#123;id: 5, name: 'city'&#125;,\n    &#123;id: 6, name: 'zip code'&#125;\n  ];\n\nconstructor() &#123;\n  this.names = new DataService();\n&#125;\n\nngOnInit() &#123;\n    this.names.setItems$(this.namesList);\n    this.names.setSelected$(this.selectedNames);\n    this.names.selected$.subscribe(selected => &#123;\n      this.selectedNames = [...selected];\n    &#125;);\n&#125;\n\nonPast(event) &#123;\n    console.log(event);\n&#125;\n            </code>\n\n          </pre>\n      </tab>\n    </tabset>\n  </div>\n\n  <h2>\n    <small class=\"text-muted\">Demo with dynamic data</small>\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <atomx-select\n            propertyName=\"name\"\n            [popupOption]=\"true\"\n            copyProperty=\"id\"\n            [loading]=\"loading\"\n            [fetch]=\"true\"\n            [dataService]=\"usersData\"\n            (search)=\"onSearch($event)\"\n          ></atomx-select>\n          {{selected | json}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <div>\n    <tabset>\n      <tab heading=\"Markup\" id=\"tab2\"><pre>\n            <code class=\"language-markup\">\n&lt;atomx-select\n            propertyName=\"name\"\n            [popupOption]=\"true\"\n            copyProperty=\"id\"\n            [loading]=\"loading\"\n            [fetch]=\"true\"\n            [dataService]=\"usersData\"\n            (search)=\"onSearch($event)\" &gt;\n&lt;/atomx-select&gt;\n          </code></pre>\n      </tab>\n      <tab heading=\"Typescript\"><pre>\n            <code class=\"lang-typescript\">\nimport &#123;Component, OnInit &#125; from '@angular/core';\nimport &#123;DataService&#125; from 'atomx-select';\nimport &#123;HttpClient&#125; from '@angular/common/http';\n\n\n@Component(&#123;\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n&#125;)\nexport class AppComponent implements OnInit &#123;\nloading: boolean = false;\nusersData: DataService;\nselected = [\n    &#123;id: 46, name: 'Nola Gregory'&#123;,\n    &#123;id: 47, name: 'Macdonald Sawyer'&#123;,\n    &#123;id: 48, name: 'Latonya Cain'&#123;,\n    &#123;id: 49, name: 'Catherine Dotson'&#123;\n  ];\nconstructor(private http: HttpClient) &#123;\n  this.usersData = new DataService();\n&#125;\n\nngOnInit() &#123;\n    this.usersData.setSelected$(this.selectedNames);\n    this.usersData.selected$.subscribe(selected => &#123;\n      this.selected = [...selected];\n    &#125;);\n&#125;\n\nonPast(event) &#123;\n    console.log(event);\n&#125;\nonSearch(event) &#123;\n    this.loading = true;\n    this.http.get(`api/users?name=$&#123;event&#125;`).subscribe(result => &#123;\n      this.usersData.setItems$(result);\n      this.loading = false;\n   &#125;);\n &#125;\n            </code>\n\n          </pre>\n      </tab>\n    </tabset>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "article {\n  display: block;\n  padding: 15px 20px;\n  font-weight: 700;\n  color: #fff;\n  text-align: center;\n  background-color: #0275d8; }\n\n/*\n\nName:       Base16 Summerfruit Light\nAuthor:     Christopher Corley (http://cscorley.github.io/)\n\nPrism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)\nOriginal Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  font-family: Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace;\n  font-size: 14px;\n  line-height: 1.375;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  background: #FFFFFF;\n  color: #303030; }\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #E0E0E0; }\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n  text-shadow: none;\n  background: #E0E0E0; }\n\n/* Code blocks */\n\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto; }\n\n/* Inline code */\n\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em; }\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #B0B0B0; }\n\n.token.punctuation {\n  color: #303030; }\n\n.token.namespace {\n  opacity: .7; }\n\n.token.operator,\n.token.boolean,\n.token.number {\n  color: #FD8900; }\n\n.token.property {\n  color: #ABA800; }\n\n.token.tag {\n  color: #3777E6; }\n\n.token.string {\n  color: #1faaaa; }\n\n.token.selector {\n  color: #AD00A1; }\n\n.token.attr-name {\n  color: #FD8900; }\n\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #1faaaa; }\n\n.token.attr-value,\n.token.keyword,\n.token.control,\n.token.directive,\n.token.unit {\n  color: #00C918; }\n\n.token.statement,\n.token.regex,\n.token.atrule {\n  color: #1faaaa; }\n\n.token.placeholder,\n.token.variable {\n  color: #3777E6; }\n\n.token.deleted {\n  text-decoration: line-through; }\n\n.token.inserted {\n  border-bottom: 1px dotted #151515;\n  text-decoration: none; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.important,\n.token.bold {\n  font-weight: bold; }\n\n.token.important {\n  color: #FF0086; }\n\n.token.entity {\n  cursor: help; }\n\npre > code.highlight {\n  outline: 0.4em solid #FF0086;\n  outline-offset: .4em; }\n\n.line-numbers .line-numbers-rows {\n  border-right-color: #E0E0E0 !important; }\n\n.line-numbers-rows > span:before {\n  color: #D0D0D0 !important; }\n\n.line-highlight {\n  background: rgba(21, 21, 21, 0.2) !important;\n  background: -webkit-gradient(linear, left top, right top, color-stop(70%, rgba(21, 21, 21, 0.2)), to(rgba(21, 21, 21, 0))) !important;\n  background: linear-gradient(to right, rgba(21, 21, 21, 0.2) 70%, rgba(21, 21, 21, 0)) !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs__ = __webpack_require__("./node_modules/prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript__ = __webpack_require__("./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markup__ = __webpack_require__("./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_atomx_select__ = __webpack_require__("./node_modules/atomx-select/esm5/atomx-select.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.highlighted = false;
        this.loading = false;
        this.users = [
            { id: 0, name: 'Pena Gibson' },
            { id: 1, name: 'Geneva Henderson' },
            { id: 2, name: 'Graciela Burt' },
            { id: 3, name: 'Schultz Hancock' },
            { id: 4, name: 'Fletcher Terrell' },
            { id: 5, name: 'Tessa Wallace' },
            { id: 6, name: 'Kristie Stokes' },
            { id: 7, name: 'Lewis Wong' },
            { id: 8, name: 'Annmarie Salas' },
            { id: 9, name: 'Gamble Lambert' },
            { id: 10, name: 'Vazquez English' },
            { id: 11, name: 'Welch Ramirez' },
            { id: 12, name: 'Myrtle Kirkland' },
            { id: 13, name: 'Mosley Wiley' },
            { id: 14, name: 'Cooke Ray' },
            { id: 15, name: 'Corina Conley' },
            { id: 16, name: 'Gladys Monroe' },
            { id: 17, name: 'Keith Wise' },
            { id: 18, name: 'Marcy Ayala' },
            { id: 19, name: 'Duncan Alexander' },
            { id: 20, name: 'Carroll Caldwell' },
            { id: 21, name: 'Susanne Perry' },
            { id: 22, name: 'Ruby Welch' },
            { id: 23, name: 'Garrison Boyle' },
            { id: 24, name: 'Robbie Tillman' },
            { id: 25, name: 'Fowler Roth' },
            { id: 26, name: 'Clayton Kinney' },
            { id: 27, name: 'York Johnson' },
            { id: 28, name: 'Daugherty Cooper' },
            { id: 29, name: 'Kendra Stone' },
            { id: 30, name: 'Cohen Rocha' },
            { id: 31, name: 'Tara Norris' },
            { id: 32, name: 'Harper Carr' },
            { id: 33, name: 'Mcknight King' },
            { id: 34, name: 'Berry Mcmahon' },
            { id: 35, name: 'Ruth Pitts' },
            { id: 36, name: 'Houston Phillips' },
            { id: 37, name: 'Crosby Summers' },
            { id: 38, name: 'Woods Travis' },
            { id: 39, name: 'Ebony Chase' },
            { id: 40, name: 'Randi Estes' },
            { id: 41, name: 'Genevieve Reeves' },
            { id: 42, name: 'Christy Estrada' },
            { id: 43, name: 'Wilma Oconnor' },
            { id: 44, name: 'Pauline Walker' },
            { id: 45, name: 'Julianne Calderon' },
            { id: 46, name: 'Nola Gregory' },
            { id: 47, name: 'Macdonald Sawyer' },
            { id: 48, name: 'Latonya Cain' },
            { id: 49, name: 'Catherine Dotson' }
        ];
        this.selected = [{ id: 46, name: 'Nola Gregory' },
            { id: 47, name: 'Macdonald Sawyer' },
            { id: 48, name: 'Latonya Cain' },
            { id: 49, name: 'Catherine Dotson' }
        ];
        this.namesList = [
            { id: 1, name: 'firstName' },
            { id: 2, name: 'secondName' },
            { id: 3, name: 'address' },
            { id: 4, name: 'street' },
            { id: 5, name: 'city' },
            { id: 6, name: 'zip code' },
            { id: 7, name: 'code' }
        ];
        this.selectedNames = [{ id: 5, name: 'city' }, { id: 6, name: 'zip code' }];
        this.usersData = new __WEBPACK_IMPORTED_MODULE_5_atomx_select__["b" /* DataService */]();
        this.names = new __WEBPACK_IMPORTED_MODULE_5_atomx_select__["b" /* DataService */]();
        this.http.get('api/users/?name=Ayala').subscribe(function (heroes) { return console.log(heroes); });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersData.setItems$(this.users);
        this.usersData.setSelected$(this.selected);
        this.usersData.selected$.subscribe(function (selected) {
            _this.selected = selected.slice();
        });
        this.names.setItems$(this.namesList);
        this.names.setSelected$(this.selectedNames);
        this.names.selected$.subscribe(function (selected) {
            _this.selectedNames = selected.slice();
        });
    };
    AppComponent.prototype.onPast = function (event) {
        console.log(event);
    };
    AppComponent.prototype.onSearch = function (event) {
        var _this = this;
        console.log(event);
        if (event.length <= 3) {
            return;
        }
        this.loading = true;
        this.http.get("api/users?name=" + event).subscribe(function (result) {
            _this.usersData.setItems$(result);
            _this.loading = false;
        });
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            Prism.highlightAll();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiMock_in_memory_data_service__ = __webpack_require__("./src/app/apiMock/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_atomx_select__ = __webpack_require__("./node_modules/atomx-select/esm5/atomx-select.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_atomx_select__["a" /* AtomxSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__apiMock_in_memory_data_service__["a" /* InMemoryDataService */]),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* TabsModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map