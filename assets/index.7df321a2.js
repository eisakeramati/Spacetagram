import{r as C,o,c as i,a as r,b as m,d,e as f,t as h,w as y,n as v,u as p,f as u,p as F,g as L,F as k,h as N,i as T,l as z,_ as B,j as I,k as M,m as K}from"./vendor.25bd91b1.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};P();var A="/Spacetagram/share-alt-solid.svg";const V={key:0},q={class:"animate-wiggle w-8 h-8"},E={key:0},Y={key:1},G={key:1},H={class:"w-8 h-8"},X={key:0},Z={key:1},x={props:{click:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(n){const t=n;return(a,c)=>{const e=C("fa");return t.click?(o(),i("div",V,[r("button",q,[m(a.$slots,"buttonText",{class:"justify-center"},()=>[t.click?(o(),i("div",E,[d(e,{icon:"heart",color:"#C41E3A",size:"lg"})])):(o(),i("div",Y,[d(e,{icon:"heart",color:"#484848",size:"lg"})]))])])])):(o(),i("div",G,[r("button",H,[m(a.$slots,"buttonText",{class:"justify-center"},()=>[t.click?(o(),i("div",X,[d(e,{icon:"heart",color:"#C41E3A",size:"lg"})])):(o(),i("div",Z,[d(e,{icon:"heart",color:"#484848",size:"lg"})]))])])]))}}},J={class:"max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-500"},Q={key:0},R=["src"],U={key:1},W=["src"],tt={class:"px-6 py-4"},et={class:"dark:text-gray-300 font-bold text-xl mb-1"},at={class:"dark:text-gray-300 text-l mb-2"},st=["onClick"],rt=r("div",{class:"pr-2 pl-2"},[r("img",{style:{width:"17px"},src:A,alt:"github"})],-1),ot=[rt],it=["onClick"],nt={class:"pr-2 pl-2"},ct={components:{buttonLike:x}},b=Object.assign(ct,{props:{cardData:{type:Object,default:{}}},setup(n){const t=n,a=f({expText:"dark:text-gray-300 text-gray-700 mb-3 text-base line-clamp-6",expFlag:!0,buttontext:" more",liked:!1}),c=()=>{a.expFlag=!a.expFlag,a.expFlag?(a.expText="dark:text-gray-300 text-gray-700 mb-3 text-base line-clamp-6",a.buttontext=" more"):(a.expText="dark:text-gray-300 text-gray-700 mb-3 text-base line-clamp-None",a.buttontext=" less")},e=()=>{a.liked=!a.liked},s=()=>{navigator.clipboard.writeText(t.cardData.url).then(()=>{alert("Image link copied to clipboard!")}).catch(()=>{alert("Something went wrong, try again!")})};return(l,_)=>(o(),i("div",J,[t.cardData.media_type=="image"?(o(),i("div",Q,[r("img",{class:"w-full",src:t.cardData.url,alt:"space"},null,8,R)])):(o(),i("div",U,[r("iframe",{width:"380",height:"315",src:t.cardData.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,W)])),r("div",tt,[r("div",et,h(t.cardData.title),1),r("div",at,h(t.cardData.date),1),r("button",{onClick:y(s,["prevent"]),class:"animate-wiggle py-1 rounded-md flex mb-2"},ot,8,st),r("p",{class:v(p(a).expText)},h(t.cardData.explanation),3),r("button",{onClick:y(c,["prevent"]),class:"bg-gray-500 dark:bg-gray-400 hover:bg-blue-400 text-white py-1 px-2 rounded-full mb-2 inline"},[r("div",nt,h(p(a).buttontext),1)],8,it),d(x,{class:"mt-1",onClick:e,click:p(a).liked,animated:!0},null,8,["click"])])]))}});var w=(n,t)=>{const a=n.__vccOpts||n;for(const[c,e]of t)a[c]=e;return a};const lt={},dt={class:"sk-chase"},pt=u('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6),_t=[pt];function ht(n,t){return o(),i("div",dt,_t)}var $=w(lt,[["render",ht]]);const gt={},ut=n=>(F("data-v-ce7d5e60"),n=n(),L(),n),mt={class:"switch"},ft=ut(()=>r("span",{class:"slider round"},null,-1));function yt(n,t){return o(),i("div",null,[r("label",mt,[r("input",{onClick:t[0]||(t[0]=a=>n.$emit("childMessage")),type:"checkbox"}),ft])])}var D=w(gt,[["render",yt],["__scopeId","data-v-ce7d5e60"]]),vt="/Spacetagram/git.png",kt="/Spacetagram/web.png",xt="/Spacetagram/linkedin.png",bt="/Spacetagram/mail.png",wt="/Spacetagram/github-brands.svg",$t="/Spacetagram/rss-square-solid.svg",Dt="/Spacetagram/linkedin-brands.svg",jt="/Spacetagram/envelope-square-solid.svg";const St=r("h1",{class:"flex justify-center text-center text-5xl text-gray-600 dark:text-yellow-300 font mt-16 mb-6"}," s p a c e t a g r a m ",-1),Ot=r("h1",{class:"flex justify-center text-center text-xl text-gray-700 font-text dark: text-gray-400"}," spacetagram provides daily space images. like the posts and read the info, and share images!",-1),Ct=r("h1",{class:"flex justify-center text-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400"},"Designed by Eisa Keramati as a Vue3 passion project:",-1),Ft={key:0},Lt=u('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+vt+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+kt+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+xt+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+bt+'" alt="mail"></a></span>',1),Nt=[Lt],Tt={key:1},zt=u('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+wt+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+$t+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+Dt+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+jt+'" alt="mail"></a></span>',1),Bt=[zt],j={props:{darkOn:{type:String,default:"light"}},setup(n){const t=n;return(a,c)=>(o(),i(k,null,[St,Ot,Ct,t.darkOn=="dark"?(o(),i("div",Ft,Nt)):(o(),i("div",Tt,Bt))],64))}};const It={class:"bg-gray-100 dark:bg-gray-900 flex justify-center"},Mt={key:0,class:"p-14 justify-center"},Kt={class:"grid gird-cols-1 justify-center space-y-8"},Pt=r("span",null,"view more posts",-1),At=[Pt],Vt={key:1,class:"flex h-screen"},qt={components:{card:b,load:$,toggle:D,headerTop:j}},Et=Object.assign(qt,{setup(n){const t=f({fetchedData:[],firstLoad:!1,load:!1,startDay:6,darkOn:"light"}),a=()=>{var s=new Date,l=new Date(s.getTime()-t.startDay*24*60*60*1e3),_=l.getDate(),g=l.getMonth()+1,S=l.getFullYear();const O=S.toString()+"-"+g.toString()+"-"+_.toString();return t.startDay+=6,O},c=()=>{t.darkOn=="dark"?t.darkOn="light":t.darkOn="dark"},e=()=>{t.firstLoad=!1,fetch("https://api.nasa.gov/planetary/apod?start_date="+a()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(s=>(t.firstLoad=!0,s.json())).then(s=>{t.fetchedData=s.reverse()})};return fetch("https://api.nasa.gov/planetary/apod?start_date="+a()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(s=>(t.firstLoad=!0,s.json())).then(s=>{t.fetchedData=s.reverse()}),(s,l)=>(o(),i("div",{class:v(p(t).darkOn)},[r("div",It,[p(t).firstLoad?(o(),i("div",Mt,[d(j,{darkOn:p(t).darkOn},null,8,["darkOn"]),d(D,{onChildMessage:c,class:"flex m-auto justify-center mb-8"}),r("div",Kt,[(o(!0),i(k,null,N(p(t).fetchedData,(_,g)=>(o(),T(b,{key:g,cardData:_},null,8,["cardData"]))),128))]),r("button",{onClick:e,class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex m-auto mt-6"},At)])):(o(),i("div",Vt,[d($,{class:"m-auto"})]))])],2))}});z.add(B);I(Et).component("fa",M).use(K).mount("#app");
