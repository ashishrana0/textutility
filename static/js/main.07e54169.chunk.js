(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),l=a(5),r=a.n(l),n=(a(10),a(3)),o=(a(11),a(0));function i(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"#",children:"Home"})})}),Object(o.jsxs)("button",{className:"btn btn-".concat("dark"===e.toggleMode?"light":"dark"," text-capitalize\n                 my-2 mx-2 my-sm-0"),type:"",onClick:e.toggleMode,children:["dark"===e.mode?"light":"dark"," mode"]})]})]})})}function d(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],l=a[1],r=function(){document.getElementById("myText").classList.remove("text-capitalize")};return Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("h2",{children:"Enter your text here "}),Object(o.jsx)("textarea",{className:"form-control bg-".concat(e.mode),id:"myText",rows:"8",onChange:function(e){l(e.target.value)},value:c,style:{color:"light"===e.mode?"grey":"white"}}),Object(o.jsxs)("div",{className:"my-3",children:[Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var t=c.toUpperCase();l(t),e.showAlert("Converted to Uppercase","success"),r()},children:"Uppercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var t=c.toLowerCase();l(t),e.showAlert("Converted to Lowercase","success"),r()},children:"Lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){document.getElementById("myText").classList.add("text-capitalize")},children:"Capitalize"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var t=c.replaceAll(" ","").replaceAll(",",", ");l(t),e.showAlert("All spaces are removed","success")},children:"Keyword space remover"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text Copied Successfully","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var t=c.split(/[' ']+/);l(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove Extraspaces"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){l(""),e.showAlert("All text cleared","success")},children:"Clear Text"})]})]}),Object(o.jsxs)("div",{className:"my-3",children:[Object(o.jsx)("h2",{children:"Text summary"}),Object(o.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length,"words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," ","minutes to read"]}),Object(o.jsx)("h3",{className:"my-2",children:"Preview"}),Object(o.jsx)("p",{children:""===c?"Enter something to preview":c})]})]})}i.defaultProps={title:"Title"};var b=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})})})},j=a(2);function h(e){var t,a={color:"dark"===e.mode?"white":"rgb(10 71 125)",backgroundColor:"dark"===e.mode?"rgb(10 71 125)":"white"};return Object(o.jsxs)("div",{className:"container my-3 mt-5",children:[Object(o.jsx)("h1",{children:"About us"}),Object(o.jsxs)("div",{className:" my-2",id:"accordion",style:a,children:[Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",style:a,id:"headingOne",children:Object(o.jsx)("h5",(t={className:"mb-0"},Object(j.a)(t,"className",""),Object(j.a)(t,"data-toggle","collapse"),Object(j.a)(t,"data-target","#collapseOne"),Object(j.a)(t,"aria-expanded","true"),Object(j.a)(t,"aria-controls","collapseOne"),Object(j.a)(t,"children","Free to use"),t))}),Object(o.jsx)("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion",children:Object(o.jsx)("div",{className:"card-body",style:a,children:"You can use this text utitlity app for free just paste your text inside text field and just cicked the required options and that's it your work is done with just one click."})})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",style:a,id:"headingTwo",children:Object(o.jsx)("h5",{className:"mb-0 collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Small Seo tools"})}),Object(o.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordion",children:Object(o.jsx)("div",{className:"card-body",style:a,children:"This app also help in some of your seo work. It makes easy to removes extra spaces from your text and also you can use it make removes spaces from your meta tags by cicking a button and everything is ready for you."})})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",style:a,id:"headingThree",children:Object(o.jsx)("h5",{className:"mb-0 collapsed","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Support"})}),Object(o.jsx)("div",{id:"collapseThree",className:"collapse pointer","aria-labelledby":"headingThree","data-parent":"#accordion",children:Object(o.jsxs)("div",{className:"card-body",style:a,children:["We are enhancing this app everyday for a better user experience. Please support this app that elps us to grow faster.",Object(o.jsx)("br",{}),"Thank you"]})})]})]})]})}function m(){return Object(o.jsx)("div",{className:"bg-dark text-light",children:Object(o.jsx)("p",{className:" text-center align-middle py-3",children:"Copyright \xa9 Text utility 2021"})})}var u=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),a=t[0],c=t[1],l=function(e,t){c({msg:e,type:t}),setTimeout((function(){c(null)}),1500)},r=Object(s.useState)("light"),j=Object(n.a)(r,2),u=j[0],p=j[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Text utilities",mode:u,toggleMode:function(){"light"===u?(p("dark"),document.body.style.backgroundColor="rgb(3 35 64)",document.body.style.color="#fff",l("Dark mode enabled","success")):(p("light"),document.body.style.backgroundColor="white",document.body.style.color="rgb(3 35 64)",l("Light mode enabled","success"))}}),Object(o.jsx)(b,{alert:a}),Object(o.jsx)(d,{mode:u,showAlert:l}),Object(o.jsx)(h,{mode:u}),Object(o.jsx)(m,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),l(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.07e54169.chunk.js.map