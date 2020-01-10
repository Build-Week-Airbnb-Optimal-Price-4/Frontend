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

        .listing-image {
            margin-bottom: 16px;
            width: 768px;
            border: 1px solid darkgray;
            border-radius: 3px;
        }

        h2 {
            margin-bottom: 16px;
            font-size: 28px;
            font-weight: 700;
            color: #484848;
        }

        .optiprice {
            margin-bottom: 4px;
            display: flex;
            align-items: center;

            .opti {
                margin-right: 8px;
                padding: 2px;
                background: #8ccfb9;
                border: 1px solid darkgray;
                border-radius: 2px;
                font-size: 16px;
                font-weight: 600;
                color: #484848;
            }
            
            .price {
                font-size: 20px;
                font-weight: 500;
                color: #484848;
            }
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

        hr {
            border: 1px solid darkgray;
            border-radius: 1px;
        }

        .description {
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }

        h3 {
            margin: 12px 0;
            font-size: ;
            font-weight: 700;
            color: #484848;
        }

        .sleeping-arrangements {
            height: 147px;
            width: 187.33px;
            padding: 24px;
            border: 1px solid darkgray;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            i {
                color: #484848;
            }

            div {
                p {
                    font-size: 16px;
                    font-weight: 500;
                    color: #484848;
                }

                p:first-child {
                    font-weight: 700;
                }
            }
        }

        iframe {
            border: 1px solid darkgray;
            border-radius: 3px;
        }

        .review {
            padding: 24px 0;
            display: flex;
            flex-direction: column;

            .reviewer {
                margin-bottom: 8px;
                display: flex;
            
                img {
                    height: 48px;
                    width: 48px;
                    margin-right: 16px;
                    border-radius: 50%;
                }

                div {
                    p {
                        font-size: 14px;
                        font-weight: 500;
                        color: #484848;
                    }
    
                    p:first-child {
                        font-size: 16px;
                        font-weight: 700;
                    }
                }
            }

            .bio {
                font-size: 16px;
                font-weight: 500;
                color: #484848;
            }
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
                <img className='listing-image' src={listing.image} alt='listing'/>
                <h2>{listing.title}</h2>
                <p className='address'>{listing.address}</p>
                <div className='optiprice'>
                    <p className='opti'>OPTIPRICE</p>
                    <p className='price'><b>${Math.floor(Math.random() * 100) + 1}</b> / night</p>
                </div>
                <div className='first-section'>
                    <p><i className="fas fa-user"></i>{listing.accommodates} guest(s)</p>
                    <p><i className="fas fa-door-closed"></i>{listing.bedrooms} bedroom(s)</p>
                    <p><i className="fas fa-bed"></i>{listing.bed_type}</p>
                    <p><i className="fas fa-bath"></i>{listing.bathrooms} bath(s)</p>
                </div>
                <hr/>
                <p className='description'>{listing.bag_of_words}</p>
                <h3>Sleeping arrangements</h3>
                <div className='sleeping-arrangements'>
                    <i className="fas fa-bed"></i>
                    <div>
                        <p>Bed Type</p>
                        <p>{listing.bed_type}</p>
                    </div>
                </div>
                <h3>Availability</h3>
                <p>The minimum number of nights is {listing.minimum_nights}.</p>
                <h3>Cancellations</h3>
                <p>The cancellation policy is {listing.cancellation_policy}.</p>
                
                <h3>The neighborhood</h3>
                <iframe title='map' height='500' width='768' src={`https://maps.google.com/maps?q=${listing.address}&t=&z=15&ie=UTF8&iwloc=&output=embed`} allowFullScreen></iframe>
                
                <h3>Reviews</h3>
                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UNJHKALF3-499b9da40708-512' alt='Miguel'/>
                        <div>
                            <p>Miguel</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>This home was spectacular. It was more than we could have ever wanted or asked for. If we make our way back, we will definitely be staying here again!! Thank you for such a wonderful time!!</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UR3HCJ0T1-e5e9f4f74fe0-512' alt='Miguel'/>
                        <div>
                            <p>Alexis</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>Absolutely stunning! The location is perfect, with sunset views that will take your breath away. The layout is comfortable for multiple guests, and the design is casually elegant. The housekeeper was also so kind and made sure we had everything we needed. We stayed during off-season. The weather was still beautiful, and the crowds thankfully diminished. The hike was outstanding. One of our best Airbnb experiences ever. A truly sensational stay.</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UP5UY4XQC-49b7b3c4e57f-512' alt='Miguel'/>
                        <div>
                            <p>Corell</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>This home is one of a kind. We had such a wonderful stay. The staff was on top of everything that we could possibly need. The home is central for exploring. The views are out of this world! I can not recommend staying at this home enough.</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-ULKBTT25R-a540efc1845c-512' alt='Miguel'/>
                        <div>
                            <p>Ryan</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>This place is GORGEOUS!!! It has a great location and the best view we could of have asked. The interiors are very nicely decorated and it truly feels like a home. Very spacious. Looking forward to my next stay in this location.</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UNK2RKMA9-4193e937c0d8-512' alt='Miguel'/>
                        <div>
                            <p>Maggie</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>This home is truly stunning and I’m glad we decided to stay here during part of our trip. Don’t hesitate to book this home, you won’t regret it!</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UMMLCL0BV-9cafc328dd53-512' alt='Miguel'/>
                        <div>
                            <p>Nicole</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>A fantastic location and close to everything. If you're looking for "that view".. I would highly suggest booking here.</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UM3UYUP7D-d06d593b96c0-512' alt='Miguel'/>
                        <div>
                            <p>Jean</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>Best location nearby. Lots of restaurants. The house is very clean and looks exactly like on the photos. Will definitely come back to place again.</p>
                </div>
                <hr/>

                <div className='review'>
                    <div className='reviewer'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-ULVMAQ3CG-8a6b52348705-512' alt='Miguel'/>
                        <div>
                            <p>Stefano</p>
                            <p>January 2020</p>
                        </div>
                    </div>
                    <p className='bio'>Beautiful place and location!! This place is completely modern. Outstanding place and value! We were close to shops and restaurants, but with absolute privacy and quiet when in the house or on the terrace. The view is a picture perfect postcard! Our room was restocked, and tidy everyday upon our return! Loved the jacuzzi! Everything was perfect! Until next time!</p>
                </div>
                <hr/>
            </section>
        </ListingContainer>
    );
};

export default Listing;