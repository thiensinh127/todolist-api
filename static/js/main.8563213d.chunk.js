(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),s=n.n(c),i=(n(31),n(32),n(6)),o=n(2),r=n(9),l=n(4),u=n.n(l),d=n.p+"static/media/X2oObC4.dfa77826.png",j=(n(7),n(0));var b=n(5),m="GET_TASK_API",f=function(){return function(t){return t(O()),u()({url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",method:"GET"}).then((function(e){t({type:m,taskList:e.data}),t(v())})).catch((function(e){var n;console.log(null===(n=e.response)||void 0===n?void 0:n.data),t(v())}))}},O=function(){return function(t){t({type:"SHOW_LOADING"})}},v=function(){return function(t){t({type:"HIDE_LOADING"})}},h=n(22),p=n(23),N=n(26),x=n(25),k=function(t){Object(N.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).state={curTime:null},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.setState({curTime:(new Date).toLocaleString()})}),1e3)}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"time",children:this.state.curTime})})}}]),n}(a.Component),g=n.p+"static/media/Spinner-1s-200px (1).6f75c712.gif";function y(){return Object(b.c)((function(t){return t.ToDoListReducer})).loading?Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("img",{className:"imgLoading",src:g,alt:"loading"})}):null}function T(t){var e=Object(b.c)((function(t){return t.ToDoListReducer})).taskList,n=Object(b.b)(),c=Object(a.useState)({errors:{taskName:""},values:{taskName:""},isValid:!1}),s=Object(r.a)(c,2),l=s[0],m=s[1];Object(a.useEffect)((function(){n(f())}),[]);var h=function(t){n(function(t){return function(e){return e(O()),u()({url:"http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=".concat(t),method:"PUT"}).then((function(t){e(f()),e(v())})).catch((function(t){var n;console.log(null===(n=t.response)||void 0===n?void 0:n.data),e(v())}))}}(t))},p=function(t){n(function(t){return function(e){return e(O()),u()({url:"http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=".concat(t),method:"PUT"}).then((function(t){e(f()),e(v())})).catch((function(t){var n;console.log(null===(n=t.response)||void 0===n?void 0:n.data),e(v())}))}}(t))},N=function(t){n(function(t){return function(e){return e(O()),u()({url:"http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=".concat(t),method:"DELETE"}).then((function(t){e(f()),e(v())})).catch((function(t){var n;console.log(null===(n=t.response)||void 0===n?void 0:n.data),e(v())}))}}(t))},x=function(t){var e;t.preventDefault(),console.log(l.values.taskName),console.log(l.isValid),l.isValid&&(n((e=l.values.taskName,function(t){return t(O()),u()({url:"http://svcy.myclass.vn/api/ToDoList/AddTask",method:"POST",data:{taskName:e}}).then((function(e){t(f()),t(v())})).catch((function(e){var n;alert(null===(n=e.response)||void 0===n?void 0:n.data),t(v())}))})),l.values.taskName="")};return Object(j.jsxs)("form",{onSubmit:x,className:"card",children:[Object(j.jsx)("div",{className:"card__header",children:Object(j.jsx)("img",{src:d,alt:"anhBia"})}),Object(j.jsx)("div",{className:"card__body",children:Object(j.jsxs)("div",{className:"card__content",children:[Object(j.jsxs)("div",{className:"card__title",children:[Object(j.jsx)("h2",{children:"My Tasks"}),Object(j.jsx)("p",{children:Object(j.jsx)(k,{})})]}),Object(j.jsxs)("div",{className:"card__add",children:[Object(j.jsx)("input",{name:"taskName",onChange:function(t){var e=!0,n=t.target,a=n.name,c=n.value,s=Object(o.a)({},l.values);s=Object(o.a)(Object(o.a)({},s),{},Object(i.a)({},a,c));var r=Object(o.a)({},l.errors);/^[a-z A-Z]+$/.test(c)&&""!==c.trim()?r[a]="":(r[a]=a+" invalid !",e=!1),m(Object(o.a)(Object(o.a)({},l),{},{values:s,errors:r,isValid:e}))},value:l.values.taskName,id:"newTask",type:"text",placeholder:"Enter an activity..."}),Object(j.jsx)("button",{type:"submit",id:"addItem",onClick:x,children:Object(j.jsx)("i",{className:"fa fa-plus"})})]}),Object(j.jsxs)("div",{className:"error",children:[" ",l.errors.taskName]}),Object(j.jsx)("div",{id:"notiInput",className:"alert-danger",style:{display:"none"}}),Object(j.jsxs)("div",{className:"card__todo",children:[Object(j.jsx)("ul",{className:"todo",id:"todo",children:e.filter((function(t){return!t.status})).map((function(t,e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:t.taskName}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:"remove",onClick:function(){N(t.taskName)},children:Object(j.jsx)("i",{className:"fa fa-trash-alt"})}),Object(j.jsxs)("button",{type:"button",className:"complete",onClick:function(){p(t.taskName)},children:[Object(j.jsx)("i",{className:"far fa-check-circle"}),Object(j.jsx)("i",{className:"fas fa-check-circle"})]})]})]},e)}))}),Object(j.jsxs)("ul",{className:"todo",id:"completed",children:[" ",e.filter((function(t){return t.status})).map((function(t,e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:t.taskName}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:"remove",onClick:function(){N(t.taskName)},children:Object(j.jsx)("i",{className:"fa fa-trash-alt"})}),Object(j.jsxs)("button",{type:"button",className:"complete",onClick:function(){h(t.taskName)},children:[Object(j.jsx)("i",{className:"far fa-undo"}),Object(j.jsx)("i",{className:"fas fa-undo"})]})]})]},e)}))]})]})]})}),Object(j.jsx)(y,{})]})}var L=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(T,{})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))},_=n(10),I={taskList:[],loading:!1},C=n(24),A=Object(_.b)({ToDoListReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return t.taskList=e.taskList,Object(o.a)({},t);case"SHOW_LOADING":return Object(o.a)(Object(o.a)({},t),{},{loading:!0});case"HIDE_LOADING":return Object(o.a)(Object(o.a)({},t),{},{loading:!1});default:return t}}}),E=Object(_.c)(A,Object(_.a)(C.a));s.a.render(Object(j.jsx)(b.a,{store:E,children:Object(j.jsx)(L,{})}),document.getElementById("root")),D()},7:function(t,e,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.8563213d.chunk.js.map