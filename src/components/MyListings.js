import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getListings, toggleAddListingModal, deleteListing, copyListing, toggleEditListingModal, getListingInformation} from '../actions/Actions';
import AddListing from './AddListing';
import EditListing from './EditListing';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png';

axios.defaults.withCredentials = true;

const MyListingsContainer = styled.div`
    width: 1024px;
    margin: 0 auto;

    header {
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            align-items: center;

            img {
                height: 64px;
                width: 64px;
            }

            h1 {
                font-size: 32px;
                font-weight: 700;
                color: #484848;
            }
        }

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

    section {
        margin-top: 64px;
        margin-bottom: 128px;

        .tab {
            margin-bottom: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
                margin-bottom: 4px;
                font-size: 28px;
                font-weight: 700;
                color: #484848;
            }
            
            p {
                font-size: 16px;
                font-weight: 500;
                color: #484848;
            }

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

        h3 {
            font-size: 24px;
            font-weight: 700;
            color: #484848;
        }

        .location-description {
            margin-bottom: 16px;
            font-size: 16px;
            font-weight: 500;
            color: #484848;
        }

        h4 {
            margin-bottom: 16px;
            font-size: 20px;
            font-weight: 700;
            color: #484848;
        }

        .listings-container {
            margin-bottom: 32px;
            display: flex;
            flex-wrap: wrap;

            .listing {
                margin-right: 32px;
                margin-bottom: 32px;
                border-bottom-left-radius: 3px;
                border-bottom-right-radius: 3px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                transition: 0.25s;

                .listing-image {
                    height: 200px;
                    width: 320px;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                    display: flex;
                    justify-content: flex-end;
                    
                    .actions {
                        padding: 8px;

                        i {
                            margin-bottom: 4px;
                            height: 28px;
                            width: 28px;
                            background: white;
                            border-radius: 50%;
                            font-size: 16px;
                            color: #black;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            transition: 0.25s;

                            :hover {
                                color: #484848;
                            }
                        }    
                    }
                }

                .listing-information {
                    height: 90px;
                    width: 320px;
                    padding: 16px;
                    cursor: pointer;

                    .city {
                        font-size: 14px;
                        font-weight: 500;
                        color: darkgray;
                    }

                    .title {
                        font-size: 16px;
                        font-weight: 500;
                        color: #484848;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .optiprice {
                        display: flex;
                        align-items: center;

                        .opti {
                            margin-right: 4px;
                            padding: 1px;
                            background: #8ccfb9;
                            border: 1px solid darkgray;
                            border-radius: 3px;
                            font-size: 14px;
                            font-weight: 600;
                            color: #484848;
                        }
                        
                        .price {
                            font-size: 16px;
                            font-weight: 500;
                            color: #484848;
                        }
                    }
                }

                :hover {
                    box-shadow: none;
                }
            }

            .listing:nth-child(3n) {
                margin-right: 0;
            }
        }

        .no-listings {
            margin-top: 48px;
            margin-bottom: 64px;
            font-size: 20px;
            font-weight: 600;
            color: #484848;
        }
    }
`

const MyListings = props => {
    const [createListingModal, setCreateListingModal] = useState(false); 

    useEffect(() => {
        props.getListings();
    }, []);

    const signOutOnClick = () => {
        axios.get('https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/auth/logout')
            .then(response => {
                localStorage.removeItem('user_id');
                props.history.push('/');
            })
            .catch(error => console.log(error));
    };

    return (
        <MyListingsContainer>
            {props.addListingModal && <AddListing/>}
            {props.editListingModal && <EditListing/>}

            <header>
                <div>
                    <img src={logo} alt='opti logo'/>
                    <h1>Opti</h1>
                </div>
                <button onClick={signOutOnClick}>Sign Out</button>
            </header>
            <section>
                <div className='tab'>
                    <div>
                        <h2>My Listings</h2>
                        <p>We use historical data to determine the optimal price for your AirBnB listing.</p>
                    </div>
                    <button onClick={() => props.toggleAddListingModal()}>+ Add New Listing</button>
                </div>
                
                <h3>Stays</h3>
                {props.listings.length === 1 ? <p className='location-description'>1 stay</p> : <p className='location-description'>{props.listings.length} stays</p>}

                {/* <h4>Places to stay in Berlin</h4> */}
                
                <div className='listings-container'>

                    {props.listings.map(item => (
                        <div className='listing' key={item.id}>
                            <div className='listing-image' style={{background: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                <div className='actions'>
                                    <i className="fas fa-pen" onClick={() => props.getListingInformation(item.id)} title='edit'></i>
                                    <i className="fas fa-copy" onClick={() => {
                                        props.copyListing({
                                            user_id: localStorage.getItem('user_id'),
                                            title: `${item.title} copy`,
                                            image: item.image,
                                            address: item.address,
                                            bag_of_words: item.bag_of_words,
                                            size: item.size,
                                            accommodates: item.accommodates,
                                            bedrooms: item.bedrooms,
                                            bathrooms: item.bathrooms,
                                            room_type: item.room_type,
                                            bed_type: item.bed_type,
                                            instant_bookable: item.instant_bookable,
                                            minimum_nights: item.minimum_nights,
                                            cancellation_policy: item.cancellation_policy
                                        })
                                    }} title='duplicate'></i>
                                    <i className="fas fa-trash" onClick={() => props.deleteListing(item.id)} title='delete'></i>
                                </div>
                            </div>
                            <div className='listing-information' onClick={() => props.history.push(`/listing/${item.id}`)}>
                                {item.bedrooms === 1 ? <p className='city'>{item.room_type} · {item.bedrooms} bedroom</p> : <p className='city'>{item.room_type} · {item.bedrooms} bedrooms</p>}
                                <p className='title'>{item.title}</p>
                                <div className='optiprice'>
                                    <p className='opti'>OPTIPRICE</p>
                                    <p className='price'><b>${Math.floor(Math.random() * 100) + 1}</b> / night</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {props.listings.length === 0 && <p className='no-listings'>Add a stay to see it here!</p>}

                <h3>Experiences</h3>
                <p className='location-description'>0 experiences</p>

                <p className='no-listings'>Add an experience to see it here!</p>

            </section>

            {createListingModal === true && <div className='create-listing-modal'>
                <h3>Add Listing</h3>
                <div className='buttons'>
                    <button onClick={() => setCreateListingModal(false)}>Cancel</button>
                    <button>Add</button>
                </div>
            </div>}
        </MyListingsContainer>
    );
};

const mapStateToProps = state => {
    return {
        listings: state.listings,
        addListingModal: state.addListingModal,
        editListingModal: state.editListingModal
    };
};

export default connect(mapStateToProps, {getListings, toggleAddListingModal, deleteListing, copyListing, toggleEditListingModal, getListingInformation})(MyListings);