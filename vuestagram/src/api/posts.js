import { postsInstance } from '@/api/index';

// posts 전체 조회
function fetchPosts() {
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

// post 삭제
function postDelete(postId) {
  return postsInstance.delete(postId).catch(err => {
    return err.response;
  });
}

// post 상세 조회
function fetchPost(postId) {
  return postsInstance.get(postId).catch(err => {
    return err.response;
  });
}

// post 변경
function editPost(postId, updateDate) {
  return postsInstance.put(postId, updateDate);
}

export { fetchPosts, fetchPost, postCreate, postDelete, editPost };
