import axios from 'axios';

import  {
  FETCH_REQUEST_LISTING,
  FETCH_LISTING_SUCCESS,
  FETCH_LISTING_FAILURE
} from 'actions/action-types';


// Action generators
function requestListingData(){
	return {
    'type': FETCH_REQUEST_LISTING,
    'isListingFetching': true
  };
}

function recivedListingDataSuccess(listingData){
	return {
    'type': FETCH_LISTING_SUCCESS,
    'isListingFetching': false,
    listingData
  };
}


function errorFetchListingDtata(errorData){
	return {
    'type': FETCH_LISTING_FAILURE,
    'isListingFetching': true,
    errorData
  };
}


// Api call 
export function getListingData(){
	return dispatch =>{
		dispatch(requestListingData());
		return axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
			if(response.status === 200){
				dispatch(recivedListingDataSuccess(response.data));
			}
		}).catch(error =>{
			dispatch(errorFetchListingDtata(error.data));
		});
	}
}