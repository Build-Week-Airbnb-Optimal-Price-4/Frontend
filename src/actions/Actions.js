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

export const toggleModal = () => dispatch => {
    dispatch({type: 'TOGGLE_MODAL'});
};

export const addListing = (input, history) => dispatch => {
    axios.post('https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings', input)
        .then(response => {
            console.log('addListing', response.data);
            dispatch({type: 'TOGGLE_MODAL'});
            
            axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
                .then(res => {
                    dispatch({type: 'SUCCESS', payload: res.data});
                    console.log('nested getListings response', res);
                    console.log('nested getListings was run!');
                })
                .catch(err => console.log('nested getListing error', err.response.data));
        })
        .catch(error => console.log('addListing error', error.response.data));
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

export const editListing = () => dispatch => {

};