import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png';

axios.defaults.withCredentials = true;

const ListingContainer = styled.div`
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
        width: 768px;
        margin: 0 auto;
        margin-top: 64px;
        margin-bottom: 128px;

        .go-back {
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            
            .fa-arrow-left {
                margin-left: 8px;
                font-size: 14px;
                color: #484848;
                transition: 0.25s;
            }

            p {
                margin: 4px;
                font-size: 16px;
                font-weight: 500;
                color: #484848;
                cursor: pointer;
                transition: 0.25s;
            }

            :hover {
                .fa-arrow-left {
                    margin-left: 0px;
                }

                p {
                    margin-left: 12px;
                }
            }
        }

        img {
            margin-bottom: 16px;
            width: 768px;
            border: 1px solid darkgray;
            border-radius: 3px;
        }

        h2 {
            margin-bottom: 8px;
            font-size: 28px;
            font-weight: 700;
            color: #484848;
        }

        .address {
            margin-bottom: 12px;
            font-size: 16px;
            font-weight: 500;
        }

        .first-section {
            margin-bottom: 8px;
            font-size: 16px;
            font-weight: 500;
            display: flex;

            p {
                margin-right: 32px;
                display: flex;
                align-items: center;

                i {
                    margin-right: 4px;
                    font-size: 14px;
                    color: #484848;
                }
            }
        }

        .description {
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }
    }
`


const Listing = props => {
    const [listing, setListing] = useState({});

    useEffect(() => {
        axios.get(`https://rs-airbnb-opti-price-4-pg.herokuapp.com/api/listings/${localStorage.getItem('user_id')}`)
            .then(response => setListing(response.data.find(item => item.id === Number(props.match.params.id))))
            .catch(error => console.log('getListings in listing component', error));
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
        <ListingContainer>
            <header>
                <div>
                    <img src={logo} alt='opti logo'/>
                    <h1>Opti</h1>
                </div>
                <button onClick={signOutOnClick}>Sign Out</button>
            </header>
            <section>
                <div className='go-back'>
                    <i className="fas fa-arrow-left"></i>
                    <p onClick={() => props.history.push('/dashboard')}>Go back</p>
                </div>
                <img src={listing.image} alt='listing image'/>
                <h2>{listing.title}</h2>
                <p className='address'>{listing.address}</p>
                <div className='first-section'>
                    <p><i className="fas fa-user"></i>{listing.accommodates} guest(s)</p>
                    <p><i className="fas fa-door-closed"></i>{listing.bedrooms} bedroom(s)</p>
                    <p><i class="fas fa-bed"></i>{listing.bed_type}</p>
                    <p><i class="fas fa-bath"></i>{listing.bathrooms} bath(s)</p>
                </div>
                <hr/>
                <p className='description'>{listing.bag_of_words}</p>
            </section>
        </ListingContainer>
    );
};

export default Listing;