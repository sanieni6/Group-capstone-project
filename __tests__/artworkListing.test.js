// import the function to be tested
import addTask from '../src/js/modules/addTask.js';

// create a mock function for localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem (key) {
      return store[key];
    },

    setItem (key, value) {
      store[key] = value;
    },

    clear () {
      store = {};
    },

    removeItem (key) {
      delete store[key];
    },
  };
})();

// mock the local storage
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('addTask', () => {
  // clear localStorage before each test
  beforeEach(() => {
    window.localStorage.clear();
  });

  // test that the function adds a task to localStorage
  test('Add item to localstorage', () => {
    localStorage.setItem('tasks', JSON.stringify([
      {
        description: 'Task 1',
        completed: false,
        id: 1,
      },
    ]));

    // create FormData object
    const formData = new FormData();
    formData.append('task', 'Task 2');

    // call addTask function with FormData object
    addTask(formData);

    // retrieve task list from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    // expect the task list to contain one task with the correct properties
    expect(tasks.length).toBe(2);
    expect(tasks[1].description).toBe('Task 2');
    expect(tasks[1].completed).toBe(false);
    expect(tasks[1].id).toBe(2);
  });
});
