(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0c6f"],{"9e8e":function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{margin:"10px",height:"calc(100vh - 105px)"}},[e("v-md-editor",{attrs:{height:"100%"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)},o=[],a={name:"markdown",data:function(){return{content:""}},methods:{getMsg:function(){var t=this,n={url:this.$PUBLIC_PATH+"data/Vuex.md",method:"get",responseType:"text"};this.$fetchData(n).then((function(n){t.content=n.data})).catch((function(t){console.log(t)}))}},created:function(){}},i=a,s=e("2877"),u=Object(s["a"])(i,c,o,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0f0c6f.5a74bbcf.js.map