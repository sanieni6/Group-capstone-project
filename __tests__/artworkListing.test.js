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

