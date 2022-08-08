var C=Object.defineProperty,j=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var A=(o,t,a)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,S=(o,t)=>{for(var a in t||(t={}))q.call(t,a)&&A(o,a,t[a]);if(I)for(var a of I(t))V.call(t,a)&&A(o,a,t[a]);return o},x=(o,t)=>j(o,M(t));import{d as g,o as O,r as $,a as l,c as d,b as r,e as i,w as h,T as P,f as w,g as z,Q as u,t as f,u as _,h as B,i as m,F as p,j as y,k as Q,l as U,n as D,m as H,p as J,q as R,s as W,v as F,x as N,y as Y,z as G,A as K}from"./vendor.815f5eca.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};X();const Z={class:"page-container"},ee={class:"header"},te={class:"nav"},ae=m("Home"),ne=m("About"),oe=m("Experience"),se=m("Interests"),re={key:0,class:"footer"},ie={class:"contact center-flex"},le={href:"https://github.com/L23de/l23de.github.io",target:"_blank",class:"foot-copy"},ce=g({computed:{splashPage(){return this.$route.path=="/"}}}),de=g(x(S({},ce),{setup(o){const t=new Date().getFullYear();return O(()=>{const a=document.querySelector(".nav");let n=window.scrollY;window.addEventListener("scroll",()=>{n>30&&n<window.scrollY?a.classList.add("nav--hidden"):a.classList.remove("nav--hidden"),n=window.scrollY})}),(a,n)=>{const e=$("router-link"),s=$("router-view");return l(),d("div",Z,[r("header",ee,[r("nav",te,[i(e,{to:"/"},{default:h(()=>[ae]),_:1}),i(e,{to:"/me"},{default:h(()=>[ne]),_:1}),i(e,{to:"/work"},{default:h(()=>[oe]),_:1}),i(e,{to:"/interests"},{default:h(()=>[se]),_:1})])]),i(s,null,{default:h(({Component:c})=>[i(P,{name:"fade",mode:"out-in"},{default:h(()=>[(l(),w(z(c)))]),_:2},1024)]),_:1}),i(P,{name:"fade"},{default:h(()=>[a.splashPage?B("",!0):(l(),d("footer",re,[r("div",ie,[i(u,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"0.8rem",unelevated:""}),i(u,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"0.8rem",unelevated:""}),i(u,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"0.8rem",unelevated:""}),i(u,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"0.8rem",unelevated:""})]),r("a",le,"\xA9 "+f(_(t))+"\xA0\xA0\xA0-\xA0\xA0\xA0Lester Huang",1)]))]),_:1})])}}})),he="modulepreload",E={},ue="/",v=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${ue}${n}`,n in E)return;E[n]=!0;const e=n.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":he,e||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),e)return new Promise((L,T)=>{c.addEventListener("load",L),c.addEventListener("error",T)})})).then(()=>t())};var me=(o,t)=>{const a=o.__vccOpts||o;for(const[n,e]of t)a[n]=e;return a};const pe={},ge={class:"content-wrap simple-page"},fe=r("div",{itemscope:"",itemtype:"https://schema.org/Person"},[r("div",{class:"wave emoji"},"\u{1F44B}"),r("h1",{itemprop:"name",class:"intro-head"},"I'm Lester Huang"),r("h2",{class:"intro-desc"},"A lifelong learner \u{1F4D6} with a desire for adventure \u{1F30F}")],-1),ye={class:"contact"};function we(o,t){return l(),d("div",ge,[fe,r("div",ye,[i(u,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"1.1rem",unelevated:""}),i(u,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"1.1rem",unelevated:""}),i(u,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"1.1rem",unelevated:""}),i(u,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"1.1rem",unelevated:""})])])}var _e=me(pe,[["render",we]]);const ve="jhu",be="JHU Engineering Innovation",ke="https://ei.jhu.edu/",Ie=[{title:"Summer Program Participant",dates:"July 2018",desc:['My first true break into STEM. I had the opportunity to participate in this selective summer program where it surveyed the various fields of engineering (not just CS). I always knew I wanted to make a career in the engineering space. But I was able to refine that done to the computing sciences/engineering after learning about boolean and logical gates. It was the very logical and straight-forward, there were no "maybes".',"However, I'm more impressed by the engineers who have been able to abstract such concepts away and create tools that billions of people use all over the world daily. Perhaps, I will be able to join their ranks in the future."],skills:[]}];var Ae={shorthand:ve,company:be,website:ke,positions:Ie};const Se="lehigh",xe="Lehigh University",$e="https://www1.lehigh.edu/",Pe=[{title:"Junior Systems Administrator",dates:"January 2022 - Present",desc:["In Lehigh's JSA department, there are many things that we can work on. It isn't a very strict format, so sometimes, on our biweekly calls, we might discuss Docker vs Kubernetes or we might talk about how Lehigh's systems are powered by VMs architectured by the help of Ansible or simply just dive into our main project. The main project is a Flask web app that another student (my roommate actually!) and I work on that automates the process of scheduling student lab monitors. While it is awesome that we can graduate and leave Lehigh University, and still have our creation persist on and help students and our supervisor alike, I think the ability to have someone, our supervisor, that has had professional IT experience to speak with is even more valuable."],skills:["Python","Flask","SQLite"]},{title:"CS Teaching Assistant",dates:"September-December 2021",desc:["Passing a CS class is one thing, but being able to teach someone else and guide them through a course is another. I took the opportunity to serve as a TA/grader for CSE 109 to do just that.",`The CS course structure at Lehigh can be confusing for students, languages and concepts don't always coincide or are not always taught in "chronological" order, so being able to refresh myself on such topics and mentor my fellow colleagues were two great pluses.`],skills:["C Programming Language"]},{title:"B.S Computer Science | Data Science Minor",dates:"September 2019 - Expected Grad. December 2022",desc:["My alma mater. Here, I was able to expand my perspectives on the world and grow in all such ways",'Initially coming in as a computer engineer (Thanks to the JHU Engineering Innovation program), I switched my major to strictly computer science after my first programming class, CSE 002. There, I wrote my first "Hello World" program in Java and here we are...'],skills:["Algorithms","Various Programming Concepts"]}];var Ee={shorthand:Se,company:xe,website:$e,positions:Pe};const Le="mm",Te="Millennium Management",Ce="https://www.mlp.com/",je=[{title:"Software Quality Assurance Analyst",dates:"June - August 2022",desc:["This internship experience was very unique. Having the opportunity to work at one of the largest multi-manager firms and explore the internal structure was awesome. Millennium is built around a very flat managerial structure (I would have been around 5 rungs below Israel Englander, the CEO) and their unique feature of running each team as an independent hedge fund. Working with a QA team was not something I had ever thought of, it never crossed my mind when all we do in school is the typical fullstack development process. While the majority of my internship revolved around the development of a tool (which is a core QA tool), I was able to learn a lot about the company's methods in assuring quality in their applications, as well as the general integration of development and testing by the industry.","A little more on my project: It was an internal tool that provides the QA team with monitoring and analysis of production queries. It is essentially composed of three main parts:","\u2022 Extract - Pull in production queries that have already been run","\u2022 Replay - Replay those same extract queries in a user acceptance testing (UAT) environment","\u2022 Save - Parse and analyze the statistics of both production and UAT responses, saving that in a timeseries database","That data can then be visualized by other tools. The major challenge was not to develop the program, the core logic was already created by a senior programmer specifically for his team. My challenge was to take what he had and make it generic, allowing other teams to make simple configuration changes and have it work. This included compatibility with various methods of extracting, for example, querying on elasticsearch or parsing logs on a remote Unix server, and various methods of replaying based on either team standards or data collected from production queries. This provided me the ability to work on an existing project, make it better, but also add my own feature (Making it generic essentially required redo-ing the entire program) and speak with other departments (All of whom were either in Millennium's NYC or Singapore office). I thoroughly enjoyed working at Millennium and finally working in person, being able to chat with neighbors and grab lunch with.","But being in Miami also includes living in Magic City. So throughout my 3 months, I lived in 4 different Airbnbs in 4 different VERY different communities, from the the gated serenity of Morningside to the graffiti plaid sidewalks in Wynwood to the calmness of the historic Coral Gables and eventually the familiar hustle and bustle of Brickell, synonymous to the Times Square of Miami. Sprinkle in some beach days and fancy dinners, and I would say I got the full Miami experience!"],skills:["Java","Spring","Maven","Elasticsearch","APIs","Unix"]}];var Me={shorthand:Le,company:Te,website:Ce,positions:je};const qe="optum",Ve="Optum",Oe="https://www.optum.com/",ze=[{title:"Software Engineer Intern",dates:"June - August 2021",desc:["As my first professional software engineering internship, I learned a lot about the general software development lifecycle, from initial planning and researching phases all the way to testing and deployment.","I had a blast working on a brand new internal chatbot for Optum's cloud onboarding team, with the overall goal of reducing the onboarding process from 30+ days down to one hour. This was something that would significantly impact Optum's infrastructure, with the ability to move on-site services to the cloud quickly, which in turn, would affect UnitedHealth Group's (Optum's parent company) services.","While there wasn't a large existing codebase we had to integrate into, we were able to leverage internal databases and cross-department tools to increase the utility of our chatbot. This meant having meetings with other departments, collecting configuration details, and ensuring they were in the loop with our development cycle. Contrary to what I thought going in, most of the challenge came from research and planning, rather than actual programming.","I am very fortunate and thankful that I was able to wear various hats and work on something impactful as my first foray into the world of software engineering"],skills:["SDLC","Python","REST APIs","GraphQL","Azure"]}];var Be={shorthand:qe,company:Ve,website:Oe,positions:ze};const b=[Me,Ee,Be,Ae];const Qe=["href"],Ue=["src","alt"],De={class:"pos-info"},He={class:"pos-title",itemprop:"jobTitle"},Je={class:"pos-date"},Re={class:"pos-skills"},We={class:"pos-desc"},Fe=g({props:{shorthand:{type:String,required:!0},company:{type:String,required:!0},website:{type:String,required:!0},positions:{type:Object,required:!0}},setup(o){return(t,a)=>(l(),d(p,null,[r("a",{href:o.website,target:"_blank"},[r("img",{src:"/images/work/"+o.shorthand+".webp",class:"banner-img",alt:o.company.charAt(0).toUpperCase()+o.company.slice(1)+"'s Banner",loading:"lazy"},null,8,Ue)],8,Qe),(l(!0),d(p,null,y(o.positions,n=>(l(),d("div",De,[r("h2",He,f(n.title),1),r("p",Je,f(n.dates),1),r("div",Re,[(l(!0),d(p,null,y(n.skills,e=>(l(),w(Q,{label:e,ripple:!1,outline:"",rounded:""},null,8,["label"]))),256))]),r("div",We,[(l(!0),d(p,null,y(n.desc,e=>(l(),d("p",null,f(e),1))),256))])]))),256))],64))}});const Ne={id:"work",class:"content-wrap"},Ye={id:"work-header"},Ge=r("h1",{class:"heading"},[m("My SWE Journey "),r("span",{class:"emoji"},"\u{1F468}\u200D\u{1F4BB}")],-1),Ke=r("div",null,null,-1),Xe={id:"work-body",itemscope:"",itemtype:"https://schema.org/Person"},Ze={class:"row justify-center"},et=g({setup(o){const t=U(b[0].shorthand);let a=[];return b.forEach((n,e)=>{a.push({label:e+1,value:n.shorthand})}),(n,e)=>(l(),d("div",Ne,[r("div",Ye,[Ge,Ke,i(u,{id:"pdf-resume",outline:"","no-caps":"",icon:"fas fa-file-pdf",label:"Grab My Resume",size:"lg",to:"/resume.pdf",target:"_blank",padding:"sm"})]),r("div",Xe,[i(R,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),swipeable:"",animated:"",padding:"",infinite:"","transition-prev":"slide-right","transition-next":"slide-left",class:"transparent text-black full-height"},{default:h(()=>[(l(!0),d(p,null,y(_(b),s=>(l(),w(J,{name:s.shorthand,class:"work-content disable-select carousel"},{default:h(()=>[i(Fe,D(H(s)),null,16)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"]),r("div",Ze,[i(W,{unelevated:"",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),"toggle-color":"orange-1","toggle-text-color":"black",options:_(a)},null,8,["modelValue","options"])])])]))}}),tt=[{path:"/",component:_e},{path:"/me",component:()=>v(()=>import("./AboutMe.8b383340.js"),["assets/AboutMe.8b383340.js","assets/AboutMe.39b01923.css","assets/vendor.815f5eca.js"])},{path:"/work",component:et},{path:"/interests",component:()=>v(()=>import("./InterestsPage.82cf08cd.js"),["assets/InterestsPage.82cf08cd.js","assets/InterestsPage.9eb7bc5d.css","assets/vendor.815f5eca.js"])},{path:"/resume",redirect:o=>(window.location.replace("/resume.pdf"),"")},{path:"/:pathMatch(.*)*",component:()=>v(()=>import("./404Page.e6dcb65a.js"),["assets/404Page.e6dcb65a.js","assets/vendor.815f5eca.js"])}],at=F({history:N("/"),routes:tt}),k=Y(de);k.use(G,{plugins:{},iconSet:K});k.use(at);k.mount("#app");export{me as _};
