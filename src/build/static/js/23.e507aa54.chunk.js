(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[23],{816:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Be}));var c=n(14),r=n(17),o=n(20),a=n(0),s=n(30),i=n(42),b=n(3),l=n.n(b),j=n(63),u=n(53),d=n(688),x=n(689),O=n(174),p=n(93),m=n(133),f=n(94),h=n(15),k=n(664),y=n(62),g=n(5),v=n(716),T=n(690);function S(){var e=Object(y.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return S=function(){return e},e}function D(){var e=Object(y.a)(["\n  margin-top: 24px;\n"]);return D=function(){return e},e}var C=g.e.div(D()),w=Object(g.e)(u.s)(S(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),A=function(e){var t=e.isTokenOnly,n=e.bscScanAddress,r=e.removed,o=e.totalValueFormated,a=e.lpLabel,s=e.quoteTokenAdresses,i=e.quoteTokenSymbol,b=e.tokenAddresses,l=Object(k.a)(),j=Object(T.a)({quoteTokenAdresses:s,quoteTokenSymbol:i,tokenAddresses:b});return Object(c.jsxs)(C,{children:[Object(c.jsxs)(u.n,{justifyContent:"space-between",children:[Object(c.jsxs)(u.D,{children:[l(316,"Stake"),":"]}),Object(c.jsx)(w,{href:t?"https://exchange.dragonballfinance.org/#/swap/".concat(b[56]):"https://exchange.dragonballfinance.org/#/add/".concat(j),children:a})]}),!r&&Object(c.jsxs)(u.n,{justifyContent:"space-between",children:[Object(c.jsxs)(u.D,{children:[l(23,"Total Liquidity"),":"]}),Object(c.jsx)(u.D,{children:o})]}),Object(c.jsx)(u.n,{justifyContent:"flex-start",children:Object(c.jsx)(u.r,{external:!0,href:n,bold:!1,children:l(356,"View on BscScan")})})]})};function P(){var e=Object(y.a)(["\n  margin-left: 4px;\n"]);return P=function(){return e},e}function q(){var e=Object(y.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return q=function(){return e},e}var B=Object(g.e)(u.n)(q()),L=Object(g.e)(u.C)(P()),I=function(e){var t=e.lpLabel,n=e.multiplier,r=(e.risk,e.farmImage),o=e.tokenSymbol;e.depositFee;return Object(c.jsxs)(B,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(c.jsx)(u.q,{src:"/images/farms/".concat(r,".png"),alt:o,width:64,height:64}),Object(c.jsxs)(u.n,{flexDirection:"column",alignItems:"flex-end",children:[Object(c.jsx)(u.o,{mb:"4px",children:t}),Object(c.jsx)(u.n,{justifyContent:"center",children:Object(c.jsx)(L,{variant:"secondary",children:n})})]})]})},F=n(2),z=n.n(F),E=n(12),N=n(677),Q=n(675),M=n(691),R=n(678),U=n(692),W=n(665),G=n(673),H=n(674),K=function(e){var t=e.max,n=e.onConfirm,r=e.onDismiss,s=e.tokenName,i=void 0===s?"":s,b=e.depositFeeBP,l=void 0===b?0:b,j=Object(a.useState)(""),d=Object(o.a)(j,2),x=d[0],O=d[1],p=Object(a.useState)(!1),m=Object(o.a)(p,2),f=m[0],h=m[1],y=Object(k.a)(),g=Object(a.useMemo)((function(){return Object(W.b)(t)}),[t]),v=Object(a.useCallback)((function(e){O(e.currentTarget.value)}),[O]),T=Object(a.useCallback)((function(){O(g)}),[g,O]);return Object(c.jsxs)(u.w,{title:"".concat(y(316,"Deposit")," ").concat(i," Tokens"),onDismiss:r,children:[Object(c.jsx)(H.a,{value:x,onSelectMax:T,onChange:v,max:g,symbol:i,depositFeeBP:l}),Object(c.jsxs)(G.a,{children:[Object(c.jsx)(u.d,{variant:"secondary",onClick:r,children:y(462,"Cancel")}),Object(c.jsx)(u.d,{disabled:f,onClick:Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,n(x);case 3:h(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:f?y(488,"Pending Confirmation"):y(464,"Confirm")})]})]})},V=function(e){var t=e.onConfirm,n=e.onDismiss,r=e.max,s=e.tokenName,i=void 0===s?"":s,b=Object(a.useState)(""),l=Object(o.a)(b,2),j=l[0],d=l[1],x=Object(a.useState)(!1),O=Object(o.a)(x,2),p=O[0],m=O[1],f=Object(k.a)(),h=Object(a.useMemo)((function(){return Object(W.b)(r)}),[r]),y=Object(a.useCallback)((function(e){d(e.currentTarget.value)}),[d]),g=Object(a.useCallback)((function(){d(h)}),[h,d]);return Object(c.jsxs)(u.w,{title:"Withdraw ".concat(i),onDismiss:n,children:[Object(c.jsx)(H.a,{onSelectMax:g,onChange:y,value:j,max:h,symbol:i}),Object(c.jsxs)(G.a,{children:[Object(c.jsx)(u.d,{variant:"secondary",onClick:n,children:f(462,"Cancel")}),Object(c.jsx)(u.d,{disabled:p,onClick:Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(j);case 3:m(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:p?f(488,"Pending Confirmation"):f(464,"Confirm")})]})]})};function J(){var e=Object(y.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return J=function(){return e},e}var X=g.e.div(J()),Z=function(e){var t=e.stakedBalance,n=e.tokenBalance,r=e.tokenName,a=e.pid,s=e.depositFeeBP,i=Object(k.a)(),b=Object(R.a)(a).onStake,l=Object(U.a)(a).onUnstake,j=Object(W.a)(t),d=j.toLocaleString(void 0,{maximumFractionDigits:4}),x=Object(u.I)(Object(c.jsx)(K,{max:n,onConfirm:b,tokenName:r,depositFeeBP:s})),O=Object(o.a)(x,1)[0],p=Object(u.I)(Object(c.jsx)(V,{max:t,onConfirm:l,tokenName:r})),m=Object(o.a)(p,1)[0];return Object(c.jsxs)(u.n,{justifyContent:"space-between",alignItems:"center",children:[Object(c.jsx)(u.o,{color:0===j?"textDisabled":"text",children:d}),0===j?Object(c.jsx)(u.d,{onClick:O,children:i(999,"Stake")}):Object(c.jsxs)(X,{children:[Object(c.jsx)(u.p,{variant:"tertiary",onClick:m,mr:"6px",children:Object(c.jsx)(u.v,{color:"primary"})}),Object(c.jsx)(u.p,{variant:"tertiary",onClick:O,children:Object(c.jsx)(u.a,{color:"primary"})})]})]})},$=n(670);function Y(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return Y=function(){return e},e}var _=g.e.div(Y()),ee=function(e){var t=e.earnings,n=e.pid,r=Object(k.a)(),s=Object(a.useState)(!1),i=Object(o.a)(s,2),b=i[0],l=i[1],j=Object($.c)(n).onReward,d=Object(R.a)(n).onStake,x=Object(W.a)(t),O=x.toLocaleString(void 0,{maximumFractionDigits:4});return Object(c.jsxs)(u.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(c.jsx)(u.o,{color:0===x?"textDisabled":"text",children:O}),Object(c.jsxs)(_,{children:[11===n?Object(c.jsx)(u.d,{disabled:0===x||b,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d(x.toString());case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Compound")}):null,Object(c.jsx)(u.d,{disabled:0===x||b,onClick:Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,j();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Harvest")})]})]})};function te(){var e=Object(y.a)(["\n  padding-top: 16px;\n"]);return te=function(){return e},e}var ne=g.e.div(te()),ce=function(e){var t=e.farm,n=e.ethereum,r=e.account,s=Object(k.a)(),i=Object(a.useState)(!1),b=Object(o.a)(i,2),l=b[0],j=b[1],d=Object(p.c)(t.pid),x=d.pid,O=d.lpAddresses,m=d.tokenAddresses,f=d.isTokenOnly,h=d.depositFeeBP,y=Object(p.d)(x),g=y.allowance,v=y.tokenBalance,T=y.stakedBalance,S=y.earnings,D=O[56],C=m[56],w=t.lpSymbol.toUpperCase(),A=r&&g&&g.isGreaterThan(0),P=Object(a.useMemo)((function(){return f?Object(N.a)(n,C):Object(N.a)(n,D)}),[n,D,C,f]),q=Object(M.a)(P).onApprove,B=Object(a.useCallback)(Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,q();case 4:j(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[q]);return Object(c.jsxs)(ne,{children:[Object(c.jsxs)(u.n,{children:[Object(c.jsx)(u.D,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"DBALL"}),Object(c.jsx)(u.D,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:s(999,"Earned")})]}),Object(c.jsx)(ee,{earnings:S,pid:x}),Object(c.jsxs)(u.n,{children:[Object(c.jsx)(u.D,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:w}),Object(c.jsx)(u.D,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:s(999,"Staked")})]}),r?A?Object(c.jsx)(Z,{stakedBalance:T,tokenBalance:v,tokenName:w,pid:x,depositFeeBP:h}):Object(c.jsx)(u.d,{mt:"8px",fullWidth:!0,disabled:l,onClick:B,children:s(999,"Approve Contract")}):Object(c.jsx)(Q.a,{mt:"8px",fullWidth:!0})]})},re=n(701);function oe(){var e=Object(y.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return oe=function(){return e},e}function ae(){var e=Object(y.a)(["\n  margin-bottom: '10px';\n"]);return ae=function(){return e},e}function se(){var e=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return se=function(){return e},e}var ie=g.e.div(se()),be=g.e.div(ae()),le=Object(g.e)(u.D)(oe()),je=function(e){var t=e.onDismiss,n=e.lpLabel,r=e.quoteTokenAdresses,o=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,i=e.apy,b=Object(k.a)(),j=Object(T.a)({quoteTokenAdresses:r,quoteTokenSymbol:o,tokenAddresses:a}),d=i.times(new l.a(100)).toNumber(),x=1e3/s.toNumber(),O=Object(re.b)({numberOfDays:1,farmApy:d,cakePrice:s}),p=Object(re.b)({numberOfDays:7,farmApy:d,cakePrice:s}),m=Object(re.b)({numberOfDays:30,farmApy:d,cakePrice:s}),f=Object(re.b)({numberOfDays:365,farmApy:d,cakePrice:s});return Object(c.jsxs)(u.w,{title:"ROI",onDismiss:t,children:[Object(c.jsxs)(ie,{children:[Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:b(999,"Timeframe")})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:b(999,"ROI")})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:b(999,"DBALL per $1000")})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:"1d"})}),Object(c.jsx)(be,{children:Object(c.jsxs)(u.D,{children:[Object(re.a)({amountEarned:O,amountInvested:x}),"%"]})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:O})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:"7d"})}),Object(c.jsx)(be,{children:Object(c.jsxs)(u.D,{children:[Object(re.a)({amountEarned:p,amountInvested:x}),"%"]})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:p})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:"30d"})}),Object(c.jsx)(be,{children:Object(c.jsxs)(u.D,{children:[Object(re.a)({amountEarned:m,amountInvested:x}),"%"]})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:m})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:"365d(APY)"})}),Object(c.jsx)(be,{children:Object(c.jsxs)(u.D,{children:[Object(re.a)({amountEarned:f,amountInvested:x}),"%"]})}),Object(c.jsx)(be,{children:Object(c.jsx)(u.D,{children:f})})]}),Object(c.jsx)(le,{fontSize:"12px",color:"textSubtle",children:b(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(c.jsx)(u.n,{justifyContent:"center",children:Object(c.jsxs)(u.s,{href:"https://exchange.pancakeswap.finance/#/add/".concat(j),children:[b(999,"Get")," ",n]})})]})},ue=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,i=e.apy,b=Object(u.I)(Object(c.jsx)(je,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:r,tokenAddresses:a,cakePrice:s,apy:i})),l=Object(o.a)(b,1)[0];return Object(c.jsx)(u.p,{onClick:l,variant:"text",size:"sm",ml:"4px",children:Object(c.jsx)(u.g,{})})};function de(){var e=Object(y.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return de=function(){return e},e}function xe(){var e=Object(y.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(y.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return Oe=function(){return e},e}function pe(){var e=Object(y.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return pe=function(){return e},e}function me(){var e=Object(y.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return me=function(){return e},e}var fe=Object(g.f)(me()),he=g.e.div(pe(),fe),ke=g.e.div(Oe(),(function(e){return e.theme.card.background})),ye=g.e.div(xe(),(function(e){return e.theme.colors.borderColor})),ge=g.e.div(de(),(function(e){return e.expanded?"100%":"0px"})),ve=function(e){var t=e.farm,n=e.removed,r=e.cakePrice,s=e.senzuPrice,i=e.bnbPrice,b=e.ethPrice,j=e.btcbPrice2,d=e.cake2Price,x=e.ethereum,O=e.account,p=Object(k.a)(),m=Object(a.useState)(!1),f=Object(o.a)(m,2),y=f[0],g=f[1],T=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),S=Object(a.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===h.b.BNB?i.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.CAKE?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.SENZU?s.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.CAKE2?d.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.ETH?b.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.BTCB?j.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[t.lpTotalInQuoteToken,t.quoteTokenSymbol,i,r,s,d,b,j]),D=S?"$".concat(Number(S).toLocaleString(void 0,{maximumFractionDigits:0})):"-",C=t.lpSymbol,w=t.apy&&t.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),P=t.quoteTokenAdresses,q=t.quoteTokenSymbol,B=t.tokenAddresses,L=t.risk;return Object(c.jsxs)(ke,{children:["DBALL"===t.tokenSymbol&&Object(c.jsx)(he,{}),Object(c.jsx)(I,{lpLabel:C,multiplier:t.multiplier,risk:L,depositFee:t.depositFeeBP,farmImage:T,tokenSymbol:t.tokenSymbol}),!n&&Object(c.jsxs)(u.n,{justifyContent:"space-between",alignItems:"center",children:[Object(c.jsxs)(u.D,{children:[p(352,"APR"),":"]}),Object(c.jsx)(u.D,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ue,{lpLabel:C,quoteTokenAdresses:P,quoteTokenSymbol:q,tokenAddresses:B,cakePrice:r,apy:t.apy}),w,"%"]}):Object(c.jsx)(u.A,{height:24,width:80})})]}),Object(c.jsxs)(u.n,{justifyContent:"space-between",children:[Object(c.jsxs)(u.D,{children:[p(318,"Earn"),":"]}),Object(c.jsx)(u.D,{bold:!0,children:"DBALL"})]}),Object(c.jsxs)(u.n,{justifyContent:"space-between",children:[Object(c.jsxs)(u.D,{style:{fontSize:"24px"},children:[p(10001,"Deposit Fee"),":"]}),Object(c.jsxs)(u.D,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(c.jsx)(ce,{farm:t,ethereum:x,account:O}),Object(c.jsx)(ye,{}),Object(c.jsx)(v.a,{onClick:function(){return g(!y)},expanded:y}),Object(c.jsx)(ge,{expanded:y,children:Object(c.jsx)(A,{removed:n,isTokenOnly:t.isTokenOnly,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.tokenAddresses[56]):"https://bscscan.com/token/".concat(t.lpAddresses[56]),totalValueFormated:D,lpLabel:C,quoteTokenAdresses:P,quoteTokenSymbol:q,tokenAddresses:B})})]})},Te=n(69);function Se(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return Se=function(){return e},e}function De(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return De=function(){return e},e}var Ce=function(e){var t=e.stakedOnly,n=e.setStakedOnly,r=Object(s.h)(),o=r.url,a=r.isExact,i=Object(k.a)();return Object(c.jsxs)(we,{children:[Object(c.jsxs)(Ae,{children:[Object(c.jsx)(u.E,{checked:t,onChange:function(){return n(!t)}}),Object(c.jsxs)(u.D,{children:[" ",i(699,"Staked only")]})]}),Object(c.jsxs)(u.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(c.jsx)(u.f,{as:Te.b,to:"".concat(o),children:i(698,"Active")}),Object(c.jsx)(u.f,{as:Te.b,to:"".concat(o,"/history"),children:i(700,"Inactive")})]})]})},we=g.e.div(De()),Ae=g.e.div(Se(),u.D);function Pe(){var e=Object(y.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return Pe=function(){return e},e}var qe=g.e.div(Pe(),(function(e){return e.theme.colors.textSubtle})),Be=function(e){var t=Object(s.h)().path,n=Object(k.a)(),b=Object(p.e)(),y=Object(p.n)(),g=Object(p.j)(),v=Object(p.l)(),T=Object(p.m)(),S=Object(p.o)(),D=Object(p.k)(),C=Object(j.m)(),w=C.account,A=C.ethereum,P=e.tokenMode,q=Object(i.b)(),B=Object(m.a)().fastRefresh;Object(a.useEffect)((function(){w&&q(Object(f.b)(w))}),[w,q,B]);var L=Object(a.useState)(!1),I=Object(o.a)(L,2),F=I[0],z=I[1],E=b.filter((function(e){return!!e.isTokenOnly===!!P&&"0X"!==e.multiplier})),N=b.filter((function(e){return!!e.isTokenOnly===!!P&&"0X"===e.multiplier})),Q=E.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),M=Object(a.useCallback)((function(e,t){return e.map((function(e){var t=new l.a(e.dballPerBlock||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(d.a),n=y.times(t),c=new l.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===h.b.BNB&&(c=c.times(v)),e.quoteTokenSymbol===h.b.SENZU&&(c=c.times(g)),e.quoteTokenSymbol===h.b.CAKE2&&(console.log("cake2Price",T),c=c.div(T)),e.quoteTokenSymbol===h.b.ETH&&(c=c.times(S)),e.quoteTokenSymbol===h.b.BTCB&&(c=c.times(D)),c.comparedTo(0)>0&&(n=n.div(c)),Object(r.a)(Object(r.a)({},e),{},{apy:n})})).map((function(e){return Object(c.jsx)(ve,{farm:e,removed:t,bnbPrice:v,cakePrice:y,senzuPrice:g,cake2Price:T,ethPrice:S,btcbPrice2:D,ethereum:A,account:w},e.pid)}))}),[y,v,g,S,D,T,A,w]);return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(u.o,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:P?n(10002,"Stake tokens to earn DBALL"):n(320,"Stake LP tokens to earn DBALL")}),Object(c.jsx)(u.o,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:n(1e4,"Deposit Fee will be used to buyback DBALL")}),Object(c.jsx)(Ce,{stakedOnly:F,setStakedOnly:z}),Object(c.jsxs)("div",{children:[Object(c.jsx)(qe,{}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(s.b,{exact:!0,path:"".concat(t),children:M(F?Q:E,!1)}),Object(c.jsx)(s.b,{exact:!0,path:"".concat(t,"/history"),children:M(N,!0)})]})]})]})}}}]);
//# sourceMappingURL=23.e507aa54.chunk.js.map