import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/queries';
import SvgIllustration from '../images/illustrationDesktop';
import SvgIllustrationMobile from '../images/illustrationMobile';

const HeroWrapper = styled.div`
    margin-bottom: 100px;

    @media ${device.md} {
        margin-bottom: 300px;
    }
`;

const HeroTitle = styled.h1`
    font-size: 3.2rem;
    font-family: var(--font-subheading);

    @media ${device.sm} {
        font-size: 4rem;
    }
    @media ${device.md} {
        font-size: 5rem;
        padding-right: 10vw;
    }
    @media ${device.lg} {
        font-size: 6rem;
        padding-right: 5vw;
    }
    /* @media ${device.xl} {
        font-size: 6rem;
    } */
`;

const Hero = props => (
    <HeroWrapper>
        <SvgIllustration />
        <SvgIllustrationMobile />
        <HeroTitle>{props.title}</HeroTitle>
    </HeroWrapper>
);

export default Hero;
