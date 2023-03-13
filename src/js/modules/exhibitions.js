const pageMain = document.querySelector('.main');
const exhibitions = async (dataArr) => {
  const pageHeader = '<h1 class="exhibitions__title">Exhibitions<span class="exhibitions__count"></span></h1>';
  const exhibitionsHtmlContent = await dataArr.filter((exhibition) => {
    if (exhibition.image_url === null || exhibition.short_description === null) {
      return false;
    }
    return true;
  }).map((exhibition) => `
      <figure class="exhibitions__item" id="${exhibition.id}">
        <img class="exhibitions__item-img" src="${exhibition.image_url}" alt="${exhibition.title}">
        <figcaption class="exhibitions__item-caption">
          <h2 class="exhibitions__item-title">${exhibition.title}</h2>
          <button id ="reserve-${exhibition.id}"class="exhibitions__item-btn reserve-btn">Reservation</button>
        </figcaption>
     </figure>
    `);
  pageMain.insertAdjacentHTML('afterbegin', `<div class='exhibitions'>${pageHeader}<div class="exhibitions__wrapper">${exhibitionsHtmlContent.join('')}</div></div>`);
};

export default exhibitions;