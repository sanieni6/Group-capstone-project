import fetchData from './fetchApi.js';

const getCommentList = async (id) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/comments?item_id=${id}`;
  fetchData(URL).then((data) => {
    const commentList = document.querySelector('.artworks__modal-comments-list');
    const commentCount = document.querySelector('.artworks__modal-comments-count');
    const commentListContent = data.map((comment) => `
      <li class="artworks__modal-comments-item">
        ${comment.creation_date} ${comment.username}: ${comment.comment}
      </li>
    `).join('');
    commentList.innerHTML = commentListContent;
    commentCount.innerHTML = `(${data.length})`;
  });
};

export default getCommentList;