import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toggleEditListingModal, editListing} from '../actions/Actions';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

const EditListingContainer = styled.div`
height: 950px;
width: 882px;
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
    width: 700px;
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

    textarea {
        margin-bottom: 8px;
        padding: 12px;
        border: 1px solid darkgray;
        border-radius: 3px;
        outline: none;
        font-family: 'Quicksand', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #484848;
        resize: none;
    }

    select {
        height: 46px;
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

    .first-section {
        display: flex;
        justify-content: space-between;

        .item {
            width: 163px;
            display: flex;
            flex-direction: column;
        }
    }

    .second-section {
        display: flex;
        justify-content: space-between;

        .item {
            width: 342px;
            display: flex;
            flex-direction: column;
        }
    }

    .third-section {
        display: flex;
        justify-content: space-between;

        .item {
            width: 222.66px;
            display: flex;
            flex-direction: column;
        }
    }

    .buttons {
        margin-top: 16px;
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

const EditListing = props => {
    const [input, setInput] = useState(props.editListingModalInput);

    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('input', {
            user_id: localStorage.getItem('user_id'),
            title: input.title,
            image: input.image,
            address: input.address,
            bag_of_words: input.bag_of_words,
            size: Number(input.size),
            accommodates: Number(input.accommodates),
            bedrooms: Number(input.bedrooms),
            bathrooms: Number(input.bathrooms),
            room_type: input.room_type,
            bed_type: input.bed_type,
            instant_bookable: input.instant_bookable,
            minimum_nights: Number(input.minimum_nights),
            cancellation_policy: input.cancellation_policy
        });
        props.editListing(input.id, {
            user_id: localStorage.getItem('user_id'),
            title: input.title,
            image: input.image,
            address: input.address,
            bag_of_words: input.bag_of_words,
            size: Number(input.size),
            accommodates: Number(input.accommodates),
            bedrooms: Number(input.bedrooms),
            bathrooms: Number(input.bathrooms),
            room_type: input.room_type,
            bed_type: input.bed_type,
            instant_bookable: input.instant_bookable,
            minimum_nights: Number(input.minimum_nights),
            cancellation_policy: input.cancellation_policy
        });
    };

    return (
        <EditListingContainer>
            <h3>Edit Listing</h3>
            <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                <label htmlFor='title'>Title</label>
                <input name='title' type='text' placeholder='Ex. Unique Architecture Cave House' value={input.title} onChange={onChange} required/>

                <label htmlFor='image'>Image</label>
                <input name='image' type='text' placeholder='Ex. google.com/image' value={input.image} onChange={onChange}/>

                <label htmlFor='address'>Address</label>
                <input name='address' type='text' placeholder='Ex. 1 Blueberry Farm Rd.' value={input.address} onChange={onChange} required/>

                <label htmlFor='bag_of_words'>Description</label>
                <textarea name='bag_of_words' placeholder='Ex. This spacious, unparalleled cave house, hanging on the cliffs of the caldera in the center of Oia, is part of a traditional complex of cave houses, owned & renovated by a family of architects.' rows='4' value={input.bag_of_words} onChange={onChange} required></textarea>
                
                <div className='first-section'>
                    <div className='item'>
                        <label htmlFor='size'>Size (sq. m.)</label>
                        <input name='size' type='number' placeholder='Ex. 1000' value={input.size} onChange={onChange} required/>
                    </div>

                    <div className='item'>
                        <label htmlFor='accommodates'>Accommodates?</label>
                        <input name='accommodates' type='number' placeholder='Ex. 4' value={input.accommodates} onChange={onChange} required/>
                    </div>

                    <div className='item'>
                        <label htmlFor='bedrooms'># of Bedrooms</label>
                        <input name='bedrooms' type='number' placeholder='Ex. 2' value={input.bedrooms} onChange={onChange} required/>
                    </div>

                    <div className='item'>
                        <label htmlFor='bathrooms'># of Bathrooms</label>
                        <input name='bathrooms' type='number' placeholder='Ex. 1' value={input.bathrooms} onChange={onChange} required/>
                    </div>
                </div>

                <div className='second-section'>
                    <div className='item'>
                        <label htmlFor='room_type'>Room Type</label>
                        <select name='room_type' value={input.room_type} onChange={onChange}>
                            <option value='Private Room'>Private room</option>
                            <option value='Entire home/apt'>Entire home/apt.</option>
                            <option value='Shared room'>Shared room</option>
                        </select>
                    </div>
                    
                    <div className='item'>
                        <label htmlFor='bed_type'>Bed Type</label>
                        <select name='bed_type' value={input.bed_type} onChange={onChange}>
                            <option value='Real Bed'>Real bed</option>
                            <option value='Pull-out Sofa'>Pull-out sofa</option>
                            <option value='Futon'>Futon</option>
                            <option value='Couch'>Couch</option>
                            <option value='Airbed'>Airbed</option>
                        </select>
                    </div>
                </div>

                <div className='third-section'>
                    <div className='item'>
                        <label htmlFor='instant_bookable'>Instantly Bookable?</label>
                        <select name='instant_bookable' value={input.instant_bookable} onChange={onChange}>
                            <option value='f'>No</option>
                            <option value='t'>Yes</option>
                        </select>
                    </div>
                    
                    <div className='item'>
                        <label htmlFor='minimum_nights'>Minimum Nights</label>
                        <input name='minimum_nights' type='number' placeholder='Ex. 2' value={input.minimum_nights} onChange={onChange}/>
                    </div>

                    <div className='item'>
                        <label htmlFor='cancellation_policy'>Cancellation Policy</label>
                        <select name='cancellation_policy' value={input.cancellation_policy} onChange={onChange}>
                            <option value='flexible'>Flexible</option>
                            <option value='moderate'>Moderate</option>
                            <option value='strict_14_with_grace_period'>14 days with grace period</option>
                            <option value='super_strict_30'>30 days</option>
                            <option value='super_strict_60'>60 days</option>
                        </select>
                    </div>
                </div>

                <div className='buttons'>
                    <button type='button' onClick={() => props.toggleEditListingModal()}>Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </EditListingContainer>
    );
};

const mapStateToProps = state => {
    return {
        editListingModalInput: state.editListingModalInput
    };
};

export default connect(mapStateToProps, {toggleEditListingModal, editListing})(EditListing);