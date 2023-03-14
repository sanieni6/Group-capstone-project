import postApi from './post.js';
import renderCommentList from './generateCommentList.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/comments';

const newComment = (id, name, message) => {
  const comment = {
    item_id: id,
    username: name,
    comment: message,
  };
  postApi(url, comment).then(() => {
    setTimeout(() => {
      renderCommentList(id);
    }, 1000);
  });
};

export default newComment;