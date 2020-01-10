import axios from 'axios';

axios.defaults.withCredentials = true;

export const getListings = () => dispatch => {
    axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
        .then(response => {
            dispatch({type: 'SUCCESS', payload: response.data});
            console.log('initial getListings response', response);
            console.log('initial getListings was run!');
        })
        .catch(error => console.log('initial getListings error', error.response.data));
};

export const toggleAddListingModal = () => dispatch => {
    dispatch({type: 'TOGGLE_ADD_LISTING_MODAL'});
};

export const addListing = input => dispatch => {
    axios.post('https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings', input)
        .then(response => {
            console.log('addListing', response.data);
            dispatch({type: 'TOGGLE_ADD_LISTING_MODAL'});
            
            axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
                .then(res => {
                    dispatch({type: 'SUCCESS', payload: res.data});
                    console.log('nested getListings response', res);
                    console.log('nested getListings was run!');
                })
                .catch(err => console.log('nested getListing error', err.response.data));
        })
        .catch(error => console.log('addListing error', error));
};

export const deleteListing = id => dispatch => {
    axios.delete(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${id}`)
        .then(response => {
            console.log('deleteListing', response.data);
            axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
                .then(res => {
                    dispatch({type: 'SUCCESS', payload: res.data});
                    console.log('nested getListings response', res);
                    console.log('nested getListings was run!');
                })
                .catch(err => console.log('nested getListing error', err.response.data));
        })
        .catch(error => console.log('deleteListing error', error));
};

export const copyListing = information => dispatch => {
    axios.post('https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings', information)
        .then(response => {
            axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
                .then(res => {
                    dispatch({type: 'SUCCESS', payload: res.data});
                })
                .catch(err => console.log(err.response.data));
        })
        .catch(error => console.log(error.response.data));
};

export const toggleEditListingModal = () => dispatch => {
    dispatch({type: 'TOGGLE_EDIT_LISTING_MODAL'});
};

export const getListingInformation = id => dispatch => {
    console.log('getListingInformation was run!');
    axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
        .then(response => {
            dispatch({type: 'UPDATE_EDIT_LISTING_MODAL_INPUT', payload: response.data.find(item => item.id === id)});
            dispatch({type: 'TOGGLE_EDIT_LISTING_MODAL'});
        })
        .catch(error => console.log(error.response.data));
};

export const editListing = (id, information) => dispatch => {
    console.log('editListing was run!');
    axios.put(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${id}`, information)
        .then(response => {
            console.log(response);
            axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
                .then(res => {
                    dispatch({type: 'SUCCESS', payload: res.data});
                    console.log('nested getListings response', res);
                    console.log('nested getListings was run!');
                })
                .catch(err => console.log('nested getListing error', err.response.data));
            dispatch({type: 'TOGGLE_EDIT_LISTING_MODAL'});
        })
        .catch(error => console.log(error.response.data));
};