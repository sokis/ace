# Modules

## **定义**
`modules` 是为了应对大型应用中复杂的业务线。我们拆分了`vuex`里面的`modules`模块，拆分到各个子级路由
中，以便后期针对问题定位模块。

## **目录**
```
src/routes
├── About                       # 路由
│   └── modules                 # vuex 模块文件
├── Home
│   └── modules
└── User
    └── routes                  # 子路由
        └── Login
            └── modules
```

## **定义**

`User`模块下的

```javascript
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_USER = 'ADD_USER'

// ------------------------------------
// States
// ------------------------------------
const state = {
  users: []
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  users: state => state.users
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  addUser({commit},user){
    commit(ADD_USER, user)
  }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
    [ADD_USER](state, user) {
      state.users.push(user)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
```

## **用法**

`vuex@2.0`以后，新增了 `mapGetters`,`mapActions` 两个用于直接从 `Store`对象中获取 getter和action

```javascript
// 从 vuex 中引入方法
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
      return {

      }
    },
    components: {
    },
    computed: {
      ...mapGetters(['users']) //获取getters
    },
    methods: {
      ...mapActions(['addUser']) //获取actions
    },
    route: {
        data ({ to }) {

          // 调用
          this.addUser({
            name,
            age
          }) 
          
        }
    }
}
```