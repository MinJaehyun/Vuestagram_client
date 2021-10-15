import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : "min",
      likes: 0,
    }
  },
  mutations: {
    likesButton(state){
        state.likes == 0 ? state.likes = 1: state.likes = 0
    },
  },
})

export default store