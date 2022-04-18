import { postsInstance } from '@/api/index';

// post 조회
function fetchPost() {
  return postsInstance.get('posts').catch(err => {
    return err.response;
  });
}

// post 생성
function postCreate(postData) {
  return postsInstance.post('posts', postData).catch(err => {
    return err.response;
  });
}

export { fetchPost, postCreate };
