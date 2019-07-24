(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addUser",function(){return N}),a.d(n,"addDebt",function(){return y});var l=a(0),s=a.n(l),i=a(12),r=a.n(i),u=a(6),m=a(7),o=a(9),c=a(8),d=a(10),h=a(1),b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={firstName:"",lastName:"",email:""},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.handleFirstName=e.handleFirstName.bind(Object(h.a)(e)),e.handleLastName=e.handleLastName.bind(Object(h.a)(e)),e.handleEmail=e.handleEmail.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email};this.props.addUser(t),alert("User added")}},{key:"handleFirstName",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastName",value:function(e){this.setState({lastName:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("label",null,"FirstName:",s.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleFirstName})),s.a.createElement("label",null,"LastName:",s.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleLastName})),s.a.createElement("label",null,"Email:",s.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleEmail})),s.a.createElement("input",{type:"button",value:"Submit",onClick:this.handleSubmit}))}}]),t}(s.a.Component),p=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={amount:"",notes:"",emailOne:"",emailTwo:""},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.handleAmount=e.handleAmount.bind(Object(h.a)(e)),e.handleOwnerEmail=e.handleOwnerEmail.bind(Object(h.a)(e)),e.handleSlaveEmail=e.handleSlaveEmail.bind(Object(h.a)(e)),e.handleNotes=e.handleNotes.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleAmount",value:function(e){isNaN(e.target.value)||this.setState({amount:e.target.value})}},{key:"handleNotes",value:function(e){this.setState({notes:e.target.value})}},{key:"handleOwnerEmail",value:function(e){this.setState({emailOne:e.target.value})}},{key:"handleSlaveEmail",value:function(e){this.setState({emailTwo:e.target.value})}},{key:"handleSubmit",value:function(e){var t={userOne:this.state.emailOne?this.state.emailOne:this.props.emails[0],userTwo:this.state.emailTwo?this.state.emailTwo:this.props.emails[0],amount:this.state.amount,notes:this.state.notes};this.props.addDebt(t),alert("User Debt added")}},{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("select",{onChange:this.handleOwnerEmail},this.props.emails.map(function(e){return s.a.createElement("option",{key:e,value:e},e)})),s.a.createElement("select",{onChange:this.handleSlaveEmail},this.props.emails.map(function(e){return s.a.createElement("option",{key:e,value:e},e)})),s.a.createElement("label",null,"Amount:",s.a.createElement("input",{type:"text",name:"amount",value:this.state.amount,onChange:this.handleAmount})),s.a.createElement("label",null,"Notes:",s.a.createElement("input",{type:"text",name:"notes",value:this.state.notes,onChange:this.handleNotes})),s.a.createElement("input",{type:"button",value:"Submit",onClick:this.handleSubmit}))}}]),t}(s.a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",null,"How Much Do I Owe You?")),s.a.createElement(b,{addUser:this.props.addUser}),s.a.createElement(p,{addDebt:this.props.addDebt,emails:this.props.emails}))}}]),t}(s.a.Component),v=a(3),E=a(13),f="ADD_USER",j="ADD_DEBT";function N(e){return{type:f,payload:{firstName:e.firstName,lastName:e.lastName,email:e.email},email:e.email}}function y(e){var t="",a="";return console.log(e),e.userOne.localeCompare(e.userTwo)<0?(t=e.userOne,a=e.userTwo):(t=e.userTwo,a=e.userOne),{type:j,payload:{userIDOne:t,userIDTwo:a,amount:e.amount,notes:e.notes}}}var w=Object(E.b)(function(e){return{emails:e.emails}},function(e){return Object(v.bindActionCreators)(n,e)})(O),S=a(11),D=a(14),g=a(5);var k={emails:[],users:{},debtMap:{},debtList:[]};var C=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,l=arguments.length>1?arguments[1]:void 0;switch(l.type){case f:return Object(g.a)({},n,{emails:[].concat(Object(D.a)(n.emails),[l.email]),users:Object(g.a)({},n.users,Object(S.a)({},l.email,l.payload))});case j:var s=l.payload.userIDOne+l.payload.userIDTwo;return e=n.debtList,t=l.payload.userIDOne,a=l.payload.userIDTwo,e.includes(t+a),Object(g.a)({},n,{debtList:[].concat(Object(D.a)(n.debtList),[l.userIDOne+l.userIDTwo]),debtMap:Object(g.a)({},n.debtMap,Object(S.a)({},s,l.payload))});default:return n}},T=a(21),A=Object(v.createStore)(C,Object(T.composeWithDevTools)());r.a.render(s.a.createElement(E.a,{store:A},s.a.createElement(w,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bbb5edae.chunk.js.map