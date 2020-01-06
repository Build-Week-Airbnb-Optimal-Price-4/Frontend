import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const PageNotFoundContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 128px;
        width: 128px;
    }

    h1 {
        margin-bottom: 32px;
        font-size: 24px;
        font-weight: 700;
    }
    a {
        button {
            width: 325px;
            padding: 12px 0;
            background: linear-gradient(to right, #49708A, #88ABC2);
            border: none;
            border-radius: 3px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: white;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                opacity: 0.9;
            }
        }
    }
`

const PageNotFound = () => {
    return (
        <PageNotFoundContainer>
            <img src={logo} alt='opti logo'/>
            <h1>You must be signed in to view that page...</h1>
            <Link to='/'><button>Sign In</button></Link>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;