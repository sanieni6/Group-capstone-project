import logoIcon from '../../img/logo.png';
import menuIcon from '../../img/menu.svg';
import closeIcon from '../../img/close.svg';

const pageContainer = document.querySelector('.header');

const header = `
      <div class="header__wrapper">
        <h1 class='header__logo'><span>Art</span><img class='header__logo-img' src="${logoIcon}"
            alt="art painting illustration"><span>ork</span></h1>
        <nav class="header__nav">
          <button class="header__nav-btn close">
            <img class='btn-img btn-open' src="${menuIcon}" alt="menu button icon">
            <img class='btn-img btn-close' src="${closeIcon}" alt="close button icon">
          </button>
          <ul class="header__nav-list close">
            <li class="header__nav-item"><a class='header__nav-link active' href='#'>Artworks</a></li>
            <li class="header__nav-item"><a class='header__nav-link' href='#'>Exhibitions</a></li>
            <li class="header__nav-item"><a class='header__nav-link' href='#'>Shop</a></li>
          </ul>
        </nav>
      </div>
`;

const renderHeader = () => {
  pageContainer.insertAdjacentHTML('afterbegin', header);
};

export default renderHeader;
