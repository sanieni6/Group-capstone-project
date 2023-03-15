import counter from '../src/js/modules/util/counter.js';

describe('counter function', () => {
  test('update the count of items on the home screen', () => {

    // create a mock dom elements to count
    document.body.innerHTML = `
      <div id="target-1"></div>
      <div id="target-2"></div>
      <div id="target-3"></div>
    `;

    // create the target variables
    const target = document.querySelectorAll('div');

    // create an elements to display the count on screen
    const output = document.createElement('span');

    document.body.appendChild(output);

    // call the counter function
    counter(target, output);

    console.log('updated output:', output);

    // test the output
    expect(output.textContent).toBe('(3)');
  });
});
