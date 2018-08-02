import { combineReducers } from 'redux';
import { items, itemsHasErrored, descriptionChanged, itemsIsLoading, tagChanged, orderSortingLikes} from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    descriptionChanged,
    tagChanged,
    orderSortingLikes
});
