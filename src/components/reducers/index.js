const reducer = (state, action) => {

  if (state === undefined) {
    return {
      shampoos: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_SHAMPOO_REQUESTED':
      return {
        loading: true,
        error: null
      };
    case 'FETCH_SHAMPOO_SUCCESS':
      return {
        shampoos: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_SHAMPOO_FAILURE':
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;