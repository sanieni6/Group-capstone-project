const pageRender = (location, page, content = '') => {
  location.innerHTML = '';
  if (content === '') {
    page();
  } else {
    page(content);
  }
};

export default pageRender;