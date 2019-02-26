import produce from 'immer';

const authReducer = (state = {}, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'SIGNED_IN':
        return (draft = { ...action.payload, isSignedIn: true });
      case 'SIGNED_OUT':
        return (draft = { isSignedIn: false, userId: null });
      case 'NEW_USER_DATA':
        return Object.assign(draft, action.payload);
      default:
        return state;
    }
  });
};

export default authReducer;
