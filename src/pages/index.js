import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
import styled from 'styled-components';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import FeaturedProject from '../components/FeaturedProject';
import Project from '../components/Project';
import { device } from '../styles/queries';

const ProjectWrapper = styled.div`
    /*display: grid;
    grid-template-columns: 1fr;
    gap: 50px;*/

    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    grid-auto-rows: 1px;
    grid-auto-flow: row;

    /* display: grid;
    grid-template-columns: repeat(1, minmax(100px,1fr));
    grid-gap: 50px;
    grid-auto-rows: 1px*/

    @media ${device.md} {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }
`;

const IndexPage = () => (
    <div className="wrapper">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero title="Design, Code, and everything in between" />
        <FeaturedProject
            title="SingPost 160"
            desc="Celebrating 160 Years of Post through the Web"
            image={require('../images/placeholder-1.jpg')}
            link="/about"
        />
        <ProjectWrapper className="grid">
            <Project
                title="Item 1"
                desc="adasd"
                image={'https://source.unsplash.com/aLglIaMcTV4'}
                link="/404"
                alt="Title"
            />
            <Project
                title="Item 2"
                desc="adasd"
                image={'https://source.unsplash.com/EZXfS9_o9DA'}
                link="/404"
                alt="Title"
            />
            <Project
                title="Item 3"
                desc="adasd"
                image={'https://source.unsplash.com/fmcpVMa7178'}
                link="/404"
                alt="Title"
            />
            <Project
                title="Item 4"
                desc="adasd"
                image={'https://source.unsplash.com/Q4Br3tb8LJk'}
                link="/404"
                alt="Title"
            />
            <Project
                title="Item 5"
                desc="adasd"
                image={'https://source.unsplash.com/GIUc-l74UT8'}
                link="/404"
                alt="Title"
            />
        </ProjectWrapper>
    </div>
);

export default IndexPage;
