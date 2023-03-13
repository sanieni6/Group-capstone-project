import postApi from './postApi.js';
import counter from './counter.js';

const addReservation = async (id) => {
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/reservations';
  const reservationForm = document.querySelector('.exhibitions__modal-reservations-add');

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const startDate = document.querySelector('#start_date').value;
    const endDate = document.querySelector('#end_date').value;
    const name = document.querySelector('#name').value;

    const reservationObj = {
      item_id: id,
      username: name,
      date_start: startDate,
      date_end: endDate,
    };

    postApi(URL, reservationObj).then(() => {
      reservationForm.reset();
    }).then(() => {
      const reservationList = document.querySelector('.exhibitions__modal-reservations-list');
      const reservationListContent = `
        <li class="exhibitions__modal-reservations-item">
        ${reservationObj.date_start} - ${reservationObj.date_end} by ${reservationObj.username}
      </li>
      `;
      reservationList.innerHTML += reservationListContent;

      const reservationCount = document.querySelector('.exhibitions__modal-reservations-count');
      const commentItems = document.querySelectorAll('.exhibitions__modal-reservations-item');
      counter(commentItems, reservationCount);
    });
  });
};

export default addReservation;