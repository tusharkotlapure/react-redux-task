import  {
  FETCH_REQUEST_LISTING,
  FETCH_LISTING_SUCCESS,
  FETCH_LISTING_FAILURE
} from 'actions/action-types';

const initialData = {
	'isListingFetching': true,
  'listingData': null,
  'errorData': ''
}

export default function listingStore(state=initialData, action){
	switch(action.type){
		case FETCH_REQUEST_LISTING: 
		 return Object.assign({}, state, {
        'isListingFetching': action.isListingFetching,
        'listingData': null
      });

		case FETCH_LISTING_SUCCESS: 
		 return Object.assign({}, state, {
        'isListingFetching': action.isListingFetching,
        'listingData': action.listingData,
        'errorData': ''
      });

		case FETCH_LISTING_FAILURE:
			return Object.assign({}, state, {
        'isListingFetching': action.isListingFetching,
        'listingData': null,
        'errorData': action.errorData
      });

    default:
     return state;
	}
}