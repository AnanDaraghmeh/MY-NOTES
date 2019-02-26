const initialState = {
  modalName: null,
  extraProps: null
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, ...action.payload };
    case 'CLOSE_MODAL':
      return { ...state, modalName: null, extraProps: null };
    default:
      return state;
  }
};

export default modalReducer;
