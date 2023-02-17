"use strict";(self.webpackChunktanuki_blog=self.webpackChunktanuki_blog||[]).push([[332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=a(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var a=2;a<o;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=n(7462),i=(n(7294),n(3905));const o={slug:"github-actions-introduction",title:"GitHub Actions - Ton premier workflow step by step!",authors:["lloyd"],tags:["github","actions","workflows","devops"]},l="GitHub Actions - Ton premier workflow step by step!",s={permalink:"/blog/github-actions-introduction",source:"@site/blog/2023-02-17-github-actions-introduction/GitHub Actions - Ton premier workflow step by step 0e9e63cc6ea04ee3b4068124af3a72f6.md",title:"GitHub Actions - Ton premier workflow step by step!",description:"Pour commencer, GitHub Action, c'est quoi?",date:"2023-02-17T00:00:00.000Z",formattedDate:"17 f\xe9vrier 2023",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"actions",permalink:"/blog/tags/actions"},{label:"workflows",permalink:"/blog/tags/workflows"},{label:"devops",permalink:"/blog/tags/devops"}],readingTime:4.905,hasTruncateMarker:!1,authors:[{name:"Lloyd Colart",title:"Developer - Devops Enthusiast - Creator",url:"https://github.com/Lloydcol",imageURL:"https://avatars.githubusercontent.com/u/55253106?s=400&u=4c6e038627560fea1c1a2ece11a335b59a6b1540&v=4",key:"lloyd"}],frontMatter:{slug:"github-actions-introduction",title:"GitHub Actions - Ton premier workflow step by step!",authors:["lloyd"],tags:["github","actions","workflows","devops"]},prevItem:{title:"Cognitive Services pt1 \ud83e\udde0",permalink:"/blog/cognitive-services-pt1"},nextItem:{title:"En construction \ud83d\uded1\ud83d\udea7",permalink:"/blog/firstcommit"}},u={authorsImageUrls:[void 0]},a=[{value:"Pour commencer, GitHub Action, c&#39;est quoi?",id:"pour-commencer-github-action-cest-quoi",level:2},{value:"Le nerf de la guerre: les workflows.",id:"le-nerf-de-la-guerre-les-workflows",level:2},{value:"Le Runner.",id:"le-runner",level:2},{value:"The eyes of the Triggers",id:"the-eyes-of-the-triggers",level:2},{value:"Les Steps.",id:"les-steps",level:2},{value:"Les Jobs.",id:"les-jobs",level:2},{value:"Anatomie d&#39;un workflow (derni\xe8re \xe9tape avant la grande aventure).",id:"anatomie-dun-workflow-derni\xe8re-\xe9tape-avant-la-grande-aventure",level:2},{value:"Cr\xe9er et ex\xe9cuter son premier workflow de base! (Youpi on y est!)",id:"cr\xe9er-et-ex\xe9cuter-son-premier-workflow-de-base-youpi-on-y-est",level:2},{value:"Run workflow! Run!!!!",id:"run-workflow-run",level:2},{value:"V\xe9rifier l&#39;execution de notre workflow.",id:"v\xe9rifier-lexecution-de-notre-workflow",level:2}],c={toc:a},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pour-commencer-github-action-cest-quoi"},"Pour commencer, GitHub Action, c'est quoi?"),(0,i.kt)("p",null,"GitHub Actions est une fonctionnalit\xe9 de GitHub. Disponible depuis le repo de ton projet, elle te permet d\u2019automatiser tes pipelines de CI/CD, de test, de securit\xe9, \u2026"),(0,i.kt)("p",null,"GitHub Actions te permet aussi d\u2019ex\xe9cuter des workflows lorsque d\u2019autres \xe9v\xe9nements se produisent dans ton repo. Par exemple, tu peux ex\xe9cuter un workflow pour ajouter automatiquement les tags appropri\xe9s chaque fois que quelqu\u2019un cr\xe9e une issue."),(0,i.kt)("p",null,"GitHub fournit des machines virtuelles Linux, Windows et macOS pour ex\xe9cuter tes workflows, ou tu peux h\xe9berger tes propres runners dans ton propre centre de donn\xe9es ou ton infrastructure cloud."),(0,i.kt)("p",null,"En gros, il y en a pour tout les go\xfbts."),(0,i.kt)("h2",{id:"le-nerf-de-la-guerre-les-workflows"},"Le nerf de la guerre: les workflows."),(0,i.kt)("p",null,"Selon la documentation de Microsoft, un workflow est un processus configurable, reproductible et d\xe9fini dans un fichier. Et je n'ai rien \xe0 rajouter la dessus tellement \xe7a coule de source."),(0,i.kt)("p",null,"Quand tu utilises GitHub Actions, tu d\xe9finis la configuration de ton workflow dans un fichier YAML. "),(0,i.kt)("p",null,"Ce fichier doit \xeatre stock\xe9 dans ton projet au sein d\u2019un dossier nomm\xe9 .github comprenant un autre dossier workflows. Ce chemin \xe0 son importance car il permettra \xe0 GitHub d'aller retrouver ton fichier pour l'executer."),(0,i.kt)("p",null,"Afin de mieux comprendre son fonctionnement, nous allons encore creuser un peu."),(0,i.kt)("h2",{id:"le-runner"},"Le Runner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5500).Z,width:"552",height:"155"})),(0,i.kt)("p",null,"Ton workflow doit acc\xe9der \xe0 une machine ou un GPU dot\xe9 du syst\xe8me d\u2019exploitation pour pouvoir ex\xe9cuter les actions. C'est l\xe0 que GitHub Actions utilise ces Runner. Ce sont des ordinateurs configur\xe9s pour ex\xe9cuter les \xe9tapes de d\xe9ploiement. \xc0 la place d\u2019une ex\xe9cution manuelle des commandes, le service GitHub Actions indique au Runner d\u2019ex\xe9cuter les \xe9tapes que tu as d\xe9finies dans le fichier YAML de workflow."),(0,i.kt)("p",null,"Aussi, GitHub Actions fournit plusieurs types de Runner pour les diff\xe9rents syst\xe8mes d\u2019exploitation, par exemple Linux ou Windows."),(0,i.kt)("h2",{id:"the-eyes-of-the-triggers"},"The eyes of the Triggers"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5301).Z,width:"550",height:"123"})),(0,i.kt)("p",null,"Le Trigger va indiquer \xe0 GitHub Actions quand ex\xe9cuter ton workflow et il en existe plusieurs types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le push-event-trigger (CI trigger ou trigger d\u2019int\xe9gration continue pour utiliser mon meilleur franglais) permet d'executer une action \xe0 chaque fois que l'on apporte une modification \xe0 une branche sp\xe9cifique."),(0,i.kt)("li",{parentName:"ul"},"L'execution ton workflow par planification"),(0,i.kt)("li",{parentName:"ul"},"Le d\xe9clenchement manuel"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"les-steps"},"Les Steps."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(3951).Z,width:"716",height:"263"})),(0,i.kt)("p",null,"Un Step repr\xe9sente une op\xe9ration unique qui sera effectu\xe9e par le workflow. Ce Step est similaire aux commandes individuelles que tu ex\xe9cutes dans Bash ou PowerShell. C'est au sein de votre fichier YAML que tu vas d\xe9finir l'ordre de ces diff\xe9rentes \xe9tapes."),(0,i.kt)("h2",{id:"les-jobs"},"Les Jobs."),(0,i.kt)("p",null,"Les Jobs sont tout simplement une succession de steps, ni plus, ni moins! Lors de d\xe9ploiements plus gros ou plus complexe, il n'est pas rare de voir un workflow contenant plusieurs jobs."),(0,i.kt)("h2",{id:"anatomie-dun-workflow-derni\xe8re-\xe9tape-avant-la-grande-aventure"},"Anatomie d'un workflow (derni\xe8re \xe9tape avant la grande aventure)."),(0,i.kt)("p",null,"Regardons de plus pr\xe8s cet exemple et examinons en d\xe9tail chaque partie du fichier :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(8953).Z,width:"623",height:"434"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"name")," : c'est le nom du workflow. Il sera est affich\xe9 dans l\u2019interface web GitHub."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"on")," : c'est notre Trigger! Il indique au workflow quand s\u2019ex\xe9cuter. Dans ce cas, on: ","[workflow_dispatch]"," indique que l'on va le d\xe9clencher manuellement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"jobs")," : \xe7a regroupe toutes les t\xe2ches dans ton workflow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"say-hello")," : c'est le nom du job."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"runs-on")," : pas compliqu\xe9, c'est le Runner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"steps")," : liste la s\xe9quence des \xe9tapes \xe0 ex\xe9cuter dans le travail.")),(0,i.kt)("h2",{id:"cr\xe9er-et-ex\xe9cuter-son-premier-workflow-de-base-youpi-on-y-est"},"Cr\xe9er et ex\xe9cuter son premier workflow de base! (Youpi on y est!)"),(0,i.kt)("p",null,"Maintenant que tu es devenu un as de la th\xe9orie, il est temps de tout mettre en pratique. Je te passe les \xe9tapes de cr\xe9ation d'un repo sur GitHub et on retourne directement voir notre fichier YAML. (Oui celui-ci n'a qu'un seul step, l'autre c'\xe9tait un exemple, mais si tu l'as vu, \xe7a prouve que tu suis!)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5675).Z,width:"697",height:"326"})),(0,i.kt)("p",null,"Pour que GitHub puisse retrouver ton workflow, il est important de placer ton fichier dans un endroit bien pr\xe9cis. Au sein de ton projet, cr\xe9e un dossier nomm\xe9 ",(0,i.kt)("em",{parentName:"p"},".github"),", qui lui m\xeame contient un dossier ",(0,i.kt)("em",{parentName:"p"},"workflows.")),(0,i.kt)("p",null,"C'est celui-ci qui va contenir tes fichiers YAML."),(0,i.kt)("p",null,"Une fois que tout est \xe0 sa place, il te suffit de commit et de push ton projet avec les commandes git habituelles."),(0,i.kt)("h2",{id:"run-workflow-run"},"Run workflow! Run!!!!"),(0,i.kt)("p",null,"A ce stade, si t'as bien tout suivi, ton workflow a \xe9t\xe9 d\xe9tect\xe9 par GitHub et donc, doit apparaitre dans la liste de tes actions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(1144).Z,width:"688",height:"335"})),(0,i.kt)("p",null,"Pour executer ce beau monde, vu que l'on \xe0 choissi un trigger de type manuel, clique d'abord sur ton workflow et ensuite sur Run Workflow. En gros, comme sur la photo."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5376).Z,width:"688",height:"275"})),(0,i.kt)("p",null,"Cette op\xe9ration va d\xe9marrer une nouvelle ex\xe9cution de votre workflow. Cela peut prendre un certain temps en fonction de la complexit\xe9 de celui-ci. La page s\u2019actualise automatiquement et te montre o\xf9 en est l'execution (file d\u2019attente, en cours d\u2019ex\xe9cution ou termin\xe9)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(6792).Z,width:"685",height:"153"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(2502).Z,width:"691",height:"185"})),(0,i.kt)("h2",{id:"v\xe9rifier-lexecution-de-notre-workflow"},"V\xe9rifier l'execution de notre workflow."),(0,i.kt)("p",null,"C'est bien beau tout \xe7a, mais ton workflow, il \xe9tait pas sens\xe9 me dire bonjour?"),(0,i.kt)("p",null,"Pas de panique, je vais te montrer l'endroit o\xf9 tu pourras aller v\xe9rifier que ton workflow s'est bien ex\xe9cut\xe9. (ou pas d'ailleur)"),(0,i.kt)("p",null,"Pour cel\xe0, il te suffit de raflaichir la page si \xe7a ne s'est pas fait tout seul, de cliquer sur ton workflow et l\xe0, tu devrait tomber sur la liste de tes jobs ici encore une fois, on en a qu'un, donc tout est ok)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(6031).Z,width:"691",height:"264"})),(0,i.kt)("p",null,"Si l'on va encore plus loin et que l'on clique sur notre job, la page d'informations de celui-ci s\u2019affiche, avec le journal des steps ex\xe9cut\xe9s par le workflow."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5570).Z,width:"688",height:"309"})),(0,i.kt)("p",null,'En d\xe9roulant notre step "Dis bonjour Tanuki", on peut y voir l\'execution de celui-ci!'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(7658).Z,width:"640",height:"351"})),(0,i.kt)("p",null,"Et voil\xe0, maintenant t'es le nouveau roi de la GitHub Action!"),(0,i.kt)("p",null,"N'h\xe9sites pas \xe0 tester des choses car comme je te l\u2019ai dit plus haut, les GitHub Action de servent pas uniquement \xe0 d\xe9ployer."),(0,i.kt)("p",null,"Le boutton ",(0,i.kt)("em",{parentName:"p"},"New workflow")," te permet d'acc\xe9der \xe0 une multitude d'exemple que tu n'auras plus qu'a modifier."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(3848).Z,width:"690",height:"393"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(6799).Z,width:"691",height:"655"})))}d.isMDXComponent=!0},5301:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 1-c52193cbe063ac9028e2d6130a8e9d27.png"},5570:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 10-3d2e0556bac08a5bcadc9c875b1d1915.png"},7658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 11-77a54b2ae1afbfad343ef87b38b847bd.png"},3848:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 12-cdd1443ce66e829571ae651f3ba5a2a2.png"},6799:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 13-e3e23181eda7c0576fa60a0a98e05314.png"},3951:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 2-30722fa0ba40e1ef2d79e1e0bcca955a.png"},8953:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 3-280b7df29af472c50f142cf4673ba155.png"},5675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 4-debafce47e5dcb02c36355b63d580ed6.png"},1144:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 5-375a4953d644c0afc652c4b07ad361f3.png"},5376:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 6-2e5d4661384c4ba95ae96734a6c8bce5.png"},6792:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 7-c811abfb020b7e53950f35b52baf4d0a.png"},2502:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 8-d5afcedaf18e7fce56f436828f17e55a.png"},6031:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 9-b9f74ad8744a3f06ca95ec7252b9f5e1.png"},5500:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled-b28d08259ca8133ddd0c2dbfbc422db9.png"}}]);