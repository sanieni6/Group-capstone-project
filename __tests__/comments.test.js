import commentsCounter from '../src/js/modules/util/commentsCounter.js';

describe('Comment counter test', () => {
  test('Update the comment counter to 3', () => {
    // create a mock dom elements to count
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.innerHTML = `
        <li class="artworks__modal-comments-item">One</li>
        <li class="artworks__modal-comments-item">Two</li>
        <li class="artworks__modal-comments-item">three</li>
        `;
    //  call the Li elements
    const liElements = document.querySelectorAll('.artworks__modal-comments-item');
    // create an elements to display the count on screen
    const output = document.createElement('span');

    document.body.appendChild(output);

    // call the counter function
    commentsCounter(liElements, output);

    // test the output
    expect(output.textContent).toBe('(3)');
  });
});