(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),s=a.n(r),u=a(2),i=a(3),o=a(6),c=a(4),m=a(5),d=a(11),b=function(e){var t=e.clearData,a=e.uploadData,n=e.data;return l.a.createElement("div",null,l.a.createElement("a",{href:n,download:"data.json"},"Download Data"),l.a.createElement("span",null,"Upload Data"),l.a.createElement("input",{type:"file",title:"Upload Data",onChange:function(e){a(e)}}),l.a.createElement("button",{onClick:t},"Clear Data"))},p="ADD_USER",E="ADD_DEBT",f="CLEAR_DATA",h="DELETE_DEBT",D="DELETE_USER",O="DELETE_DEBT_MAP",v="ADD_DEBT_INSTANCE";function T(e,t,a){return e.includes(t+a)}function y(e,t){var a=null,n=null;return e.localeCompare(t)<0?(a=e,n=t):(a=t,n=e),{userOne:a,userTwo:n}}function j(e,t){return l.a.createElement("option",{key:e,value:e},t.firstName+" "+t.lastName+" ("+e+")")}function w(e){return{type:p,payload:{firstName:e.firstName,lastName:e.lastName,email:e.email},email:e.email}}function M(e){var t=y(e.ownerEmail,e.slaveEmail),a=t.userOne,n=t.userTwo;return{type:O,payload:{userIDOne:a,userIDTwo:n}}}function C(e){var t="",a="",n=1;return e.userOne.localeCompare(e.userTwo)<0?(t=e.userOne,a=e.userTwo,n=-1):(t=e.userTwo,a=e.userOne),{type:E,payload:{userIDOne:t,userIDTwo:a,amount:e.amount*n,notes:e.notes,timeStamp:Date.now()}}}var S=a(10),N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={},e.uploadData=e.uploadData.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"uploadData",value:function(e){var t=this,a=e.target.files[0];if(a.type.includes("json")){var n=new FileReader;n.onload=function(e){try{var a=JSON.parse(e.target.result);a.emails.forEach(function(e){t.props.emails.includes(e)||t.props.addUser({firstName:a.users[e].firstName,lastName:a.users[e].lastName,email:a.users[e].email})}),a.debtList.forEach(function(e){t.props.debtList.includes(e)?a.debtMap[e].debts.forEach(function(a){var n=!1;t.props.debtMap[e].debts.forEach(function(e){e.timeStamp===a.timeStamp&&(n=!0)}),n||t.props.addDebt({userOne:a.userIDOne,userTwo:a.userIDTwo,amount:-1*a.amount,notes:a.notes})}):t.props.addDebtInstance({debts:a.debtMap[e].debts,key:e})})}catch(n){alert("Error parsing json: "+n)}},n.readAsText(a)}else alert("Invalid file type, only accept json files")}},{key:"render",value:function(){return window.File&&window.FileReader&&window.FileList&&window.Blob?l.a.createElement(b,{clearData:this.props.clearData,uploadData:this.uploadData,data:URL.createObjectURL(new Blob([JSON.stringify({users:this.props.users,emails:this.props.emails,debtList:this.props.debtList,debtMap:this.props.debtMap})],{type:"application/json"}))}):l.a.createElement("span",null,"File API's not available")}}]),t}(l.a.Component),g=Object(S.b)(function(e){return{users:e.users,emails:e.emails,debtList:e.debtList,debtMap:e.debtMap}},function(e){return{clearData:function(){return e({type:f})},addUser:function(t){return e(w(t))},addDebt:function(t){return e(C(t))},addDebtInstance:function(t){return e(function(e){return{type:v,payload:{key:e.key,debts:e.debts}}}(t))}}})(N),I=function(e){var t=e.handleFirstName,a=e.handleLastName,n=e.handleEmail,r=e.addUser,s=e.emails,u=e.firstName,i=e.lastName,o=e.email;return l.a.createElement("form",null,l.a.createElement("label",null,"FirstName:",l.a.createElement("input",{type:"text",name:"firstName",value:u,onChange:function(e){return t(e)}})),l.a.createElement("label",null,"LastName:",l.a.createElement("input",{type:"text",name:"lastName",value:i,onChange:function(e){return a(e)}})),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",name:"email",value:o,onChange:function(e){return n(e)}})),l.a.createElement("input",{type:"button",value:"Submit",onClick:function(){s.includes(o)?alert("User with same email already exists"):(r({firstName:u,lastName:i,email:o}),alert("User added"))}}))},k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={firstName:"",lastName:"",email:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(I,{email:this.state.email,lastName:this.state.lastName,firstName:this.state.firstName,handleEmail:function(t){return e.setState({email:t.target.value})},handleLastName:function(t){return e.setState({lastName:t.target.value})},handleFirstName:function(t){return e.setState({firstName:t.target.value})},emails:this.props.emails,addUser:this.props.addUser})}}]),t}(l.a.Component),L=Object(S.b)(function(e){return{emails:e.emails}},function(e){return{addUser:function(t){return e(w(t))}}})(k),U=function(e){var t=e.users,a=e.emails,n=e.debtList,r=e.deleteUser,s=e.deleteDebtMap,u=e.checkForDebtInstance,i=e.editUser,o=e.orderEmails;return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,a.map(function(e){return l.a.createElement("tr",{key:t[e].email},l.a.createElement("td",null,t[e].firstName),l.a.createElement("td",null,t[e].lastName),l.a.createElement("td",null,t[e].email),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){a.forEach(function(t){var a=o(e,t),l=a.userOne,r=a.userTwo;u(n,l,r)&&s({ownerEmail:l,slaveEmail:r})}),r({email:e})}}),l.a.createElement("button",{onClick:function(){var t=!1;a.forEach(function(a){var l=o(e,a),r=l.userOne,s=l.userTwo;t=!u(n,r,s)}),console.log(t),i(e,t)}},"Edit")))})))},A=a(29),x=a.n(A);x.a.setAppElement("#root");var _=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={modalIsOpen:!1,firstName:"",lastName:"",editEmail:!1},e.editUser=e.editUser.bind(Object(d.a)(e)),e.cancelEdit=e.cancelEdit.bind(Object(d.a)(e)),e.saveEdit=e.saveEdit.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"editUser",value:function(e,t){this.setState({modalIsOpen:!0,firstName:this.props.users[e].firstName,lastName:this.props.users[e].lastName,editEmail:t})}},{key:"cancelEdit",value:function(){this.setState({modalIsOpen:!1,firstName:"",lastName:"",editEmail:!1})}},{key:"saveEdit",value:function(){this.setState({modalIsOpen:!1,firstName:"",lastName:"",editEmail:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U,{users:this.props.users,emails:this.props.emails,debtList:this.props.debtList,deleteUser:this.props.deleteUser,deleteDebtMap:this.props.deleteDebtMap,checkForDebtInstance:T,editUser:this.editUser,orderEmails:y}),l.a.createElement(x.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.cancelEdit,contentLabel:"Edit User"},l.a.createElement("button",{onClick:this.cancelEdit},"close"),l.a.createElement("span",null,this.state.editEmail?"":"Note, only the first and last name can be changed for this user as they are involved in debts"),l.a.createElement("span",null,this.state.firstName),l.a.createElement("span",null,this.state.lastName),l.a.createElement("form",null)))}}]),t}(l.a.Component),F=Object(S.b)(function(e){return{users:e.users,emails:e.emails,debtList:e.debtList}},function(e){return{deleteUser:function(t){return e(function(e){return{type:D,payload:{email:e.email}}}(t))},deleteDebtMap:function(t){return e(M(t))}}})(_),B=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(F,null))}}]),t}(l.a.Component),R=function(e){var t=e.emails,a=e.users,n=e.addDebt,r=e.handleOwnerEmail,s=e.handleSlaveEmail,u=e.handleNotes,i=e.handleAmount,o=e.amount,c=e.notes,m=e.emailOne,d=e.emailTwo;return l.a.createElement("form",null,l.a.createElement("span",null,"owner"),l.a.createElement("select",{onChange:function(e){return r(e)}},l.a.createElement("option",null,"--"),t.map(function(e){return j(e,a[e])})),l.a.createElement("span",null,"slave"),l.a.createElement("select",{onChange:function(e){return s(e)}},l.a.createElement("option",null,"--"),t.map(function(e){return j(e,a[e])})),l.a.createElement("label",null,"Amount:",l.a.createElement("input",{type:"text",name:"amount",value:o,onChange:function(e){return i(e)}})),l.a.createElement("label",null,"Notes:",l.a.createElement("input",{type:"text",name:"notes",value:c,onChange:function(e){return u(e)}})),l.a.createElement("input",{type:"button",value:"Submit",onClick:function(){d?(n({userOne:m||t[0],userTwo:d,amount:o,notes:c}),alert("User Debt added")):alert("Second email either null or the same")}}))},H=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={amount:"",notes:"",emailOne:"",emailTwo:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(R,{emails:this.props.emails,users:this.props.users,notes:this.state.notes,amount:this.state.amount,emailOne:this.state.emailOne,emailTwo:this.state.emailTwo,addDebt:this.props.addDebt,handleOwnerEmail:function(t){return e.setState({emailOne:t.target.value})},handleSlaveEmail:function(t){return e.setState({emailTwo:t.target.value})},handleNotes:function(t){return e.setState({notes:t.target.value})},handleAmount:function(t){isNaN(t.target.value)||e.setState({amount:t.target.value})}})}}]),t}(l.a.Component),Y=Object(S.b)(function(e){return{emails:e.emails,users:e.users}},function(e){return{addDebt:function(t){return e(C(t))}}})(H),J=function(e){var t=e.handleOwnerEmail,a=e.handleSlaveEmail,n=e.setTotalDebtMapAmount,r=e.setDebtMapData,s=e.buildDebtMapTable,u=e.emails,i=e.users,o=e.debtMap,c=e.debtList,m=e.ownerEmail,d=e.slaveEmail,b=e.debtMapData,p=e.debtMapTotal,E=e.allDebtsData,f=e.allDebtsTotal,h=e.handleSingleSlaveEmail,D=e.singleSlaveEmail,O=e.buildDebtsTable,v=e.setDebtsData,T=e.setTotalDebtsAmount,y=e.handleSingleOwnerEmail,w=e.setCreditsData,M=e.singleOwnerEmail,C=e.allCreditsTotal,S=e.allCreditsData,N=e.setTotalCreditsAmount,g=e.buildCreditsTable,I=e.setNumDebts,k=e.setNumCredits;return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("span",null,"slave"),l.a.createElement("select",{onChange:function(e){return a(e)}},l.a.createElement("option",null,"--"),u.map(function(e){return j(e,i[e])})),l.a.createElement("span",null,"owner"),l.a.createElement("select",{onChange:function(e){return t(e)}},l.a.createElement("option",null,"--"),u.map(function(e){return j(e,i[e])})),l.a.createElement("input",{type:"button",value:"Submit",onClick:function(){var e=null,t=0;m.localeCompare(d)<0?c.includes(m+d)&&(e=s(o[m+d],-1),t=-1*o[m+d].debts.reduce(function(e,t){return e+t.amount},0)):c.includes(d+m)&&(e=s(o[d+m],1),t=o[d+m].debts.reduce(function(e,t){return e+t.amount},0)),n(t),r(e)}})),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"User One"),l.a.createElement("th",null,"User Two"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Notes"),l.a.createElement("th",null,"Delete Debt"))),l.a.createElement("tbody",null,b)),l.a.createElement("span",null,p),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("span",null,"slave"),l.a.createElement("select",{onChange:function(e){return h(e)}},l.a.createElement("option",null,"--"),u.map(function(e){return j(e,i[e])})),l.a.createElement("input",{type:"button",value:"Submit",onClick:function(){var e=[],t=0,a=0,n=0;u.forEach(function(l){D.localeCompare(l)<0?c.includes(D+l)&&(a=o[D+l].debts.reduce(function(e,t){return e+t.amount},0),t+=a,n++,e.push(O(l,D,a))):c.includes(l+D)&&(a=-1*o[l+D].debts.reduce(function(e,t){return e+t.amount},0),t+=a,n++,e.push(O(l,D,a)))}),I(n),t>0?(T(t),v(e)):(T(0),v([]))}})),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"User One"),l.a.createElement("th",null,"User Two"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Delete Debt"))),l.a.createElement("tbody",null,E)),l.a.createElement("span",null,f),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("span",null,"owner"),l.a.createElement("select",{onChange:function(e){return y(e)}},l.a.createElement("option",null,"--"),u.map(function(e){return j(e,i[e])})),l.a.createElement("input",{type:"button",value:"Submit",onClick:function(){var e=[],t=0,a=0,n=0;u.forEach(function(l){M.localeCompare(l)<0?c.includes(M+l)&&(a=-1*o[M+l].debts.reduce(function(e,t){return e+t.amount},0),t+=a,n++,e.push(g(M,l,a))):c.includes(l+M)&&(a=o[l+M].debts.reduce(function(e,t){return e+t.amount},0),t+=a,n++,e.push(g(M,l,a)))}),k(n),t>0?(N(t),w(e)):(N(0),w([]))}})),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"User One"),l.a.createElement("th",null,"User Two"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Delete Debt"))),l.a.createElement("tbody",null,S)),l.a.createElement("span",null,C))},P=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={debtMapData:null,ownerEmail:"",slaveEmail:"",singleSlaveEmail:"",debtMapTotal:0,allDebtsData:null,allDebtsTotal:0,singleOwnerEmail:"",allCreditsTotal:0,allCreditsData:null,numDebts:0,numCredits:0},e.buildDebtMapTable=e.buildDebtMapTable.bind(Object(d.a)(e)),e.buildDebtsTable=e.buildDebtsTable.bind(Object(d.a)(e)),e.buildCreditsTable=e.buildCreditsTable.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"buildDebtsTable",value:function(e,t,a){var n=this;return l.a.createElement("tr",{key:e+t+a},l.a.createElement("td",null,t),l.a.createElement("td",null,e),l.a.createElement("td",null,a),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){n.props.deleteDebtMap({ownerEmail:e,slaveEmail:t}),1===n.state.numDebts?n.setState({numDebts:0,allDebtsData:null,allDebtsTotal:0}):n.setState({numDebts:n.state.numDebts-1})}})))}},{key:"buildCreditsTable",value:function(e,t,a){var n=this;return l.a.createElement("tr",{key:e+t+a},l.a.createElement("td",null,e),l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){n.props.deleteDebtMap({ownerEmail:e,slaveEmail:t}),1===n.state.numCredits?n.setState({numCredits:0,allCreditsData:null,allCreditsTotal:0}):n.setState({numCredits:n.state.numCredits-1})}})))}},{key:"buildDebtMapTable",value:function(e,t){var a=this;return 1===t?e.debts.map(function(n,r){return l.a.createElement("tr",{key:r},l.a.createElement("td",null,n.userIDOne),l.a.createElement("td",null,n.userIDTwo),l.a.createElement("td",null,n.amount),l.a.createElement("td",null,n.notes),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){if(e.debts.length<=1)a.props.deleteDebtMap({ownerEmail:n.userIDTwo,slaveEmail:n.userIDOne}),a.setState({debtMapData:null,debtMapTotal:0});else{a.props.deleteDebt({index:r,ownerEmail:n.userIDTwo,slaveEmail:n.userIDOne});var l=a.state.debtMapTotal-n.amount,s=e;s.debts.splice(r,1),a.setState({debtMapData:a.buildDebtMapTable(s,t),debtMapTotal:l})}}})))}):e.debts.map(function(n,r){return l.a.createElement("tr",{key:r},l.a.createElement("td",null,n.userIDTwo),l.a.createElement("td",null,n.userIDOne),l.a.createElement("td",null,n.amount*t),l.a.createElement("td",null,n.notes),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){if(e.debts.length<=1)a.props.deleteDebtMap({ownerEmail:n.userIDTwo,slaveEmail:n.userIDOne}),a.setState({debtMapData:null,debtMapTotal:0});else{a.props.deleteDebt({index:r,ownerEmail:n.userIDTwo,slaveEmail:n.userIDOne});var l=a.state.debtMapTotal+n.amount,s=e;s.debts.splice(r,1),a.setState({debtMapData:a.buildDebtMapTable(s,t),debtMapTotal:l})}}})))})}},{key:"render",value:function(){var e=this;return l.a.createElement(J,{handleOwnerEmail:function(t){return e.setState({ownerEmail:t.target.value})},handleSlaveEmail:function(t){return e.setState({slaveEmail:t.target.value})},handleSingleSlaveEmail:function(t){return e.setState({singleSlaveEmail:t.target.value})},handleSingleOwnerEmail:function(t){return e.setState({singleOwnerEmail:t.target.value})},setTotalDebtMapAmount:function(t){return e.setState({debtMapTotal:t})},setDebtMapData:function(t){return e.setState({debtMapData:t})},setTotalDebtsAmount:function(t){return e.setState({allDebtsTotal:t})},setTotalCreditsAmount:function(t){return e.setState({allCreditsTotal:t})},setDebtsData:function(t){return e.setState({allDebtsData:t})},setCreditsData:function(t){return e.setState({allCreditsData:t})},setNumDebts:function(t){return e.setState({numDebts:t})},setNumCredits:function(t){return e.setState({numCredits:t})},buildDebtMapTable:this.buildDebtMapTable,buildDebtsTable:this.buildDebtsTable,buildCreditsTable:this.buildCreditsTable,emails:this.props.emails,users:this.props.users,debtMap:this.props.debtMap,debtList:this.props.debtList,ownerEmail:this.state.ownerEmail,slaveEmail:this.state.slaveEmail,debtMapData:this.state.debtMapData,debtMapTotal:this.state.debtMapTotal,allDebtsData:this.state.allDebtsData,allDebtsTotal:this.state.allDebtsTotal,singleSlaveEmail:this.state.singleSlaveEmail,singleOwnerEmail:this.state.singleOwnerEmail,allCreditsTotal:this.state.allCreditsTotal,allCreditsData:this.state.allCreditsData})}}]),t}(l.a.Component),q=Object(S.b)(function(e){return{emails:e.emails,users:e.users,debtMap:e.debtMap,debtList:e.debtList}},function(e){return{deleteDebtMap:function(t){return e(M(t))},deleteDebt:function(t){return e(function(e){var t=y(e.ownerEmail,e.slaveEmail),a=t.userOne,n=t.userTwo;return{type:h,payload:{userIDOne:a,userIDTwo:n,index:e.index}}}(t))}}})(P),W=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Y,null),l.a.createElement(q,null))}}]),t}(l.a.Component),z=a(20),G=a(15),K=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("p",null,"How Much Do I Owe You?")),l.a.createElement(z.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(z.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(z.b,{to:"/manageUsers"},"Manage Users")),l.a.createElement("li",null,l.a.createElement(z.b,{to:"/manageDebts"},"Manage Debts")),l.a.createElement("li",null,l.a.createElement(z.b,{to:"/manageData"},"Manage Data"))),l.a.createElement(G.a,{path:"/manageDebts",component:W}),l.a.createElement(G.a,{path:"/manageUsers",component:B}),l.a.createElement(G.a,{path:"/manageData",component:g}))))}}]),t}(l.a.Component),Q=a(18),V=a(16),X=a(17),Z=a(9);var $=function(e,t){switch(t.type){case v:return Object(Z.a)({},e,{debtList:[].concat(Object(X.a)(e.debtList),[t.payload.key]),debtMap:Object(Z.a)({},e.debtMap,Object(V.a)({},t.payload.key,{debts:t.payload.debts}))});case h:var a=t.payload.userIDOne+t.payload.userIDTwo;return Object(Z.a)({},e,{debtMap:Object(Z.a)({},e.debtMap,Object(V.a)({},a,{debts:[].concat(Object(X.a)(e.debtMap[a].debts.slice(0,t.payload.index)),Object(X.a)(e.debtMap[a].debts.slice(t.payload.index+1)))}))});case D:var n={};return e.emails.forEach(function(a){a!==t.payload.email&&(n[a]=e.users[a])}),Object(Z.a)({},e,{emails:e.emails.filter(function(e){return e!==t.payload.email}),users:n});case O:var l=t.payload.userIDOne+t.payload.userIDTwo,r={};return e.debtList.forEach(function(t){t!==l&&(r[t]=e.debtMap[t])}),Object(Z.a)({},e,{debtList:e.debtList.filter(function(e){return e!==l}),debtMap:r});case f:return{emails:[],users:{},debtMap:{},debtList:[]};case p:return Object(Z.a)({},e,{emails:[].concat(Object(X.a)(e.emails),[t.email]),users:Object(Z.a)({},e.users,Object(V.a)({},t.email,t.payload))});case E:var s=t.payload.userIDOne+t.payload.userIDTwo;return T(e.debtList,t.payload.userIDOne,t.payload.userIDTwo)?Object(Z.a)({},e,{debtMap:Object(Z.a)({},e.debtMap,Object(V.a)({},s,{debts:[].concat(Object(X.a)(e.debtMap[s].debts),[t.payload])}))}):Object(Z.a)({},e,{debtList:[].concat(Object(X.a)(e.debtList),[s]),debtMap:Object(Z.a)({},e.debtMap,Object(V.a)({},s,{debts:[t.payload]}))});default:return e}},ee=a(38),te=a(24),ae=a.n(te),ne={emails:{name:"HMDIOY_EMAILS"},users:{name:"HMDIOY_USERS"},debtMap:{name:"HMDIOY_DEBTMAP"},debtList:{name:"HMDIOY_DEBTLIST"}},le=Object(te.getStateFromCookies)({emails:[],users:{},debtMap:{},debtList:[]},ne);le.emails||(le.emails=[]),le.users||(le.users={}),le.debtMap||(le.debtMap={}),le.debtList||(le.debtList=[]);var re=Object(Q.createStore)($,le,Object(ee.composeWithDevTools)(Object(Q.applyMiddleware)(ae()(ne))));s.a.render(l.a.createElement(S.a,{store:re},l.a.createElement(K,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ba1c04c4.chunk.js.map