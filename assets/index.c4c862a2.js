import{r as C,o as r,c as i,a as o,b as m,d,e as f,t as h,w as v,n as y,u as p,f as g,p as F,g as L,F as k,h as N,i as T,l as z,_ as B,j as I,k as M}from"./vendor.c7c86b66.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};K();var P="/Spacetagram/share-alt-solid.svg";const A={key:0},V={class:"animate-wiggle w-8 h-8"},q={key:0},E={key:1},Y={key:1},G={class:"w-8 h-8"},H={key:0},X={key:1},x={props:{click:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(n){const e=n;return(a,c)=>{const t=C("fa");return e.click?(r(),i("div",A,[o("button",V,[m(a.$slots,"buttonText",{class:"justify-center"},()=>[e.click?(r(),i("div",q,[d(t,{icon:"heart",color:"#C41E3A",size:"lg"})])):(r(),i("div",E,[d(t,{icon:"heart",color:"#484848",size:"lg"})]))])])])):(r(),i("div",Y,[o("button",G,[m(a.$slots,"buttonText",{class:"justify-center"},()=>[e.click?(r(),i("div",H,[d(t,{icon:"heart",color:"#C41E3A",size:"lg"})])):(r(),i("div",X,[d(t,{icon:"heart",color:"#484848",size:"lg"})]))])])]))}}},Z={class:"max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-400"},J={key:0},Q=["src"],R={key:1},U=["src"],W={class:"px-6 py-4"},ee={class:"font-bold text-xl mb-1"},te={class:"text-l mb-2"},ae=["onClick"],se=o("div",{class:"pr-2 pl-2"},[o("img",{style:{width:"17px"},src:P,alt:"github"})],-1),oe=[se],re=["onClick"],ie={class:"pr-2 pl-2"},ne={components:{buttonLike:x}},b=Object.assign(ne,{props:{cardData:{type:Object,default:{}}},setup(n){const e=n,a=f({expText:"text-gray-700 mb-3 text-base line-clamp-6",expFlag:!0,buttontext:" more",liked:!1}),c=()=>{a.expFlag=!a.expFlag,a.expFlag?(a.expText="text-gray-700 mb-3 text-base line-clamp-6",a.buttontext=" more"):(a.expText="text-gray-700 mb-3 text-base line-clamp-None",a.buttontext=" less")},t=()=>{a.liked=!a.liked},s=()=>{navigator.clipboard.writeText(e.cardData.url),alert("Image link copied to clipboard!")};return(l,_)=>(r(),i("div",Z,[e.cardData.media_type=="image"?(r(),i("div",J,[o("img",{class:"w-full",src:e.cardData.url,alt:"space"},null,8,Q)])):(r(),i("div",R,[o("iframe",{width:"560",height:"315",src:e.cardData.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,U)])),o("div",W,[o("div",ee,h(e.cardData.title),1),o("div",te,h(e.cardData.date),1),o("button",{onClick:v(s,["prevent"]),class:"animate-wiggle py-1 rounded-md flex mb-2"},oe,8,ae),o("p",{class:y(p(a).expText)},h(e.cardData.explanation),3),o("button",{onClick:v(c,["prevent"]),class:"bg-gray-500 hover:bg-blue-400 text-white py-1 px-2 rounded-full mb-2 inline"},[o("div",ie,h(p(a).buttontext),1)],8,re),d(x,{class:"mt-1",onClick:t,click:p(a).liked,animated:!0},null,8,["click"])])]))}});var w=(n,e)=>{const a=n.__vccOpts||n;for(const[c,t]of e)a[c]=t;return a};const ce={},le={class:"sk-chase"},de=g('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6),pe=[de];function _e(n,e){return r(),i("div",le,pe)}var $=w(ce,[["render",_e]]);const he={},ue=n=>(F("data-v-ce7d5e60"),n=n(),L(),n),ge={class:"switch"},me=ue(()=>o("span",{class:"slider round"},null,-1));function fe(n,e){return r(),i("div",null,[o("label",ge,[o("input",{onClick:e[0]||(e[0]=a=>n.$emit("childMessage")),type:"checkbox"}),me])])}var D=w(he,[["render",fe],["__scopeId","data-v-ce7d5e60"]]),ve="/Spacetagram/git.png",ye="/Spacetagram/web.png",ke="/Spacetagram/linkedin.png",xe="/Spacetagram/mail.png",be="/Spacetagram/github-brands.svg",we="/Spacetagram/rss-square-solid.svg",$e="/Spacetagram/linkedin-brands.svg",De="/Spacetagram/envelope-square-solid.svg";const je=o("h1",{class:"flex justify-center text-5xl text-gray-600 dark:text-yellow-300 font mt-16 mb-6"}," s p a c e t a g r a m ",-1),Se=o("h1",{class:"flex justify-center text-xl text-gray-700 font-text dark: text-gray-400"}," spacetagram provides daily space images, like the posts and read the info, and share images!",-1),Oe=o("h1",{class:"flex justify-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400"},"Designed by Eisa Keramati as a Vue3 passion project:",-1),Ce={key:0},Fe=g('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+ve+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+ye+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+ke+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+xe+'" alt="mail"></a></span>',1),Le=[Fe],Ne={key:1},Te=g('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+be+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+we+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+$e+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+De+'" alt="mail"></a></span>',1),ze=[Te],j={props:{darkOn:{type:String,default:"light"}},setup(n){const e=n;return(a,c)=>(r(),i(k,null,[je,Se,Oe,e.darkOn=="dark"?(r(),i("div",Ce,Le)):(r(),i("div",Ne,ze))],64))}};const Be={class:"bg-gray-100 dark:bg-gray-900 flex justify-center"},Ie={key:0,class:"p-14 justify-center"},Me={class:"grid gird-cols-1 justify-center space-y-8"},Ke=o("span",null,"view more posts",-1),Pe=[Ke],Ae={key:1,class:"flex h-screen"},Ve={components:{card:b,load:$,toggle:D,headerTop:j}},qe=Object.assign(Ve,{setup(n){const e=f({fetchedData:[],firstLoad:!1,load:!1,startDay:6,darkOn:"light"}),a=()=>{var s=new Date,l=new Date(s.getTime()-e.startDay*24*60*60*1e3),_=l.getDate(),u=l.getMonth()+1,S=l.getFullYear();const O=S.toString()+"-"+u.toString()+"-"+_.toString();return e.startDay+=6,O},c=()=>{e.darkOn=="dark"?e.darkOn="light":e.darkOn="dark"},t=()=>{e.firstLoad=!1,fetch("https://api.nasa.gov/planetary/apod?start_date="+a()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(s=>(e.firstLoad=!0,s.json())).then(s=>{e.fetchedData=s.reverse()}),console.log(e.fetchedData)};return fetch("https://api.nasa.gov/planetary/apod?start_date="+a()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(s=>(e.firstLoad=!0,s.json())).then(s=>{e.fetchedData=s.reverse()}),(s,l)=>(r(),i("div",{class:y(p(e).darkOn)},[o("div",Be,[p(e).firstLoad?(r(),i("div",Ie,[d(j,{darkOn:p(e).darkOn},null,8,["darkOn"]),d(D,{onChildMessage:c,class:"flex m-auto justify-center mb-8"}),o("div",Me,[(r(!0),i(k,null,N(p(e).fetchedData,(_,u)=>(r(),T(b,{key:u,cardData:_},null,8,["cardData"]))),128))]),o("button",{onClick:t,class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex m-auto mt-6"},Pe)])):(r(),i("div",Ae,[d($,{class:"m-auto"})]))])],2))}});z.add(B);I(qe).component("fa",M).mount("#app");