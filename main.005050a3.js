(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(17),e.default={data:function(){return{author:"kuleyu",blog:"kuleyu-hugo.netlify.com"}},render:function(){var t=arguments[0];return t("div",{attrs:{id:"footer"}},[t("span",["Power by ",this.author,"，欢迎访问作者博客：",t("a",{attrs:{href:"https://kuleyu-hugo.netlify.com",target:"_blank"}},[this.blog])]),t("br"),t("span",["Hosted by Github Pages"])])}}},,function(t,e,o){"use strict";o.r(e);var n=o(8),s=(o(25),o(0)),l=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"main-header"},[e("h1",[this._v("TodoAPP")])])}],!1,null,"055c7c7e",null).exports,r={props:{todo:{type:Object,require:!0}},methods:{deleteTodo(){this.$emit("del",this.todo.id)}}},i=(o(23),Object(s.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["todo-item",t.todo.completed?"completed":""]},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:function(e){var o=t.todo.completed,n=e.target,s=!!n.checked;if(Array.isArray(o)){var l=t._i(o,null);n.checked?l<0&&t.$set(t.todo,"completed",o.concat([null])):l>-1&&t.$set(t.todo,"completed",o.slice(0,l).concat(o.slice(l+1)))}else t.$set(t.todo,"completed",s)}}}),t._v(" "),o("span",[t._v(t._s(t.todo.content))])]),t._v(" "),o("button",{staticClass:"destroy",on:{click:t.deleteTodo}})])},[],!1,null,"7e0e3df6",null).exports),a={props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},data:()=>({states:["all","active","completed"]}),computed:{unFinishedTodoLength(){return this.todos.filter(t=>!t.completed).length}},methods:{toggleFilter(t){this.$emit("toggle",t)},clearAllCompleted(){this.$emit("clearAllCompleted")}}},c=(o(21),Object(s.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"helper"},[o("span",{staticClass:"left"},[t._v(t._s(t.unFinishedTodoLength)+" tasks left")]),t._v(" "),o("span",{staticClass:"tabs"},t._l(t.states,function(e){return o("span",{key:e,class:[e,t.filter===e?"actived":""],on:{click:function(o){t.toggleFilter(e)}}},[t._v("\n            "+t._s(e)+"\n        ")])})),t._v(" "),o("span",{staticClass:"clear",on:{click:function(e){t.clearAllCompleted()}}},[t._v("\n        Clear Completed\n    ")])])},[],!1,null,"43b52414",null).exports);const d={fetch:function(){let t=JSON.parse(localStorage.getItem("todos-vuejs-2.0")||"[]");return t.forEach(function(t,e){t.id=e}),d.uid=t.length,t},save:function(t){localStorage.setItem("todos-vuejs-2.0",JSON.stringify(t))}};var u={data:()=>({todos:d.fetch(),filter:"all"}),watch:{todos:{handler:function(t){d.save(t)},deep:!0}},computed:{filteredTodos(){if("all"===this.filter)return this.todos;const t="completed"===this.filter;return this.todos.filter(e=>t===e.completed)}},components:{Item:i,Tabs:c},methods:{addTodo(t){t.target.value.trim()?(this.todos.unshift({id:d.uid++,content:t.target.value.trim(),completed:!1}),t.target.value=""):alert("输入不能为空哦！")},deleteTodo(t){this.todos.splice(this.todos.findIndex(e=>e.id===t),1)},toggleFilter(t){this.filter=t},clearAllCompleted(){this.todos=this.todos.filter(t=>!1===t.completed)}}},p=(o(19),Object(s.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"real-app"},[o("input",{staticClass:"add-input",attrs:{type:"text",autofocus:"autofocus",placeholder:"Press 'Enter' to add task"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}}}),t._v(" "),t._l(t.filteredTodos,function(e){return o("Item",{key:e.id,attrs:{todo:e},on:{del:t.deleteTodo}})}),t._v(" "),o("Tabs",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],attrs:{filter:t.filter,todos:t.todos},on:{toggle:t.toggleFilter,clearAllCompleted:t.clearAllCompleted}})],2)},[],!1,null,"1cc29b00",null).exports),f=o(7),h={components:{Header:l,Todo:p,Footer:o.n(f).a}},m=(o(15),Object(s.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"cover"}}),this._v(" "),e("Header"),this._v(" "),e("Todo"),this._v(" "),e("Footer")],1)},[],!1,null,"61f98d0a",null).exports);o(13),o(11);const v=document.createElement("div");document.body.appendChild(v),new n.a({render:t=>t(m)}).$mount(v)},,function(t,e,o){},,function(t,e,o){},,function(t,e,o){"use strict";var n=o(1);o.n(n).a},,function(t,e,o){},,function(t,e,o){"use strict";var n=o(2);o.n(n).a},,function(t,e,o){"use strict";var n=o(3);o.n(n).a},,function(t,e,o){"use strict";var n=o(4);o.n(n).a},,function(t,e,o){"use strict";var n=o(5);o.n(n).a}],[[9,1,0]]]);