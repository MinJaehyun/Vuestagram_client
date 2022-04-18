import { postsInstance } from '@/api/index';

// post 조회
function fetchPost() {
  return postsInstance.get('').catch(err => {
    return err.response;
  });
}

// post 생성
function postCreate(postData) {
  return postsInstance.post('', postData).catch(err => {
    return err.response;
  });
}

// posts 삭제
function postDelete(id) {
  return postsInstance.delete(id).catch(err => {
    return err.response;
  });
}

export { fetchPost, postCreate, postDelete };
