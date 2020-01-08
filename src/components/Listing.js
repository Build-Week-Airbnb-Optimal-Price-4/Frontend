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
    margin: auto;
    box-shadow: 0 0 10px;
    padding: 5%;
`

const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const Listing = props => {

    const [listing, setListing] = useState({});

    useEffect(() => {
        axios
            .get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
            .then(response => {
                let listInfo = response.data[props.match.params.id];
                console.log(listInfo);
                setListing(listInfo);
            });
    }, []);

    return (
        <ListDiv>
            <div>
                <h1>{listing.title}</h1>
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