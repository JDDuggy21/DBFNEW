(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[4],{666:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"h",(function(){return f})),e.d(t,"f",(function(){return b})),e.d(t,"g",(function(){return p})),e.d(t,"i",(function(){return d})),e.d(t,"c",(function(){return j})),e.d(t,"b",(function(){return l})),e.d(t,"d",(function(){return O})),e.d(t,"e",(function(){return v}));var r=e(2),c=e.n(r),a=e(12),u=e(3),o=e.n(u),i=e(671),s=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.approve(e.options.address,i.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(e,new o.a(r).times(new o.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r,c){return n.apply(this,arguments)}}(),b=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(new o.a(e).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit().send({from:r,value:new o.a(e).times(new o.a(10).pow(18)).toString()}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),d=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.withdraw(e,new o.a(r).times(new o.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r,c){return n.apply(this,arguments)}}(),j=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"0x85f27A63cFb4Dc5a36d7Eb5EF8620D343817e156"===t.options.address?t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})):t.methods.withdraw(new o.a(e).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash}));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(e,"0").send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),O=function(){var n=Object(a.a)(c.a.mark((function n(t,e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit("0").send({from:e}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),v=function(){var n=Object(a.a)(c.a.mark((function n(t,e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit().send({from:e,value:new o.a(0)}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},670:function(n,t,e){"use strict";e.d(t,"c",(function(){return d})),e.d(t,"a",(function(){return j})),e.d(t,"d",(function(){return l})),e.d(t,"b",(function(){return O})),e.d(t,"e",(function(){return v}));var r=e(45),c=e(2),a=e.n(c),u=e(12),o=e(0),i=e(63),s=e(42),f=e(94),b=e(666),p=e(667),d=function(n){var t=Object(s.b)(),e=Object(i.m)().account,r=Object(p.e)();return{onReward:Object(o.useCallback)(Object(u.a)(a.a.mark((function c(){var u;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.b)(r,n,e);case 2:return u=c.sent,t(Object(f.b)(e)),c.abrupt("return",u);case 5:case"end":return c.stop()}}),c)}))),[e,t,n,r])}},j=function(n){var t=Object(i.m)().account,e=Object(p.e)();return{onReward:Object(o.useCallback)(Object(u.a)(a.a.mark((function c(){var u;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u=n.reduce((function(n,c){return[].concat(Object(r.a)(n),[Object(b.b)(e,c,t)])}),[]),c.abrupt("return",Promise.all(u));case 2:case"end":return c.stop()}}),c)}))),[t,n,e])}},l=function(n){var t=Object(s.b)(),e=Object(i.m)().account,r=Object(p.f)();return{onReward:Object(o.useCallback)(Object(u.a)(a.a.mark((function c(){var u;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.b)(r,n,e);case 2:return u=c.sent,t(Object(f.a)(e)),c.abrupt("return",u);case 5:case"end":return c.stop()}}),c)}))),[e,t,n,r])}},O=function(n){var t=Object(i.m)().account,e=Object(p.f)();return{onReward:Object(o.useCallback)(Object(u.a)(a.a.mark((function c(){var u;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u=n.reduce((function(n,c){return[].concat(Object(r.a)(n),[Object(b.b)(e,c,t)])}),[]),c.abrupt("return",Promise.all(u));case 2:case"end":return c.stop()}}),c)}))),[t,n,e])}},v=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=Object(s.b)(),r=Object(i.m)(),c=r.account,d=Object(p.g)(n),j=Object(o.useCallback)(Object(u.a)(a.a.mark((function r(){var u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=t?b.e:b.d,r.next=3,u(d,c);case 3:e(Object(f.i)(n,c)),e(Object(f.h)(n,c));case 5:case"end":return r.stop()}}),r)}))),[c,e,t,d,n]);return{onReward:j}}},672:function(n,t,e){"use strict";var r=e(62),c=e(14),a=(e(0),e(5));function u(){var n=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return n},n}function o(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return o=function(){return n},n}var i=a.e.div(o(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),s=a.e.input(u(),(function(n){return n.theme.colors.primary}));t.a=function(n){var t=n.endAdornment,e=n.onChange,r=n.placeholder,a=n.startAdornment,u=n.value;return Object(c.jsxs)(i,{children:[!!a&&a,Object(c.jsx)(s,{placeholder:r,value:u,onChange:e}),!!t&&t]})}},673:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e(62),c=e(14),a=e(0),u=e.n(a),o=e(5);function i(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return i=function(){return n},n}var s=o.e.div(i(),(function(n){return n.size}),(function(n){return n.size})),f=function(n){var t,e=n.size,r=void 0===e?"md":e,u=Object(a.useContext)(o.a).spacing;switch(r){case"lg":t=u[6];break;case"sm":t=u[2];break;case"md":default:t=u[4]}return Object(c.jsx)(s,{size:t})};function b(){var n=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return p=function(){return n},n}var d=o.e.div(p(),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),j=o.e.div(b()),l=function(n){var t=n.children,e=u.a.Children.toArray(t).length;return Object(c.jsx)(d,{children:u.a.Children.map(t,(function(n,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{children:n}),t<e-1&&Object(c.jsx)(f,{})]})}))})}},674:function(n,t,e){"use strict";e.d(t,"a",(function(){return w}));var r=e(62),c=e(14),a=(e(0),e(5)),u=e(669),o=e(53),i=e(664),s=e(672);function f(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return p=function(){return n},n}function d(){var n=Object(r.a)(["\n  width: ","px;\n"]);return d=function(){return n},n}function j(){var n=Object(r.a)([""]);return j=function(){return n},n}var l=a.e.div(j()),O=a.e.div(d(),(function(n){return n.theme.spacing[3]})),v=a.e.div(p()),h=a.e.div(b(),(function(n){return n.theme.colors.primary})),m=a.e.span(f(),(function(n){return n.theme.colors.primary})),w=function(n){var t=n.max,e=n.symbol,r=n.onChange,a=n.onSelectMax,f=n.value,b=n.depositFeeBP,p=void 0===b?0:b,d=n.burnFee,j=void 0===d?0:d,w=Object(i.a)();return console.log("burn1",j),Object(c.jsxs)(l,{children:[Object(c.jsxs)(h,{children:[t.toLocaleString()," ",e," ",w(526,"Available")]}),Object(c.jsx)(s.a,{endAdornment:Object(c.jsxs)(v,{children:[Object(c.jsx)(m,{children:e}),Object(c.jsx)(O,{}),Object(c.jsx)("div",{children:Object(c.jsx)(o.d,{size:"sm",onClick:a,children:w(452,"Max")})})]}),onChange:r,placeholder:"0",value:f}),p>0?Object(c.jsxs)(h,{children:[w(10001,"Deposit Fee"),": ",new u.a(f||0).times(p/1e4).toString()," ",e]}):null,j>0?Object(c.jsxs)(h,{children:[w(1000100,"burn Fee"),": ",new u.a(f||0).times(j/1e4).toString()," ",e]}):null]})}},677:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"b",(function(){return f}));var r=e(2),c=e.n(r),a=e(12),u=e(134),o=e.n(u),i=e(38),s=function(n,t){return new(new o.a(n).eth.Contract)(i,t)},f=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){var a,u;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=s(t,e),n.prev=1,n.next=4,a.methods.balanceOf(r).call();case 4:return u=n.sent,n.abrupt("return",u);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return","0");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t,e,r){return n.apply(this,arguments)}}()},678:function(n,t,e){"use strict";e.d(t,"c",(function(){return p})),e.d(t,"b",(function(){return d}));var r=e(2),c=e.n(r),a=e(12),u=e(0),o=e(63),i=e(42),s=e(94),f=e(666),b=e(667),p=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.f)();return{onStake:Object(u.useCallback)(function(){var u=Object(a.a)(c.a.mark((function a(u){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(f.h)(r,n,u,e);case 2:o=c.sent,t(Object(s.a)(e)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}},d=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=Object(i.b)(),r=Object(o.m)(),p=r.account,d=Object(b.g)(n),j=Object(u.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){var u;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=t?f.g:f.f,r.next=3,u(d,a,p);case 3:e(Object(s.j)(String(n),p)),e(Object(s.h)(String(n),p));case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[p,e,t,d,n]);return{onStake:j}};t.a=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.e)();return{onStake:Object(u.useCallback)(function(){var u=Object(a.a)(c.a.mark((function a(u){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(f.h)(r,n,u,e);case 2:o=c.sent,t(Object(s.b)(e)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}}},688:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(669);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3)},689:function(n,t,e){"use strict";var r=e(62);function c(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return n},n}var a=e(5).e.div(c());t.a=a},690:function(n,t,e){"use strict";t.a=function(n){var t=n.quoteTokenAdresses,e=n.quoteTokenSymbol,r=n.tokenAddresses,c="BNB"===e?"ETH":t[56],a=r[56];return"".concat(c,"/").concat(a)}},691:function(n,t,e){"use strict";e.d(t,"a",(function(){return p})),e.d(t,"b",(function(){return d})),e.d(t,"c",(function(){return j}));var r=e(2),c=e.n(r),a=e(12),u=e(0),o=e(63),i=(e(671),e(42)),s=e(94),f=e(666),b=e(667),p=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.e)();return{onApprove:Object(u.useCallback)(Object(a.a)(c.a.mark((function a(){var u;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(f.a)(n,r,e);case 3:return u=c.sent,t(Object(s.b)(e)),c.abrupt("return",u);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[e,t,n,r])}},d=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.f)();return{onApprove:Object(u.useCallback)(Object(a.a)(c.a.mark((function a(){var u;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(f.a)(n,r,e);case 3:return u=c.sent,t(Object(s.a)(e)),c.abrupt("return",u);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[e,t,n,r])}},j=function(n,t){var e=Object(i.b)(),r=Object(o.m)().account,p=Object(b.g)(t);return{onApprove:Object(u.useCallback)(Object(a.a)(c.a.mark((function a(){var u;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(f.a)(n,p,r);case 3:return u=c.sent,e(Object(s.g)(String(t),r)),c.abrupt("return",u);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,e,n,p,t])}}},692:function(n,t,e){"use strict";e.d(t,"c",(function(){return p})),e.d(t,"b",(function(){return d}));var r=e(2),c=e.n(r),a=e(12),u=e(0),o=e(63),i=e(42),s=e(94),f=e(666),b=e(667),p=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.f)();return{onUnstake:Object(u.useCallback)(function(){var u=Object(a.a)(c.a.mark((function a(u){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(f.i)(r,n,u,e);case 2:o=c.sent,t(Object(s.a)(e)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}},d=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.g)(n);return{onUnstake:Object(u.useCallback)(function(){var u=Object(a.a)(c.a.mark((function a(u){return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(f.c)(r,u,e);case 2:t(Object(s.j)(String(n),e)),t(Object(s.h)(String(n),e)),t(Object(s.i)(String(n),e));case 5:case"end":return c.stop()}}),a)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}};t.a=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(b.e)();return{onUnstake:Object(u.useCallback)(function(){var u=Object(a.a)(c.a.mark((function a(u){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(f.i)(r,n,u,e);case 2:o=c.sent,t(Object(s.b)(e)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}}},701:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return c}));var r=function(n){var t,e=n.numberOfDays,r=n.farmApy/100,c=e/365,a=1e3/n.cakePrice,u=a*Math.pow(1+r/365,365*c);return t=u-a,Math.round(100*t)/100},c=function(n){return(n.amountEarned/n.amountInvested*100).toFixed(2)}},716:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(14),c=e(62),a=(e(0),e(5)),u=e(53);function o(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return o=function(){return n},n}var i=a.e.div(o(),(function(n){return n.theme.colors.primary})),s=function(n){var t=n.onClick,e=n.expanded;return Object(r.jsxs)(i,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(r.jsx)(u.D,{color:"primary",bold:!0,children:e?"Hide":"Details"}),e?Object(r.jsx)(u.l,{}):Object(r.jsx)(u.k,{})]})};s.defaultProps={expanded:!1};var f=s}}]);
//# sourceMappingURL=4.cea33bbc.chunk.js.map