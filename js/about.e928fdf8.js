(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"094a":function(t,e,a){},"09be":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"parent-card form",staticStyle:{"background-color":"transparent"},attrs:{method:"POST",enctype:"multipart/form-data"}},[a("div",[a("div",{staticClass:"form_inputs"},[t.edit?t._e():a("h2",[t._v("Create Project")]),t.edit?a("h2",[t._v("Edit Project")]):t._e(),a("div",{staticClass:"p-medium grid g-two"},[a("div",{staticClass:"m-r-3"},[a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"subtitle"}},[t._v("Sub Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],attrs:{type:"text",name:"subtitle",id:"subtitle"},domProps:{value:t.subtitle},on:{input:function(e){e.target.composing||(t.subtitle=e.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"client"}},[t._v("Client")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.client,expression:"client"}],attrs:{type:"text",name:"client",id:"client"},domProps:{value:t.client},on:{input:function(e){e.target.composing||(t.client=e.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"demo"}},[t._v("Demo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.demo,expression:"demo"}],attrs:{type:"text",name:"demo",id:"demo"},domProps:{value:t.demo},on:{input:function(e){e.target.composing||(t.demo=e.target.value)}}})])]),a("div",{staticClass:"m-l-3"},[a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"itemImg"}},[t._v("image")]),a("input",{attrs:{type:"file",name:"image",id:"itemImg"},on:{change:t.previewFiles}})]),a("div",{staticClass:"form-control grid"},[a("label",{attrs:{for:"category"}},[t._v("category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{name:"category",id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.category=e.target.multiple?a:a[0]}}},t._l(t.categories,function(e){return a("option",{key:e.name,staticClass:"options",attrs:{"data-val":e.name},domProps:{value:e.name}},[t._v(t._s(e.name))])}),0)]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"tags"}},[t._v("Article Tags:")]),a("input",{staticClass:"currentInput input",attrs:{id:"tags",type:"text",placeholder:"Type Tags Then Press Enter"},on:{keyup:function(e){return t.getTag(e)}}}),a("div",{staticClass:"tags flex"},t._l(t.tags,function(e){return a("li",{key:e,staticClass:"options btn btn-info tag-span",attrs:{"data-val":e}},[t._v("\n                "+t._s(e)+"\n                "),a("i",{staticClass:"fas fa-times",on:{click:function(a){return t.removetag(e)}}})])}),0)])])]),a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"brief"}},[t._v("Brief")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.brief,expression:"brief"}],attrs:{type:"text",name:"brief",id:"brief",rows:"4",cols:"50"},domProps:{value:t.brief},on:{input:function(e){e.target.composing||(t.brief=e.target.value)}}})]),a("div",{staticClass:"bg-darkgray p-3"},[a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"contentText"}},[t._v("Content")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contentText,expression:"contentText"}],attrs:{type:"text",name:"contentText",id:"contentText",rows:"4",cols:"50"},domProps:{value:t.contentText},on:{input:function(e){e.target.composing||(t.contentText=e.target.value)}}})]),t._m(0),a("button",{staticClass:"btn btn-info",on:{click:function(e){return e.preventDefault(),t.uploadImage()}}},[t._v("Add")]),a("div",{staticClass:"grid g-two"},t._l(t.content,function(e){return a("div",{key:e.name,staticClass:"parent-card p-relative"},[a("i",{staticClass:"fas fa-times close",on:{click:function(e){return t.removeContent(t.content.length+1)}}}),a("div",{staticClass:"p-relative"},[a("i",{staticClass:"fas fa-times close font-s",on:{click:function(a){return t.deleteImage(e.image)}}}),a("img",{staticClass:"w-50 block m-auto",attrs:{src:"https://server.ams-server.xyz"+e.image,alt:""}})]),a("p",{},[t._v(t._s(e.text))])])}),0)]),t.edit?t._e():a("button",{staticClass:"btn btn-success",attrs:{id:"addNewitem",type:"button"},on:{click:function(e){return e.preventDefault(),t.createProject()}}},[t._v("Save")]),t.edit?a("button",{staticClass:"btn btn-success",attrs:{id:"addNewitem",type:"button"},on:{click:function(e){return e.preventDefault(),t.createProject()}}},[t._v("Update")]):t._e()])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"contentImg"}},[t._v("image")]),a("input",{attrs:{type:"file",name:"image",id:"contentImg"}})])}],r=a("f499"),s=a.n(r),o=(a("6b54"),a("7514"),a("6762"),a("2fdb"),a("96cf"),a("3b8d")),c=a("cebc"),l=a("2f62"),u={name:"createProject",data:function(){return{edit:!1,loaded:!1,title:null,subtitle:null,client:null,demo:null,image:"",tags:[],brief:"",category:"",content:[],contentimgs:[],contentText:null,contentName:null}},computed:Object(c["a"])({},Object(l["d"])(["categories","url"]),Object(l["d"])("admin",["allprojects"]),Object(l["c"])("admin",["projectById"])),created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.id,!e){t.next=16;break}if(this.edit=!0,0!=this.allprojects.length){t.next=6;break}return t.next=6,this.$store.dispatch("admin/getProjects");case 6:a=this.projectById(e),this.title=a.title,this.subtitle=a.subtitle,this.client=a.client,this.tags=a.tags,this.content=a.content,this.brief=a.brief,this.demo=a.demo,this.category=a.category,a&&(this.loading=!1);case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getTag:function(t){var e=t.keyCode||t.which;if(13===e){var a=t.target.value.toLowerCase();""!=a&&(this.tags.includes(a)||this.tags.push(a),t.target.value="")}},removetag:function(t){this.tags=this.tags.filter(function(e){return e!=t})},addContent:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:""!=this.contentText&&this.content.push({no:this.content.length+1,text:this.contentText,name:this.contentName,image:e||""});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),removeContent:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this.content.find(function(t){return t._id.toString()==e.toString()}),this.deleteImage(a.image),this.content=this.content.filter(function(t){return t._id.toString()!==e.toString()});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),previewFiles:function(t){var e=t.target.files[0],a=["image/jpg","image/jpeg","image/png"],n=e["type"];a.includes(n)&&(this.image=e)},uploadImage:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,n,i,r,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=document.getElementById("contentImg"),0!=e.files.length){t.next=3;break}return t.abrupt("return",this.addContent(""));case 3:if(a=e.files[0],n=["image/jpg","image/jpeg","image/png"],i=a["type"],!n.includes(i)){t.next=16;break}return r=new FormData,r.append("image",a),t.next=11,fetch("https://server.ams-server.xyz/admin/media",{method:"Post",body:r});case 11:return s=t.sent,t.next=14,s.json();case 14:o=t.sent,this.addContent(o);case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deleteImage:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://server.ams-server.xyz/admin/media",{method:"Put",headers:{Accept:"application/json","Content-Type":"application/json"},body:s()({name:e})});case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),createProject:function(){var t=new FormData;if(t.append("title",this.title),t.append("subtitle",this.subtitle),t.append("client",this.client),t.append("brief",this.brief),t.append("demo",this.demo),t.append("image",this.image),t.append("category",this.category),t.append("tags",s()(this.tags)),t.append("content",s()(this.content)),this.edit){var e=this.$route.params.id;this.$store.dispatch({type:"admin/editProject",data:t,id:e})}else this.$store.dispatch({type:"admin/addProject",data:t})}},watch:{}},d=u,m=(a("c41e"),a("2877")),p=Object(m["a"])(d,n,i,!1,null,"5f965f82",null);e["default"]=p.exports},"2fdb":function(t,e,a){"use strict";var n=a("5ca1"),i=a("d2c8"),r="includes";n(n.P+n.F*a("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3430:function(t,e,a){"use strict";var n=a("dd00"),i=a.n(n);i.a},"371e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("All Categories")]),a("div",{staticClass:"content",class:{"loader-effect":t.loading}},[t.loading?t._e():a("div",t._l(t.allcategories,function(e){return a("div",{key:e._id,staticClass:"content-item flex f-space-between p-relative h-25"},[a("h3",[t._v(t._s(e.name))]),a("div",{staticClass:"flex"},[a("router-link",{attrs:{to:{name:"newcategory",params:{id:e._id}}}},[a("i",{staticClass:"fas fa-edit c-b m-r-3"})]),a("i",{staticClass:"fas fa-trash c-r m-l-3",on:{click:function(a){return t.deleteCategory(e._id)}}})],1)])}),0)])])},i=[],r=a("cebc"),s=a("2f62"),o={name:"List",data:function(){return{loading:!0}},computed:Object(r["a"])({},Object(s["d"])("admin",["allcategories"])),created:function(){0==this.allcategories.length?this.$store.dispatch({type:"admin/getCategories"}):this.loading=!1},methods:{deleteCategory:function(t){this.$store.dispatch({type:"admin/deleteCategory",data:{id:t}})}},watch:{allcategories:function(t){t&&(this.loading=!1)}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},"43d2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"dashboard"}},[a("section",{staticClass:"overall-info flex f-space-around p-medium m-4 border-r-l"},[t._m(0),a("div",{staticClass:" gradient-yellow w-25 p-large c-w border-r-l shadow-l f-center"},[a("p",[t._v("Projects")]),a("b",[t._v(t._s(t.allprojects.length))])]),a("div",{staticClass:" gradient-blue w-25 p-large c-w border-r-l shadow-l f-center"},[a("p",[t._v("Articles")]),a("b",[t._v(t._s(t.allarticles.length))])])]),a("aside",{staticClass:"grid g-two m-t-3 p-large"},[a("div",{staticClass:"over-all-review p-relative p-3 border-r-l"},[t._m(1),a("div",{staticClass:"grid p-large"},[a("router-link",{attrs:{to:{name:"allprojects"}}},[t._v("All Project")]),a("router-link",{attrs:{to:{name:"allarticles"}}},[t._v("All Article")]),a("router-link",{attrs:{to:{name:"newproject"}}},[t._v("New Project")]),a("router-link",{attrs:{to:{name:"newarticle"}}},[t._v("New Article")])],1)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:" gradient-green w-25 p-large c-w border-r-l shadow-l f-center"},[a("p",[t._v("Users")]),a("b",[t._v("2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-3 flex"},[a("h3",[t._v("Over All Reviews:")])])}],r=a("cebc"),s=a("2f62"),o={name:"Dashboard",data:function(){return{loading:!0}},computed:Object(r["a"])({},Object(s["d"])("admin",["allprojects","allarticles"])),created:function(){0==this.allprojects.length&&this.$store.dispatch({type:"admin/getProjects"}),0==this.allarticles.length&&this.$store.dispatch({type:"admin/getArticles"})},methods:{}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},5147:function(t,e,a){var n=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(i){}}return!0}},"56dc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"parent-card form",staticStyle:{"background-color":"transparent"},attrs:{method:"POST",enctype:"multipart/form-data"}},[a("div",[a("div",{staticClass:"form_inputs"},[a("h2",[t._v("Create Category")]),a("div",{staticClass:"p-medium"},[a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"name"}},[t._v("name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"tags"}},[t._v("Sub Category:")]),a("input",{staticClass:"currentInput input",attrs:{id:"tags",type:"text",placeholder:"Type Sub Category Then Press Enter"},on:{keyup:function(e){return t.getsubcategory(e)}}}),a("div",{staticClass:"tags flex"},t._l(t.subcategories,function(e){return a("li",{key:e,staticClass:"options btn btn-info btn-small tag-span",attrs:{"data-val":e}},[t._v("\n              "+t._s(e)+"\n              "),a("i",{staticClass:"fas fa-times",on:{click:function(a){return t.removetag(e)}}})])}),0)])]),a("button",{staticClass:"btn btn-success",attrs:{id:"addNewitem",type:"button"},on:{click:function(e){return e.preventDefault(),t.createCategory()}}},[t._v("Save")])])])])},i=[],r=a("f499"),s=a.n(r),o=(a("6762"),a("2fdb"),a("7f7f"),a("96cf"),a("3b8d")),c=a("cebc"),l=a("2f62"),u={name:"createCategory",data:function(){return{edit:!1,name:null,subcategories:[]}},computed:Object(c["a"])({},Object(l["d"])("admin",["allcategories"]),Object(l["c"])("admin",["categoryById"])),created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.id,!e){t.next=10;break}if(this.edit=!0,0!=this.allcategories.length){t.next=6;break}return t.next=6,this.$store.dispatch("admin/getCategory");case 6:return a=this.categoryById(e),this.name=a.name,this.subcategories=a.subcategories,t.abrupt("return",a&&(this.loading=!1));case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getsubcategory:function(t){var e=t.keyCode||t.which;if(13===e){var a=t.target.value.toLowerCase();""!=a&&(this.subcategories.includes(a)||this.subcategories.push(a),t.target.value="")}},removetag:function(t){this.subcategories=this.subcategories.filter(function(e){return e!=t})},createCategory:function(){var t=new FormData;if(t.append("name",this.name),t.append("subCategory",s()(this.subcategories)),this.edit){var e=this.$route.params.id;this.$store.dispatch({type:"admin/editCategory",data:t,id:e})}else this.$store.dispatch({type:"admin/addCategory",data:t})}},watch:{}},d=u,m=(a("3430"),a("2877")),p=Object(m["a"])(d,n,i,!1,null,"5c56a3aa",null);e["default"]=p.exports},6762:function(t,e,a){"use strict";var n=a("5ca1"),i=a("c366")(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},9855:function(t,e,a){},"9d94":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content",class:{"loader-effect":t.loading}},[a("h1",[t._v("All Articles")]),t.loading?t._e():a("div",{staticClass:"grid g-four"},t._l(t.allarticles,function(e){return a("div",{key:e._id,staticClass:"content-item p-relative"},[a("div",{staticClass:"content-item_bar"},[a("span",[t._v(t._s(e.date))]),a("div",{staticClass:"flex"},[a("router-link",{attrs:{to:{name:"newarticle",params:{id:e._id}}}},[a("i",{staticClass:"fas fa-edit c-b m-r-3"})]),a("i",{staticClass:"fas fa-trash c-r m-l-3",on:{click:function(a){return t.deleteArticle(e._id)}}})],1)]),a("h4",[t._v(t._s(e.title))])])}),0)])])},i=[],r=a("cebc"),s=a("2f62"),o={name:"List",data:function(){return{loading:!0}},computed:Object(r["a"])({},Object(s["d"])("admin",["allarticles"])),created:function(){0==this.allarticles.length?this.$store.dispatch({type:"admin/getArticles"}):this.loading=!1},methods:{deleteArticle:function(t){this.$store.dispatch({type:"admin/deleteArticle",data:{id:t}})}},watch:{allarticles:function(t){t&&(this.loading=!1)}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},aae3:function(t,e,a){var n=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},beec:function(t,e,a){},c41e:function(t,e,a){"use strict";var n=a("9855"),i=a.n(n);i.a},c9df:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("All Projects")]),a("div",{staticClass:"content",class:{"loader-effect":t.loading}},[t.loading?t._e():a("div",{staticClass:"grid g-three"},t._l(t.allprojects,function(e){return a("div",{key:e._id,staticClass:"content-item p-relative"},[a("div",{staticClass:"content-item_bar"},[a("span",[t._v(t._s(e.date))]),a("div",{staticClass:"flex"},[a("router-link",{attrs:{to:{name:"newproject",params:{id:e._id}}}},[a("i",{staticClass:"fas fa-edit c-b m-r-3"})]),a("i",{staticClass:"fas fa-trash c-r m-l-3",on:{click:function(a){return t.deleteProject(e._id)}}})],1)]),a("h3",[t._v(t._s(e.title))])])}),0)])])},i=[],r=a("cebc"),s=a("2f62"),o={name:"List",data:function(){return{loading:!0}},computed:Object(r["a"])({},Object(s["d"])("admin",["allprojects"])),created:function(){0==this.allprojects.length?this.$store.dispatch({type:"admin/getProjects"}):this.loading=!1},methods:{deleteProject:function(t){this.$store.dispatch({type:"admin/deleteProject",data:{id:t}})}},watch:{allprojects:function(t){t&&(this.loading=!1)}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},ca5f:function(t,e,a){"use strict";var n=a("094a"),i=a.n(n);i.a},d2c8:function(t,e,a){var n=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},d43b:function(t,e,a){"use strict";var n=a("beec"),i=a.n(n);i.a},dd00:function(t,e,a){},e53c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"form_inputs"},[a("form",{staticClass:"auth-form",attrs:{id:"login",action:"/login",method:"POST"},on:{submit:function(e){return t.submitLogin(e)}}},[a("h1",[t._v("Login")]),a("span",[t._v("Sign in To Your Account")]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email",placeholder:"Your Email Please"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",id:"passowrd",placeholder:"Enter Your Password."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{staticClass:"btn btn-primary"},[t._v("login")])])])])])},i=[],r=(a("96cf"),a("3b8d")),s={name:"LoginComponent",data:function(){return{name:"",email:"",password:"",loading:!1}},methods:{submitLogin:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,this.$store.dispatch({type:"admin/login",data:{email:this.email,password:this.password}});case 3:a=t.sent,a&&this.$router.push({name:"Dashboard"});case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},o=s,c=(a("ca5f"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"b5ff649a",null);e["default"]=l.exports},f024:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"parent-card form",staticStyle:{"background-color":"transparent"},attrs:{method:"POST",enctype:"multipart/form-data"}},[a("div",[a("div",{staticClass:"form_inputs"},[t.edit?t._e():a("h2",[t._v("Create Article")]),t.edit?a("h2",[t._v("Edit Article")]):t._e(),a("div",{staticClass:"p-medium"},[a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"name"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",id:"name"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"image"}},[t._v("image")]),a("input",{attrs:{type:"file",name:"image",id:"itemImg"},on:{change:t.previewFiles}})]),a("div",{staticClass:"form-control grid"},[a("label",{attrs:{for:"category"}},[t._v("category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{name:"category",id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.category=e.target.multiple?a:a[0]}}},t._l(t.categories,function(e){return a("option",{key:e.name,staticClass:"options",attrs:{"data-val":e.name},domProps:{value:e.name}},[t._v(t._s(e.name))])}),0)]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"tags"}},[t._v("Article Tags:")]),a("input",{staticClass:"currentInput input",attrs:{id:"tags",type:"text",placeholder:"Type Tags Then Press Enter"},on:{keyup:function(e){return t.getTag(e)}}}),a("div",{staticClass:"tags flex"},t._l(t.tags,function(e){return a("li",{key:e,staticClass:"options btn btn-info tag-span",attrs:{"data-val":e}},[t._v("\n              "+t._s(e)+"\n              "),a("i",{staticClass:"fas fa-times",on:{click:function(a){return t.removetag(e)}}})])}),0)])]),a("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("input",{staticClass:"none",attrs:{type:"file",id:"getFile"},on:{change:function(e){return t.uploadImage(e)}}}),t.edit?t._e():a("button",{staticClass:"btn btn-success",attrs:{id:"addNewitem",type:"button"},on:{click:function(e){return e.preventDefault(),t.createArticle()}}},[t._v("Save")]),t.edit?a("button",{staticClass:"btn btn-success",attrs:{id:"addNewitem",type:"button"},on:{click:function(e){return e.preventDefault(),t.createArticle()}}},[t._v("Update")]):t._e()],1)])])},i=[],r=a("f499"),s=a.n(r),o=(a("6762"),a("2fdb"),a("7f7f"),a("96cf"),a("3b8d")),c=a("cebc"),l=a("2f62"),u=a("953d"),d={name:"createarticle",data:function(){return{edit:!1,title:null,category:"",image:"",tags:[],content:"<p>example content</p>",editorOption:{modules:{syntax:{},toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","emoji"]],handlers:{image:function(){document.getElementById("getFile").click()}}}}}}},components:{quillEditor:u["quillEditor"]},computed:Object(c["a"])({},Object(l["d"])(["categories"]),Object(l["d"])("admin",["allarticles"]),Object(l["c"])("admin",["articleById"])),created:function(){var t=this.$route.params.id;t&&this.startEditing(t)},methods:{onEditorBlur:function(t){return t},onEditorFocus:function(t){return t},onEditorReady:function(t){return t},onEditorChange:function(t){var e=t.quill,a=t.html,n=t.text;return{text:n,html:a,quill:e}},startEditing:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.edit=!0,0!=this.allarticles.length){t.next=4;break}return t.next=4,this.$store.dispatch("admin/getArticles");case 4:return a=this.articleById(e),this.title=a.title,this.tags=a.tags,this.category=a.category,this.content=a.content,t.abrupt("return",a&&(this.loading=!1));case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),uploadImage:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,n,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.selectedFile=e.target.files[0],a=new FormData,a.append("image",this.selectedFile),a.append("name",this.selectedFile.name),t.next=6,fetch("https://server.ams-server.xyz/admin/media",{method:"Post",body:a});case 6:return n=t.sent,t.next=9,n.json();case 9:i=t.sent,200!==n.status&&201!==n.status||(r=this.$refs.myQuillEditor.quill.getSelection(),this.$refs.myQuillEditor.quill.insertEmbed(r.index,"image","https://server.ams-server.xyz".concat(i)));case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getTag:function(t){var e=t.keyCode||t.which;if(13===e){var a=t.target.value.toLowerCase();""!=a&&(this.tags.includes(a)||this.tags.push(a),t.target.value="")}},removetag:function(t){this.tags=this.tags.filter(function(e){return e!=t})},previewFiles:function(t){var e=t.target.files[0],a=["image/jpg","image/jpeg","image/png"],n=e["type"];if(!a.includes(n))return"";this.image=e},createArticle:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=new FormData,a.append("content",this.content),a.append("tags",s()(this.tags)),a.append("title",this.title),a.append("category",this.category),a.append("image",this.image),!this.edit){t.next=13;break}return n=this.$route.params.id,t.next=10,this.$store.dispatch({type:"admin/editArticle",data:a,id:n});case 10:e=t.sent,t.next=16;break;case 13:return t.next=15,this.$store.dispatch({type:"admin/addArticle",data:a});case 15:e=t.sent;case 16:e&&(this.content="",this.title="",this.tags=[],this.image="");case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:{}},m=d,p=(a("d43b"),a("2877")),f=Object(p["a"])(m,n,i,!1,null,"7ac9fb5c",null);e["default"]=f.exports}}]);
//# sourceMappingURL=about.e928fdf8.js.map