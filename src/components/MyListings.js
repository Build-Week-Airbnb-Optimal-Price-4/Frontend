import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getListings} from '../actions/Actions'
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png';

axios.defaults.withCredentials = true;

const MyListingsContainer = styled.div`
    width: 1024px;
    margin: 0 auto;

    .create-listing-modal {
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
            margin-bottom: 16px;
            font-size: 24px;
            font-weight: 700;
            color: #484848; 
        }

        .buttons {
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
                cursor: pointer;

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
                            height: 28px;
                            width: 28px;
                            background: white;
                            border-radius: 50%;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                            font-size: 16px;
                            color: #484848;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            transition: 0.25s;

                            :hover {
                                transform: scale(1.1)
                            }
                        }

                        .fa-pen {
                            margin-bottom: 4px;
                        }
                    }
                }

                .listing-information {
                    height: 90px;
                    width: 320px;
                    padding: 16px;

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

                    .price {
                        font-size: 16px;
                        font-weight: 500;
                        color: #484848;
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

    const deleteListingOnClick = id => {
        axios.delete(`https://air-bnb-optimal-price-4.herokuapp.com/api/listings/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    return (
        <MyListingsContainer>
            {createListingModal && <div className='create-listing-modal'>
                <button onClick={() => setCreateListingModal(false)}>Cancel</button>
                <button>Add</button>
            </div>}

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
                    <button onClick={() => setCreateListingModal(true)}>+ Add New Listing</button>
                </div>
                
                <h3>Stays</h3>
                <p className='location-description'>{props.listings.length + 3} stays</p>
                
                <div className='listings-container'>
                    
                    <div className='listing'>
                        <div className='listing-image' style={{background: `url(https://a0.muscache.com/im/pictures/2364299/9fecde4e_original.jpg?aki_policy=xx_large)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div className='actions'>
                                <i className="fas fa-pen"></i>
                                <i className="fas fa-trash"></i>
                            </div>
                        </div>
                        <div className='listing-information'>
                            <p className='city'>Berlin</p>
                            <p className='title'>Adorable apartment in the City Center of Berlin</p>
                            <p className='price'><b>$10</b> / night</p>
                        </div>
                    </div>

                    <div className='listing'>
                        <div className='listing-image' style={{background: `url(https://a0.muscache.com/im/pictures/1b6167f9-aac1-4b0f-8a10-f36f3ab2f872.jpg?aki_policy=xx_large)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div className='actions'>
                                <i className="fas fa-pen"></i>
                                <i className="fas fa-trash"></i>
                            </div>
                        </div>
                        <div className='listing-information'>
                            <p className='city'>Berlin</p>
                            <p className='title'>Cosy studio in the heart of Charlottenburg</p>
                            <p className='price'><b>$39</b> / night</p>
                        </div>
                    </div>

                    <div className='listing'>
                        <div className='listing-image' style={{background: `url(https://a0.muscache.com/im/pictures/3cb3a025-a598-481c-b7f6-6d018eb0dc30.jpg?aki_policy=xx_large)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div className='actions'>
                                <i className="fas fa-pen"></i>
                                <i className="fas fa-trash"></i>
                            </div>
                        </div>
                        <div className='listing-information'>
                            <p className='city'>Berlin</p>
                            <p className='title'>Quiet & Small (LINDEMANN´S)</p>
                            <p className='price'><b>$49</b> / night</p>
                        </div>
                    </div>

                    {props.listings.map(item => (
                        <div className='listing' key={item.id}>
                            <div className='listing-image' style={{background: `url(${item.listing_url})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                <div className='actions'>
                                    <i className="fas fa-pen"></i>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </div>
                            <div className='listing-information'>
                                <p className='city'>{item.city}</p>
                                <p className='title'>{item.minimum_nights} {item.room_type}</p>
                                <p className='price'><b>${item.prediction}</b> / night</p>
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
        listings: state.listings
    };
}

export default connect(mapStateToProps, {getListings})(MyListings);