import React, {useEffect} from 'react';
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
            font-size: 14px;
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
        margin: 64px 0;

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
                font-size: 14px;
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
            justify-content: space-between;
            flex-wrap: wrap;

            .listing {
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
        }
    }
`

const MyListings = props => {
    useEffect(() => {
        axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
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
                    <button>+ Add New Listing</button>
                </div>
                
                <h3>Stays</h3>
                <p className='location-description'>3 stays</p>
                
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
                            <p className='title'>Apartment in City Center of Berlin</p>
                            <p className='price'><b>$97</b> / night</p>
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
                            <p className='title'>Apartment in City Center of Berlin</p>
                            <p className='price'><b>$97</b> / night</p>
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
                            <p className='title'>Apartment in City Center of Berlin</p>
                            <p className='price'><b>$97</b> / night</p>
                        </div>
                    </div>
                </div>

                <h3>Experiences</h3>
                <p className='location-description'>0 experiences</p>
            </section>
        </MyListingsContainer>
    );
};

export default MyListings;