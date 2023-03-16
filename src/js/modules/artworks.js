import likeIcon from '../../img/like.svg';
import unLikeIcon from '../../img/unlike.svg';

const pageMain = document.querySelector('.main');

const artworks = async (artworksArr) => {
  // page title section
  const pageHeader = '<h1 class="artworks__title">Artworks<span class="artworks__count"></span></h1>';

  // generate the page contents
  const artworksHtmlContent = await artworksArr.filter((artwork) => artwork.image_id !== null).map((artwork) => `
      <figure class="artworks__item" id="${artwork.id}">
        <img class="artworks__item-img" src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" alt="${artwork.title}">
        <figcaption class="artworks__item-caption">
          <h2 class="artworks__item-title">${artwork.title}</h2>
          <p class="artworks__item-author">${artwork.artist_display}</p>
          <div class="artworks__item-interact">
            <div class="artworks__item-interact-likes">
              <button class="artworks__item-btn like-btn" data-like-btn="${artwork.id}">
                <img class="like-img like-icon" src="${likeIcon}" alt="like"> <img class="unlike-img unlike-icon" src="${unLikeIcon}" alt="like"> 
              </button>
              <span class='like-count'>${artwork.likes} ${artwork.likes > 1 ? 'likes' : 'like'}</span>
            </div>
            <button id ="comment-${artwork.id}"class="artworks__item-btn comment-btn">Comment</button>
          </div>
        </figcaption>
     </figure>
    `);
  pageMain.insertAdjacentHTML('afterbegin', `<div class='artworks'>${pageHeader}<div class="artworks__wrapper">${artworksHtmlContent.join('')}</div></div>`);
};

export default artworks;
