(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7ed114c"],{"4b5d":function(t,i,e){},"7839e":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"q-px-lg q-py-md"},[e("q-timeline",{attrs:{color:"blue-grey-6",layout:"loose"}},[e("q-timeline-entry",{staticClass:"text-blue-3",attrs:{heading:""}},[t._v(" Timeline heading ")]),e("q-timeline-entry",{attrs:{title:"开始工作",subtitle:"June 30, 2020",side:"left",icon:"looks_one"}},[e("div",[t._v("成为一名前端开发，学习Vue")])]),e("q-timeline-entry",{attrs:{title:"Event Title",subtitle:"February 21, 1986",icon:"looks_two",side:"right"}},[e("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),e("q-timeline-entry",{attrs:{title:"Event Title",subtitle:"February 22, 1986",color:"secondary",icon:"looks_3",side:"left"}},[e("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),e("q-timeline-entry",{attrs:{title:"Event Title",icon:"looks_4",subtitle:"February 22, 1986",side:"right"}},[e("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),e("q-timeline-entry",{attrs:{title:"Event Title",subtitle:"February 22, 1986",icon:"looks_5",side:"left"}},[e("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])],1)],1)},a=[],s={data:function(){return{}},beforeRouteLeave:function(t,i,e){e()}},o=s,l=(e("b24d"),e("2877")),r=e("5530"),u=(e("caad"),e("99af"),e("2b0e")),c=e("b7fa"),d=e("87e8"),m=e("dde5"),p=u["default"].extend({name:"QTimeline",mixins:[c["a"],d["a"]],provide:function(){return{__timeline:this}},props:{color:{type:String,default:"primary"},side:{type:String,default:"right",validator:function(t){return["left","right"].includes(t)}},layout:{type:String,default:"dense",validator:function(t){return["dense","comfortable","loose"].includes(t)}}},computed:{classes:function(){return"q-timeline--".concat(this.layout," q-timeline--").concat(this.layout,"--").concat(this.side)+(!0===this.isDark?" q-timeline--dark":"")}},render:function(t){return t("ul",{staticClass:"q-timeline",class:this.classes,on:Object(r["a"])({},this.qListeners)},Object(m["c"])(this,"default"))}}),v=e("0016"),h=u["default"].extend({name:"QTimelineEntry",inject:{__timeline:{default:function(){console.error("QTimelineEntry needs to be child of QTimeline")}}},mixins:[d["a"]],props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:function(t){return["left","right"].includes(t)}},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},computed:{colorClass:function(){return"text-".concat(this.color||this.__timeline.color)},classes:function(){return"q-timeline__entry--".concat(this.side)+(void 0!==this.icon||void 0!==this.avatar?" q-timeline__entry--icon":"")},reverse:function(){return"comfortable"===this.__timeline.layout&&"left"===this.__timeline.side}},render:function(t){var i,e=Object(m["d"])(this,"default",[]);if(void 0!==this.body&&e.unshift(this.body),!0===this.heading){var n=[t("div"),t("div"),t(this.tag,{staticClass:"q-timeline__heading-title"},e)];return t("div",{staticClass:"q-timeline__heading",on:Object(r["a"])({},this.qListeners)},!0===this.reverse?n.reverse():n)}void 0!==this.icon?i=[t(v["a"],{staticClass:"row items-center justify-center",props:{name:this.icon}})]:void 0!==this.avatar&&(i=[t("img",{staticClass:"q-timeline__dot-img",domProps:{src:this.avatar}})]);var a=[t("div",{staticClass:"q-timeline__subtitle"},[t("span",Object(m["c"])(this,"subtitle",[this.subtitle]))]),t("div",{staticClass:"q-timeline__dot",class:this.colorClass},i),t("div",{staticClass:"q-timeline__content"},[t("h6",{staticClass:"q-timeline__title"},Object(m["c"])(this,"title",[this.title]))].concat(e))];return t("li",{staticClass:"q-timeline__entry",class:this.classes,on:Object(r["a"])({},this.qListeners)},!0===this.reverse?a.reverse():a)}}),f=e("8572"),b=e("93dc"),q=e.n(b),_=Object(l["a"])(o,n,a,!1,null,"558ab6e2",null);i["default"]=_.exports;q()(_,"components",{QTimeline:p,QTimelineEntry:h,QField:f["a"]})},b24d:function(t,i,e){"use strict";e("4b5d")}}]);
//# sourceMappingURL=chunk-d7ed114c.3777523c.js.map