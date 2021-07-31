Vuex

1、

```js
//store.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.store({
  store:{},
  mutations: {},
  actions:{},
  modules:{}
})
```

2、

```js
import store from './store'
 
new Vue({
 store,
 render:h=>h(App)
}).$mount('app')
```

3、

```js
//全局需要用到的数据存到vuex中
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {},
  actions: {},
  modules: {},
});
```

4、第一种取值方式

```
$store.state.count
```

5、第二种取值方式

```
import { mapState } from "vuex";
//将存在vuex中的全局属性映射为当前组件的computed计算属性
computed: {
    ...mapState("[count]"),
},
```

Mutation

```js
// 用于变更store中的数据
// 在store.js定义Mutation 
mutations: {
  add(state) {
    state.count++;
  },
},
//绑定按钮的click事件，调用store中的mutations方法
  Add() {
    // 触发mutations的第一种方式
    this.$store.commit("add");
  },
```

```js
// 用于变更store中的数据
// 在store.js定义Mutation 
mutations: {
  add(state) {
    state.count++;
  },
},
//在组件中
import { mapMutations } from "vuex";
methods:{
  ...mapMutations('add','addN')
  //绑定按钮的click事件，调用store中的mutations方法
  Add() {
    // 触发mutations的第二种方式
    this.add();
  }, 
}

```

```js
//用于处理异步任务
actions: {
  AddAsync({commit}) {
    setTimeout(() => {
     commit("add");
    }, 1000);
  },
  AddNAsync(context,N) {
    setTimeout(() => {
      context.commit("add",N);
    }, 5000);
  },
}    
//在组件中
//第一种
Add() {
  // dispatch 用来触发mapactions
  this.$store.dispatch("AddNAsync");
},
```


