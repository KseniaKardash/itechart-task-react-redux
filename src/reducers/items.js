
export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = {
  items: []
}, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
              ...state, items: action.items
            };
        default:
            return state;
    }
}

export function tagChanged(state = {
  tag: '',
}, action) {
  switch (action.type) {
    case 'TAG_CHANGED':
      return {
        ...state,
        tag: action.tag
      };
    default:
      return state;
  }
}

export function orderSortingLikes(state = {
  orderSortingLikes: '',
}, action) {
  switch (action.type) {
    case 'SORT_LIKES_BY':
      return {
        ...state,
        orderSortingLikes: action.orderSortingLikes
      };
    default:
      return state;
  }
}

export function descriptionChanged(state = {
  description: ''
}, action) {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
