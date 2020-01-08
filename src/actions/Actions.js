import axios from 'axios';

axios.defaults.withCredentials = true;

export const getListings = () => dispatch => {
    axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
        .then(response => {
            dispatch({type: 'SUCCESS', payload: response.data});
            console.log('getListings', response);
        })
        .catch(error => console.log(error.response.data));
};

export const deleteListing = () => dispatch => {

};

export const createListing = () => dispatch => {

};

export const editListing = () => dispatch => {

};