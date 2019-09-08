(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},47:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(22),r=a.n(s),i=a(2),o=a(3),u=a(6),c=a(4),m=a(5),d=a(8),b=(a(47),a(30)),p=a(25),E=function(e){var t=e.clearData,a=e.uploadData,n=e.data;return l.a.createElement("div",null,l.a.createElement("div",{className:"containers"},l.a.createElement("h2",{className:"titles"},"Data, Data Everywhere!"),l.a.createElement("div",null,l.a.createElement("label",{className:"download"},l.a.createElement("a",{href:n,download:"data.json",className:"download-link"},l.a.createElement(b.a,{icon:p.a})," Download All Data")),l.a.createElement("input",{type:"file",title:"Upload Data",className:"upload-button",id:"upload",onChange:function(e){a(e)}}),l.a.createElement("label",{htmlFor:"upload",className:"upload-file"},l.a.createElement(b.a,{icon:p.b})," Upload Data"),l.a.createElement("span",{onClick:function(){window.confirm("Are you sure you want to wipe all data?")&&(t(),alert("Data Cleared"))},className:"clear"},"Clear Data"))))},h="ADD_USER",D="ADD_DEBT",f="CLEAR_DATA",v="DELETE_DEBT",N="DELETE_USER",C="DELETE_DEBT_MAP",O="ADD_DEBT_INSTANCE";function y(e,t,a){return e.includes(t+a)}function T(e,t){var a=null,n=null;return e.localeCompare(t)<0?(a=e,n=t):(a=t,n=e),{userOne:a,userTwo:n}}function w(e,t){return l.a.createElement("option",{key:e,value:e},t.firstName+" "+t.lastName+" ("+e+")")}function g(e,t){return t.firstName+" "+t.lastName+" ("+e+")"}function M(e){return{type:h,payload:{firstName:e.firstName,lastName:e.lastName,email:e.email},email:e.email}}function j(e){var t=T(e.ownerEmail,e.slaveEmail),a=t.userOne,n=t.userTwo;return{type:C,payload:{userIDOne:a,userIDTwo:n}}}function S(e){var t="",a="",n=1;return e.userOne.localeCompare(e.userTwo)<0?(t=e.userOne,a=e.userTwo,n=-1):(t=e.userTwo,a=e.userOne),{type:D,payload:{userIDOne:t,userIDTwo:a,amount:e.amount*n,notes:e.notes,timeStamp:Date.now()}}}var x=a(11),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).state={},e.uploadData=e.uploadData.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"uploadData",value:function(e){var t=this,a=e.target.files[0];if(a.type.includes("json")){var n=new FileReader;n.onload=function(e){try{var a=JSON.parse(e.target.result);a.emails.forEach(function(e){t.props.emails.includes(e)||t.props.addUser({firstName:a.users[e].firstName,lastName:a.users[e].lastName,email:a.users[e].email})}),a.debtList.forEach(function(e){t.props.debtList.includes(e)?a.debtMap[e].debts.forEach(function(a){var n=!1;t.props.debtMap[e].debts.forEach(function(e){e.timeStamp===a.timeStamp&&(n=!0)}),n||t.props.addDebt({userOne:a.userIDOne,userTwo:a.userIDTwo,amount:-1*a.amount,notes:a.notes})}):t.props.addDebtInstance({debts:a.debtMap[e].debts,key:e})}),alert("Data Uploaded")}catch(n){alert("Error parsing json: "+n)}},n.readAsText(a)}else alert("Invalid file type, only accept json files")}},{key:"render",value:function(){return window.File&&window.FileReader&&window.FileList&&window.Blob?l.a.createElement(E,{clearData:this.props.clearData,uploadData:this.uploadData,data:URL.createObjectURL(new Blob([JSON.stringify({users:this.props.users,emails:this.props.emails,debtList:this.props.debtList,debtMap:this.props.debtMap})],{type:"application/json"}))}):(alert("File API's are not available"),l.a.createElement("div",null))}}]),t}(l.a.Component),A=Object(x.b)(function(e){return{users:e.users,emails:e.emails,debtList:e.debtList,debtMap:e.debtMap}},function(e){return{clearData:function(){return e({type:f})},addUser:function(t){return e(M(t))},addDebt:function(t){return e(S(t))},addDebtInstance:function(t){return e(function(e){return{type:O,payload:{key:e.key,debts:e.debts}}}(t))}}})(k),I=function(e){var t=e.handleFirstName,a=e.handleLastName,n=e.handleEmail,s=e.addUser,r=e.emails,i=e.firstName,o=e.lastName,u=e.email;return l.a.createElement("div",{className:"containers"},l.a.createElement("h2",{className:"titles"},"Create User"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"FirstName")),l.a.createElement("input",{type:"text",name:"firstName",value:i,autoComplete:"new-password",className:"input-boxes",onChange:function(e){return t(e)}}),l.a.createElement("div",null,l.a.createElement("h3",null,"LastName")),l.a.createElement("input",{type:"text",name:"lastName",value:o,autoComplete:"new-password",className:"input-boxes",onChange:function(e){return a(e)}})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Email")),l.a.createElement("input",{type:"text",name:"email",value:u,autoComplete:"new-password",className:"input-boxes",onChange:function(e){return n(e)}})),l.a.createElement("input",{type:"button",value:"Submit",className:"submit-button",onClick:function(){r.includes(u)?alert("User with same email already exists"):""!==i||""!==o||""!==u?(s({firstName:i,lastName:o,email:u}),alert("User added")):alert("Please fill in all fields")}})))},U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).state={firstName:"",lastName:"",email:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(I,{email:this.state.email,lastName:this.state.lastName,firstName:this.state.firstName,handleEmail:function(t){return e.setState({email:t.target.value})},handleLastName:function(t){return e.setState({lastName:t.target.value})},handleFirstName:function(t){return e.setState({firstName:t.target.value})},emails:this.props.emails,addUser:this.props.addUser})}}]),t}(l.a.Component),L=Object(x.b)(function(e){return{emails:e.emails}},function(e){return{addUser:function(t){return e(M(t))}}})(U),F=a(26),H=a.n(F),_=(a(63),function(e){var t=e.users,a=e.emails,n=e.debtList,s=e.deleteUser,r=e.deleteDebtMap,i=e.checkForDebtInstance,o=e.editUser,u=e.orderEmails,c=e.modalIsOpen,m=e.editEmail,d=e.firstName,b=e.lastName,p=e.email,E=e.saveEdit,h=e.cancelEdit,D=e.handleLastName,f=e.handleFirstName,v=e.handleEmail,N=e.addUser,C=e.oldEmail,O=e.tableHead,y=e.noUsers;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(H.a,{isOpen:c,onRequestClose:h,contentLabel:"Edit User",className:"modal-style"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"FirstName")),l.a.createElement("input",{type:"text",name:"firstName",value:d,autoComplete:"new-password",className:"input-boxes",onChange:function(e){return f(e)}}),l.a.createElement("div",null,l.a.createElement("h3",null,"LastName")),l.a.createElement("input",{type:"text",name:"lastName",value:b,autoComplete:"new-password",className:"input-boxes",onChange:function(e){return D(e)}})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Email")),l.a.createElement("input",{type:"text",name:"email",value:p,onChange:function(e){return v(e)},className:"input-boxes",disabled:m?"":"disabled"})),l.a.createElement("input",{type:"button",value:"Save",className:"submit-button",onClick:function(){m?a.includes(p)&&p!==C?alert("User with same email already exists"):(s({email:C}),N({firstName:d,lastName:b,email:p}),E()):(s({email:p}),N({firstName:d,lastName:b,email:p}),E())}}),l.a.createElement("input",{type:"button",value:"Cancel",className:"submit-button",onClick:function(){h()}})))),l.a.createElement("div",{className:"containers"},l.a.createElement("h2",{className:"titles"},"Current Users"),y,l.a.createElement("table",{className:"users-table"},O,l.a.createElement("tbody",null,a.map(function(e){return l.a.createElement("tr",{key:t[e].email},l.a.createElement("td",null,t[e].firstName),l.a.createElement("td",null,t[e].lastName),l.a.createElement("td",null,t[e].email),l.a.createElement("td",null,l.a.createElement("span",{className:"table-button",onClick:function(){window.confirm("Are you sure you want to delete this user?")&&(a.forEach(function(t){var a=u(e,t),l=a.userOne,s=a.userTwo;i(n,l,s)&&r({ownerEmail:l,slaveEmail:s})}),s({email:e}))}},"Delete"),l.a.createElement("span",{className:"table-button",onClick:function(){var t=!0;a.forEach(function(a){var l=u(e,a),s=l.userOne,r=l.userTwo;i(n,s,r)&&(t=!1)}),o(e,t),t||setTimeout(function(){alert("Note, only the first and last name can be changed for this user as they are involved in existing debts")},100)}},"Edit")))})))))});H.a.setAppElement("#root");var B=l.a.createElement("h3",null,"No Users"),P=l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Manage"))),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).state={modalIsOpen:!1,firstName:"",lastName:"",email:"",oldEmail:"",editEmail:!1},e.editUser=e.editUser.bind(Object(d.a)(e)),e.cancelEdit=e.cancelEdit.bind(Object(d.a)(e)),e.saveEdit=e.saveEdit.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"editUser",value:function(e,t){this.setState({modalIsOpen:!0,firstName:this.props.users[e].firstName,lastName:this.props.users[e].lastName,email:e,oldEmail:e,editEmail:t})}},{key:"cancelEdit",value:function(){this.setState({modalIsOpen:!1,firstName:"",lastName:"",email:"",editEmail:!1,oldEmail:""})}},{key:"saveEdit",value:function(){this.setState({modalIsOpen:!1,firstName:"",lastName:"",email:"",editEmail:!1,oldEmail:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(_,{users:this.props.users,emails:this.props.emails,debtList:this.props.debtList,deleteUser:this.props.deleteUser,deleteDebtMap:this.props.deleteDebtMap,checkForDebtInstance:y,editUser:this.editUser,orderEmails:T,modalIsOpen:this.state.modalIsOpen,cancelEdit:this.cancelEdit,editEmail:this.state.editEmail,firstName:this.state.firstName,lastName:this.state.lastName,saveEdit:this.saveEdit,email:this.state.email,handleLastName:function(t){return e.setState({lastName:t.target.value})},handleFirstName:function(t){return e.setState({firstName:t.target.value})},handleEmail:function(t){return e.setState({email:t.target.value})},addUser:this.props.addUser,oldEmail:this.state.oldEmail,tableHead:this.props.emails.length>0?P:null,noUsers:this.props.emails.length>0?null:B}))}}]),t}(l.a.Component),Y=Object(x.b)(function(e){return{users:e.users,emails:e.emails,debtList:e.debtList}},function(e){return{deleteUser:function(t){return e(function(e){return{type:N,payload:{email:e.email}}}(t))},deleteDebtMap:function(t){return e(j(t))},addUser:function(t){return e(M(t))}}})(R),$=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(Y,null))}}]),t}(l.a.Component),J=(a(64),function(e){var t=e.emails,a=e.users,n=e.addDebt,s=e.handleOwnerEmail,r=e.handleSlaveEmail,i=e.handleNotes,o=e.handleAmount,u=e.amount,c=e.notes,m=e.ownerEmail,d=e.slaveEmail,b=e.debtChangeCounter;return l.a.createElement("div",{className:"containers"},l.a.createElement("h2",{className:"titles"},"Add Debt"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("select",{className:"select-box",onChange:function(e){s(e)}},l.a.createElement("option",null,"Select the Creditor"),t.map(function(e){return w(e,a[e])}))),l.a.createElement("div",null,l.a.createElement("select",{className:"select-box select-debitor",onChange:function(e){r(e)}},l.a.createElement("option",null,"Select the Debitor"),t.map(function(e){return w(e,a[e])}))),l.a.createElement("h3",null,"Amount ($)"),l.a.createElement("input",{type:"text",name:"amount",value:u,className:"input-boxes",onChange:function(e){return o(e)}}),l.a.createElement("h3",null,"Notes"),l.a.createElement("input",{type:"text",name:"notes",value:c,className:"input-boxes",onChange:function(e){return i(e)}}),l.a.createElement("div",null,l.a.createElement("input",{type:"button",value:"Submit",className:"submit-button",onClick:function(){"Select the Creditor"!==m&&"Select the Debitor"!==d?d===m?alert("Debitor cannot be the same as the Creditor"):(n({userOne:m,userTwo:d,amount:u,notes:c}),b(),alert("Debt record added")):alert("Please select a debitor and a creditor")}}))))}),z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).state={amount:"",notes:"",ownerEmail:"Select the Creditor",slaveEmail:"Select the Debitor"},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(J,{emails:this.props.emails,users:this.props.users,notes:this.state.notes,amount:this.state.amount,ownerEmail:this.state.ownerEmail,slaveEmail:this.state.slaveEmail,addDebt:this.props.addDebt,handleOwnerEmail:function(t){return e.setState({ownerEmail:t.target.value})},handleSlaveEmail:function(t){return e.setState({slaveEmail:t.target.value})},handleNotes:function(t){return e.setState({notes:t.target.value})},handleAmount:function(t){isNaN(t.target.value)||e.setState({amount:t.target.value})},debtChangeCounter:this.props.debtChangeCounter})}}]),t}(l.a.Component),V=Object(x.b)(function(e){return{emails:e.emails,users:e.users}},function(e){return{addDebt:function(t){return e(S(t))}}})(z),W=(a(65),function(e){var t=e.handleOwnerEmail,a=e.handleSlaveEmail,n=e.setTotalDebtMapAmount,s=e.setDebtMapData,r=e.buildDebtMapTable,i=e.emails,o=e.users,u=e.debtMap,c=e.debtList,m=e.ownerEmail,d=e.slaveEmail,b=e.debtMapData,p=e.debtMapTotal,E=e.allDebtsData,h=e.allDebtsTotal,D=e.handleSingleSlaveEmail,f=e.singleSlaveEmail,v=e.handleSingleOwnerEmail,N=e.singleOwnerEmail,C=e.allCreditsTotal,O=e.allCreditsData,y=e.noTransactions,T=e.debtMapTableHead,M=e.setNoTransactionExisting,j=e.noTransactionsExisting,S=e.noDebtsExisiting,x=e.noDebts,k=e.noCreditsExisting,A=e.noCredits,I=e.debtTableHead,U=e.creditTableHead,L=e.buildDebtsData,F=e.buildCreditsData;return l.a.createElement("div",{className:"containers"},l.a.createElement("h2",{className:"titles"},"View Debts/Credits Between 2 Users"),l.a.createElement("form",null,l.a.createElement("select",{onChange:function(e){a(e)},className:"select-box-data"},l.a.createElement("option",null,"Select First User"),i.map(function(e){return w(e,o[e])})),l.a.createElement("select",{onChange:function(e){t(e)},className:"select-box-data"},l.a.createElement("option",null,"Select Second User"),i.map(function(e){return w(e,o[e])})),l.a.createElement("input",{type:"button",value:"Submit",className:"submit-button horizontal-submit",onClick:function(){var e=null,t=0;"Select Second User"!==m&&"Select First User"!==d?m===d?alert("Debitor email cannot be the same as the Creditor email"):(m.localeCompare(d)<0?c.includes(m+d)?(e=r(u[m+d],-1),t=-1*u[m+d].debts.reduce(function(e,t){return e+t.amount},0)):M(!0):c.includes(d+m)?(e=r(u[d+m],1),t=u[d+m].debts.reduce(function(e,t){return e+t.amount},0)):M(!0),n(t),s(e)):alert("Please select a debitor email and a creditor email")}})),y,l.a.createElement("table",{className:"tables"},T,l.a.createElement("tbody",null,b)),l.a.createElement("h3",null,j?null:null===b?null:p>=0?g(d,o[d])+" owes "+g(m,o[m])+" "+p+"$":g(m,o[m])+" owes "+g(d,o[d])+" "+-1*p+"$"),l.a.createElement("h2",{className:"titles"},"View Users Debts"),l.a.createElement("form",null,l.a.createElement("select",{className:"select-box-data",onChange:function(e){return D(e)}},l.a.createElement("option",null,"Select a Debitor"),i.map(function(e){return w(e,o[e])})),l.a.createElement("input",{type:"button",value:"Submit",className:"submit-button horizontal-submit",onClick:function(){"Select a Debitor"===f?alert("Please Select a Debitor"):L(f)}})),x,l.a.createElement("table",{className:"tables"},I,l.a.createElement("tbody",null,E)),l.a.createElement("h3",null,S?null:0===h?null:"You are in debt! you owe a total of: "+h+"$"),l.a.createElement("h2",{className:"titles"},"View Users Credits"),l.a.createElement("form",null,l.a.createElement("select",{className:"select-box-data",onChange:function(e){return v(e)}},l.a.createElement("option",null,"Select a Creditor"),i.map(function(e){return w(e,o[e])})),l.a.createElement("input",{type:"button",value:"Submit",className:"submit-button horizontal-submit",onClick:function(){"Select a Creditor"===N?alert("Please Select a Creditor"):F(N)}})),A,l.a.createElement("table",{className:"tables"},U,l.a.createElement("tbody",null,O)),l.a.createElement("h3",null,k?null:0===C?null:"People owe you "+C+"$, maybe consider charging interest"))}),q=l.a.createElement("h3",{className:"no-outstanding"},"No Unpaid Debts"),G=l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"name-cell"},"Debitor"),l.a.createElement("th",{className:"name-cell"},"Creditor"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",{className:"notes-cell"},"Notes"),l.a.createElement("th",null,"Delete Entry"))),K=l.a.createElement("h3",{className:"no-outstanding"},"You Don't Owe Anyone Money!"),Q=l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"name-cell"},"Debitor"),l.a.createElement("th",{className:"name-cell"},"Creditor"),l.a.createElement("th",null,"Total Amount"),l.a.createElement("th",null,"Delete Debts"))),X=l.a.createElement("h3",{className:"no-outstanding"},"No One Owes You Money"),Z=l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"name-cell"},"Creditor"),l.a.createElement("th",{className:"name-cell"},"Debitor"),l.a.createElement("th",null,"Total Amount"),l.a.createElement("th",null,"Delete Credi"))),ee=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).state={debtMapData:null,ownerEmail:"Select Second User",slaveEmail:"Select First User",singleSlaveEmail:"Select a Debitor",debtMapTotal:0,allDebtsData:null,noTransactionsExisting:!1,noCreditsExisting:!1,noDebtsExisiting:!1,allDebtsTotal:0,singleOwnerEmail:"Select a Creditor",allCreditsTotal:0,allCreditsData:null,numDebts:0,numCredits:0,debtsArray:[],creditsArray:[]},e.buildDebtMapTable=e.buildDebtMapTable.bind(Object(d.a)(e)),e.buildDebtsTable=e.buildDebtsTable.bind(Object(d.a)(e)),e.buildCreditsTable=e.buildCreditsTable.bind(Object(d.a)(e)),e.buildCreditsData=e.buildCreditsData.bind(Object(d.a)(e)),e.buildDebtsData=e.buildDebtsData.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"buildCreditsData",value:function(e){var t=this,a=[],n=0,l=0,s=0,r=[];this.props.emails.forEach(function(i){e.localeCompare(i)<0?t.props.debtList.includes(e+i)&&(l=-1*t.props.debtMap[e+i].debts.reduce(function(e,t){return e+t.amount},0),n+=l,s++,a.push(t.buildCreditsTable(e,i,l)),r.push({singleOwnerEmail:e,email:i,currAmount:l})):t.props.debtList.includes(i+e)&&(l=t.props.debtMap[i+e].debts.reduce(function(e,t){return e+t.amount},0),n+=l,s++,a.push(t.buildCreditsTable(e,i,l)),r.push({singleOwnerEmail:e,email:i,currAmount:l}))}),n>0?this.setState({allCreditsData:a,allCreditsTotal:n,numCredits:s,creditsArray:r,debtMapData:null,debtMapTotal:0,noTransactionsExisting:!1,allDebtsData:null,allDebtsTotal:0,noDebtsExisiting:!1,numDebts:0,debtsArray:[]}):this.setState({noCreditsExisting:!0,allCreditsData:null,allCreditsTotal:0,numCredits:s,creditsArray:[],debtMapData:null,debtMapTotal:0,noTransactionsExisting:!1,allDebtsData:null,allDebtsTotal:0,noDebtsExisiting:!1,numDebts:0,debtsArray:[]})}},{key:"buildDebtsData",value:function(e){var t=this,a=[],n=0,l=0,s=0,r=[];this.props.emails.forEach(function(i){e.localeCompare(i)<0?t.props.debtList.includes(e+i)&&(l=t.props.debtMap[e+i].debts.reduce(function(e,t){return e+t.amount},0),n+=l,s++,a.push(t.buildDebtsTable(i,e,l)),r.push({email:i,singleSlaveEmail:e,currAmount:l})):t.props.debtList.includes(i+e)&&(l=-1*t.props.debtMap[i+e].debts.reduce(function(e,t){return e+t.amount},0),n+=l,s++,a.push(t.buildDebtsTable(i,e,l)),r.push({email:i,singleSlaveEmail:e,currAmount:l}))}),n>0?this.setState({allDebtsTotal:n,allDebtsData:a,numDebts:s,debtsArray:r,debtMapData:null,debtMapTotal:0,noTransactionsExisting:!1,allCreditsData:null,allCreditsTotal:0,noCreditsExisting:!1,numCredits:0,creditsArray:[]}):this.setState({noDebtsExisiting:!0,allDebtsTotal:0,allDebtsData:null,numDebts:s,debtsArray:[],debtMapData:null,debtMapTotal:0,noTransactionsExisting:!1,allCreditsData:null,allCreditsTotal:0,noCreditsExisting:!1,numCredits:0,creditsArray:[]})}},{key:"buildDebtsTable",value:function(e,t,a){var n=this;return l.a.createElement("tr",{key:e+t+a},l.a.createElement("td",null,g(t,this.props.users[t])),l.a.createElement("td",null,g(e,this.props.users[e])),l.a.createElement("td",null,a+"$"),l.a.createElement("td",null,l.a.createElement("span",{className:"table-button",onClick:function(){if(window.confirm("Are you sure you want to delete this debt record?"))if(n.props.deleteDebtMap({ownerEmail:e,slaveEmail:t}),1===n.state.numDebts)n.setState({numDebts:0,allDebtsData:null,allDebtsTotal:0,noDebtsExisiting:!0});else{var a=[],l=[],s=0;n.state.debtsArray.forEach(function(r){r.email!==e&&(s+=r.currAmount,a.push(r),l.push(n.buildCreditsTable(r.email,t,r.currAmount)))}),n.setState({numDebts:n.state.numDebts-1,debtsArray:a,allDebtsData:l,allDebtsTotal:s})}}},"Delete")))}},{key:"buildCreditsTable",value:function(e,t,a){var n=this;return l.a.createElement("tr",{key:e+t+a},l.a.createElement("td",null,g(e,this.props.users[e])),l.a.createElement("td",null,g(t,this.props.users[t])),l.a.createElement("td",null,a+"$"),l.a.createElement("td",null,l.a.createElement("span",{className:"table-button",onClick:function(){if(window.confirm("Are you sure you want to delete this credit record?"))if(n.props.deleteDebtMap({ownerEmail:e,slaveEmail:t}),1===n.state.numCredits)n.setState({numCredits:0,allCreditsData:null,allCreditsTotal:0,noCreditsExisting:!0});else{var a=[],l=[],s=0;n.state.creditsArray.forEach(function(r){r.email!==t&&(s+=r.currAmount,a.push(r),l.push(n.buildCreditsTable(e,r.email,r.currAmount)))}),n.setState({numCredits:n.state.numCredits-1,creditsArray:a,allCreditsData:l,allCreditsTotal:s})}}},"Delete")))}},{key:"buildDebtMapTable",value:function(e,t){var a=this;return this.setState({allCreditsData:null,allCreditsTotal:0,noCreditsExisting:!1,numCredits:0,creditsArray:[],allDebtsData:null,allDebtsTotal:0,noDebtsExisiting:!1,numDebts:0,debtsArray:[]}),e.debts.map(function(n,s){return l.a.createElement("tr",{key:s},l.a.createElement("td",null,n.amount>=0?g(n.userIDOne,a.props.users[n.userIDOne]):g(n.userIDTwo,a.props.users[n.userIDTwo])),l.a.createElement("td",null,n.amount>=0?g(n.userIDTwo,a.props.users[n.userIDTwo]):g(n.userIDOne,a.props.users[n.userIDOne])),l.a.createElement("td",null,Math.abs(n.amount)+"$"),l.a.createElement("td",null,n.notes),l.a.createElement("td",null,l.a.createElement("span",{className:"table-button",onClick:function(){if(window.confirm("Are you sure you want to delete this debt?"))if(e.debts.length<=1)a.props.deleteDebtMap({ownerEmail:n.userIDTwo,slaveEmail:n.userIDOne}),a.setState({debtMapData:null,debtMapTotal:0});else{a.props.deleteDebt({index:s,ownerEmail:n.userIDTwo,slaveEmail:n.userIDOne});var l=1===t?a.state.debtMapTotal-n.amount:a.state.debtMapTotal+n.amount,r=e;r.debts.splice(s,1),a.setState({debtMapData:a.buildDebtMapTable(r,t),debtMapTotal:l})}}},"Delete")))})}},{key:"render",value:function(){var e=this;return l.a.createElement(W,{handleOwnerEmail:function(t){return e.setState({ownerEmail:t.target.value,debtMapData:null,debtMapTotal:0,noTransactionsExisting:!1})},handleSlaveEmail:function(t){return e.setState({slaveEmail:t.target.value,debtMapData:null,debtMapTotal:0,noTransactionsExisting:!1})},handleSingleSlaveEmail:function(t){return e.setState({singleSlaveEmail:t.target.value,allDebtsData:null,allDebtsTotal:0,noDebtsExisiting:!1,numDebts:0,debtsArray:[]})},handleSingleOwnerEmail:function(t){return e.setState({singleOwnerEmail:t.target.value,allCreditsData:null,allCreditsTotal:0,noCreditsExisting:!1,numCredits:0,creditsArray:[]})},setTotalDebtMapAmount:function(t){return e.setState({debtMapTotal:t})},setDebtMapData:function(t){return e.setState({debtMapData:t})},setNoTransactionExisting:function(t){return e.setState({noTransactionsExisting:t})},buildDebtMapTable:this.buildDebtMapTable,emails:this.props.emails,users:this.props.users,debtMap:this.props.debtMap,debtList:this.props.debtList,ownerEmail:this.state.ownerEmail,slaveEmail:this.state.slaveEmail,debtMapData:this.state.debtMapData,debtMapTotal:this.state.debtMapTotal,allDebtsData:this.state.allDebtsData,allDebtsTotal:this.state.allDebtsTotal,singleSlaveEmail:this.state.singleSlaveEmail,singleOwnerEmail:this.state.singleOwnerEmail,allCreditsTotal:this.state.allCreditsTotal,allCreditsData:this.state.allCreditsData,noTransactionsExisting:this.state.noTransactionsExisting,noTransactions:this.state.noTransactionsExisting?q:null,noDebtsExisiting:this.state.noDebtsExisiting,noDebts:this.state.noDebtsExisiting?K:null,noCreditsExisting:this.state.noCreditsExisting,noCredits:this.state.noCreditsExisting?X:null,debtMapTableHead:this.state.debtMapData?G:null,debtTableHead:this.state.allDebtsData?Q:null,creditTableHead:this.state.allCreditsData?Z:null,buildCreditsData:this.buildCreditsData,buildDebtsData:this.buildDebtsData})}}]),t}(l.a.Component),te=Object(x.b)(function(e){return{emails:e.emails,users:e.users,debtMap:e.debtMap,debtList:e.debtList}},function(e){return{deleteDebtMap:function(t){return e(j(t))},deleteDebt:function(t){return e(function(e){var t=T(e.ownerEmail,e.slaveEmail),a=t.userOne,n=t.userTwo;return{type:v,payload:{userIDOne:a,userIDTwo:n,index:e.index}}}(t))}}})(ee),ae=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).state={id:0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(V,{debtChangeCounter:function(){return e.setState({id:e.state.id+1})}}),l.a.createElement(te,{key:this.state.id}))}}]),t}(l.a.Component),ne=(a(66),function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Welcome to How Much Do I Owe You!"),l.a.createElement("p",null,"This app allows you to track purchaes you make for others and vice versa"),l.a.createElement("p",null,"To begin, go to the Manage Users page and add some users, then you can add purchases on the Manage Debts page!"),l.a.createElement("p",null,"As a side note, all data is stored in cookies, however, if you would like to get a actual copy of your data refer to the Manage Data page"))}),le=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ne,null))}}]),t}(l.a.Component),se=a(21),re=a(15),ie=(a(67),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app-container"},l.a.createElement("h2",{className:"app-title"},"How Much Do I Owe You?"),l.a.createElement("div",{className:"main-content-wrapper"},l.a.createElement(se.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement(se.b,{className:"non-selected-link",activeClassName:"selected",exact:!0,to:"/"},"Home"),l.a.createElement(se.b,{className:"non-selected-link",activeClassName:"selected",exact:!0,to:"/manageUsers"},"Manage Users"),l.a.createElement(se.b,{className:"non-selected-link",activeClassName:"selected",exact:!0,to:"/manageDebts"},"Manage Debts"),l.a.createElement(se.b,{className:"non-selected-link",activeClassName:"selected",exact:!0,to:"/manageData"},"Manage Data")),l.a.createElement(re.c,null,l.a.createElement(re.a,{path:"/manageDebts",component:ae}),l.a.createElement(re.a,{path:"/manageUsers",component:$}),l.a.createElement(re.a,{path:"/manageData",component:A}),l.a.createElement(re.a,{path:"/",component:le}))))))}}]),t}(l.a.Component)),oe=a(19),ue=a(16),ce=a(18),me=a(10);var de=function(e,t){switch(t.type){case O:return Object(me.a)({},e,{debtList:[].concat(Object(ce.a)(e.debtList),[t.payload.key]),debtMap:Object(me.a)({},e.debtMap,Object(ue.a)({},t.payload.key,{debts:t.payload.debts}))});case v:var a=t.payload.userIDOne+t.payload.userIDTwo;return Object(me.a)({},e,{debtMap:Object(me.a)({},e.debtMap,Object(ue.a)({},a,{debts:[].concat(Object(ce.a)(e.debtMap[a].debts.slice(0,t.payload.index)),Object(ce.a)(e.debtMap[a].debts.slice(t.payload.index+1)))}))});case N:var n={};return e.emails.forEach(function(a){a!==t.payload.email&&(n[a]=e.users[a])}),Object(me.a)({},e,{emails:e.emails.filter(function(e){return e!==t.payload.email}),users:n});case C:var l=t.payload.userIDOne+t.payload.userIDTwo,s={};return e.debtList.forEach(function(t){t!==l&&(s[t]=e.debtMap[t])}),Object(me.a)({},e,{debtList:e.debtList.filter(function(e){return e!==l}),debtMap:s});case f:return{emails:[],users:{},debtMap:{},debtList:[]};case h:return Object(me.a)({},e,{emails:[].concat(Object(ce.a)(e.emails),[t.email]),users:Object(me.a)({},e.users,Object(ue.a)({},t.email,t.payload))});case D:var r=t.payload.userIDOne+t.payload.userIDTwo;return y(e.debtList,t.payload.userIDOne,t.payload.userIDTwo)?Object(me.a)({},e,{debtMap:Object(me.a)({},e.debtMap,Object(ue.a)({},r,{debts:[].concat(Object(ce.a)(e.debtMap[r].debts),[t.payload])}))}):Object(me.a)({},e,{debtList:[].concat(Object(ce.a)(e.debtList),[r]),debtMap:Object(me.a)({},e.debtMap,Object(ue.a)({},r,{debts:[t.payload]}))});default:return e}},be=a(41),pe=a(27),Ee=a.n(pe),he={emails:{name:"HMDIOY_EMAILS"},users:{name:"HMDIOY_USERS"},debtMap:{name:"HMDIOY_DEBTMAP"},debtList:{name:"HMDIOY_DEBTLIST"}},De=Object(pe.getStateFromCookies)({emails:[],users:{},debtMap:{},debtList:[]},he);De.emails||(De.emails=[]),De.users||(De.users={}),De.debtMap||(De.debtMap={}),De.debtList||(De.debtList=[]);var fe=Object(oe.createStore)(de,De,Object(be.composeWithDevTools)(Object(oe.applyMiddleware)(Ee()(he))));r.a.render(l.a.createElement(x.a,{store:fe},l.a.createElement(ie,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b0f925b9.chunk.js.map