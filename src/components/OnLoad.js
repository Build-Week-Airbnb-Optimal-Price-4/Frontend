import React, { useRef, useEffect } from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';

import { TweenMax } from 'gsap';

const LoadingImg = styled.img`
  background: linear-gradient(to right, #88a0ba, #8ccfb9);
  border: 1px gray solid;
  border-radius: 50%;
  padding: 2%;
  
`

const LoadingText = styled.p`
  text-align: center;
`

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  display: none;
`

function OnLoad() {
  let logoItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, 1, { scale: 1.1, repeat: -1})
  })

  return (
    <LoadingDiv className='loading'>
        <LoadingImg src={logo} ref={el => {logoItem = el}} className="loading" alt="logo" />
        <LoadingText>Loading...</LoadingText>
    </LoadingDiv>
  );
}

export default OnLoad;
