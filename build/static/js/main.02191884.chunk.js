(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{53:function(e,t,n){},55:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),c=n.n(a),s=(n(53),n(2)),u=n(9),i=n.n(u),d=n(11),l=n(8),h=n(83),p=n(87),j=n(88),f=n(84),b=(n(55),n(16)),v=n(17),O=n(37),g=n(34),x=n(36),m=n(41),k=n(90),y=function(){return Object(k.a)()},T=function(e){return"group"===e.type},w=new(function(){function e(){Object(b.a)(this,e),this.todoTree=void 0,this.root=void 0,this.subTreeRoot=void 0,this.onChangedCbDict={},this.initialized=!1;var t=this.generateNewId(),n={name:"root",type:"group",parentId:null,id:t,childrenIds:[],createdAt:null};this.todoTree={},this.todoTree[t]=n,this.root=n,this.subTreeRoot={groupList:[],todo:n}}return Object(v.a)(e,[{key:"setGroupAsSelected",value:function(e){this.subTreeRoot=e}},{key:"registerOnChanged",value:function(e,t){this.onChangedCbDict[e]=t}},{key:"changeHappened",value:function(){var e=this;Object.keys(this.onChangedCbDict).forEach((function(t){e.onChangedCbDict[t]()}))}},{key:"getAllGroups",value:function(){var e=this;return Object.keys(this.todoTree).map((function(t){return e.todoTree[t]})).filter(T)}},{key:"setToDone",value:function(e){var t=this.todoTree[e];if(T(t))throw new Error("This is a bug, cannot set a group to DONE");t.done=new Date,this.changeHappened()}},{key:"generateNewId",value:function(){return y()}},{key:"init",value:function(e,t){this.todoTree=e,this.subTreeRoot={groupList:[],todo:t}}},{key:"addGroup",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(s.a)(Object(s.a)({},this.getNewBaseObject(t)),{},{name:e,type:"group",childrenIds:[]});return this.todoTree[n.id]=n,this.changeHappened(),n.id}},{key:"addTodo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(s.a)(Object(s.a)({},this.getNewBaseObject(t)),{},{text:e,done:null,type:"todo"});return this.todoTree[n.id]=n,this.changeHappened(),n.id}},{key:"getNewBaseObject",value:function(e){var t=this.getParent(e),n={id:this.generateNewId(),parentId:t.id,createdAt:new Date};return t.childrenIds.push(n.id),n}},{key:"getParent",value:function(e){var t=null===e?this.root.id:e,n=this.todoTree[t];if(!T(n))throw new Error("Parent is not a group!!");return n}},{key:"deleteTodo",value:function(e){var t=this,n=this.todoTree[e];T(n)&&n.childrenIds.forEach((function(e){t.deleteTodo(e)}));var r=this.getParent(n.parentId);r.childrenIds=r.childrenIds.filter((function(t){return t!==e})),delete this.todoTree[e],this.changeHappened()}},{key:"getGroupList",value:function(){var e=[this.root],t=this.root;return this.getGroupListHelper(e,t),e}},{key:"getGroupListHelper",value:function(e,t){var n,r=Object(m.a)(t.childrenIds);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=this.todoTree[o];T(a)&&(e.push(a),this.getGroupListHelper(e,a))}}catch(c){r.e(c)}finally{r.f()}}},{key:"getTodoList",value:function(){var e={};return this.getTodoListHelper(e,[],this.subTreeRoot.todo),e}},{key:"getTodoListHelper",value:function(e,t,n){if(T(n)){var r,o=[].concat(Object(x.a)(t),[n]),a=Object(m.a)(n.childrenIds);try{for(a.s();!(r=a.n()).done;){var c=r.value,s=this.todoTree[c];this.getTodoListHelper(e,o,s)}}catch(u){a.e(u)}finally{a.f()}}else e[n.id]={todo:n,groupList:t}}}]),e}());w.addTodo("Todo on base level."),w.addTodo("Another test todo.");var C=w.addGroup("Test Group");w.addTodo("Sample todo in group.",C),w.addTodo("Another todo.",C),console.log("Setting useless data"),C=w.addGroup("Test Group 2",C),w.addTodo("A todo from the second group.",C),w.addTodo("Another deeply nested todo.",C),w.addTodo("Another deeply nested todo. This one contains a lot of text such that it needs to be wrapped!",C);var G=function(){function e(){Object(b.a)(this,e),this.loadedTodos=null,this.loadedGroups=null}return Object(v.a)(e,[{key:"convertAndInit",value:function(){if(null!==this.loadedTodos&&null!==this.loadedGroups){var e={},t={};this.loadedGroups.forEach((function(n){var r=y(),o={createdAt:n.created,name:n.name,type:"group",id:r,childrenIds:[],parentId:null};e[n.name]=o,t[r]=o})),this.loadedTodos.forEach((function(n){var r=e[n.parent_group_name],o=y();r.childrenIds.push(o);var a={parentId:r.id,id:o,type:"todo",text:n.text,createdAt:n.created,done:n.done};t[o]=a})),this.loadedGroups.forEach((function(t){if(t.parent_id){var n=e[t.parent_id],r=e[t.name];r.parentId=n.id,n.childrenIds.push(r.id)}}));var n=e.root;w.init(t,n)}else console.log("Fuck")}},{key:"prepareSaving",value:function(){var e=w.todoTree,t=w.getAllGroups();this.loadedGroups=t.map((function(t){var n=t.parentId?e[t.parentId]:null,r=null;return null!==n&&(r=n.name),{created:t.createdAt,name:t.name,parent_id:r}}));var n=Object.values(w.getTodoList()).map((function(e){return e.todo}));this.loadedTodos=n.map((function(t){var n=e[t.parentId];return{created:t.createdAt,text:t.text,done:t.done,parent_group_name:n.name,id:null}}))}}]),e}(),I=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DEBUG,L=I?"http://127.0.0.1:8000/":"https://chbauman.pythonanywhere.com/";console.log("Debug: ",I,L);var A={"Content-Type":"application/json"},N="currUserToken",D=new(function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).userData=null,e.isLoggedIn(),e}return Object(v.a)(n,[{key:"getPostData",value:function(){var e=Object(d.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"POST",headers:A,body:JSON.stringify(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"loginUser",value:function(){var e=Object(d.a)(i.a.mark((function e(t){var n,r,o,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(L,"api-token-auth/"),e.next=3,this.getPostData(n,t);case 3:if(r=e.sent,!(o=r.ok)){e.next=14;break}return e.next=8,r.json();case 8:return a=e.sent,c={token:a.token,userName:t.username},localStorage.setItem(N,JSON.stringify(c)),this.userData=c,e.next=14,this.loadUserData();case 14:return e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isLoggedIn",value:function(){var e=localStorage.getItem(N),t=null!==e;return t&&(this.userData=JSON.parse(e)),t}},{key:"loadUserData",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,r,o,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(L,"todo_items/"),e.next=3,this.get(t);case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,n.ok){e.next=10;break}return console.log("Failed to fetch todos",r),e.abrupt("return");case 10:return o="".concat(L,"todo_groups/"),e.next=13,this.get(o);case 13:return a=e.sent,e.next=16,a.json();case 16:if(c=e.sent,n.ok){e.next=20;break}return console.log("Failed to fetch groups",c),e.abrupt("return");case 20:this.loadedTodos=r,this.loadedGroups=c,this.convertAndInit();case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"GET",headers:this.getAuthHeader()}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(d.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"POST",headers:this.getAuthHeader(),body:JSON.stringify(n)}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getAuthHeader",value:function(){var e;if(null===this.userData)throw new Error("Not logged in!");return Object(s.a)(Object(s.a)({},A),{},{Authorization:"Token ".concat(null===(e=this.userData)||void 0===e?void 0:e.token)})}},{key:"save",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,r,o,a,c,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.prepareSaving(),null!==this.loadedGroups&&null!==this.loadedTodos){e.next=3;break}return e.abrupt("return",!1);case 3:return t="".concat(L,"todo_groups/"),e.next=6,this.post(t,this.loadedGroups);case 6:if(n=e.sent,r=n.ok){e.next=13;break}return e.next=11,n.json();case 11:o=e.sent,console.log("fuck",n,this.loadedGroups,o);case 13:return a="".concat(L,"todo_items/"),e.next=16,this.post(a,this.loadedTodos);case 16:return c=e.sent,(s=c.ok)||console.log(n,this.loadedTodos),(u=r&&s)||console.log("Fuck"),e.abrupt("return",u);case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createAccountAndLogin",value:function(){var e=Object(d.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(L,"create_user/"),e.next=3,this.getPostData(n,t);case 3:if(e.sent.ok){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,this.loginUser(t);case 8:if(!e.sent){e.next=11;break}return e.abrupt("return",t.username);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){this.userData=null,localStorage.removeItem(N)}},{key:"getUser",value:function(){return this.isLoggedIn()&&null!==this.userData?this.userData.userName:null}}]),n}(G)),S=n(89),E=n(1),_=function(e){var t=e.setLogin,n=e.setCreatingAccount,o=Object(r.useState)({password:"",username:""}),a=Object(l.a)(o,2),c=a[0],u=a[1];return Object(E.jsxs)(h.a,{children:[Object(E.jsx)("h5",{children:"Login"}),Object(E.jsxs)(S.a,{children:[Object(E.jsxs)(S.a.Group,{controlId:"formUser",children:[Object(E.jsx)(S.a.Label,{children:"Enter username:"}),Object(E.jsx)(S.a.Control,{type:"text",onChange:function(e){return u(Object(s.a)(Object(s.a)({},c),{},{username:e.target.value}))}})]}),Object(E.jsxs)(S.a.Group,{controlId:"formPassword",children:[Object(E.jsx)(S.a.Label,{children:"Enter password:"}),Object(E.jsx)(S.a.Control,{type:"password",onChange:function(e){return u(Object(s.a)(Object(s.a)({},c),{},{password:e.target.value}))}})]}),Object(E.jsx)(f.a,{onClick:function(){return t(c)},children:"Login"})]}),Object(E.jsx)(f.a,{onClick:function(){return n(!0)},children:"Create new account."})]})},P=n(47),H=n(85),U=n(45);function B(e){return Object(E.jsx)("h5",{children:e.text})}var z=function(e){var t=Object(r.useState)(0),n=Object(l.a)(t,2),o=n[0],a=n[1];w.registerOnChanged(e,(function(){return a(o+1)}))};function F(){return J("New Group:",(function(e,t){return w.addGroup(e,t)}),"new-group")}function R(){return J("New task:",(function(e,t){return w.addTodo(e,t)}),"new-todo")}var J=function(e,t,n){var o=Object(r.useRef)(null),a=Object(r.useRef)(null);z(n);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(H.a,{className:"mt-2",children:Object(E.jsx)(U.a,{children:Object(E.jsx)(B,{text:e})})}),Object(E.jsxs)(H.a,{children:[Object(E.jsx)(S.a.Group,{as:U.a,md:8,controlId:"text-"+n,children:Object(E.jsx)(S.a.Control,{type:"text",placeholder:"Task XYZ",ref:o})}),Object(E.jsx)(S.a.Group,{as:U.a,md:3,controlId:"group-select-"+n,children:Object(E.jsx)(K,{onChangeCB:function(e){a.current=e}})}),Object(E.jsx)(S.a.Group,{as:U.a,md:1,controlId:"submit-"+n,children:Object(E.jsx)(f.a,{onClick:function(){var e=o.current;""!==e.value&&(t(e.value,a.current),e.value="")},children:"Add"})})]})]})},K=function(e){var t=e.onChangeCB,n=w.getAllGroups().map((function(e){return{value:e.id,label:e.name}}));z("groups-selection");var o=Object(r.useState)(null),a=Object(l.a)(o,2),c=a[0],s=a[1];return Object(E.jsx)(P.a,{defaultValue:c,onChange:function(e){s(e),t(null===e||void 0===e?void 0:e.value)},options:n})},W=n(86);n(75);function V(e){var t=function(e){var t=e.todo.text,n=e.currentGroup.groupList,r={fontSize:"12px",marginBottom:0,paddingBottom:0},o=Object(E.jsx)(E.Fragment,{children:e.currParentGroups.map((function(t,o){var a=0===o?"mb-0":"ms-1 mb-0";return Object(E.jsx)("div",{className:"group-list float-start "+a,onClick:function(){var r=e.currParentGroups.slice(0,o);e.setGroup({todo:t,groupList:n.concat(r)})},style:r,children:t.name+" / "},t.id)}))});return Object(E.jsxs)("div",{children:[o,Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:"textdiv mb-2",style:{paddingTop:0,marginTop:"-10px"},children:t})]})}(e),n=e.todo.done?null:Object(E.jsx)(f.a,{size:"sm",onClick:function(){w.setToDone(e.todo.id)},children:"Done"}),r=Object(E.jsxs)(W.a,{children:[n,Object(E.jsx)(f.a,{size:"sm",variant:"danger",onClick:function(){return w.deleteTodo(e.todo.id)},children:"Delete"})]});return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(H.a,{children:[Object(E.jsx)(U.a,{md:9,children:t}),Object(E.jsx)(U.a,{md:3,children:r})]})})}var M=function(e,t){if(null===e||null===t)return NaN;var n=e.valueOf(),r=t.valueOf(),o=Number(n>r),a=Number(n<r);return isFinite(n)&&isFinite(r)?o-a:NaN};function X(e){z("pending");var t=w.getTodoList(),n=Object.keys(t).map((function(e){return t[e]})),r=n.filter((function(e){return null!==e.todo.done})),o=n.filter((function(e){return null===e.todo.done}));o.sort((function(e,t){return-M(e.todo.createdAt,t.todo.createdAt)})),r.sort((function(e,t){return-M(e.todo.done,t.todo.done)}));var a=function(t){var n=t.todo;return Object(E.jsx)(V,{todo:n,currParentGroups:t.groupList,setGroup:e.setGroup,currentGroup:e.currentGroup},n.id)};return Object(E.jsxs)(H.a,{className:"mt-2",children:[Object(E.jsxs)(U.a,{md:8,children:[Object(E.jsx)(B,{text:"Open tasks:"}),o.map(a)]}),Object(E.jsxs)(U.a,{md:4,children:[Object(E.jsx)(B,{text:"Completed:"}),r.map(a)]})]})}var Y=function(e){var t=e.setCreatingAccount,n=e.setLoggedIn,o=Object(r.useState)({password:"",username:"",email:"",lastname:""}),a=Object(l.a)(o,2),c=a[0],u=a[1],p=function(){var e=Object(d.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.createAccountAndLogin(c);case 2:null!==(r=e.sent)?(t(!1),n(r)):console.log("Account creation failed!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(h.a,{children:[Object(E.jsx)("h5",{children:"Create Account"}),Object(E.jsxs)(S.a,{children:[Object(E.jsxs)(S.a.Group,{controlId:"formUser",children:[Object(E.jsx)(S.a.Label,{children:"Username: *"}),Object(E.jsx)(S.a.Control,{type:"text",onChange:function(e){return u(Object(s.a)(Object(s.a)({},c),{},{username:e.target.value}))}})]}),Object(E.jsxs)(S.a.Group,{controlId:"formEmail",children:[Object(E.jsx)(S.a.Label,{children:"Email: *"}),Object(E.jsx)(S.a.Control,{type:"email",onChange:function(e){return u(Object(s.a)(Object(s.a)({},c),{},{email:e.target.value}))}})]}),Object(E.jsxs)(S.a.Group,{controlId:"formLastName",children:[Object(E.jsx)(S.a.Label,{children:"Last Name:"}),Object(E.jsx)(S.a.Control,{type:"text",onChange:function(e){return u(Object(s.a)(Object(s.a)({},c),{},{lastname:e.target.value}))}})]}),Object(E.jsxs)(S.a.Group,{controlId:"formPassword",children:[Object(E.jsx)(S.a.Label,{children:"Password: *"}),Object(E.jsx)(S.a.Control,{type:"password",onChange:function(e){return u(Object(s.a)(Object(s.a)({},c),{},{password:e.target.value}))}})]}),Object(E.jsx)(f.a,{onClick:p,children:"Create"})]}),Object(E.jsx)(f.a,{onClick:function(){return t(!1)},children:"Back to Login"})]})},Z=function(){var e=Object(d.a)(i.a.mark((function e(t,n){var r,o,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,t();case 3:if(o=e.sent,a=Date.now()-r,!((c=n-a)>0)){e.next=9;break}return e.next=9,new Promise((function(e){return setTimeout(e,c)}));case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(e){var t=e.userName,n=e.logout,o=w.root,a=Object(r.useState)({todo:o,groupList:[]}),c=Object(l.a)(a,2),s=c[0],u=c[1],i=function(e){u(e),w.setGroupAsSelected(e)};return Object(E.jsxs)(h.a,{children:[Q(s,i,t,n),Object(E.jsx)(R,{}),Object(E.jsx)(F,{}),Object(E.jsx)(X,{setGroup:i,currentGroup:s})]})},Q=function(e,t,n,r){var o=e.todo.name,a=e.groupList;return Object(E.jsxs)(p.a,{bg:"light",expand:"md",children:[Object(E.jsx)(p.a.Brand,{href:"/",children:o}),Object(E.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(E.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(E.jsxs)(j.a,{className:"me-auto",children:[a.map((function(e,n){return Object(E.jsx)(j.a.Link,{onClick:function(){var r=a.slice(0,n);t({todo:e,groupList:r})},children:"".concat(e.name," /")},"nav-".concat(e.id))})),Object(E.jsx)(j.a.Link,{onClick:function(){return console.log("Ignoring your stupid click!")},children:o})]}),Object(E.jsx)(f.a,{onClick:function(){return D.save()},children:"Save"}),Object(E.jsxs)(j.a,{children:["User: ",n]}),Object(E.jsx)(f.a,{onClick:r,children:"Logout"})]})]})},$=function(){var e=D.getUser(),t="initialized";null===e?t="login":w.initialized||(t="load-data");var n=Object(r.useState)({state:t,userName:e}),o=Object(l.a)(n,2),a=o[0],c=o[1],u=function(e){return c({state:"initialized",userName:e})},p=a.userName,j=function(){c({state:"create-account",userName:null})};if("create-account"===a.state)return Object(E.jsx)(Y,{setCreatingAccount:j,setLoggedIn:u});if(null===p){var f=function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.loginUser(t);case 2:e.sent&&u(t.username);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(_,{setLogin:f,setCreatingAccount:j})}if(!w.initialized)return function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z((function(){return D.loadUserData()}),400);case 2:w.initialized=!0,c(Object(s.a)(Object(s.a)({},a),{},{state:"initialized"}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(E.jsx)(h.a,{children:Object(E.jsx)("h2",{children:"Loading..."})});return Object(E.jsx)(q,{userName:p,logout:function(){D.logout(),u(null)}})};n(79);c.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)($,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.02191884.chunk.js.map