import{r as S,o as i,c as r,a as o,b as m,d,e as f,t as h,w as v,n as y,u as _,f as g,p as F,g as L,F as k,h as N,i as T,l as z,_ as B,j as I,k as M}from"./vendor.c7c86b66.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};K();var P="/share-alt-solid.svg";const A={key:0},V={class:"animate-wiggle w-8 h-8"},q={key:0},E={key:1},Y={key:1},G={class:"w-8 h-8"},H={key:0},X={key:1},x={props:{click:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(n){const e=n;return(s,c)=>{const t=S("fa");return e.click?(i(),r("div",A,[o("button",V,[m(s.$slots,"buttonText",{class:"justify-center"},()=>[e.click?(i(),r("div",q,[d(t,{icon:"heart",color:"#C41E3A",size:"lg"})])):(i(),r("div",E,[d(t,{icon:"heart",color:"#484848",size:"lg"})]))])])])):(i(),r("div",Y,[o("button",G,[m(s.$slots,"buttonText",{class:"justify-center"},()=>[e.click?(i(),r("div",H,[d(t,{icon:"heart",color:"#C41E3A",size:"lg"})])):(i(),r("div",X,[d(t,{icon:"heart",color:"#484848",size:"lg"})]))])])]))}}},Z={class:"max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-400"},J={key:0},Q=["src"],R={key:1},U=["src"],W={class:"px-6 py-4"},ee={class:"font-bold text-xl mb-1"},te={class:"text-l mb-2"},se=["onClick"],ae=o("div",{class:"pr-2 pl-2"},[o("img",{style:{width:"17px"},src:P,alt:"github"})],-1),oe=[ae],ie=["onClick"],re={class:"pr-2 pl-2"},ne={components:{buttonLike:x}},b=Object.assign(ne,{props:{cardData:{type:Object,default:{}}},setup(n){const e=n,s=f({expText:"text-gray-700 mb-3 text-base line-clamp-6",expFlag:!0,buttontext:" more",liked:!1}),c=()=>{s.expFlag=!s.expFlag,s.expFlag?(s.expText="text-gray-700 mb-3 text-base line-clamp-6",s.buttontext=" more"):(s.expText="text-gray-700 mb-3 text-base line-clamp-None",s.buttontext=" less")},t=()=>{s.liked=!s.liked},a=()=>{navigator.clipboard.writeText(e.cardData.url),alert("Image link copied to clipboard!")};return(l,p)=>(i(),r("div",Z,[e.cardData.media_type=="image"?(i(),r("div",J,[o("img",{class:"w-full",src:e.cardData.url,alt:"space"},null,8,Q)])):(i(),r("div",R,[o("iframe",{width:"560",height:"315",src:e.cardData.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,U)])),o("div",W,[o("div",ee,h(e.cardData.title),1),o("div",te,h(e.cardData.date),1),o("button",{onClick:v(a,["prevent"]),class:"animate-wiggle py-1 rounded-md flex mb-2"},oe,8,se),o("p",{class:y(_(s).expText)},h(e.cardData.explanation),3),o("button",{onClick:v(c,["prevent"]),class:"bg-gray-500 hover:bg-blue-400 text-white py-1 px-2 rounded-full mb-2 inline"},[o("div",re,h(_(s).buttontext),1)],8,ie),d(x,{class:"mt-1",onClick:t,click:_(s).liked,animated:!0},null,8,["click"])])]))}});var w=(n,e)=>{const s=n.__vccOpts||n;for(const[c,t]of e)s[c]=t;return s};const ce={},le={class:"sk-chase"},de=g('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6),_e=[de];function pe(n,e){return i(),r("div",le,_e)}var $=w(ce,[["render",pe]]);const he={},ue=n=>(F("data-v-ce7d5e60"),n=n(),L(),n),ge={class:"switch"},me=ue(()=>o("span",{class:"slider round"},null,-1));function fe(n,e){return i(),r("div",null,[o("label",ge,[o("input",{onClick:e[0]||(e[0]=s=>n.$emit("childMessage")),type:"checkbox"}),me])])}var D=w(he,[["render",fe],["__scopeId","data-v-ce7d5e60"]]),ve="/git.png",ye="/web.png",ke="/linkedin.png",xe="/mail.png",be="/github-brands.svg",we="/rss-square-solid.svg",$e="/linkedin-brands.svg",De="/envelope-square-solid.svg";const je=o("h1",{class:"flex justify-center text-5xl text-gray-600 dark:text-yellow-300 font mt-16 mb-6"}," s p a c e t a g r a m ",-1),Oe=o("h1",{class:"flex justify-center text-xl text-gray-700 font-text dark: text-gray-400"}," spacetagram provides daily space images, like the posts and read the info, and share images!",-1),Ce=o("h1",{class:"flex justify-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400"},"Designed by Eisa Keramati as a Vue3 passion project:",-1),Se={key:0},Fe=g('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+ve+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+ye+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+ke+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+xe+'" alt="mail"></a></span>',1),Le=[Fe],Ne={key:1},Te=g('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+be+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+we+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+$e+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+De+'" alt="mail"></a></span>',1),ze=[Te],j={props:{darkOn:{type:String,default:"light"}},setup(n){const e=n;return(s,c)=>(i(),r(k,null,[je,Oe,Ce,e.darkOn=="dark"?(i(),r("div",Se,Le)):(i(),r("div",Ne,ze))],64))}};const Be={class:"bg-gray-100 dark:bg-gray-900 flex justify-center"},Ie={key:0,class:"p-14 justify-center"},Me={class:"grid gird-cols-1 justify-center space-y-8"},Ke=o("span",null,"view more posts",-1),Pe=[Ke],Ae={key:1,class:"flex h-screen"},Ve={components:{card:b,load:$,toggle:D,headerTop:j}},qe=Object.assign(Ve,{setup(n){const e=f({fetchedData:[],firstLoad:!1,load:!1,startDay:6,darkOn:"light"}),s=()=>{var a=new Date,l=new Date(a.getTime()-e.startDay*24*60*60*1e3),p=l.getDate(),u=l.getMonth()+1,O=l.getFullYear();const C=O.toString()+"-"+u.toString()+"-"+p.toString();return e.startDay+=6,C},c=()=>{e.darkOn=="dark"?e.darkOn="light":e.darkOn="dark"},t=()=>{e.firstLoad=!1,fetch("https://api.nasa.gov/planetary/apod?start_date="+s()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(a=>(e.firstLoad=!0,a.json())).then(a=>{e.fetchedData=a.reverse()}),console.log(e.fetchedData)};return fetch("https://api.nasa.gov/planetary/apod?start_date="+s()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(a=>(e.firstLoad=!0,a.json())).then(a=>{e.fetchedData=a.reverse()}),(a,l)=>(i(),r("div",{class:y(_(e).darkOn)},[o("div",Be,[_(e).firstLoad?(i(),r("div",Ie,[d(j,{darkOn:_(e).darkOn},null,8,["darkOn"]),d(D,{onChildMessage:c,class:"flex m-auto justify-center mb-8"}),o("div",Me,[(i(!0),r(k,null,N(_(e).fetchedData,(p,u)=>(i(),T(b,{key:u,cardData:p},null,8,["cardData"]))),128))]),o("button",{onClick:t,class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex m-auto mt-6"},Pe)])):(i(),r("div",Ae,[d($,{class:"m-auto"})]))])],2))}});z.add(B);I(qe).component("fa",M).mount("#app");