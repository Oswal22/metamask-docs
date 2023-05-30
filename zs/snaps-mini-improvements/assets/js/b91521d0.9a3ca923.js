"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,b=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),s=a(5162);const i={sidebar_label:"Subcommands",sidebar_position:2},o="Snaps subcommands",u={unversionedId:"reference/cli/subcommands",id:"reference/cli/subcommands",title:"Snaps subcommands",description:"b, build",source:"@site/snaps/reference/cli/subcommands.md",sourceDirName:"reference/cli",slug:"/reference/cli/subcommands",permalink:"/zs/snaps-mini-improvements/snaps/reference/cli/subcommands",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Subcommands",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Options",permalink:"/zs/snaps-mini-improvements/snaps/reference/cli/options"},next:{title:"Snaps permissions",permalink:"/zs/snaps-mini-improvements/snaps/reference/permissions"}},p={},c=[{value:"b, build",id:"b-build",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"i, init",id:"i-init",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"s, serve",id:"s-serve",level:2},{value:"w, watch",id:"w-watch",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-subcommands"},"Snaps subcommands"),(0,r.kt)("h2",{id:"b-build"},"b, build"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap build [options]\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap b -s lib/index.js -d out -n snap.js\n")))),(0,r.kt)("p",null,"Builds a snap from source."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"b")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,r.kt)("h2",{id:"e-eval"},"e, eval"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap eval [options]\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap e -b out/snap.js\n")))),(0,r.kt)("p",null,"Attempts to evaluate the snap bundle in SES."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),"."),(0,r.kt)("h2",{id:"i-init"},"i, init"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap init [directory]\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap i my-snap\n")))),(0,r.kt)("p",null,"Initializes a snap project in the specified directory.\nIf no directory is specified, the snap project is initialized in the current directory."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"i")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,r.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap manifest [options]\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap m --fix false\n")))),(0,r.kt)("p",null,"Validates the snap ",(0,r.kt)("a",{parentName:"p",href:"/zs/snaps-mini-improvements/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"m")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),"."),(0,r.kt)("h2",{id:"s-serve"},"s, serve"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap serve [options]\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap s -r out -p 9000\n")))),(0,r.kt)("p",null,"Locally serves snap files for testing."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),"."),(0,r.kt)("h2",{id:"w-watch"},"w, watch"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap watch [options]\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap w -s lib/index.js -d out\n")))),(0,r.kt)("p",null,"Rebuilds a snap from source upon changes to the files in the parent and child directories of the\nsource directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All files in the parent and child directories of sthe source directory are watched for changes, except:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," directory."),(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tests")," directories."),(0,r.kt)("li",{parentName:"ul"},"Any files named ",(0,r.kt)("inlineCode",{parentName:"li"},"test.js")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"test.ts"),"."),(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," directory, or the directory specified using ",(0,r.kt)("a",{parentName:"li",href:"/zs/snaps-mini-improvements/snaps/reference/cli/options#d-dist"},(0,r.kt)("inlineCode",{parentName:"a"},"--dist")),"."),(0,r.kt)("li",{parentName:"ul"},"Dotfiles."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"w")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"watch"),"."))}d.isMDXComponent=!0},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),i=a(6550),o=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=b({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=o??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=a(2389);const v="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",h,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}}}]);