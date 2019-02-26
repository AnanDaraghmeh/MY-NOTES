export const openModal = (modalName, extraProps) => {
  return {
    type: 'OPEN_MODAL',
    payload: { modalName, extraProps }
  };
};

export const closeModal = modalName => {
  return {
    type: 'CLOSE_MODAL',
    payload: modalName
  };
};
