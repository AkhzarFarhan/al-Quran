(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),r=a.n(l),c=(a(14),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),h=(a(15),a(16),a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={allButs:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{id:"mySidenav",className:"sidenav"},s.a.createElement("div",{className:"sidenav-button",onClick:this.handleClose},"Close [X]"),this.state.allButs.map(function(t,a){return s.a.createElement("div",{className:"sidenav-button",onClick:function(t){return e.props.handleClick(a)}}," ",t.surahNumber," : ",t.surahName)})))}},{key:"handleClose",value:function(){document.getElementById("mySidenav").style.width="0px"}},{key:"componentDidMount",value:function(){var e=this;fetch("https://alquran-1234.firebaseio.com/114.json").then(function(e){return e.json()}).then(function(t){e.setState({allButs:t})}).catch(function(e){console.log(e)})}}]),t}(n.Component)),d=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"verseCard"},s.a.createElement("div",{className:"verseNumber"},this.props.number),s.a.createElement("div",{className:"verseArabic"},this.props.content_arabic),this.props.content,s.a.createElement("div",{className:"verseHindi"},this.props.content_hindi))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).fetchData=function(e){document.getElementById("mySidenav").style.width="0px",a.setState({status:0,firstLoad:0}),fetch("https://alquran-1234.firebaseio.com/"+e+".json").then(function(e){return e.json()}).then(function(e){a.handleRender(e)}).catch(function(e){console.log(e)})},a.handleRender=function(e){var t=[];e.forEach(function(e,a){0==a&&t.push(s.a.createElement("div",{className:"surahName"},e.surah_number,": ",e.surah_name_english)),t.push(s.a.createElement(d,{number:e.verse_number,content_arabic:e.verse_arabic,content:e.verse_english,content_hindi:e.verse_hindi}))}),t.push(s.a.createElement("br",null)),a.setState({allButs:t},function(){a.setState({status:1})})},a.state={allButs:[],status:1,firstLoad:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"menuBarContainer",onClick:this.handleOnClick},s.a.createElement("div",{className:"menubar"}),s.a.createElement("div",{className:"menubar"}),s.a.createElement("div",{className:"menubar"})),this.state.status?this.state.allButs:"",this.state.status?"":s.a.createElement("div",{className:"loading"}," ",s.a.createElement("div",{className:"loader"})," "),this.state.firstLoad?s.a.createElement("div",{className:"homePage"},s.a.createElement("p",{className:"arabic"},"\u0623\u0639\u0648\u0630\u064f \u0628\u0650\u0671\u0644\u0644\u064e\u0651\u0647\u0650 \u0645\u0650\u0646\u064e \u0671\u0644\u0634\u064e\u0651\u064a\u06e1\u0637\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u064e\u0651\u062c\u0650\u064a\u0645\u0650 "),s.a.createElement("p",{className:"english"},"a\u2019udhu billahi min ash-shaytaan-ir-rajeem"),s.a.createElement("p",{className:"meaning"},"(I seek protection in Allah from the accursed satan)"),s.a.createElement("p",{className:"arabic"},"\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0640\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"),s.a.createElement("p",{className:"english"},"bi-smi ll\u0101hi r-ra\u1e25m\u0101ni r-ra\u1e25\u012bm"),s.a.createElement("p",{className:"meaning"},"(In the name of Allah, the Most Gracious, the Most Merciful)")):"",this.state.firstLoad?s.a.createElement("div",{className:"language"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"languageEnglish",onClick:this.handleOnClick},"Read"),s.a.createElement("br",null)):"",this.state.firstLoad?s.a.createElement("div",{className:"footer"},s.a.createElement("p",null,"English Translation: Saheeh International",s.a.createElement("br",null),"Hindi Translation: Suhel Farooq Khan and Saifur Rahman Nadwi",s.a.createElement("br",null),s.a.createElement("br",null),"Developer: Akhzar Farhan")):"",s.a.createElement(h,{handleClick:this.fetchData}))}},{key:"handleOnClick",value:function(){document.getElementById("mySidenav").style.width="250px"}},{key:"componentDidMount",value:function(){}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.b85b1215.chunk.js.map