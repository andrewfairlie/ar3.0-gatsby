import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
// import Container from 'react-bootstrap/Container';
import { device } from '../styles/queries';

const FeaturedProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 6rem));
    align-items: center;
`;

const FeaturedProjectDetails = styled.div`
    white-space: normal;
    z-index: 2;
    margin-top: -2rem;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 2;
    padding: 0 0.5rem;

    span {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--ter-light);
        text-shadow: 5px 5px 5px rgba(17, 17, 17, 0.15);
    }

    @media ${device.lg} {
        white-space: nowrap;
        padding: 0;
        margin-top: 0;
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 1;
    }
`;

const FeaturedProjectImage = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 1;

    @media ${device.lg} {
        grid-column-start: 4;
        grid-column-end: 13;
    }
`;

const FeaturedProjectTitle = styled.h1`
    font-size: 2.8rem;
    font-weight: bold;
    margin: 0.75rem 0 0rem;
    text-shadow: 5px 5px 5px rgba(17, 17, 17, 0.15);

    @media ${device.md} {
        font-size: 5rem;
    }
`;

const FeaturedProjectDescription = styled.p`
    font-size: 1.3rem;
    font-family: var(--font-base);
    color: var(--grey-5);
    text-shadow: 5px 5px 5px rgba(17, 17, 17, 0.15);
    margin: 0;

    @media ${device.md} {
        font-size: 1.8rem;
    }
`;

const FeaturedProjectButton = styled.button`
    background-color: var(--pri);
    border: 0;
    border-radius: var(--br);
    box-shadow: var(--shadow-md);
    color: var(--text-white);
    cursor: pointer;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
`;

const FeaturedProject = props => (
    <FeaturedProjectWrapper>
        <FeaturedProjectDetails>
            <span>Featured Project</span>
            <FeaturedProjectTitle>{props.title}</FeaturedProjectTitle>
            <FeaturedProjectDescription>
                {props.desc}
            </FeaturedProjectDescription>
            <a href={props.link}>
                <FeaturedProjectButton>View Project</FeaturedProjectButton>
            </a>
        </FeaturedProjectDetails>
        <FeaturedProjectImage>
            <img src={props.image} className="img-fluid" alt="{props.alt}" />
        </FeaturedProjectImage>
    </FeaturedProjectWrapper>
);

export default FeaturedProject;
