var C=Object.defineProperty,j=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var A=(o,t,a)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,x=(o,t)=>{for(var a in t||(t={}))q.call(t,a)&&A(o,a,t[a]);if(I)for(var a of I(t))z.call(t,a)&&A(o,a,t[a]);return o},S=(o,t)=>j(o,M(t));import{d as g,o as V,r as $,a as l,c as d,b as r,e as i,w as u,T as E,f as w,g as O,Q as h,t as f,u as v,h as D,i as m,F as p,j as y,k as B,l as Q,n as R,m as U,p as H,q as J,s as W,v as N,x as F,y as K,z as Y,A as G}from"./vendor.609aa622.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};X();const Z={class:"page-container"},ee={class:"header"},te={class:"nav"},ae=m("Home"),ne=m("About"),oe=m("Experience"),se=m("Interests"),re={key:0,class:"footer"},ie={class:"contact center-flex"},le={href:"https://github.com/L23de/l23de.github.io",target:"_blank",class:"foot-copy"},ce=g({computed:{splashPage(){return this.$route.path=="/"}}}),de=g(S(x({},ce),{setup(o){const t=new Date().getFullYear();return V(()=>{const a=document.querySelector(".nav");let n=window.scrollY;window.addEventListener("scroll",()=>{n>30&&n<window.scrollY?a.classList.add("nav--hidden"):a.classList.remove("nav--hidden"),n=window.scrollY})}),(a,n)=>{const e=$("router-link"),s=$("router-view");return l(),d("div",Z,[r("header",ee,[r("nav",te,[i(e,{to:"/"},{default:u(()=>[ae]),_:1}),i(e,{to:"/me"},{default:u(()=>[ne]),_:1}),i(e,{to:"/work"},{default:u(()=>[oe]),_:1}),i(e,{to:"/interests"},{default:u(()=>[se]),_:1})])]),i(s,null,{default:u(({Component:c})=>[i(E,{name:"fade",mode:"out-in"},{default:u(()=>[(l(),w(O(c)))]),_:2},1024)]),_:1}),i(E,{name:"fade"},{default:u(()=>[a.splashPage?D("",!0):(l(),d("footer",re,[r("div",ie,[i(h,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"0.8rem",unelevated:""}),i(h,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"0.8rem",unelevated:""}),i(h,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"0.8rem",unelevated:""}),i(h,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"0.8rem",unelevated:""}),i(h,{round:"",icon:"far fa-calendar",type:"a",href:"https://calendly.com/huangl302d/30min",target:"_blank",size:"0.8rem",unelevated:""})]),r("a",le,"\xA9 "+f(v(t))+"\xA0\xA0\xA0-\xA0\xA0\xA0Lester Huang",1)]))]),_:1})])}}})),he="modulepreload",P={},ue="/",b=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${ue}${n}`,n in P)return;P[n]=!0;const e=n.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":he,e||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),e)return new Promise((T,L)=>{c.addEventListener("load",T),c.addEventListener("error",L)})})).then(()=>t())};var me=(o,t)=>{const a=o.__vccOpts||o;for(const[n,e]of t)a[n]=e;return a};const pe={},ge={class:"content-wrap simple-page"},fe=r("div",{itemscope:"",itemtype:"https://schema.org/Person"},[r("div",{class:"wave emoji"},"\u{1F44B}"),r("h1",{itemprop:"name",class:"intro-head"},"I'm Lester Huang"),r("h2",{class:"intro-desc"}," A lifelong learner \u{1F4D6} with a desire for adventure \u{1F30F} ")],-1),ye={class:"contact"};function we(o,t){return l(),d("div",ge,[fe,r("div",ye,[i(h,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"1.1rem",unelevated:""}),i(h,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"1.1rem",unelevated:""}),i(h,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"1.1rem",unelevated:""}),i(h,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"1.1rem",unelevated:""}),i(h,{round:"",icon:"far fa-calendar",type:"a",href:"https://calendly.com/huangl302d/30min",target:"_blank",size:"1.1rem",unelevated:""})])])}var ve=me(pe,[["render",we]]);const be="jh",_e="JHU Engineering Innovation",ke="https://ei.jhu.edu/",Ie=[{title:"Summer Program Participant",dates:"July 2018",desc:['My first true break into STEM. I had the opportunity to participate in this selective summer program where it surveyed the various fields of engineering (not just CS). I always knew I wanted to make a career in the engineering space. But I was able to refine that done to the computing sciences/engineering after learning about boolean and logical gates. It was the very logical and straight-forward, there were no "maybes".',"However, I'm more impressed by the engineers who have been able to abstract such concepts away and create tools that billions of people use all over the world daily. Perhaps, I will be able to join their ranks in the future."],skills:[]}];var Ae={shorthand:be,company:_e,website:ke,positions:Ie};const xe="lu",Se="Lehigh University",$e="https://www1.lehigh.edu/",Ee=[{title:"Junior Systems Administrator",dates:"January - December 2022",desc:["In Lehigh's JSA department, there are many things that we can work on. It isn't a very strict format, so sometimes, on our biweekly calls, we might discuss Docker vs Kubernetes or we might talk about how Lehigh's systems are powered by VMs architectured by the help of Ansible or simply just dive into our main project. The main project is a Flask web app that another student (my roommate actually!) and I work on that automates the process of scheduling student lab monitors. While it is awesome that we can graduate and leave Lehigh University, and still have our creation persist on and help students and our supervisor alike, I think the ability to have someone, our supervisor, that has had professional IT experience to speak with is even more valuable."],skills:["Python","Flask","SQLite"]},{title:"CS Teaching Assistant",dates:"September - December 2021",desc:["Passing a CS class is one thing, but being able to teach someone else and guide them through a course is another. I took the opportunity to serve as a TA/grader for CSE 109 to do just that.",`The CS course structure at Lehigh can be confusing for students, languages and concepts don't always coincide or are not always taught in "chronological" order, so being able to refresh myself on such topics and mentor my fellow colleagues were two great pluses.`],skills:["C Programming Language"]},{title:"B.S Computer Science | Data Science Minor",dates:"September 2019 - December 2022",desc:["My alma mater. Here, I was able to expand my perspectives on the world and grow in all such ways",'Initially coming in as a computer engineer (Thanks to the JHU Engineering Innovation program), I switched my major to strictly computer science after my first programming class, CSE 002. There, I wrote my first "Hello World" program in Java and here we are...'],skills:["Algorithms","Various Programming Concepts"]}];var Pe={shorthand:xe,company:Se,website:$e,positions:Ee};const Te="mm",Le="Millennium Management",Ce="https://www.mlp.com/",je=[{title:"Software Quality Assurance Analyst",dates:"June - August 2022",desc:["This internship experience was very unique. Having the opportunity to work at one of the largest multi-manager firms and explore the internal structure was awesome. Millennium is built around a very flat managerial structure (I would have been around 5 rungs below Israel Englander, the CEO) and their unique feature of running each team as an independent hedge fund. Working with a QA team was not something I had ever thought of, it never crossed my mind when all we do in school is the typical fullstack development process. While the majority of my internship revolved around the development of a tool (which is a core QA tool), I was able to learn a lot about the company's methods in assuring quality in their applications, as well as the general integration of development and testing by the industry.","A little more on my project: It was an internal tool that provides the QA team with monitoring and analysis of production queries. It is essentially composed of three main parts:","\u2022 Extract - Pull in production queries that have already been run","\u2022 Replay - Replay those same extract queries in a user acceptance testing (UAT) environment","\u2022 Save - Parse and analyze the statistics of both production and UAT responses, saving that in a timeseries database","That data can then be visualized by other tools. The major challenge was not to develop the program, the core logic was already created by a senior programmer specifically for his team. My challenge was to take what he had and make it generic, allowing other teams to make simple configuration changes and have it work. This included compatibility with various methods of extracting, for example, querying on elasticsearch or parsing logs on a remote Unix server, and various methods of replaying based on either team standards or data collected from production queries. This provided me the ability to work on an existing project, make it better, but also add my own feature (Making it generic essentially required redo-ing the entire program) and speak with other departments (All of whom were either in Millennium's NYC or Singapore office). I thoroughly enjoyed working at Millennium and finally working in person, being able to chat with neighbors and grab lunch with.","But being in Miami also includes living in Magic City. So throughout my 3 months, I lived in 4 different Airbnbs in 4 different VERY different communities, from the the gated serenity of Morningside to the graffiti plaid sidewalks in Wynwood to the calmness of the historic Coral Gables and eventually the familiar hustle and bustle of Brickell, synonymous to the Times Square of Miami. Sprinkle in some beach days and fancy dinners, and I would say I got the full Miami experience!"],skills:["Java","Spring","Maven","Elasticsearch","APIs","Unix"]}];var Me={shorthand:Te,company:Le,website:Ce,positions:je};const qe="op",ze="Optum",Ve="https://www.optum.com/",Oe=[{title:"Software Engineer Intern",dates:"June - August 2021",desc:["As my first professional software engineering internship, I learned a lot about the general software development lifecycle, from initial planning and researching phases all the way to testing and deployment.","I had a blast working on a brand new internal chatbot for Optum's cloud onboarding team, with the overall goal of reducing the onboarding process from 30+ days down to one hour. This was something that would significantly impact Optum's infrastructure, with the ability to move on-site services to the cloud quickly, which in turn, would affect UnitedHealth Group's (Optum's parent company) services.","While there wasn't a large existing codebase we had to integrate into, we were able to leverage internal databases and cross-department tools to increase the utility of our chatbot. This meant having meetings with other departments, collecting configuration details, and ensuring they were in the loop with our development cycle. Contrary to what I thought going in, most of the challenge came from research and planning, rather than actual programming.","I am very fortunate and thankful that I was able to wear various hats and work on something impactful as my first foray into the world of software engineering."],skills:["SDLC","Python","REST APIs","GraphQL","Azure"]}];var De={shorthand:qe,company:ze,website:Ve,positions:Oe};const Be="ka",Qe="Kodak Alaris",Re="https://www.kodakalaris.com/",Ue=[{title:"Software Engineer",dates:"March 2023 - Present",desc:["Kodak has had a long history with the city of Rochester. That's where I ended up moving for my first full-time position out of college. I am still exploring the city of Rochester, having gone 3 months and counting without eating a garbage plate yet (Google it!).","Kodak Alaris is quite different from Eastman Kodak, the one that you were probably thinking about, but many of my coworkers were  long-time employees at Eastman Kodak, all of whom have developed a strong breadth of knowledge and community.","Coming in, I helped fill in for a very small, but mighty team. It was 4 people (including myself) that was essentially in charge of all the software for the Travel & Leisure division of the business. This involved creating and maintaining software for ride capture systems of major theme parks, cruise ships, and popular tourist attractions.","The company is also going through a major technological shift, converting their existing codebases from monorepos to microservices. And I hope my team and I will lead this initiative for the company, by not only modernizing our architecture, but also by introducing a fresh viewpoint changing development practices and culture for the better."],skills:["C#",".NET","Docker","Azure","Microservices"]}];var He={shorthand:Be,company:Qe,website:Re,positions:Ue};const _=[He,Me,Pe,De,Ae];const Je=["href"],We=["src","alt"],Ne={class:"pos-info"},Fe={class:"pos-title",itemprop:"jobTitle"},Ke={class:"pos-date"},Ye={class:"pos-skills"},Ge={class:"pos-desc"},Xe=g({props:{shorthand:{type:String,required:!0},company:{type:String,required:!0},website:{type:String,required:!0},positions:{type:Object,required:!0}},setup(o){return(t,a)=>(l(),d(p,null,[r("a",{href:o.website,target:"_blank"},[r("img",{src:"/images/work/"+o.shorthand+".webp",class:"banner-img",alt:o.company.charAt(0).toUpperCase()+o.company.slice(1)+"'s Banner",loading:"lazy"},null,8,We)],8,Je),(l(!0),d(p,null,y(o.positions,n=>(l(),d("div",Ne,[r("h2",Fe,f(n.title),1),r("p",Ke,f(n.dates),1),r("div",Ye,[(l(!0),d(p,null,y(n.skills,e=>(l(),w(B,{label:e,ripple:!1,outline:"",rounded:""},null,8,["label"]))),256))]),r("div",Ge,[(l(!0),d(p,null,y(n.desc,e=>(l(),d("p",null,f(e),1))),256))])]))),256))],64))}});const Ze={id:"work",class:"content-wrap"},et={id:"work-header"},tt=r("h1",{class:"heading"},[m("My SWE Journey "),r("span",{class:"emoji"},"\u{1F468}\u200D\u{1F4BB}")],-1),at=r("div",null,null,-1),nt={id:"work-body",itemscope:"",itemtype:"https://schema.org/Person"},ot={class:"row justify-center"},st=g({setup(o){const t=Q(_[0].shorthand);let a=[];return _.forEach((n,e)=>{a.push({label:e+1,value:n.shorthand})}),(n,e)=>(l(),d("div",Ze,[r("div",et,[tt,at,i(h,{id:"pdf-resume",outline:"","no-caps":"",icon:"fas fa-file-pdf",label:"Grab My Resume",size:"lg",to:"/resume.pdf",target:"_blank",padding:"sm"})]),r("div",nt,[i(J,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),swipeable:"",animated:"",padding:"",infinite:"","transition-prev":"slide-right","transition-next":"slide-left",class:"transparent text-black full-height"},{default:u(()=>[(l(!0),d(p,null,y(v(_),s=>(l(),w(H,{name:s.shorthand,class:"work-content disable-select carousel"},{default:u(()=>[i(Xe,R(U(s)),null,16)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"]),r("div",ot,[i(W,{unelevated:"",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),"toggle-color":"orange-1","toggle-text-color":"black",options:v(a)},null,8,["modelValue","options"])])])]))}}),rt=[{path:"/",component:ve},{path:"/me",component:()=>b(()=>import("./AboutMe.2dfed289.js"),["assets/AboutMe.2dfed289.js","assets/AboutMe.caf318f9.css","assets/vendor.609aa622.js"])},{path:"/work",component:st},{path:"/interests",component:()=>b(()=>import("./InterestsPage.31e29452.js"),["assets/InterestsPage.31e29452.js","assets/InterestsPage.9eb7bc5d.css","assets/vendor.609aa622.js"])},{path:"/resume",redirect:o=>(window.location.replace("/resume.pdf"),"")},{path:"/:pathMatch(.*)*",component:()=>b(()=>import("./404Page.9e501687.js"),["assets/404Page.9e501687.js","assets/vendor.609aa622.js"])}],it=N({history:F("/"),routes:rt}),k=K(de);k.use(Y,{plugins:{},iconSet:G});k.use(it);k.mount("#app");export{me as _};
