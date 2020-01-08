import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toggleModal, addListing, getListings} from '../actions/Actions';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

const AddListingContainer = styled.div`
    height: 475px;
    width: 441px;
    margin: auto;
    background: white;
    border-radius: 3px;
    box-shadow: 0 0 0 100vw rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    h3 {
        margin-bottom: 24px;
        font-size: 28px;
        font-weight: 700;
        color: #484848; 
    }

    form {
        width: 350px;
        display: flex;
        flex-direction: column;

        label {
            font-size: 16px;
            font-weight: 500;
            color: #484848;
        }

        input {
            margin-bottom: 8px;
            padding: 12px;
            border: 1px solid darkgray;
            border-radius: 3px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #484848;
        }

        .buttons {
            margin-top: 8px;
            width: 350px;
            display: flex;
            justify-content: space-evenly;

            button {
                padding: 12px 32px;
                background: linear-gradient(to right, #88a0ba, #8ccfb9);
                border: none;
                border-radius: 3px;
                outline: none;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                font-family: 'Quicksand', sans-serif;
                font-size: 16px;
                font-weight: 500;
                color: white;
                cursor: pointer;
                transition: 0.25s;

                :hover {
                    box-shadow: none;
                } 
            }
        }
    }
`

const AddListing = props => {
    const [input, setInput] = useState({
        image: '',
        title: '',
        city: '',
        price: Math.floor(Math.random() * 100) + 1,
        user_id: localStorage.getItem('user_id')
    });

    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('input', input);
        props.addListing(input);
        // do not need to reset input, component does it by itself
    };

    return (
        <AddListingContainer>
            <h3>Add Listing</h3>
            <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                <label htmlFor='image'>Image</label>
                <input name='image' type='text' placeholder='Enter image url' value={input.image} onChange={onChange} required/>

                <label htmlFor='title'>Title</label>
                <input name='title' type='text' placeholder='Enter title' value={input.title} onChange={onChange} required/>

                <label htmlFor='city'>City</label>
                <input name='city' type='text' placeholder='Enter city' value={input.city} onChange={onChange} required/>

                <div className='buttons'>
                    <button type='button' onClick={() => props.toggleModal()}>Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </AddListingContainer>
    );
};

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, {toggleModal, addListing, getListings})(AddListing);