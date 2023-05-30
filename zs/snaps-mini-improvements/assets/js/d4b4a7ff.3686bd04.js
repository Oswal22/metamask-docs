"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},9480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={sidebar_label:"Native iOS",sidebar_position:1},s="Use MetaMask SDK with iOS",u={unversionedId:"how-to/use-sdk/mobile/ios",id:"how-to/use-sdk/mobile/ios",title:"Use MetaMask SDK with iOS",description:"You can import MetaMask SDK into your native iOS dapp to enable your users to easily connect",source:"@site/wallet/how-to/use-sdk/mobile/ios.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/ios",permalink:"/zs/snaps-mini-improvements/wallet/how-to/use-sdk/mobile/ios",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Native iOS",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Mobile",permalink:"/zs/snaps-mini-improvements/wallet/how-to/use-sdk/mobile/"},next:{title:"Native Android (coming soon)",permalink:"/zs/snaps-mini-improvements/wallet/how-to/use-sdk/mobile/android"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"4. Call provider methods",id:"4-call-provider-methods",level:3},{value:"Example: Get chain ID",id:"example-get-chain-id",level:4},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-ios"},"Use MetaMask SDK with iOS"),(0,r.kt)("p",null,"You can import MetaMask SDK into your native iOS dapp to enable your users to easily connect\nwith their MetaMask Mobile wallet."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"An iOS project set up with iOS version 14+."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"To add the SDK as a Swift Package Manager (SPM) package to your project, in Xcode, select\n",(0,r.kt)("strong",{parentName:"p"},"File > Swift Packages > Add Package Dependency"),".\nEnter the URL of the MetaMask iOS SDK repository: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/MetaMask/metamask-ios-sdk"),"."),(0,r.kt)("p",null,"Alternatively, you can add the URL directly in your project's package file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'dependencies: [\n    .package(\n        url: "https://github.com/MetaMask/metamask-ios-sdk",\n        from: "0.1.0"\n    )\n]\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The SDK supports ",(0,r.kt)("inlineCode",{parentName:"p"},"ios-arm64")," (iOS devices) and ",(0,r.kt)("inlineCode",{parentName:"p"},"ios-arm64-simulator")," (M1 chip simulators).\nIt currently doesn't support ",(0,r.kt)("inlineCode",{parentName:"p"},"ios-ax86_64-simulator")," (Intel chip simulators).")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"Import the SDK by adding the following line to the top of your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import metamask_ios_sdk\n")),(0,r.kt)("h3",{id:"3-connect-your-dapp"},"3. Connect your dapp"),(0,r.kt)("p",null,"Connect your dapp by adding the following code to your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'@ObservedObject var ethereum = MetaMaskSDK.shared.ethereum\n\nlet dapp = Dapp(name: "Dub Dapp", url: "https://dubdapp.com")\n\n// This is the same as calling eth_requestAccounts\nethereum.connect(dapp)\n')),(0,r.kt)("p",null,"By default, MetaMask logs three SDK events: ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"connected"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnected"),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskSDK.shared.enableDebug = false")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.enableDebug = false"),"."),(0,r.kt)("h3",{id:"4-call-provider-methods"},"4. Call provider methods"),(0,r.kt)("p",null,"You can now call any ",(0,r.kt)("a",{parentName:"p",href:"/zs/snaps-mini-improvements/wallet/reference/provider-api"},"provider API method"),"."),(0,r.kt)("p",null,"The SDK uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/combine"},"Combine")," to publish Ethereum\nevents, so you need to define an ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyCancellable")," storage by adding the following line to your\nproject file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@State private var cancellables: Set<AnyCancellable> = []\n")),(0,r.kt)("p",null,"The following examples use the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/snaps-mini-improvements/wallet/reference/provider-api#windowethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nprovider API method to call various ",(0,r.kt)("a",{parentName:"p",href:"/zs/snaps-mini-improvements/wallet/reference/rpc-api"},"RPC API")," methods."),(0,r.kt)("h4",{id:"example-get-chain-id"},"Example: Get chain ID"),(0,r.kt)("p",null,"The following example gets the user's chain ID by calling\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_chainId"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_chainId")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'@State var chainId: String?\n\nlet chainIdRequest = EthereumRequest(method: .ethChainId)\n\nethereum.request(chainIdRequest)?.sink(receiveCompletion: { completion in\n    switch completion {\n    case .failure(let error):\n        print("\\(error.localizedDescription)")\n    default: break\n    }\n}, receiveValue: { result in\n    self.chainId = result\n})\n.store(in: &cancellables)\n')),(0,r.kt)("h4",{id:"example-get-account-balance"},"Example: Get account balance"),(0,r.kt)("p",null,"The following example gets the user's account balance by calling\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_getBalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'@State var balance: String?\n\n// Create parameters\nlet parameters: [String] = [\n    ethereum.selectedAddress, // address to check for balance\n    "latest" // "latest", "earliest" or "pending" (optional)\n  ]\n\n// Create request\nlet getBalanceRequest = EthereumRequest(\n    method: .ethGetBalance,\n    params: parameters)\n\n// Make request\nethereum.request(getBalanceRequest)?.sink(receiveCompletion: { completion in\n    switch completion {\n    case .failure(let error):\n        print("\\(error.localizedDescription)")\n    default: break\n    }\n}, receiveValue: { result in\n    self.balance = result\n})\n.store(in: &cancellables)\n')),(0,r.kt)("h4",{id:"example-send-transaction"},"Example: Send transaction"),(0,r.kt)("p",null,"The following examples send a transaction by calling\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Use a dictionary",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"If your request parameters make up a simple dictionary of string key-value pairs, you can use the\ndictionary directly.\nNote that ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," or even ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyHashable")," types aren't supported, since the type must be explicitly known."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'// Create parameters\nlet parameters: [String: String] = [\n    "to": "0x...", // receiver address\n    "from": ethereum.selectedAddress, // sender address\n    "value": "0x..." // amount\n  ]\n\n// Create request\nlet transactionRequest = EthereumRequest(\n    method: .ethSendTransaction,\n    params: [parameters] // eth_sendTransaction expects an array parameters object\n    )\n\n// Make a transaction request\nethereum.request(transactionRequest)?.sink(receiveCompletion: { completion in\n    switch completion {\n    case .failure(let error):\n        print("\\(error.localizedDescription)")\n    default: break\n    }\n}, receiveValue: { result in\n    print(result)\n})\n.store(in: &cancellables)\n'))),(0,r.kt)(o.Z,{label:"Use a struct",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"For more complex parameter representations, define and use a struct that conforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"CodableData"),",\nthat is, implements the following requirement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func socketRepresentation() -> NetworkData\n")),(0,r.kt)("p",null,"The type can then be represented as a socket packet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Transaction: CodableData {\n    let to: String\n    let from: String\n    let value: String\n    let data: String?\n\n    init(to: String, from: String, value: String, data: String? = nil) {\n        self.to = to\n        self.from = from\n        self.value = value\n        self.data = data\n    }\n\n    func socketRepresentation() -> NetworkData {\n        [\n            "to": to,\n            "from": from,\n            "value": value,\n            "data": data\n        ]\n    }\n}\n\n// Create parameters\nlet transaction = Transaction(\n    to: "0x...", // receiver address\n    from: ethereum.selectedAddress, // sender address\n    value: "0x..." // amount\n)\n\n// Create request\nlet transactionRequest = EthereumRequest(\n    method: .ethSendTransaction,\n    params: [transaction] // eth_sendTransaction expects an array parameters object\n    )\n\n// Make a transaction request\nethereum.request(transactionRequest)?.sink(receiveCompletion: { completion in\n    switch completion {\n    case .failure(let error):\n        print("\\(error.localizedDescription)")\n    default: break\n    }\n}, receiveValue: { result in\n    print(result)\n})\n.store(in: &cancellables)\n')))))}m.isMDXComponent=!0}}]);