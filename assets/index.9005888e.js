var P=Object.defineProperty,E=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var k=(n,e,o)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,I=(n,e)=>{for(var o in e||(e={}))j.call(e,o)&&k(n,o,e[o]);if(b)for(var o of b(e))M.call(e,o)&&k(n,o,e[o]);return n},S=(n,e)=>E(n,T(e));import{d as m,o as O,r as $,a as l,c as d,b as r,e as i,w as h,Q as u,f as z,T as D,g as w,h as V,i as p,p as J,j as q,F as g,k as f,t as _,l as B,m as Q,n as H,q as R,s as N,u as U,v as W,x as F,y as G,z as Y,A as K,B as X}from"./vendor.4116f48a.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};Z();const ee={class:"page-container"},te={class:"nav"},ne=p("Home"),oe=p("About"),ae=p("Experience"),se=p("Interests"),re={class:"footer"},ie={key:0,class:"contact center-flex"},le=m({computed:{splashPage(){return this.$route.path=="/"}}}),ce=m(S(I({},le),{setup(n){return O(()=>{const e=document.querySelector(".nav");let o=window.scrollY;window.addEventListener("scroll",()=>{o>30&&o<window.scrollY?e.classList.add("nav--hidden"):e.classList.remove("nav--hidden"),o=window.scrollY})}),(e,o)=>{const a=$("router-link"),t=$("router-view");return l(),d("div",ee,[r("nav",te,[i(a,{to:"/"},{default:h(()=>[ne]),_:1}),i(a,{to:"/me"},{default:h(()=>[oe]),_:1}),i(a,{to:"/work"},{default:h(()=>[ae]),_:1}),i(a,{to:"/interests"},{default:h(()=>[se]),_:1})]),i(t,null,{default:h(({Component:s})=>[i(D,{name:"fade",mode:"out-in"},{default:h(()=>[(l(),w(V(s)))]),_:2},1024)]),_:1}),r("footer",re,[e.splashPage?z("",!0):(l(),d("div",ie,[i(u,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"0.8rem",unelevated:""}),i(u,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"0.8rem",unelevated:""}),i(u,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"0.8rem",unelevated:""}),i(u,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"0.8rem",unelevated:""})]))])])}}})),de="modulepreload",A={},ue="/",y=function(e,o){return!o||o.length===0?e():Promise.all(o.map(a=>{if(a=`${ue}${a}`,a in A)return;A[a]=!0;const t=a.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":de,t||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),t)return new Promise((x,L)=>{c.addEventListener("load",x),c.addEventListener("error",L)})})).then(()=>e())};var he=(n,e)=>{const o=n.__vccOpts||n;for(const[a,t]of e)o[a]=t;return o};const pe={},me=n=>(J("data-v-79d25a81"),n=n(),q(),n),ge={class:"content-wrap simple-page"},fe=me(()=>r("div",{class:"p-intro"},[r("div",{class:"wave emoji"},"\u{1F44B}"),r("h1",null,"I'm Lester Huang"),r("h3",null,"A lifelong learner \u{1F4D6} with a desire for adventure \u{1F30F}")],-1)),we={class:"contact last-element"};function _e(n,e){return l(),d("div",ge,[fe,r("div",we,[i(u,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"1.1rem",unelevated:""}),i(u,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"1.1rem",unelevated:""}),i(u,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"1.1rem",unelevated:""}),i(u,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"1.1rem",unelevated:""})])])}var ye=he(pe,[["render",_e],["__scopeId","data-v-79d25a81"]]);const ve="jhu",be="JHU Engineering Innovation",ke="https://ei.jhu.edu/",Ie=[{title:"Summer Program Participant",dates:"July 2018",desc:['My first true break into STEM. I had the opportunity to participate in this selective summer program where it surveyed the various fields of engineering (not just CS). I always knew I wanted to make a career in the engineering space. But I was able to refine that done to the computing sciences/engineering after learning about boolean and logical gates. It was the very logical and straight-forward, there were no "maybes".',"However, I'm more impressed by the engineers who have been able to abstract such concepts away and create tools that billions of people use all over the world daily. Perhaps, I will be able to join their ranks in the future."],skills:[]}];var Se={shorthand:ve,company:be,website:ke,positions:Ie};const $e="lehigh",Ae="Lehigh University",Ce="https://www1.lehigh.edu/",xe=[{title:"Junior Systems Administrator",dates:"January 2022 - Present",desc:["I am excited to be working under George Todd as a JSA under Lehigh's CSE department. I hope to learn about the intricacies of networking and more niche topics that may not be covered in typical CS coursework through the management of Lehigh's network of VMs powered by Sun Microsystem machines and various side projects"],skills:[]},{title:"CS Teaching Assistant",dates:"September-December 2021",desc:["Passing a CS class is one thing, but being able to teach someone else and guide them through a course is another. I took the opportunity to serve as a TA/grader for CSE 109 to do just that.",`The CS course structure at Lehigh can be confusing for students, languages and concepts don't always coincide or are not always taught in "chronological" order, so being able to refresh myself on such topics and mentor my fellow colleagues were two great pluses.`],skills:["C Programming Language"]},{title:"B.S Computer Science | Data Science Minor",dates:"September 2019 - Expected Grad. December 2022",desc:["My alma mater. Here, I was able to expand my perspectives on the world and grow in all such ways",'Initially coming in as a computer engineer (Thanks to the JHU Engineering Innovation program), I switched my major to strictly computer science after my first programming class, CSE 002. There, I wrote my first "Hello World" program in Java and here we are...'],skills:["Algorithms","Various Programming Concepts"]}];var Le={shorthand:$e,company:Ae,website:Ce,positions:xe};const Pe="mm",Ee="Millennium Management",Te="https://www.mlp.com/",je=[{title:"Incoming Quality Assurance Analyst Intern",dates:"June - August 2022",desc:["QA will be a new frontier for me, another way to seek discomfort and learn many new things! As a QA Analyst, I expect to pick up many new things about good software development practices. The world of developers and testers are converging, with the line between the two blurring, with many new projects requiring a developer to create tests or a tester to fix a bug. So I'm very glad to be able to step into this opportunity as my second professional internship!","Along with learning new software development practices, I expect to be thrown into a large, existing codebase, where I will have to figure out the general flow and integrate new changes. This will also be a first. Continuous Integration and Delivery (CI/CD) and Automation Testing (and their frameworks) will also be new concepts I expect to pick up along the way.","Millennium, one of the world's leading alternative investment management firms,  will also be a great way for me to enter the fintech space, where I believe great innovation and disruption is ripe."],skills:["Java","Maven","CI/CD","SQL"]}];var Me={shorthand:Pe,company:Ee,website:Te,positions:je};const Oe="optum",ze="Optum",De="https://www.optum.com/",Ve=[{title:"Software Engineer Intern",dates:"June - August 2021",desc:["As my first professional software engineering internship, I learned a lot about the general software development lifecycle, from initial planning and researching phases all the way to testing and deployment.","I had a blast working on a brand new internal chatbot for Optum's cloud onboarding team, with the overall goal of reducing the onboarding process from 30+ days down to one hour. This was something that would significantly impact Optum's infrastructure, with the ability to move on-site services to the cloud quickly, which in turn, would affect UnitedHealth Group's (Optum's parent company) services.","While there wasn't a large existing codebase we had to integrate into, we were able to leverage internal databases and cross-department tools to increase the utility of our chatbot. This meant having meetings with other departments, collecting configuration details, and ensuring they were in the loop with our development cycle. Contrary to what I thought going in, most of the challenge came from research and planning, rather than actual programming.","I am very fortunate and thankful that I was able to wear various hats and work on something impactful as my first foray into the world of software engineering"],skills:["SDLC","Python","REST APIs","GraphQL","Azure"]}];var Je={shorthand:Oe,company:ze,website:De,positions:Ve};const C=[Me,Je,Le,Se];const qe=["id"],Be=["href"],Qe=["src","alt"],He=["id"],Re={class:"pos-title"},Ne={class:"pos-date"},Ue={class:"pos-skills"},We={class:"pos-desc"},Fe=m({props:{shorthand:{type:String,required:!0},company:{type:String,required:!0},website:{type:String,required:!0},positions:{type:Object,required:!0}},setup(n){return(e,o)=>(l(),d("div",{id:n.company,class:"work-content"},[r("a",{href:n.website,target:"_blank"},[r("img",{src:"/images/work/"+n.shorthand+".webp",class:"banner-img",alt:n.company.charAt(0).toUpperCase()+n.company.slice(1)+"'s Banner",loading:"lazy"},null,8,Qe)],8,Be),(l(!0),d(g,null,f(n.positions,(a,t)=>(l(),d("div",{id:n.company+"-pos-"+t,class:"pos-info"},[r("h3",Re,_(a.title),1),r("p",Ne,_(a.dates),1),r("div",Ue,[(l(!0),d(g,null,f(a.skills,s=>(l(),w(B,{label:s,ripple:!1,outline:"",rounded:""},null,8,["label"]))),256))]),r("div",We,[(l(!0),d(g,null,f(a.desc,s=>(l(),d("p",null,_(s),1))),256))])],8,He))),256))],8,qe))}});const Ge={id:"work",class:"content-wrap"},Ye={id:"work-header"},Ke=r("h2",{class:"heading"},[p("My SWE Journey "),r("span",{class:"emoji"},"\u{1F468}\u200D\u{1F4BB}")],-1),Xe=r("div",null,null,-1),Ze={id:"work-body"},et=m({setup(n){const e=Q(C[0].company);return(o,a)=>(l(),d("div",Ge,[r("div",Ye,[Ke,Xe,i(u,{id:"pdf-resume",outline:"","no-caps":"",icon:"fas fa-file-pdf",label:"Grab My Resume",size:"lg",to:"/resume.pdf",target:"_blank",padding:"sm"})]),r("div",Ze,[i(W,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),swipeable:"",animated:"",padding:"",navigation:"","transition-prev":"slide-right","transition-next":"slide-left","control-color":"blue-grey-9","navigation-icon":"fas fa-circle",class:"transparent text-black full-height"},{default:h(()=>[(l(!0),d(g,null,f(U(C),t=>(l(),w(N,{name:t.company},{default:h(()=>[i(Fe,H(R(t)),null,16)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])])]))}}),tt=[{path:"/",component:ye},{path:"/me",component:()=>y(()=>import("./AboutMe.5487087c.js"),["assets/AboutMe.5487087c.js","assets/AboutMe.fb5c8107.css","assets/vendor.4116f48a.js"])},{path:"/work",component:et},{path:"/interests",component:()=>y(()=>import("./InterestsPage.3dfafe8b.js"),["assets/InterestsPage.3dfafe8b.js","assets/InterestsPage.ed093a97.css","assets/vendor.4116f48a.js"])},{path:"/resume",redirect:n=>(window.location.replace("/resume.pdf"),"")},{path:"/:pathMatch(.*)*",component:()=>y(()=>import("./404Page.b3c915b8.js"),["assets/404Page.b3c915b8.js","assets/vendor.4116f48a.js"])}],nt=F({history:G("/"),routes:tt}),v=Y(ce);v.use(K,{plugins:{},iconSet:X});v.use(nt);v.mount("#app");export{he as _};
