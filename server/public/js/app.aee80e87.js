(function(t){function e(e){for(var i,o,n=e[0],l=e[1],c=e[2],u=0,d=[];u<n.length;u++)o=n[u],a[o]&&d.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var h=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0986":function(t,e,s){"use strict";var i=s("a809"),a=s.n(i);a.a},2396:function(t,e,s){"use strict";var i=s("d286"),a=s.n(i);a.a},"366a":function(t,e,s){},3804:function(t,e,s){"use strict";var i=s("6992"),a=s.n(i);a.a},"402c":function(t,e,s){"use strict";var i=s("366a"),a=s.n(i);a.a},"4eae":function(t,e,s){},5262:function(t,e,s){"use strict";var i=s("c0c9"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),a=(s("15f5"),s("6597"),s("db4d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-component"),s("router-view"),s("footer-component"),s("login-modal-component"),s("registration-modal-component")],1)}),r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:{path:"/",name:"homepage-component"}}},[s("h1",{staticClass:"title is-3 is-flex-mobile"})]),s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.isMenuOpen=!t.isMenuOpen}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuOpen,expression:"isMenuOpen"}],staticClass:"navbar-end"},[s("menu-component")],1),s("div",{staticClass:"navbar-end is-hidden-mobile"},[s("menu-component")],1)])])},n=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"navbar-end"},[t.isUserLoggedIn?s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"navbar-item",on:{click:t.likedshop}},[t._m(0),t._v(" "+t._s(t.likedshopLabel)+"\n      ")]),s("a",{staticClass:"navbar-item",on:{click:t.Nearbyshop}},[t._m(1),t._v(" "+t._s(t.nearbyshopLabel)+"\n      ")]),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v("Welcome "+t._s(t.getUserName))]),s("div",{staticClass:"navbar-dropdown is-boxed"},[s("hr",{staticClass:"navbar-divider"}),s("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v(t._s(t.logoutLabel))])])])]):t._e(),s("div",{staticClass:"navbar-item"},[s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control"},[t.isUserLoggedIn?t._e():s("a",{staticClass:"button",on:{click:t.showSignupModal}},[t._m(2),s("span",[t._v(t._s(t.signupLabel))])])]),s("p",{staticClass:"control"},[t.isUserLoggedIn?t._e():s("a",{staticClass:"button",on:{click:t.showLoginModal}},[t._m(3),s("span",[t._v(t._s(t.loginLabel))])])])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-heart"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-globe"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-user"})])}],h={name:"menu-component",data:function(){return{logoutLabel:"Log out",loginLabel:"Log in",signupLabel:"Sign up",likedshopLabel:"Liked shop",nearbyshopLabel:"Nearby shop"}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},getUserName:function(){var t=this.$store.getters.getUserName;return t}},methods:{likedshop:function(){var t=this.$store.getters.getUserId;this.$store.state.userInfo.isLoggedIn?this.$store.dispatch("loadLikedShops",t):this.$store.commit("showLoginModal",!0)},Nearbyshop:function(){var t=this.$store.getters.getUserId;this.$store.state.userInfo.isLoggedIn?this.$store.dispatch("loadNearShopUser",t):this.$store.commit("showLoginModal",!0)},logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$store.dispatch("loadNearShop"),t.$router.push({name:"homepage-component"})})},showLoginModal:function(){this.$store.commit("showLoginModal",!0)},showSignupModal:function(){this.$store.commit("showSignupModal",!0)}}},u=h,d=s("2877"),p=Object(d["a"])(u,l,c,!1,null,null,null);p.options.__file="Menu.vue";var m=p.exports,g={name:"header-component",data:function(){return{isMenuOpen:!1}},computed:{},components:{"menu-component":m},methods:{}},f=g,v=(s("8e52"),Object(d["a"])(f,o,n,!1,null,"f34061a8",null));v.options.__file="Header.vue";var _=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"columns container"},[s("div",{staticClass:"column"},[s("p",[t._v("A single web page with Vue js, Express js and MongoDB to look for nearby shops.")])]),s("div",{staticClass:"column has-text-right"},[s("p",[t._v("VueTheShops | Made with ❤ by kaola")])])])])}],E={name:"footer-component"},C=E,L=(s("3804"),Object(d["a"])(C,b,w,!1,null,"194a3f58",null));L.options.__file="Footer.vue";var S=L.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:[t.openModal?"is-active":"","modal"]},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[t.isUserLoggedIn?t._e():s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitle))]),t.isUserLoggedIn?s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitleLoggedIn))]):t._e(),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),s("form",{attrs:{action:"#",method:"post"},on:{submit:t.checkForm}},[s("section",{staticClass:"modal-card-body"},[t.isUserLoggedIn?t._e():s("div",[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:[t.highlightEmailWithError?"input is-danger":"input"],attrs:{type:"email",placeholder:t.emailPlaceholder,name:"emailName",required:""},domProps:{value:t.email},on:{keyup:function(e){t.checkEmailOnKeyUp(t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0),null!==t.highlightEmailWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightEmailWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightEmailWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.emailRequiredLabel))]):t._e()]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:[t.highlightPasswordWithError?"input is-danger":"input"],attrs:{type:"password",placeholder:"Your password",name:"passwordName",required:""},domProps:{value:t.password},on:{keyup:function(e){t.checkPasswordOnKeyUp(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1),null!==t.highlightPasswordWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightPasswordWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightPasswordWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.passwordRequiredLabel))]):t._e()])]),t.isUserLoggedIn?s("div",{staticClass:"level"},[t._m(2)]):t._e()]),s("footer",{staticClass:"modal-card-foot"},[t.isUserLoggedIn?t._e():s("button",{staticClass:"button is-info",attrs:{type:"submit"}},[t._v(t._s(t.primaryBtnLabel))]),t.isUserLoggedIn?s("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:t.closeModal}},[t._v(t._s(t.btnLoggedInLabel))]):t._e()])])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"title"},[t._v("Welcome back!")]),s("p",{staticClass:"heading"},[t._v("Now you are logged in")])])])}];s("6762"),s("2fdb");function P(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}var U={name:"login-component",data:function(){return{modalTitle:"Log in",modalTitleLoggedIn:"Welcome!",primaryBtnLabel:"Log in",emailRequiredLabel:"Email required",passwordRequiredLabel:"Password required",emailNotValidLabel:"Valid email required",btnLoggedInLabel:"Close",emailPlaceholder:"Your email",email:"",password:"",highlightEmailWithError:null,highlightPasswordWithError:null,isFormSuccess:!1,error:""}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},openModal:function(){return!!this.$store.getters.isLoginModalOpen}},methods:{closeModal:function(){this.$store.commit("showLoginModal",!1)},checkForm:function(t){var e=this;t.preventDefault();var s=this.email,i=this.password;s&&i&&this.$store.dispatch("login",{email:s,password:i}).then(function(){if(""!==e.$store.getters.geterror)e.error.includes("Email")&&(e.highlightEmailWithError=!0,e.emailRequiredLabel=e.$store.getters.geterror),e.error.includes("pass")&&(e.highlightPasswordWithError=!0,e.passwordRequiredLabel=e.$store.getters.geterror);else{var t=e.$store.getters.getUserId;e.$router.push("/"),e.$store.dispatch("loadNearShopUser",t),e.$store.commit("isUserLoggedIn",!0)}})},checkEmailOnKeyUp:function(t){t&&P(t)?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,P(t)||(this.emailRequiredLabel=this.emailNotValidLabel))},checkPasswordOnKeyUp:function(t){this.highlightPasswordWithError=!t}}},$=U,W=(s("2396"),Object(d["a"])($,k,y,!1,null,null,null));W.options.__file="Login.vue";var F=W.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:[t.openModal?"is-active":"","modal"]},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[t.isUserSignedUp?t._e():s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitle))]),t.isUserSignedUp?s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitleRegistered))]):t._e(),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),s("form",{attrs:{action:"#",method:"post"},on:{submit:t.checkForm}},[s("section",{staticClass:"modal-card-body"},[t.isUserSignedUp?t._e():s("div",[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Firstname,expression:"Firstname"}],class:[t.highlightFirstNameWithError?"input is-danger":"input"],attrs:{type:"text",placeholder:t.FirstnamePlaceholder},domProps:{value:t.Firstname},on:{keyup:function(e){t.checkFirstNameOnKeyUp(t.Firstname)},input:function(e){e.target.composing||(t.Firstname=e.target.value)}}}),t._m(0),null!==t.highlightFirstNameWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightFirstNameWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightFirstNameWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.FirstnameErrorLabel))]):t._e()]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Lastname,expression:"Lastname"}],class:[t.highlightLastNameWithError?"input is-danger":"input"],attrs:{type:"text",placeholder:t.LastnamePlaceholder},domProps:{value:t.Lastname},on:{keyup:function(e){t.checkLastNameOnKeyUp(t.Lastname)},input:function(e){e.target.composing||(t.Lastname=e.target.value)}}}),t._m(1),null!==t.highlightLastNameWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightLastNameWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightLastNameWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.LastnameErrorLabel))]):t._e()]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:[t.highlightEmailWithError?"input is-danger":"input"],attrs:{type:"email",placeholder:t.emailPlaceholder,name:"emailName"},domProps:{value:t.email},on:{keyup:function(e){t.checkEmailOnKeyUp(t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2),null!==t.highlightEmailWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightEmailWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightEmailWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.emailErrorLabel))]):t._e()]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:[t.highlightPasswordWithError?"input is-danger":"input"],attrs:{type:"password",placeholder:t.passwordPlaceholder},domProps:{value:t.password},on:{keyup:function(e){t.checkPasswordOnKeyUp(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3),null!==t.highlightPasswordWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightPasswordWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightPasswordWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.passwordErrorLabel))]):t._e()]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],class:[t.highlightRepeatPasswordWithError?"input is-danger":"input"],attrs:{type:"password",placeholder:t.repeatPasswordPlaceholder},domProps:{value:t.repeatPassword},on:{keyup:function(e){t.checkRepeatPasswordOnKeyUp(t.repeatPassword)},input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}}),t._m(4),null!==t.highlightRepeatPasswordWithError?s("span",{staticClass:"icon is-small is-right"},[s("i",{class:[t.highlightRepeatPasswordWithError?"fas fa-exclamation-circle":"fas fa-check"]})]):t._e()]),t.highlightRepeatPasswordWithError?s("p",{staticClass:"help is-danger"},[t._v(t._s(t.notEqualErrorLabel))]):t._e()])]),t.isUserSignedUp?s("div",{staticClass:"level"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"title"},[t._v("Welcome "+t._s(t.Firstname)+"!")]),s("p",{staticClass:"heading"},[t._v("Now you are a member, please login")])])])]):t._e()]),s("footer",{staticClass:"modal-card-foot"},[t.isUserSignedUp?t._e():s("button",{staticClass:"button is-success"},[t._v(t._s(t.primaryBtnLabel))]),t.isUserSignedUp?s("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:t.closeModal}},[t._v(t._s(t.btnRegisteredLabel))]):t._e()])])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])}],x={name:"registration-component",data:function(){return{modalTitle:"Sign up",modalTitleRegistered:"Welcome ",primaryBtnLabel:"Sign up",btnRegisteredLabel:"Close",FirstnamePlaceholder:"FirstName*",LastnamePlaceholder:"LastName*",emailPlaceholder:"Email*",passwordPlaceholder:"Password*",repeatPasswordPlaceholder:"Repeat Password*",notEqualErrorLabel:"Passwords must be equal",passwordErrorLabel:"Password required",FirstnameErrorLabel:"FirstName required",LastnameErrorLabel:"LastName required",emailErrorLabel:"Email required",emailNotValidLabel:"Valid email required",Firstname:"",Lastname:"",email:"",password:"",repeatPassword:"",highlightFirstNameWithError:null,highlightLastNameWithError:null,highlightEmailWithError:null,highlightPasswordWithError:null,highlightRepeatPasswordWithError:null,isFormSuccess:!1}},computed:{isUserSignedUp:function(){return this.$store.getters.isUserSignedUp},openModal:function(){return!!this.$store.getters.isSignupModalOpen}},methods:{closeModal:function(){this.$store.commit("showSignupModal",!1)},checkForm:function(t){var e=this;t.preventDefault(),this.highlightEmailWithError=!1,this.highlightPasswordWithError=!1;var s=this.email,i=this.password,a=this.Firstname,r=this.Lastname;this.Firstname&&this.Lastname&&this.email&&this.password&&this.repeatPassword&&this.$store.dispatch("register",{email:s,password:i,Firstname:a,Lastname:r}).then(function(){e.error=e.$store.getters.geterror,""!==e.error?(e.error.includes("Email")&&(e.highlightEmailWithError=!0,e.emailRequiredLabel=e.$store.getters.geterror),e.error.includes("pass")&&(e.highlightPasswordWithError=!0,e.passwordRequiredLabel=e.$store.getters.geterror)):(e.$router.push("/"),e.isFormSuccess=!0,Emptyfields())}).catch(function(t){return e.error=t}),this.Firstname?this.highlightFirstNameWithError=!1:this.highlightFirstNameWithError=!0,this.Lastname?this.highlightLastNameWithError=!1:this.highlightLastNameWithError=!0,this.email?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,this.email&&!P(this.email)&&(this.emailErrorLabel=this.emailNotValidLabel)),this.password?this.highlightPasswordWithError=!1:this.highlightPasswordWithError=!0,this.repeatPassword?this.highlightRepeatPasswordWithError=!1:this.highlightRepeatPasswordWithError=!0},checkFirstNameOnKeyUp:function(t){this.highlightNameWithError=!t},checkLastNameOnKeyUp:function(t){this.highlightNameWithError=!t},checkEmailOnKeyUp:function(t){t&&P(t)?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,P(t)||(this.emailErrorLabel=this.emailNotValidLabel))},checkPasswordOnKeyUp:function(t){t?(this.highlightPasswordWithError=!1,this.repeatPassword===this.password?this.highlightRepeatPasswordWithError=!1:this.highlightRepeatPasswordWithError=!0):this.highlightPasswordWithError=!0},checkRepeatPasswordOnKeyUp:function(t){t&&t===this.password?this.highlightRepeatPasswordWithError=!1:this.highlightRepeatPasswordWithError=!0},Emptyfields:function(){this.Firstname,this.Lastname,this.email,this.password,this.repeatPassword}}},O=x,M=(s("0986"),Object(d["a"])(O,N,I,!1,null,"6d396ef6",null));M.options.__file="Registration.vue";var R=M.exports,j={name:"app",components:{"header-component":_,"footer-component":S,"login-modal-component":F,"registration-modal-component":R}},q=j,T=(s("5262"),Object(d["a"])(q,a,r,!1,null,null,null));T.options.__file="App.vue";var K=T.exports,V=s("8c4f"),H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("hero"),s("Shops-list-container")],1)},A=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-centered is-multiline"},[t._l(t.shops,function(t){return s("div",{key:t._id,staticClass:"card column is-one-quarter"},[s("Shops-component",{attrs:{shop:t}})],1)}),0===t.shops.length?s("div",{staticClass:"section"},[s("p",[t._v(t._s(t.noShopLabel))])]):t._e()],2)},D=[],z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:t.shop.picture,alt:"Placeholder image"}})])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.shop.name))])])]),s("div",{staticClass:"content is-clearfix"},[s("p",[t._v(t._s(t.shop.email))]),s("p",{staticClass:"is-pulled-right"},[s("span",{staticClass:"title is-4"},[s("strong",[t._v(t._s(t.shop.city))])])]),s("p",[t._v("\n        "+t._s(t.getadress(t.shop.location.coordinates[0],t.shop.location.coordinates[1]))+"\n        "+t._s(t.Shopadresse)+"\n      ")])]),s("div",{staticClass:"card-footer btn-actions"},[s("div",{staticClass:"card-footer-item field is-grouped"},[s("div",{staticClass:"buttons"},[t.LikedShopsVue()?t._e():s("div",[s("button",{staticClass:"button is-small",attrs:{title:t.dislikeShopLabel},on:{click:function(e){t.dislikeShop(t.shop._id)}}},[t._m(0)]),s("button",{staticClass:"button is-small btn-right",attrs:{title:t.addToFavouriteLabel},on:{click:function(e){t.saveToFavorite(t.shop._id)}}},[t._m(1)])]),t.LikedShopsVue()?s("div",[s("button",{staticClass:"button is-primary",on:{click:function(e){t.removeFromFavorite(t.shop._id)}}},[t._v(t._s(t.removeFromFavouriteLabel))])]):t._e()])])])])])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-heart"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"far fa-heart"})])}],Q=s("bc3a"),Y=s.n(Q),Z=s("a7fe"),G=s.n(Z);i["a"].use(G.a,Y.a);var X={name:"Shops-component",props:["shop"],data:function(){return{viewDetailsLabel:"Details",dislikeShopLabel:"Dislike a shop",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favorite",selected:1,quantityArray:[],Shopadresse:""}},mounted:function(){},computed:{},methods:{LikedShopsVue:function(){return!!this.$store.getters.islikedshopspage},getadress:function(t,e){var s=this,i="AIzaSyDt2EcehfMjQFOrtH6BaMWtRs0glx4SrRQ",a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+i;Y.a.get(a).then(function(t){s.Shopadresse=t.data.results[0].formatted_address})},saveToFavorite:function(t){var e=this.$store.state.userInfo.isLoggedIn,s=this.$store.getters.getUserId;e?(this.$store.dispatch("addToFavourite",{shopid:t,userid:s}),this.$store.dispatch("loadNearShopUser",s)):this.$store.commit("showLoginModal",!0)},removeFromFavorite:function(t){var e=this.$store.state.userInfo.isLoggedIn,s=this.$store.getters.getUserId;e?(this.$store.dispatch("removeFromFavorite",{shopid:t,userid:s}),this.$store.dispatch("loadLikedShops",s)):this.$store.commit("showLoginModal",!0)},dislikeShop:function(t){var e=this.$store.state.userInfo.isLoggedIn,s=this.$store.getters.getUserId;e?(this.$store.dispatch("dislikeShop",{shopid:t,userid:s}),this.$store.dispatch("loadNearShopUser",s)):this.$store.commit("showLoginModal",!0)}}},tt=X,et=(s("402c"),Object(d["a"])(tt,z,J,!1,null,"39210125",null));et.options.__file="Shops.vue";var st=et.exports,it=s("2f62"),at={name:"Shops-list-component",components:{"Shops-component":st},computed:Object(it["b"])(["shops"]),data:function(){return{error:"",text:"",id:"",noShopLabel:"No Shop found",ShopsFiltered:[]}},mounted:function(){this.$store.dispatch("loadNearShop")},methods:{}},rt=at,ot=(s("a5f9"),Object(d["a"])(rt,B,D,!1,null,"dbd09fa2",null));ot.options.__file="ShopsListContainer.vue";var nt=ot.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero is-medium is-bold"},[i("img",{attrs:{src:s("d1ec"),alt:""}}),i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("Vue the Shops")]),i("h2",{staticClass:"subtitle"},[t._v("A single web page with Vue js, Express js and MongoDB to look for nearby shops.")])])])])}],ht=(s("974b"),{}),ut=Object(d["a"])(ht,lt,ct,!1,null,"3f918cd9",null);ut.options.__file="Hero.vue";var dt=ut.exports,pt={name:"homepage-component",components:{"Shops-list-container":nt,hero:dt}},mt=pt,gt=Object(d["a"])(mt,H,A,!1,null,null,null);gt.options.__file="Homepage.vue";var ft=gt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Shops")]),s("hr"),t.error?s("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),s("div",{staticClass:"posts-container"},t._l(t.shops,function(e,i){return s("div",{key:e._id,staticClass:"post",attrs:{item:e,index:i}},[s("div",{staticClass:"text"},[t._v(t._s(e.name))]),s("div",{staticClass:"text"},[t._v(t._s(e.city))]),s("div",{staticClass:"text"},[t._v(t._s(e.email))])])}),0)])},_t=[],bt=(s("96cf"),s("3b8d")),wt=s("cebc"),Et=s("795b"),Ct=s.n(Et),Lt=s("d225"),St=s("b0b4"),kt="http://localhost:2000/api/shops",yt=function(){function t(){Object(Lt["a"])(this,t)}return Object(St["a"])(t,null,[{key:"getShops",value:function(){return new Ct.a(function(){var t=Object(bt["a"])(regeneratorRuntime.mark(function t(e,s){var i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.a.get(kt);case 3:i=t.sent,a=i.data,e(a.data.map(function(t){return Object(wt["a"])({},t)})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),s(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,s){return t.apply(this,arguments)}}())}}]),t}(),Pt=yt,Ut={name:"ShopService",data:function(){return{shops:[],error:"",text:""}},created:function(){var t=Object(bt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Pt.getShops();case 3:this.shops=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}()},$t=Ut,Wt=(s("c04d"),Object(d["a"])($t,vt,_t,!1,null,"6b795e9c",null));Wt.options.__file="ShopComponent.vue";var Ft=Wt.exports;i["a"].use(V["a"]);var Nt=new V["a"]({mode:"history",routes:[{path:"/",name:"homepage-component",component:ft},{path:"/test",name:"Shops-component",component:Ft}]});s("ac6a"),s("7f7f"),s("7514");i["a"].use(it["a"]),i["a"].use(G.a,Y.a);var It="api/",xt=new it["a"].Store({state:{shops:[],error:"",msg:"",userInfo:{isLoggedIn:!1,isSignedUp:!1,hasSearched:!1,id:"",name:""},systemInfo:{showlikedshops:!1,openLoginModal:!1,openSignupModal:!1}},getters:{geterror:function(t){return t.error},getmsg:function(t){return t.msg},getshopById:function(t){return function(e){return t.shops.find(function(t){return t.id==e})}},isUserLoggedIn:function(t){return t.userInfo.isLoggedIn},isUserSignedUp:function(t){return t.userInfo.isSignedUp},getUserName:function(t){return t.userInfo.name},getUserId:function(t){return t.userInfo.id},isLoginModalOpen:function(t){return t.systemInfo.openLoginModal},isSignupModalOpen:function(t){return t.systemInfo.openSignupModal},islikedshopspage:function(t){return t.systemInfo.showlikedshops},quantity:function(t){return t.shops.quantity}},mutations:{SET_SHOPS:function(t,e){t.shops=e},addToFavourite:function(t,e){t.shops.forEach(function(t){e===t.id&&(t.isFavourite=!0)})},quantity:function(t,e){t.shops.forEach(function(t){e.id===t.id&&(t.quantity=e.quantity)})},removeFromFavourite:function(t,e){t.shops.forEach(function(t){e===t.id&&(t.isFavourite=!1)})},removeshopsFromFavourite:function(t){t.shops.filter(function(t){t.isFavourite=!1})},seterror:function(t,e){t.error=e},setmsg:function(t,e){t.msg=e},isUserLoggedIn:function(t,e){t.userInfo.isLoggedIn=e},isUserSignedUp:function(t,e){t.userInfo.isSignedUp=e},setUserName:function(t,e){t.userInfo.name=e},setUserId:function(t,e){t.userInfo.id=e},showLoginModal:function(t,e){t.systemInfo.openLoginModal=e},showlikedshops:function(t,e){t.systemInfo.showlikedshops=e},showSignupModal:function(t,e){t.systemInfo.openSignupModal=e}},actions:{register:function(t,e){var s=t.commit;return new Ct.a(function(t,i){Y()({url:It+"users/singup",data:e,method:"POST"}).then(function(e){if(console.log(e),e.data.err)s("seterror",e.data.err);else{var i=e.data.user;s("isUserSignedUp",!0),s("setUserName",i.FirstName)}t(e)}).catch(function(t){i(t)})})},login:function(t,e){var s=t.commit;return new Ct.a(function(t,i){Y()({url:It+"users/singin",data:e,method:"POST"}).then(function(e){if(console.log(e),e.data.err)s("seterror",e.data.err);else{var i=e.data.user;s("isUserLoggedIn",!0),s("setUserName",i.FirstName),s("setUserId",i._id)}t(e)}).catch(function(t){i(t)})})},logout:function(t){var e=t.commit;return new Ct.a(function(t){e("setUserName",""),e("setUserId",""),e("isUserSignedUp",!1),e("isUserLoggedIn",!1),t()})},loadShops:function(t){var e=t.commit,s=It+"shops";console.log(s),Y.a.get(s).then(function(t){return t.data}).then(function(t){return t.data}).then(function(t){e("SET_SHOPS",t)})},loadLikedShops:function(t,e){var s=t.commit,i=It+"users/liked?iduser="+e;console.log(i),Y.a.get(i).then(function(t){return t.data}).then(function(t){s("SET_SHOPS",t),s("showlikedshops",!0)})},loadNearShop:function(t){var e=t.commit;return new Ct.a(function(t,s){var i,a;navigator.geolocation.getCurrentPosition(function(t){a=t.coords.latitude,i=t.coords.longitude;var s=It+"shops/near?lat="+a+"&lng="+i;console.log(s),Y.a.get(s).then(function(t){return t.data}).then(function(t){return t.data}).then(function(t){e("SET_SHOPS",t),e("showlikedshops",!1)})},function(t){s(t)})})},loadNearShopUser:function(t,e){var s=t.commit;navigator.geolocation.getCurrentPosition(function(t){var i=t.coords.latitude,a=t.coords.longitude,r=It+"users/near?iduser="+e+"&lat="+i+"&lng="+a;Y.a.get(r).then(function(t){return t.data}).then(function(t){return t.data}).then(function(t){s("SET_SHOPS",t),s("showlikedshops",!1)})},function(t){throw t})},addToFavourite:function(t,e){var s=t.commit,i=It+"users/like?iduser="+e.userid+"&idshop="+e.shopid;Y.a.post(i).then(function(t){return t.data}).then(function(t){return s("setmsg",t.msg)})},removeFromFavorite:function(t,e){var s=t.commit,i=It+"users/removelike?iduser="+e.userid+"&idshop="+e.shopid;Y.a.delete(i).then(function(t){return t.data}).then(function(t){return s("setmsg",t.msg)})},dislikeShop:function(t,e){var s=t.commit,i=It+"users/dislike?iduser="+e.userid+"&idshop="+e.shopid;Y.a.post(i).then(function(t){return t.data}).then(function(t){return s("setmsg",t.msg)})}}});i["a"].config.productionTip=!1,new i["a"]({store:xt,router:Nt,render:function(t){return t(K)}}).$mount("#app")},6992:function(t,e,s){},"8e52":function(t,e,s){"use strict";var i=s("f4ad"),a=s.n(i);a.a},"94d4":function(t,e,s){},"974b":function(t,e,s){"use strict";var i=s("4eae"),a=s.n(i);a.a},a5f9:function(t,e,s){"use strict";var i=s("e073"),a=s.n(i);a.a},a809:function(t,e,s){},c04d:function(t,e,s){"use strict";var i=s("94d4"),a=s.n(i);a.a},c0c9:function(t,e,s){},d1ec:function(t,e,s){t.exports=s.p+"img/shops.1952a26b.jpg"},d286:function(t,e,s){},e073:function(t,e,s){},f4ad:function(t,e,s){}});
//# sourceMappingURL=app.aee80e87.js.map