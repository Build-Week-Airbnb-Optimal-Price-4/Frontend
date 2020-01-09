import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ListingImg = styled.img`
    width: 80%;
    text-align: center;
    margin: 2% auto;
    box-shadow: 0 0 10px;
    padding: 2%;
    background: linear-gradient(to right, #88a0ba, #8ccfb9);
    border-radius: 10px;
`

const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2% 0;
`

const ListH1 = styled.h1`
    margin: 2% auto;
`

const Listing = props => {

    const [listing, setListing] = useState({});

    useEffect(() => {
        axios
            .get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
            .then(response => {
                let listInfo = response.data[props.match.params.id - 1];
                console.log(response);
                setListing(listInfo);
            });
    }, []);

    return (
        <ListDiv>
            <div>
                <ListH1>{listing.title}</ListH1>
                <InfoDiv>
                    <h3>Location: {listing.city}</h3>
                    <h3>Price: {listing.price}</h3>
                </InfoDiv>
            </div>
            <ListingImg src={listing.image} />
        </ListDiv>
    );
};

export default Listing;