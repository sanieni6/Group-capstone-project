const renderModal = (modal, content = '') => {
  if (content === '') {
    modal();
  } else {
    modal(content);
  }
};

export default renderModal;