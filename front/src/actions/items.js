export const fetchItemsBegin = () => ({
  type: 'FETCH_ITEMS_BEGIN',
});

export const fetchItemsSuccess = items => ({
  type: 'FETCH_ITEMS_SUCCESS',
  items,
});

export const fetchItemsFailure = error => ({
  type: 'FETCH_ITEMS_FAILURE',
  error,
});

export function fetchItems() {
  return (dispatch) => {
    dispatch(fetchItemsBegin());
    return (
      fetch('/api/items')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(items => dispatch(fetchItemsSuccess(items)))
        .catch(error => dispatch(fetchItemsFailure(error)))
    );
  };
}

export function addItem(values) {
  return (dispatch) => {
    return (
      fetch("/api/items/",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(values)
        })
    );
  };
}

export function searchItem(values) {
  return (dispatch) => {
    return (
      fetch('/api/items')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(items => dispatch(fetchItemsSuccess(items)))
        .catch(error => dispatch(fetchItemsFailure(error)))
    );
  };
}