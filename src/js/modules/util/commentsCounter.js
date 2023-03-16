const commentsCounter = (target, output) => {
  const count = target.length;
  if (count === 1 && target[0].textContent === 'No comments') {
    output.textContent = '(0)';
  } else {
    output.textContent = `(${count})`;
  }
};

export default commentsCounter;