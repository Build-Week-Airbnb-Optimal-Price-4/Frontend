import React, {useState} from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';
import styled from 'styled-components';
import background from '../img/background.jpg';
import logo from '../img/logo.png';

const SignInContainer = styled.div`
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        height: 475px;
        width: 441px;
        background: white;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            height: 64px;
            width: 64px;
        }

        h1 {
            margin-bottom: 24px;
            font-size: 32px;
            font-weight: 700;
            color: #484848;
        }
        
        form {
            width: 325px;
            margin:  0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            label {
                font-size: 16px;
                font-weight: 500;
                color: #484848;
            }

            input {
                padding: 8px 16px;
                border: 1px solid darkgray;
                border-radius: 3px;
                outline: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 16px;
                font-weight: 500;
                color: #484848;
            }

            .password {
                margin-top: 8px;
            }

            .error {
                font-size: 14px;
                font-weight: 500;
                color: red;
            }
            
            button {
                padding: 12px 0;
                margin-top: 16px;
                margin-bottom: 8px;
                background: linear-gradient(to right, #49708A, #88ABC2);
                border: none;
                border-radius: 3px;
                outline: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 16px;
                font-weight: 500;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: 0.25s;

                .loader {
                    height: 16px;
                    width: 16px;
                    border: 3px solid white;
                    border-top: 3px solid rgba(0, 0, 0, 0);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                :hover {
                    opacity: 0.9;
                }
            }
        }
        
        a {
            text-decoration: none;
            
            .signup {
                font-size: 14px;
                font-weight: 500;
                color: #484848;
                cursor: pointer;
                transition: 0.25s;
    
                :hover {
                    opacity: 0.75;
                }
            }
        }
    }
`

const SignIn = props => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState('');
    
    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        setFetching(true);
        axios.post('https://air-bnb-optimal-price-4.herokuapp.com/api/auth/login', input)
            .then(response => {
                localStorage.setItem(response.data.user_id, 'user_id');
                setInput({
                    email: '',
                    password: ''
                });
                setFetching(false);
                props.history.push('/dashboard');
            })
            .catch(error => {
                setError(error);
                setFetching(false);
            });
    };

    return (
        <SignInContainer>
            <div className='container'>
                <img src={logo} alt='opti logo'/>
                <h1>Sign In</h1>

                <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                    <label htmlFor='email'>Username</label>
                    <input name='email' type='text' placeholder='Enter username' value={input.email} onChange={onChange}/>

                    <label className='password' htmlFor='password'>Password</label>
                    <input name='password' type='password' placeholder='Enter password' value={input.password} onChange={onChange}/>
                    
                    {error !== '' && <p className='error'>Invalid credentials</p>}

                    <button type='submit'>{fetching ? <div className='loader'></div> : <p>Sign In</p>}</button>
                </form>

                <Link to='/signup'><p className='signup'>Don't have an account? Sign Up</p></Link>
            </div>
        </SignInContainer>
    );
};

export default SignIn;