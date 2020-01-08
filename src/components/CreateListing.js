import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as yup from 'yup';

const ListingForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const ListingFormDiv = styled.div`
    width: 40%;
    padding: 5%;
    line-height: 2;
    margin: 2% auto;
    border: 2px solid black;
`

const ListingFormH2 = styled.h2`
    text-align: center;
`

const ListingFormSubmit = styled.input`
    margin: 10% auto auto;
    width: 50%;
`

let schema = yup.object().shape({
    listing_url: yup.string().url(),
    city: yup.string().required(),
    minimum_nights: yup
        .number()
        .required()
        .positive()
        .integer(),
});

const CreateListing = () => {

    const [listingUrl, setListingUrl] = useState('');
    const [city, setCity] = useState('');
    const [roomType, setRoomType] = useState('');
    const [nights, setNights] = useState('');

    return (
        <ListingFormDiv>
            <ListingFormH2>Add a Listing</ListingFormH2>
            <ListingForm 
            method='post'
            onSubmit={event => {
                event.preventDefault();
                axios
                    .post('https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings', 
                            {listing_url: listingUrl,
                             city: city, 
                             room_type: roomType, 
                             minimum_nights: nights})
                    .then(response => {
                        console.log(response);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                
            }}>
                <label htmlFor='listingUrl'>
                    Listing URL: <br/>
                    <input 
                    placeholder='Enter url'
                    name='listingUrl'
                    type='text'
                    value={listingUrl}
                    onChange={event => {
                        setListingUrl(event.target.value);
                    }}
                    required
                    />
                </label>

                <label htmlFor='cityInput'>
                    City: <br/>
                    <input 
                    maxLength='15'
                    placeholder='Enter city'
                    name='city'
                    type='text'
                    id='cityInput'
                    onChange={event => {
                        setCity(event.target.value);
                    }}
                    required
                    />
                </label>

                <label htmlFor='roomTypeInput'>
                    Room Type: <br/>
                    <select 
                    name='roomType' 
                    id='roomTypeInput'
                    onChange={event => {
                        setRoomType(event.target.value);
                    }}
                    >
                        <option>Cottage</option>
                        <option>Hotel</option>
                        <option>House</option>
                        <option>Townhouse</option>
                    </select>
                </label>

                <label htmlFor='nightsInput'>
                    Number of Nights: <br/>
                    <input 
                    placeholder='nights'
                    name='nights'
                    type='number'
                    min='1'
                    max='365'
                    id='nightsInput'
                    onChange={event => {
                        setNights(event.target.value);
                    }}
                    required
                    />
                </label>

                <ListingFormSubmit type='submit' />
            </ListingForm>
        </ListingFormDiv>
    
);
};

export default CreateListing;