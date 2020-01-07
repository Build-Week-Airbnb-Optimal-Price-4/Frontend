import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import house from '../img/house.jpg';

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

        h2 {
            margin-bottom: 4px;
            font-size: 24px;
            font-weight: 700;
            color: #484848;
        }

        .description {
            margin-bottom: 32px;
            font-size: 16px;
            font-weight: 500;
            color: #484848;
        }

        .listings-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .listing {
                height: 200px;
                width: 320px;
                margin-bottom: 32px;
                background-image: linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(0,0,0,0.9)), url(${house});
                background-size: cover;
                border-radius: 3px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-end;
                cursor: pointer;
                transition: 0.25s;

                .actions {
                    padding: 16px;

                    i {
                        padding: 8px;
                        background: white;
                        border-radius: 50%;
                        font-size: 16px;
                        color: #484848;

                        :hover {
                            color: darkgray;
                        }
                    }

                    .fa-pen {
                        margin-right: 4px;
                    }
                }
                
                p {
                    padding: 16px;
                    font-size: 16px;
                    font-weight: 500;
                    color: white;
                }
                
                .listing-information {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }

                :hover {
                    box-shadow: none;
                }
            }

            .create-listing {
                height: 200px;
                width: 320px;
                margin-bottom: 32px;
                background: linear-gradient(to right, #88a0ba, #8ccfb9);
                border-radius: 3px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: 0.25s;

                p {
                    padding: 16px;
                    font-size: 16px;
                    font-weight: 600;
                    color: white;
                }
                
                :hover {
                    box-shadow: none;
                }
            }
        }
    }
`

const MyListings = () => {
    const [listings, setListings] = useState([]);
    
    useEffect(() => {
        
    }, []);

    return (
        <MyListingsContainer>
            <header>
                <div>
                    <img src={logo} alt='opti logo'/>
                    <h1>Opti</h1>
                </div>
                <button>Sign Out</button>
            </header>
            <section>
                <h2>My Listings</h2>
                <p className='description'>We use historical data to determine the optimal price for your AirBnB.</p>
                <div className='listings-container'>
                    <div className='listing'>
                        <div className='actions'>
                            <i className="fas fa-pen"></i>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className='listing-information'>
                            <p>Address</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className='listing'>
                        <div className='actions'>
                            <i className="fas fa-pen"></i>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className='listing-information'>
                            <p>Address</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className='listing'>
                        <div className='actions'>
                            <i className="fas fa-pen"></i>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className='listing-information'>
                            <p>Address</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className='listing'>
                        <div className='actions'>
                            <i className="fas fa-pen"></i>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className='listing-information'>
                            <p>Address</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className='listing'>
                        <div className='actions'>
                            <i className="fas fa-pen"></i>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className='listing-information'>
                            <p>Address</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className='create-listing'>
                        <p>+ Create New Listing</p>
                    </div>

                </div>
            </section>
        </MyListingsContainer>
    );
};

export default MyListings;