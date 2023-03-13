import closeIcon from '../../img/close_gray.svg';

const pageContainer = document.querySelector('.container');

const artworkModal = async (data) => {
  const artworkModalHtmlContentPart1 = `
  <div class="artworks__modal">
  <div class="artworks__modal-wrapper">
    <button class='artworks__modal-btn'>
      <img class='artworks__modal-btn-img' src="${closeIcon}" alt="close">
    </button>
    <div class="artworks__modal-card">
      <img class="artworks__modal-card-img" src="https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg" alt="${data.title}">
      <div class="artworks__modal-card-details">
        <h3 class="artworks__modal-card-title">${data.title}</h3>
        <p class='artworks__modal-card-author'><span>Author:</span> ${data.artist_display}</p>
        <p class='artworks__modal-card-origin'><span>Origin:</span>  ${data.place_of_origin}</p>
        <p class='artworks__modal-card-credit'><span>Credit:</span> ${data.credit_line}</p>
    `;
  let artworkModalHtmlContentPart2 = data.term_titles.map((term) => `<li class='artworks__modal-card-terms-item'>${term}</li>`).join('');
  artworkModalHtmlContentPart2 = `<ul class="artworks__modal-card-terms">${artworkModalHtmlContentPart2}</ul>`;
  const artworkModalHtmlContentPart3 = `
  </div>
  <div class="artworks__modal-comments">
    <h4 class="artworks__modal-comments-title">Comments <span class="artworks__modal-comments-count"></span>:</h4>
    <ul class="artworks__modal-comments-list">
    </ul>
    <form action="" class="artworks__modal-comments-add">
      <input type="text" name="name" id="name" placeholder='Your name' required>
      <textarea class='artworks__modal-comments-input' name="message" id="comment" maxlength="500" cols="30"
      rows="4" placeholder="Your insights..." required></textarea>
      <input id="submit-${data.id}" class='artworks__modal-comments-btn' type="submit" value="Comment">
    </form>
  </div>
  </div>
  </div>
  </div>`;

  const artworkModalHtmlContent = artworkModalHtmlContentPart1
    + artworkModalHtmlContentPart2
    + artworkModalHtmlContentPart3;
  pageContainer.insertAdjacentHTML('afterbegin', artworkModalHtmlContent);
};

export default artworkModal;