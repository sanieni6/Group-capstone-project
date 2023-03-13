import 'reset-css';
import '../scss/styles.scss';

// add event listener to the page
document.addEventListener('click', (e) => {
  if (e.target.dataset.btn === 'menu-open') {
    // get the menu btn element
    const menuBtn = e.target.parentElement;

    // get the navbar element
    const navbar = menuBtn.nextSibling;

    // remove the class close from the menu btn
    menuBtn.classList.remove('close');

    // add the class open to the menu btn
    menuBtn.classList.add('open');

    // remove the class close from the navbar
    navbar.classList.remove('close');
  } else if (e.target.dataset.btn === 'menu-close') {
    // get the menu btn element
    const menuBtn = e.target.parentElement;

    // get the navbar element
    const navbar = menuBtn.nextSibling;

    // remove the class open from the menu btn
    menuBtn.classList.remove('open');

    // add the class close to the menu btn
    menuBtn.classList.add('close');

    // add the class close to the navbar
    navbar.classList.add('close');
  }
});