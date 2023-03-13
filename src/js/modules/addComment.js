import postApi from './postApi.js';
import counter from './counter.js';

const addComment = async (id) => {
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/comments';
  const commentForm = document.querySelector('.artworks__modal-comments-add');

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const commentMsg = document.querySelector('#comment').value;
    const commentObj = {
      item_id: id,
      username: name,
      comment: commentMsg,
    };

    postApi(URL, commentObj).then(() => {
      commentForm.reset();
    })
      .then(() => {
        const commentList = document.querySelector('.artworks__modal-comments-list');
        const currentDate = new Date();
        const dateString = currentDate.toISOString().split('T')[0];
        const commentListContent = `
        <li class="artworks__modal-comments-item">
        ${dateString} ${commentObj.username}: ${commentObj.comment}
      </li>
      `;
        commentList.innerHTML += commentListContent;

        const commentCount = document.querySelector('.artworks__modal-comments-count');
        const commentItems = document.querySelectorAll('.artworks__modal-comments-item');
        counter(commentItems, commentCount);
      });
  });
};

export default addComment;