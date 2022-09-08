import { createStore } from 'vuex';
import post from '@/assets/data/post';
import axios from 'axios';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookie';

const store = createStore({
  state() {
    return {
      /** vuestagram */
      name: 'min',
      count: 0,
      likes: 0,
      more: {},
      post: post,
      like: false,
      visit: true,
      modal: false,
      selectFilter: '',
      content: '',

      /** posts - data.user.username */
      logMessage: '',
      username: getUserFromCookie() || '',
      token: getAuthFromCookie() || '',
    };
  },
  getters: {
    // NOTE: state 에 속성이 변경되면, 항상 getters 를 실행하여 값을 저장한다.
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setClearUsername(state) {
      state.username = '';
    },
    setLogMessage(state, logMessage) {
      state.logMessage = logMessage;
    },
    setUsername(state, username) {
      state.username = username;
    },
    // vuestagram - Section.vue - publish()
    modalChange(state, boolean) {
      state.modal = boolean;
    },
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
    setVisit(state, boolean) {
      state.visit = boolean;
    },
    // Post.vue 29라인 store 적용하기 전 테스트 중
    // setMore(state, data) {
    //   state.more = data;
    //   console.log(state.more);
    // }

    // vuestagram - FilterBox.vue - fire()
    setSelectFilter(state, filter) {
      state.selectFilter = filter;
    },
    // vuestagram - Section.vue - publish()
    setUpload(state, uploadData) {
      state.post.unshift(uploadData);
    },
    // vuestagram - Section.vue - morePost()
    setMorePost(state, moreData) {
      state.post = state.post.concat(moreData);
    },
    // vuestagram - Container.vue - html
    setUploadText(state, event) {
      state.content = event;
    },
    setCount(state) {
      state.count++;
    },
  },
  actions: {
    HELLO_SET_TIMEOUT({ commit }) {
      setTimeout(() => {
        commit('setVisit', false);
      }, 6000);
    },
    // vuestagram - Section.vue - morePost()
    getData(context) {
      try {
        let url =
          'https://minjaehyun.github.io/Vuestagram_client/vuestagram/src/assets/data/more' +
          context.state.count +
          '.json';
        axios.get(url).then(res => {
          context.commit('setMorePost', res.data);
          context.commit('setCount');
        });
      } catch (error) {
        console.log(error.response.data);
        alert('더 이상 게시물이 존재하지 않습니다.');
      }
    },
  },
});

export default store;
