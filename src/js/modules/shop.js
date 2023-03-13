const pageMain = document.querySelector('.main');

const renderShop = () => {
  pageMain.innerHTML = '';
  const shop = `
    <div class="shop">
      <h1 class="shop__title">Shop</h1>
      <p class="shop__content">Coming soon...</p>
    </div>
  `;
  pageMain.insertAdjacentHTML('afterbegin', shop);
};

export default renderShop;