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
      liked: false,
      likes: 0,
      more: {},
      post: post,
      visit: true,
      modal: false,
      selectFilter: '',
      content: '',

      // publish 추가 내용
      step: 0,

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
      if (state.post[data.id].liked === false) {
        state.post[data.id].liked = true;
        data.likes++;
      } else {
        data.likes--;
        state.post[data.id].liked = false;
      }
    },
    setVisit(state, boolean) {
      state.visit = boolean;
    },
    // vuestagram - FilterBox.vue - fire()
    setSelectFilter(state, filter) {
      state.selectFilter = filter;
    },
    // vuestagram - Section.vue - publish()
    setUpload(state, uploadData) {
      state.post.push(uploadData);
    },
    // vuestagram - Section.vue - morePost()
    setMorePost(state, moreData) {
      state.post = state.post.concat(moreData);
    },
    // vuestagram - Container.vue - html
    setUploadText(state, event) {
      state.content = event;
    },
    //
    setCount(state) {
      state.count++;
    },
    // vuestagram - Section.vue - upload()
    setStep(state, stepNumber) {
      state.step = stepNumber;
    },
    // vuestagram - Section.vue - html
    setStepMinus(state) {
      state.step--;
    },
    // vuestagram - Section.vue - html
    setStepPlus(state) {
      state.step++;
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
