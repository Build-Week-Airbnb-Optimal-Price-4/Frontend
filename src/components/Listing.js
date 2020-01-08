import React from 'react';

const Listing = props => {
    return (
        <>
            <h1>Listing {props.match.params.id} information</h1>
        </>
    );
};

export default Listing;