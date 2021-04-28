const shampooLoaded = newShampoo => {
  return {
    type: 'FETCH_SHAMPOO_SUCCESS',
    payload: newShampoo
  };
};

const shampooRequested = () => {
  return {
    type: 'FETCH_SHAMPOO_REQUESTED'
  };
};

const shampooError = error => {
  return {
    type: 'FETCH_SHAMPOO_FAILURE',
    payload: error
  };
};

export {
  shampooLoaded,
  shampooRequested,
  shampooError
}