import fetchData from './fetchApi.js';

const getReservationList = async (id) => {
  const URL = `
  https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/reservations?item_id=${id}`;
  fetchData(URL).then((data) => {
    const reservationList = document.querySelector('.exhibitions__modal-reservations-list');
    const reservationCount = document.querySelector('.exhibitions__modal-reservations-count');
    const reservationListContent = data.map((reservation) => `
      <li class="exhibitions__modal-reservations-item">
        ${reservation.date_start} - ${reservation.date_end} by ${reservation.username}
      </li>
    `).join('');
    reservationList.innerHTML = reservationListContent;
    reservationCount.innerHTML = `(${data.length})`;
  });
};

export default getReservationList;