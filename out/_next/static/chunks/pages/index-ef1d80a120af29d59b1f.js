(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{97597:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(85893),a=t(9008),s=t(67294),i=t(809),o=t.n(i),l=t(92447),c=t(25712),d=t.n(c),u=t(55699),x=function(){var e=(0,u.et)().videos;return(0,r.jsx)(r.Fragment,{children:e.length>0&&e.map((function(e,n){return(0,r.jsx)(f,{totalTips:e.tipAmount,address:e.author,description:e.description,hash:e.hash,id:e.id},n)}))})},f=function(e){var n=e.address,t=e.description,a=e.totalTips,s=e.hash,i=e.id,c=(0,u.et)(),x=c.tipVideoOwner,f=c.updateVideos,p=new(d())(n,200).toString();return(0,r.jsxs)("div",{className:"w-full md:mx-0 md:max-w-2xl mt-5 p-3 border rounded-xl flex flex-col",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-5 bg-gray-100 rounded-t-xl py-3 px-4 border-t border-l border-r font-mono items-center",children:[(0,r.jsx)("img",{width:35,height:35,src:"data:image/png;base64, ".concat(p)}),(0,r.jsx)("div",{className:"overflow-ellipsis w-52 overflow-hidden",children:n})]}),(0,r.jsx)("video",{controls:!0,muted:!0,autoPlay:!1,loop:!0,poster:"data:image/png;base64, ".concat(p),src:"https://ipfs.infura.io/ipfs/".concat(s)}),(0,r.jsx)("div",{className:"py-3 px-4 flex flex-col border-l border-r",children:(0,r.jsx)("span",{className:"font-sans pt-2",children:t})}),(0,r.jsxs)("div",{className:"bg-gray-100 rounded-b-xl py-3 px-4 border-b border-l border-r font-mono flex flex-row justify-between",children:[(0,r.jsxs)("span",{children:["Tips: ",window.web3.utils.fromWei(a,"Ether")," MATIC"]}),(0,r.jsx)("div",{onClick:(0,l.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.web3.utils.toWei("0.1","Ether"),e.next=3,x(i,n);case 3:return e.next=5,f();case 5:case"end":return e.stop()}}),e)}))),children:(0,r.jsx)("span",{className:"cursor-pointer font-bold text-blue-400",children:"Send 0.1 MATIC"})})]})]})},p=t(39227);var h=function(){var e=(0,u.et)().account,n=s.useState(),t=(0,p.Z)(n,2),a=t[0],i=t[1];return(0,s.useEffect)((function(){"0x0"!==e&&i(new(d())(e,200).toString())}),[e]),(0,r.jsx)("div",{className:"container items-center",children:(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border py-3 px-5 rounded-xl",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2 items-center",children:[(0,r.jsx)("img",{width:"30px",src:"favicon.ico",alt:"Logo"}),(0,r.jsx)("span",{className:"font-mono text-xl font-bold",children:"Animatic"})]}),(0,r.jsx)("div",{className:"flex flex-row space-x-2 py-2 items-center",children:e&&a&&(0,r.jsx)("a",{title:"Buy $MATIC with Transak",target:"_blank",href:"https://staging-global.transak.com/?apiKey=69d20132-6eed-4b4a-921a-cb9534d10f21&cryptoCurrencyCode=MATIC&walletAddress=".concat(e),children:(0,r.jsx)("img",{width:35,height:35,src:"data:image/png;base64, ".concat(a)})})})]})})},m=t(73949),v=t(20013),g=t(85241),b=function(e){var n=e.onChange,t=e.value,a=e.placeholder;e.varient;return(0,r.jsx)("textarea",{onChange:n,value:t,placeholder:a,className:"px-3 py-1 font-sourceSansPro text-lg bg-gray-100 hover:bg-white focus:bg-white rounded-lg border-4 hover:border-4 border-transparent hover:border-green-200 focus:border-green-200 outline-none focus:outline-none focus:ring w-full pr-10 transition-all duration-500 ring-transparent"})},j=function(e){var n=e.isOpen,t=e.closeModal,a=(0,s.useState)("Upload"),i=a[0],c=a[1],d=(0,s.useState)(null),x=d[0],f=d[1],p=(0,u.et)(),h=p.contract,j=p.account,w=p.updateVideos,y=(0,g.create)({url:"https://ipfs.infura.io:5001/api/v0"}),N=(0,s.useState)(""),C=N[0],k=N[1],T=function(){var e=(0,l.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("Uploading to IPFS..."),e.next=3,y.add(x);case 3:n=e.sent,c("Creating smart contract..."),h.methods.uploadVideo(n.path,C).send({from:j}).then((0,l.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:f(null),k(""),c("Upload"),t();case 6:case"end":return e.stop()}}),e)})))).catch((function(){t()}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.u,{appear:!0,show:n,as:s.Fragment,children:(0,r.jsxs)(v.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:t,children:[(0,r.jsx)(v.V.Overlay,{className:"fixed inset-0 bg-black opacity-40"}),(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center ",children:[(0,r.jsx)(m.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(v.V.Overlay,{className:"fixed inset-0"})}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(m.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl  max-w-xl",children:[(0,r.jsx)(v.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Upload Video to IPFS"}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)("input",{onChange:function(e){return f(e.target.files[0])},className:"my-3",type:"file"})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(b,{value:C,onChange:function(e){k(e.target.value)},varient:"ongray",placeholder:"Description"})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("button",{type:"button",disabled:"Upload"!==i,className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:function(){x&&T()},children:i})})]})})]})]})})})};function w(){var e=(0,s.useState)(!1),n=e[0],t=e[1],i=(0,u.et)().loading;return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start min-h-screen py-2",children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Animatic"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(j,{isOpen:n,closeModal:function(){t(!1)}}),(0,r.jsx)(h,{}),(0,r.jsx)("div",{className:"max-w-2xl w-full bg-blue-100 rounded-xl flex justify-center items-center py-2 mt-3 hover:bg-blue-200 cursor-pointer",onClick:function(){t(!0)},children:(0,r.jsx)("span",{className:"text-blue-500 font-bold text-lg",children:"Upload Video"})}),i?(0,r.jsx)("div",{className:"font-bold text-gray-400 mt-36 text-4xl",children:"Fetching..."}):(0,r.jsx)(x,{})]})}},45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(97597)}])},47005:function(){},26937:function(){},26784:function(){},88795:function(){}},function(e){e.O(0,[807,774,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);