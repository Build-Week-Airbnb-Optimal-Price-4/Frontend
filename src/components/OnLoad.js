import React, { useRef, useEffect } from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';

import { TweenMax } from 'gsap';

const LoadingImg = styled.img`
  background: linear-gradient(to right, #88a0ba, #8ccfb9);
  border: 1px gray solid;
  border-radius: 50%;
  padding: 2%;
  margin: 2% auto;
`

const LoadingText = styled.p`
  text-align: center;
  font-size: 2rem;
`

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  display: none;
`

function OnLoad() {
  let logoItem = useRef(null);

  return (
    <LoadingDiv className='loading'>
        <LoadingImg src={logo} ref={el => {logoItem = el}} className="loading" alt="logo" />
        <LoadingText>Loading...</LoadingText>
    </LoadingDiv>
  );
}

export default OnLoad;
