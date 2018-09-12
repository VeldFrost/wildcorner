const initialState = {
  list: [],
  loading: false,
  error: null,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        loading: false,
        error: null,
        list: action.items,
      };
    case 'FETCH_ITEMS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: 
      return state;
  }
};

export default items;