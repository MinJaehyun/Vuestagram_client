import { createStore } from 'vuex'
import post from './assets/data/post'
// import axios from 'axios'

const store = createStore({
  state() {
    return {
      name: "min",
      count: 0,
      more: {},
      post: post,
      // like, likes 는 vuex 적용
      like: false,
      // post 가져온다
      likes: 0,
    }
  },
  mutations: {
    // 사진 클릭 시, likes 증가한다
    likesUpButton(state, data) {
      if (state.like == false) {
        data.likes++;
        state.likes = data.likes;
        state.like = true;
      } else {
        data.likes--;
        state.likes = data.likes;
        state.like = false;
      }
    },
    // Post.vue 29라인 store 적용하기 전 테스트 중
    // setMore(state, data) {
    //   state.more = data;
    //   console.log(state.more);
    // }
  },
  actions: {
    // Post.vue 29라인 store 적용하기 전 테스트 중
    // getData(context) {
    //   axios.get(`https://minjaehyun.github.io/vue/more1.json`)
    //     .then(res => {
    //       context.commit('setMore', res.data)
    //     })
    // },
  },
})

export default store