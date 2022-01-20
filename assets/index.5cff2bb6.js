import{r as L,o as r,c as i,a,b as y,d as _,e as x,t as h,w as v,n as k,u as d,f as m,p as F,g as N,F as b,h as u,i as T,j as z,l as B,_ as I,k as M,m as K,q as P}from"./vendor.898e0a8d.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};V();var q="/Spacetagram/sun-solid.svg",A="/Spacetagram/moon.png",E="/Spacetagram/share-alt-solid.svg";const Y={key:0},G={class:"animate-wiggle w-8 h-8"},H={key:0},X={key:1},Z={key:1},J={class:"w-8 h-8"},Q={key:0},R={key:1},w={props:{click:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(n){const t=n;return(s,c)=>{const e=L("fa");return t.click?(r(),i("div",Y,[a("button",G,[y(s.$slots,"buttonText",{class:"justify-center"},()=>[t.click?(r(),i("div",H,[_(e,{icon:"heart",color:"#C41E3A",size:"lg"})])):(r(),i("div",X,[_(e,{icon:"heart",color:"#484848",size:"lg"})]))])])])):(r(),i("div",Z,[a("button",J,[y(s.$slots,"buttonText",{class:"justify-center"},()=>[t.click?(r(),i("div",Q,[_(e,{icon:"heart",color:"#C41E3A",size:"lg"})])):(r(),i("div",R,[_(e,{icon:"heart",color:"#484848",size:"lg"})]))])])]))}}},U={class:"max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-500"},W={key:0},tt=["src"],et={key:1},at=["src"],st={class:"px-6 py-4"},ot={class:"dark:text-gray-300 font-bold text-xl mb-1"},rt={class:"dark:text-gray-300 text-l mb-2"},it=["onClick"],nt=a("div",{class:"pr-2 pl-2"},[a("img",{style:{width:"17px"},src:E,alt:"github"})],-1),ct=[nt],dt=["onClick"],lt={class:"pr-2 pl-2"},_t={components:{buttonLike:w}},$=Object.assign(_t,{props:{cardData:{type:Object,default:{}}},setup(n){const t=n,s=x({expText:"dark:text-gray-300 text-gray-700 mb-3 text-base line-clamp-6",expFlag:!0,buttontext:" more",liked:!1}),c=()=>{s.expFlag=!s.expFlag,s.expFlag?(s.expText="dark:text-gray-300 text-gray-700 mb-3 text-base line-clamp-6",s.buttontext=" more"):(s.expText="dark:text-gray-300 text-gray-700 mb-3 text-base line-clamp-None",s.buttontext=" less")},e=()=>{s.liked=!s.liked},o=()=>{navigator.clipboard.writeText(t.cardData.url).then(()=>{alert("Image link copied to clipboard!")}).catch(()=>{alert("Something went wrong, try again!")})};return(l,p)=>(r(),i("div",U,[t.cardData.media_type=="image"?(r(),i("div",W,[a("img",{class:"w-full",src:t.cardData.url,alt:"space"},null,8,tt)])):(r(),i("div",et,[a("iframe",{width:"384",height:"315",src:t.cardData.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,at)])),a("div",st,[a("div",ot,h(t.cardData.title),1),a("div",rt,h(t.cardData.date),1),a("button",{onClick:v(o,["prevent"]),class:"animate-wiggle py-1 rounded-md flex mb-2"},ct,8,it),a("p",{class:k(d(s).expText)},h(t.cardData.explanation),3),a("button",{onClick:v(c,["prevent"]),class:"bg-gray-500 dark:bg-gray-400 hover:bg-blue-400 text-white py-1 px-2 rounded-full mb-2 inline"},[a("div",lt,h(d(s).buttontext),1)],8,dt),_(w,{class:"mt-1",onClick:e,click:d(s).liked,animated:!0},null,8,["click"])])]))}});var j=(n,t)=>{const s=n.__vccOpts||n;for(const[c,e]of t)s[c]=e;return s};const pt={},ht={class:"sk-chase"},gt=m('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6),mt=[gt];function ut(n,t){return r(),i("div",ht,mt)}var f=j(pt,[["render",ut]]);const ft={},yt=n=>(F("data-v-ce7d5e60"),n=n(),N(),n),xt={class:"switch"},vt=yt(()=>a("span",{class:"slider round"},null,-1));function kt(n,t){return r(),i("div",null,[a("label",xt,[a("input",{onClick:t[0]||(t[0]=s=>n.$emit("childMessage")),type:"checkbox"}),vt])])}var S=j(ft,[["render",kt],["__scopeId","data-v-ce7d5e60"]]),bt="/Spacetagram/git.png",wt="/Spacetagram/web.png",$t="/Spacetagram/linkedin.png",jt="/Spacetagram/mail.png",St="/Spacetagram/github-brands.svg",Dt="/Spacetagram/rss-square-solid.svg",Ot="/Spacetagram/linkedin-brands.svg",Ct="/Spacetagram/envelope-square-solid.svg";const Lt=a("h1",{class:"flex justify-center text-center mdm:text-5xl text-gray-600 dark:text-yellow-300 font mt-16 mb-6 xxs:text-2xl"}," s p a c e t a g r a m ",-1),Ft=a("h1",{class:"flex justify-center text-center text-xl text-gray-700 font-text dark: text-gray-400"}," spacetagram provides daily space images. like the posts and read the info, and share images!",-1),Nt=a("h1",{class:"flex justify-center text-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400"},"Toggle between dark and light mode and bottom of the page can provide more posts!",-1),Tt=a("h1",{class:"flex justify-center text-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400"},"Designed by Eisa Keramati as a Vue3 passion project:",-1),zt={key:0},Bt=m('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+bt+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+wt+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+$t+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+jt+'" alt="mail"></a></span>',1),It=[Bt],Mt={key:1},Kt=m('<span class="flex gap-6 justify-center mt-6 mb-6"><a href="https://github.com/eisakeramati"><img width="30px" src="'+St+'" alt="github"></a><a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="'+Dt+'" alt="website"></a><a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="'+Ot+'" alt="linkedin"></a><a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="'+Ct+'" alt="mail"></a></span>',1),Pt=[Kt],D={props:{darkOn:{type:String,default:"light"}},setup(n){const t=n;return(s,c)=>(r(),i(b,null,[Lt,Ft,Nt,Tt,t.darkOn=="dark"?(r(),i("div",zt,It)):(r(),i("div",Mt,Pt))],64))}};const Vt={class:"bg-gray-100 dark:bg-gray-900 flex justify-center"},qt={key:0,class:"p-14 justify-center"},At={key:0,class:"flex m-auto justify-center mb-5"},Et=a("img",{style:{width:"30px"},src:q,alt:"sun"},null,-1),Yt=[Et],Gt={key:1,class:"flex m-auto justify-center mb-5"},Ht=a("img",{style:{width:"30px"},width:"30px",src:A,alt:"moon"},null,-1),Xt=[Ht],Zt={class:"grid gird-cols-1 justify-center space-y-8"},Jt=a("span",null,"view more posts",-1),Qt=[Jt],Rt={key:2},Ut={key:1,class:"flex h-screen"},Wt={components:{card:$,load:f,toggle:S,headerTop:D}},te=Object.assign(Wt,{setup(n){const t=x({fetchedData:[],firstLoad:!1,secondLoad:!1,load:!1,startDay:6,darkOn:"light"}),s=()=>{var o=new Date,l=new Date(o.getTime()-t.startDay*24*60*60*1e3),p=l.getDate(),g=l.getMonth()+1,O=l.getFullYear();const C=O.toString()+"-"+g.toString()+"-"+p.toString();return t.startDay+=6,C},c=()=>{t.darkOn=="dark"?t.darkOn="light":t.darkOn="dark"},e=()=>{t.secondLoad=!0,fetch("https://api.nasa.gov/planetary/apod?start_date="+s()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(o=>(t.secondLoad=!1,o.json())).then(o=>{t.fetchedData=o.reverse()})};return fetch("https://api.nasa.gov/planetary/apod?start_date="+s()+"&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD").then(o=>(t.firstLoad=!0,o.json())).then(o=>{t.fetchedData=o.reverse()}),(o,l)=>(r(),i("div",{class:k(d(t).darkOn)},[a("div",Vt,[d(t).firstLoad?(r(),i("div",qt,[_(D,{darkOn:d(t).darkOn},null,8,["darkOn"]),_(S,{onChildMessage:c,class:"flex m-auto justify-center mb-5"}),d(t).darkOn=="light"?(r(),i("div",At,Yt)):u("",!0),d(t).darkOn=="dark"?(r(),i("div",Gt,Xt)):u("",!0),a("div",Zt,[(r(!0),i(b,null,T(d(t).fetchedData,(p,g)=>(r(),z($,{key:g,cardData:p},null,8,["cardData"]))),128))]),a("button",{onClick:e,class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex m-auto mt-6"},Qt),d(t).secondLoad?(r(),i("div",Rt,[_(f,{class:"m-auto mt-8"})])):u("",!0)])):(r(),i("div",Ut,[_(f,{class:"m-auto"})]))])],2))}});B.add(I);M(te).component("fa",K).use(P).mount("#app");
