import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
// import Container from 'react-bootstrap/Container';
import { device } from '../styles/queries';

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectDetails = styled.div`
    display: inline-block;
    margin-top: -3rem;
    padding: 0 0.5rem;
`;

const ProjectTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--text-white);
    margin: 0.75rem 0 0rem;

    @media ${device.md} {
        font-size: 4rem;
    }
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    font-family: var(--font-base);
    color: var(--grey-5);
    margin: 0;

    @media ${device.md} {
        font-size: 1.5rem;
    }
`;

const Project = props => (
    <a href={props.link} className="project-item">
        <ProjectWrapper>
            <img
                src={props.image}
                className="img-fluid img-content"
                alt="{props.alt}"
            />
            <ProjectDetails>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.desc}</ProjectDescription>
            </ProjectDetails>
        </ProjectWrapper>
    </a>
);

export default Project;
