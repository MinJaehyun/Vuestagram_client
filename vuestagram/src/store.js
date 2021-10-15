import { createStore } from 'vuex'
import axios from 'axios'
import post from './assets/data/post'

const store = createStore({
  state(){
    return {
      name : "min",
      likes: 0,
      more : {},
      count: 0,
      post: post,
    }
  },

  mutations: {
    likesButton(state){
        state.likes == 0 ? state.likes = 1: state.likes = 0
    },
    setMore(state, data){
      state.more = data;
      console.log(state.more);
    }
  },

  actions: {
    getData(context){
      axios.get(`https://minjaehyun.github.io/vue/more1.json`)
      .then(res => {
        // console.log(res.data);
        context.commit('setMore',res.data)
      })
    },
  },
})

export default store