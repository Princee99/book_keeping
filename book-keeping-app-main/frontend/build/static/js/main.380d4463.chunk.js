(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/book.6b532c17.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/books.b7941415.mp4"},36:function(e,a,t){e.exports=t.p+"static/media/bookpic.3950ba7e.jpg"},39:function(e,a,t){e.exports=t(75)},50:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),o=t.n(l),c=t(1),s=(t(50),t(4)),m=t(5),i=t(3),u=t.n(i),p=t(11),d=t(12),E=t.n(d),b=function(){return function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userAuthData");try{a({type:"USER_LOGOUT"})}catch(t){}case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},f=function(){var e=Object(c.b)(),a=Object(m.e)(),t=Object(c.c)((function(e){return e.userLogin})).userInfo;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"BK"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav m-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{type:"button",className:"btn btn-danger","data-toggle":"modal","data-target":"#about"},"About"),r.a.createElement("div",{className:"modal fade",id:"about",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"App functionalities"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item active"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Register User",r.a.createElement("hr",null)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Update Profile",r.a.createElement("hr",null)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Login",r.a.createElement("hr",null)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"User Dashboard",r.a.createElement("hr",null)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"List of Users",r.a.createElement("hr",null)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"List of Books",r.a.createElement("hr",null)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Many more",r.a.createElement("hr",null)))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("a",{className:"mr-5",href:"https://github.com/tweneboah",target:"_"},"developed by: i-NovoTec"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal"},"Close")))))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/books"},"Books")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/addbook"},"Add book")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/users"},"Users")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/login",onClick:function(){return e(b())}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/register"},"Register"))),t?r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle btn-dark","data-toggle":"dropdown",href:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},t.name),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(s.b,{className:"dropdown-item",to:"/profile"},"Profile"),r.a.createElement(s.b,{className:"dropdown-item",to:"/addbook"},"Add book"),r.a.createElement(s.b,{className:"dropdown-item",to:"/books"},"Books"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("button",{onClick:function(){e(b()),a.push("/")},className:"dropdown-item"},"Logout"))):""),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit"},"Search")))))},g=(t(72),t(34)),v=t.n(g),h=t(35),y=t.n(h),N=function(){return r.a.createElement("div",{className:"Container"},r.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:"Video"},r.a.createElement("source",{src:y.a,type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"SubContent"},r.a.createElement("h1",null,"Book Catolog"),r.a.createElement("p",null,"Manage your Books with Ease"),r.a.createElement("button",{type:"button",className:"btn btn-outline-dark"},r.a.createElement(s.b,{to:"/register"},"Get started")),r.a.createElement("img",{src:v.a,alt:"profile"}))))},S=t(6),O=function(e){var a=e.error;return r.a.createElement("div",{class:"alert alert-warning",role:"alert"},a)},_=function(){return r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},x=function(e){var a=e.history,t=Object(n.useState)(""),l=Object(S.a)(t,2),o=l[0],s=l[1],m=Object(n.useState)(""),i=Object(S.a)(m,2),d=i[0],b=i[1],f=Object(c.b)(),g=Object(c.c)((function(e){return e.userLogin})),v=g.loading,h=g.userInfo,y=g.error;console.log(v,h,y),Object(n.useEffect)((function(){h&&a.push("/")}),[f,h,a]);return r.a.createElement("div",{className:"row container-height"},r.a.createElement("div",{className:"col-lg-6 col-md-6 m-auto"},r.a.createElement("div",{className:"container"},v&&r.a.createElement(_,null),y&&r.a.createElement(O,{error:y}),r.a.createElement("h1",{className:"text-center"},"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(function(e,a){return function(){var t=Object(p.a)(u.a.mark((function t(n){var r,l,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"USER_LOGIN_REQUEST"}),r={headers:{"Content-Type":"application/json"}},t.next=5,E.a.post("/api/users/login",{email:e,password:a},r);case 5:l=t.sent,o=l.data,n({type:"USER_LOGIN_SUCCESS",payload:o}),localStorage.setItem("userAuthData",JSON.stringify(o)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"USER_LOGIN_FAIL",payload:t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(o,d)),console.log(o,d)}},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-info m-auto"},"Login"))))))},C=(t(73),function(e){var a=e.history,t=Object(n.useState)(""),l=Object(S.a)(t,2),o=l[0],s=l[1],m=Object(n.useState)(""),i=Object(S.a)(m,2),d=i[0],b=i[1],f=Object(n.useState)(""),g=Object(S.a)(f,2),v=g[0],h=g[1],y=Object(c.c)((function(e){return e.userLogin})),N=y.userInfo,x=y.loading,C=y.error,k=Object(c.b)();return r.a.createElement("div",{className:"row container-height"},r.a.createElement("div",{className:"col-lg-6 col-md-6 m-auto"},r.a.createElement("div",{className:"container"},x&&r.a.createElement(_,null),C&&r.a.createElement(O,{error:C}),r.a.createElement("h1",{className:"text-center"},"Register"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),k(function(e,a,t){return function(){var n=Object(p.a)(u.a.mark((function n(r){var l,o,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:"USER_REGISTER_REQUEST"}),l={headers:{"Content-Type":"application/json"}},n.next=5,E.a.post("/api/users",{name:e,email:a,password:t},l);case 5:o=n.sent,c=o.data,console.log(e,a,t),r({type:"USER_REGISTER_SUCCESS",payload:c}),localStorage.setItem("userAuthData",JSON.stringify(c)),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("mongdb error",n.t0),r({type:"USER_REGISTER_FAIL",payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(o,d,v)),console.log(N,x,C),null!==N&&void 0===C&&a.push("/")}},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name"),r.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{value:v,onChange:function(e){return h(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-info m-auto"},"Register"))))))}),k=(t(74),t(36)),w=t.n(k),U=function(e){var a=e.history,t=Object(c.b)();Object(n.useEffect)((function(){t(function(){var e=Object(p.a)(u.a.mark((function e(a,t){var n,r,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t().userLogin.userInfo,e.prev=1,a({type:"USER_PROFILE_REQUEST"}),r={headers:{authorization:"Bearer ".concat(n.token)}},e.next=6,E.a.get("/api/users/profile",r);case 6:l=e.sent,o=l.data,a({type:"USER_PROFILE_SUCCESS",payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a({type:"USER_PROFILE_FAIL",payload:e.t0.response&&e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a,t){return e.apply(this,arguments)}}())}),[t,a]);var l=Object(c.c)((function(e){return e.userLogin})).userInfo;Object(n.useEffect)((function(){null===l&&a.push("/login")}),[l,a]);var o=Object(c.c)((function(e){return e.userProfile})),m=o.loading,i=o.user,d=o.user&&o.user.books;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col mt-5"},m&&!i?r.a.createElement(_,null):r.a.createElement("div",{className:"card m-auto ",style:{width:"50%"}},r.a.createElement("img",{src:w.a,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},i&&i.email),r.a.createElement("p",{className:"card-text"},i&&i.name),r.a.createElement(s.b,{to:"/user-update",className:"btn btn-primary"},"Update your profile"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},d?r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Author"),r.a.createElement("th",{scope:"col"},"Book Name"),r.a.createElement("th",{scope:"col"},"Delete"),r.a.createElement("th",{scope:"col"},"Update"))),r.a.createElement("tbody",null,d.map((function(e){return r.a.createElement("tr",{className:"table-dark",key:e._id},r.a.createElement("th",{scope:"row"},e.author),r.a.createElement("td",null,e.title),r.a.createElement("td",null,"Delete"),r.a.createElement("td",null,"Update"))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"You don't have any book created."),r.a.createElement(s.b,null,"Start Creating")))))},I=function(e){var a=e.history,t=Object(c.b)();Object(n.useEffect)((function(){t(function(){var e=Object(p.a)(u.a.mark((function e(a){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"FETCH_BOOK_REQUEST",loading:!0}),t={headers:{"Content-Type":"application/json"}},e.next=5,E.a.get("/api/books",t);case 5:n=e.sent,r=n.data,a({type:"FETCH_BOOK_SUCCESS",payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"CREATE_BOOK_FAIL",error:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[t]);var l=Object(c.c)((function(e){return e.booksList})),o=l.books,m=l.loading,i=function(e){t(function(e){return function(){var a=Object(p.a)(u.a.mark((function a(t){var n,r,l;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:"DELETE_BOOK_REQUEST",loading:!0}),n={headers:{"Content-Type":"application/json"}},a.next=5,E.a.delete("/api/books/".concat(e),n);case 5:r=a.sent,l=r.data,t({type:"DELETE_BOOK_SUCCESS",payload:l}),t({type:"FETCH_BOOK_SUCCESS"}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),t({type:"DELETE_BOOK_FAIL",loading:!1,error:a.t0.response&&a.t0.response.data.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(e)),a.push("/books")};return r.a.createElement("div",null,m&&r.a.createElement(_,null),void 0!==o&&0===o.length?"No":r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Author"),r.a.createElement("th",{scope:"col"},"Book Name"),r.a.createElement("th",{scope:"col"},"Action"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",null,o&&o.map((function(e){return r.a.createElement("tr",{className:"table-dark",key:e._id},r.a.createElement("th",{scope:"row"},e.title),r.a.createElement("td",null,e.author),r.a.createElement("td",null,r.a.createElement("i",{onClick:function(){return i(e._id)},className:"fas fa-trash ",style:{color:"red",cursor:"progress"}})),r.a.createElement("td",null,r.a.createElement(s.b,{to:"/book/".concat(e&&e._id)},r.a.createElement("i",{className:"far fa-edit",style:{color:"yellow",cursor:"progress"}}))))})))))))},R=function(e){var a=e.history,t=Object(n.useState)(""),l=Object(S.a)(t,2),o=l[0],s=l[1],m=Object(n.useState)(""),i=Object(S.a)(m,2),d=i[0],b=i[1],f=Object(n.useState)(""),g=Object(S.a)(f,2),v=g[0],h=g[1],y=Object(c.c)((function(e){return e.userLogin})).userInfo;console.log(y._id);var N=Object(c.b)();return console.log(o),r.a.createElement("div",{className:"row container-height"},r.a.createElement("div",{className:"col-lg-6 col-md-6 m-auto"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModal"},"Click to add Book."),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Create Book"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("h1",{className:"text-center"},"Add Book"),r.a.createElement("form",{onSubmit:function(e){var t,n={category:o,title:d,author:v,createdBy:y&&y._id};e.preventDefault(),N((t=n,function(){var e=Object(p.a)(u.a.mark((function e(a){var n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"CREATE_BOOK_REQUEST",loading:!0}),n={headers:{"Content-Type":"application/json"}},e.next=5,E.a.post("/api/books",t,n);case 5:r=e.sent,l=r.data,a({type:"CREATE_BOOK_SUCCESS",payload:l}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"CREATE_BOOK_FAIL",error:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())),a.push("/books")}},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{value:o,onChange:function(e){return s(e.target.value)},className:"custom-select"},r.a.createElement("option",{defaultValue:"programming"},"programming"),r.a.createElement("option",{value:"religion"},"Religion"),r.a.createElement("option",{value:"life"},"life"),r.a.createElement("option",{value:"culture"},"culture"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Author "),r.a.createElement("input",{value:v,onChange:function(e){return h(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Author name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"title"),r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Book title"})),r.a.createElement("button",{type:"submit",className:"btn btn-warning m-auto"},"Create Book")))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal"},"Close"))))))))},j=function(e){var a=e.msg;return r.a.createElement("div",{className:"alert alert-success",role:"alert"},a)},T=function(e){e.history;var a=Object(c.c)((function(e){return e.userLogin})),t=a.userInfo;console.log(t);var l=Object(n.useState)(t?t.name:""),o=Object(S.a)(l,2),s=o[0],m=o[1],i=Object(n.useState)(t?t.email:""),d=Object(S.a)(i,2),b=d[0],f=d[1],g=Object(n.useState)(""),v=Object(S.a)(g,2),h=v[0],y=v[1];console.log(a);var N=Object(c.c)((function(e){return e.updatedUser})),O=N.user,_=N.loading,x=N.success,C=Object(c.b)();return r.a.createElement("div",{className:"row container-height"},r.a.createElement("div",{className:"col-lg-6 col-md-6 m-auto"},r.a.createElement("div",{className:"container"},O&&!_&&x&&r.a.createElement(j,{msg:"Updated successfully. Logout and login with your new credentials"}),r.a.createElement("h1",{className:"text-center"},"Update"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),C(function(e,a,t){return function(){var n=Object(p.a)(u.a.mark((function n(r,l){var o,c,s,m;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:"USER_UPDATE_REQUEST",loading:!0}),o=l().userLogin.userInfo,console.log(o.token),c={headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(o.token)}},n.next=7,E.a.put("/api/users/profile/update",{name:e,email:a,password:t},c);case 7:s=n.sent,m=s.data,r({type:"USER_UPDATE_SUCCESS",payload:m}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:"USER_UPDATE_FAIL",payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,a){return n.apply(this,arguments)}}()}(s,b,h))}},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name"),r.a.createElement("input",{value:s,onChange:function(e){return m(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{value:b,onChange:function(e){return f(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{value:h,onChange:function(e){return y(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary m-auto"},"Update your profile"))))))},L=function(e){var a=e.history,t=Object(m.f)().id,l=Object(c.c)((function(e){return e.bookDetails})),o=l.book,s=l.loading,i=Object(n.useState)(o&&!s&&o.category),d=Object(S.a)(i,2),b=d[0],f=d[1],g=Object(n.useState)(o&&!s&&o.title),v=Object(S.a)(g,2),h=v[0],y=v[1],N=Object(n.useState)(o&&o.author),O=Object(S.a)(N,2),_=O[0],x=O[1],C=Object(c.b)();Object(n.useEffect)((function(){C(function(e,a){return function(){var t=Object(p.a)(u.a.mark((function t(n){var r,l,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"BOOK_DETAIL_REQUEST",loading:!0}),r={headers:{"Content-Type":"application/json"}},t.next=5,E.a.get("/api/books/".concat(e),a,r);case 5:l=t.sent,o=l.data,n({type:"BOOK_DETAIL_SUCCESS",payload:o}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"BOOK_DETAIL_FAIL",error:t.t0.response&&t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[C,t]);return r.a.createElement("div",{className:"row container-height"},r.a.createElement("div",{className:"col-lg-6 col-md-6 m-auto"},r.a.createElement("div",{className:"container"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center"},"Update"),r.a.createElement("form",{onSubmit:function(e){var n={category:b,title:h,author:_};e.preventDefault(),C(function(e,a){return function(){var t=Object(p.a)(u.a.mark((function t(n){var r,l,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"BOOK_UPDATE_REQUEST",loading:!0}),r={headers:{"Content-Type":"application/json"}},t.next=5,E.a.put("/api/books/".concat(e),a,r);case 5:l=t.sent,o=l.data,n({type:"BOOK_UPDATE_SUCCESS",payload:o}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"BOOK_UPDATE_FAIL",loading:!1,error:t.t0.response&&t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t,n)),a.push("/books")}},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{value:b,onChange:function(e){return f(e.target.value)},className:"custom-select"},r.a.createElement("option",{defaultValue:"programming"},"programming"),r.a.createElement("option",{value:"religion"},"Religion"),r.a.createElement("option",{value:"life"},"life"),r.a.createElement("option",{value:"culture"},"culture"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Author "),r.a.createElement("input",{value:_,onChange:function(e){return x(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Author name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"title"),r.a.createElement("input",{value:h,onChange:function(e){return y(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Book title"})),r.a.createElement("button",{type:"submit",className:"btn btn-dark m-auto"},"Create Book")))):"No")))},A=function(){var e=Object(c.b)();Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(u.a.mark((function e(a){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"FETCH_USERS_REQUEST",loading:!0}),t={headers:{"Content-Type":"application/json"}},e.next=5,E.a.get("/api/users",t);case 5:n=e.sent,r=n.data,a({type:"FETCH_USERS_SUCCESS",payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"CREATE_USERS_FAIL",error:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[e]);var a=Object(c.c)((function(e){return e.usersList})),t=a.loading,l=a.users,o=a.error;return console.log(l,t,o),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"text-center m-5"},"List of users ",l&&l.length),r.a.createElement("hr",{className:"text-white"}),r.a.createElement("div",{className:"row text-center justify-content-center"},t?r.a.createElement(_,null):r.a.createElement(r.a.Fragment,null,l&&l.map((function(e){return r.a.createElement("div",{className:"col-lg-3",key:e._id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},e.email),r.a.createElement("i",{className:"far fa-address-card h2 text-info"}))))})))))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(f,null),r.a.createElement(m.a,{exact:!0,path:"/",component:N}),r.a.createElement(m.a,{exact:!0,path:"/register",component:C}),r.a.createElement(m.a,{exact:!0,path:"/login",component:x}),r.a.createElement(m.a,{exact:!0,path:"/profile",component:U}),r.a.createElement(m.a,{exact:!0,path:"/books",component:I}),r.a.createElement(m.a,{exact:!0,path:"/addbook",component:R}),r.a.createElement(m.a,{exact:!0,path:"/user-update",component:T}),r.a.createElement(m.a,{exact:!0,path:"/book/:id",component:L}),r.a.createElement(m.a,{exact:!0,path:"/users",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(14),P=t(37),D=t(38),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:a.payload};case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_PROFILE_REQUEST":return{loading:!0};case"USER_PROFILE_SUCCESS":return{loading:!1,user:a.payload};case"USER_PROFILE_FAIL":return{loading:!1,payload:a.payload};default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_UPDATE_REQUEST":return{loading:!0};case"USER_UPDATE_SUCCESS":return{user:a.payload,loading:!1,success:!0};case"USER_UPDATE_FAIL":return{error:a.payload,loading:!1};default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_BOOK_REQUEST":return{loading:!0};case"CREATE_BOOK_SUCCESS":return{book:a.payload,loading:!1};case"CREATE_BOOK_FAIL":return{loading:!1,error:a.payload};default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BOOK_REQUEST":return{loading:!0};case"FETCH_BOOK_SUCCESS":return{books:a.payload,loading:!1};case"CREATE_BOOK_FAIL":return{loading:!1,error:a.payload};default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BOOK_DETAIL_REQUEST":return{loading:!0};case"BOOK_DETAIL_SUCCESS":return{book:a.payload,loading:!1};case"BOOK_DETAIL_FAIL":return{loading:!1,error:a.payload};default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_USERS_REQUEST":return{loading:!0};case"FETCH_USERS_SUCCESS":return{users:a.payload};case"CREATE_USERS_FAIL":return{loading:!1,error:a.payload};default:return e}},V=[P.a],W=Object(B.combineReducers)({userLogin:K,userProfile:Q,updatedUser:H,bookCreated:G,booksList:z,bookDetails:M,usersList:J}),Y={userLogin:{userInfo:localStorage.getItem("userAuthData")?JSON.parse(localStorage.getItem("userAuthData")):null}},$=Object(B.createStore)(W,Y,Object(D.composeWithDevTools)(B.applyMiddleware.apply(void 0,V)));o.a.render(r.a.createElement(c.a,{store:$},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.380d4463.chunk.js.map