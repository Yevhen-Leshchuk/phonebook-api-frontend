(self.webpackChunkphonebook_api_frontend=self.webpackChunkphonebook_api_frontend||[]).push([[789],{7757:function(t,e,r){t.exports=r(9727)},1e3:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(5039),o=r.n(n),i="LoaderButton_LoaderBox__mLRs9",a=r(3329),c=function(){return(0,a.jsx)("div",{className:i,children:(0,a.jsx)(o(),{color:"#52baee",size:25})})}},554:function(t,e,r){"use strict";r.d(e,{rY:function(){return a},u4:function(){return s},Wr:function(){return f},SC:function(){return h},Y6:function(){return l},Bh:function(){return o},BX:function(){return i},pK:function(){return c},fA:function(){return u}});var n=r(6708),o=(r(8435),r(1525),function(){(0,n.notice)({text:"This name already exists",width:"370px"})}),i=function(){(0,n.notice)({text:"This phone already exists",width:"370px"})},a=function(){(0,n.success)({text:"Contact added successfully!",width:"370px"})},c=function(){(0,n.success)({text:"Contact successfully updated!",width:"370px"})},s=function(){(0,n.success)({text:"Contact successfully removed!",width:"370px"})},u=function(){(0,n.success)({text:"Welcome to the phonebook!",width:"370px"})},l=function(){(0,n.success)({text:"You are successfully registered! To enter the phonebook, please sign in.",width:"370px"})},h=function(){(0,n.error)({text:"This user already exists!",width:"370px"})},f=function(){(0,n.error)({text:"Incorrect email or password!",width:"370px"})}},911:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}r.r(e),r.d(e,{default:function(){return O}});var o=r(885),i=r(7757),a=r.n(i),c=r(5048),s=r(5705),u=r(8571),l=r(5984),h=r(4452),f=r(554),p=r(91),d=r(1e3),m="LoginForm_formBox__rqVK0",y="LoginForm_form__gPEx5",v="LoginForm_formTitle__xGeGl",g="LoginForm_formTitleAccent__OV1Jn LoginForm_formTitle__xGeGl",x="LoginForm_label__F7sLE",w="LoginForm_input__aQRtt",_="LoginForm_button__LodJg",L="LoginForm_TextButton__fSmuh",b="LoginForm_error__012y+",j=r(3329),E=u.Ry({email:u.Z_().email("Invalid email address").required("Required"),password:u.Z_().min(3,"must be at least 3 characters long").max(10,"must  be no more than 10 characters long").required("Required")}),N={email:"",password:""},F=function(){var t=(0,c.I0)(),e=(0,h.e9)(),r=(0,o.Z)(e,2),i=r[0],u=r[1].isLoading,F=(0,l.x0)(),k=(0,l.x0)(),O=function(){var e,r=(e=a().mark((function e(r){var n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(r);case 2:n=e.sent,(o=n.data)?(t((0,p.no)(o.token)),t((0,p.IX)(o.user)),t((0,p.RM)()),(0,f.fA)()):(0,f.Wr)();case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:m,children:[(0,j.jsxs)("h2",{className:v,children:["Sign In to ",(0,j.jsx)("span",{className:g,children:"PHONEBOOK"})]}),(0,j.jsx)(s.J9,{initialValues:N,validationSchema:E,onSubmit:function(t,e){var r=e.resetForm;O(t),r()},children:(0,j.jsxs)(s.l0,{className:y,noValidate:!0,children:[(0,j.jsx)("label",{className:x,htmlFor:F,children:"Email"}),(0,j.jsx)(s.gN,{className:w,type:"email",name:"email",placeholder:"Mail",id:F}),(0,j.jsx)("p",{className:b,children:(0,j.jsx)(s.Bc,{name:"email"})}),(0,j.jsx)("label",{className:x,htmlFor:k,children:"Password"}),(0,j.jsx)(s.gN,{className:w,type:"password",name:"password",placeholder:"password",id:k}),(0,j.jsx)("p",{className:b,children:(0,j.jsx)(s.Bc,{name:"password"})}),(0,j.jsxs)("button",{className:_,type:"submit",children:[(0,j.jsx)("span",{className:L,children:"Submit"}),u&&(0,j.jsx)(d.Z,{})]})]})})]})},k="LoginPage_loginPageBox__nsjj2",O=function(){return(0,j.jsx)("div",{className:k,children:(0,j.jsx)(F,{})})}},9727:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function y(){}function v(){}function g(){}var x={};s(x,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(O([])));_&&_!==r&&n.call(_,i)&&(x=_);var L=g.prototype=y.prototype=Object.create(x);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=g,s(L,"constructor",g),s(g,"constructor",v),v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=LoginPage.b8425669.chunk.js.map