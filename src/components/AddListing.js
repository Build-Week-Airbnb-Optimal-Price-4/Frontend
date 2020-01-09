import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toggleAddListingModal, addListing, getListings} from '../actions/Actions';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

const AddListingContainer = styled.div`
    height: 600px;
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
        user_id: localStorage.getItem('user_id'),
        title: '',
        image: '',
        address: '',
        bag_of_words: '',
        size: '',
        accommodates: '',
        bedrooms: '',
        bathrooms: '',
        room_type: 'Private Room',
        bed_type: 'Real Bed',
        instant_bookable: 'f',
        minimum_nights: 2,
        cancellation_policy: 'flexible'
    });

    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        console.log(input);
    };

    // const numberOnChange = event => {
    //     setInput({
    //         ...input,
    //         [event.target.name]: Number(event.target.value)
    //     });
    //     console.log(input);
    // };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('input', input);
        props.addListing(input);
    };

    return (
        <AddListingContainer>
            <h3>Add Listing</h3>
            <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                <label htmlFor='title'>Title</label>
                <input name='title' type='text' placeholder='Enter title' value={input.title} onChange={onChange} required/>

                <label htmlFor='image'>Image</label>
                <input name='image' type='text' placeholder='Enter image url' value={input.image} onChange={onChange}/>

                <label htmlFor='address'>Address</label>
                <input name='address' type='text' placeholder='Enter address' value={input.address} onChange={onChange} required/>

                <label htmlFor='bag_of_words'>Description</label>
                <textarea name='bag_of_words' placeholder='Enter description' value={input.bag_of_words} onChange={onChange} required></textarea>

                <label htmlFor='size'>Size (sq. m.)</label>
                <input name='size' type='number' placeholder='Enter size' value={input.size} onChange={onChange} required/>

                <label htmlFor='accommodates'>Accommodates</label>
                <input name='accommodates' type='number' placeholder='Enter accommodation' value={input.accommodates} onChange={onChange} required/>

                <label htmlFor='bedrooms'>Number of Bedrooms</label>
                <input name='bedrooms' type='number' placeholder='Enter bedrooms' value={input.bedrooms} onChange={onChange} required/>
                
                <label htmlFor='bathrooms'>Number of Bathrooms</label>
                <input name='bathrooms' type='number' placeholder='Enter bathrooms' value={input.bathrooms} onChange={onChange} required/>

                <label htmlFor='room_type'>Room Type</label>
                <select name='room_type' value={input.room_type} onChange={onChange}>
                    <option value='Private Room'>Private room</option>
                    <option value='Entire home/apt'>Entire home/apt.</option>
                    <option value='Shared room'>Shared room</option>
                </select>

                <label htmlFor='bed_type'>Bed Type</label>
                <select name='bed_type' value={input.bed_type} onChange={onChange}>
                    <option value='Real Bed'>Real bed</option>
                    <option value='Pull-out Sofa'>Pull-out sofa</option>
                    <option value='Futon'>Futon</option>
                    <option value='Couch'>Couch</option>
                    <option value='Airbed'>Airbed</option>
                </select>

                <label htmlFor='instant_bookable'>Instant Bookable</label>
                <select name='instant_bookable' value={input.instant_bookable} onChange={onChange}>
                    <option value='f'>No</option>
                    <option value='t'>Yes</option>
                </select>

                <label htmlFor='minimum_nights'>Minimum Nights</label>
                <input name='minimum_nights' type='number' placeholder='Enter minimum nights' value={input.minimum_nights} onChange={onChange}/>

                <label htmlFor='cancellation_policy'>Cancellation Policy</label>
                <select name='cancellation_policy' value={input.cancellation_policy} onChange={onChange}>
                    <option value='flexible'>Flexible</option>
                    <option value='moderate'>Moderate</option>
                    <option value='strict_14_with_grace_period'>Strict 14 with grace period</option>
                    <option value='super_strict_30'>Super strict 30</option>
                    <option value='super_strict_60'>Super strict 60</option>
                </select>

                <div className='buttons'>
                    <button type='button' onClick={() => props.toggleAddListingModal()}>Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </AddListingContainer>
    );
};

export default connect(null, {toggleAddListingModal, addListing, getListings})(AddListing);