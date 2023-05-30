"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={description:"Learn about the user interface of a snap.",sidebar_position:3},i="Snaps user interface",o={unversionedId:"concepts/user-interface",id:"concepts/user-interface",title:"Snaps user interface",description:"Learn about the user interface of a snap.",source:"@site/snaps/concepts/user-interface.md",sourceDirName:"concepts",slug:"/concepts/user-interface",permalink:"/zs/snaps-mini-improvements/snaps/concepts/user-interface",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the user interface of a snap.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps lifecycle",permalink:"/zs/snaps-mini-improvements/snaps/concepts/lifecycle"},next:{title:"Snaps execution environment",permalink:"/zs/snaps-mini-improvements/snaps/concepts/execution-environment"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-user-interface"},"Snaps user interface"),(0,a.kt)("p",null,"Any snap must represent itself and what it does to the end user.\nUsing the MetaMask settings page, the user can see their installed snaps.\nFor each snap, the user can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See most of its manifest data."),(0,a.kt)("li",{parentName:"ul"},"See its execution status (running, stopped, or crashed)."),(0,a.kt)("li",{parentName:"ul"},"Enable and disable the snap.")),(0,a.kt)("p",null,"Other than the settings page, a snap can modify the MetaMask UI using\n",(0,a.kt)("a",{parentName:"p",href:"/zs/snaps-mini-improvements/snaps/how-to/use-custom-ui"},"custom UI")," in only two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By opening a dialog using the ",(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-mini-improvements/snaps/reference/rpc-api#snap_dialog"},(0,a.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method."),(0,a.kt)("li",{parentName:"ul"},"By returning transaction insights from the ",(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-mini-improvements/snaps/reference/exports#ontransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"onTransaction")),"\nexport.")),(0,a.kt)("p",null,"This means that most snaps must rely on dapps/websites and their own RPC methods to present their\ndata to the user."),(0,a.kt)("p",null,"Providing more ways for snaps to modify the MetaMask UI is an important goal of the Snaps system,\nand over time more and more snaps will be able to contain their user interfaces entirely within\nMetaMask itself."))}u.isMDXComponent=!0}}]);