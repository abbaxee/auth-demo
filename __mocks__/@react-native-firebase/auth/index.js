const onAuthStateChanged = jest.fn();

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword');
});

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword');
});

export default () => {
  console.log('anything ');
  return {
    onAuthStateChanged,
    currentUser: {
      displayName: 'testDisplayName',
      email: 'test@test.com',
      updateProfile: jest.fn(),
    },
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  };
};
