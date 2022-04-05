import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContents, Heroh1, HeroPara1, HeroBtnWrap } from './HeroElements'
import { Button } from './ButtonElements'


const HeroSection = (dark, primary) => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContents>
            <Heroh1>Welcome to Arc Innovation Club!</Heroh1>
            <HeroPara1 class="para1">Think...Bulid...Growww...</HeroPara1>
            <HeroPara1>Be a part of us</HeroPara1>
            <HeroBtnWrap>
                <Button class="btnStepin" 
                    to='signin'
                    dark={dark ? 1 : 0}
                    primary={primary ? 1 : 0}>
                    Step In
                </Button>
            </HeroBtnWrap>
        </HeroContents>
    </HeroContainer>
  );
};

export default HeroSection;