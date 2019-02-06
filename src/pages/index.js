import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from '../components/image';
import SEO from '../components/seo';

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem 3rem 2rem;
    @media (max-width: 600px) {
        padding: 2rem 1rem 2rem 1rem;
    }
`;

const IndexPage = () => (
    <Wrapper>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/about">About</Link>
    </Wrapper>
);

export default IndexPage;
