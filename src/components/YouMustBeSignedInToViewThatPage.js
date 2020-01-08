import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const YouMustBeSignedInToViewThatPageContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        img {
            height: 128px;
            width: 128px;
        }
    }

    h1 {
        margin-bottom: 32px;
        font-size: 24px;
        font-weight: 700;
    }
`

const YouMustBeSignedInToViewThatPage = () => {
    return (
        <YouMustBeSignedInToViewThatPageContainer>
            <Link to='/'><img src={logo} alt='opti logo'/></Link>
            <h1>You must be signed in to view that page</h1>
        </YouMustBeSignedInToViewThatPageContainer>
    );
};

export default YouMustBeSignedInToViewThatPage;