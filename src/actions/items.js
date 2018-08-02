
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function tagChanged(e) {
  return {
    type: 'TAG_CHANGED',
    tag: e.target.value
   };
}

export function descriptionChanged(e) {
  return {
    type: 'DESCRIPTION_CHANGED',
    description: e.target.value
   };
}

export function orderSortingLikes(e) {
  return {
    type: 'SORT_LIKES_BY',
    orderSortingLikes: e.target.value
   };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items.data)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
