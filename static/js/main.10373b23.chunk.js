(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(72)},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),o=t.n(c),l=t(4),s=t(5),i=t(7),m=t(6),u=t(8),p=t(14),d=t(15),h=t(2),b=t.n(h),f=t(12),E=t(13),v=t.n(E),y=t(35),g=t(18),C=r.a.createContext(),N=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(g.a)({},e,{contacts:[a.payload].concat(Object(y.a)(e.contacts))});case"UPDATE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState(function(a){return N(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(r.a.Component),j=C.Consumer,k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onExpandClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(f.a)(b.a.mark(function e(a,t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.name,n=a.email,c=a.phone,o=a.id,l=this.state.showContactInfo;return r.a.createElement(j,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,t,r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.onExpandClick,className:"fas fa-sort-down"}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,o,s)}),r.a.createElement(p.b,{to:"/contact/edit/".concat(o)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",n),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c)):null)})}}]),a}(r.a.Component),w=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(k,{key:e.id,contact:e})}))})}}]),a}(r.a.Component),x=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};x.defaultProps={branding:"Contact Manager"};var S=x,A=t(16),T=t(34),F=t.n(T),D=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:F()("form-control form-control-lg",{"is-invalid":s}),name:t,type:o,placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onFieldChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(){var e=Object(f.a)(b.a.mark(function e(a,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onFieldChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onFieldChange,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onFieldChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(r.a.Component),_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onFieldChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(){var e=Object(f.a)(b.a.mark(function e(a,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var a,t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onFieldChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onFieldChange,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onFieldChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),a}(r.a.Component),I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},M=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist!"))},L=(t(70),t(71),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:w}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:_}),r.a.createElement(d.a,{exact:!0,path:"/about",component:I}),r.a.createElement(d.a,{component:M}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.10373b23.chunk.js.map