import React from 'react';
// import { Link } from 'gatsby';
// import styled from 'styled-components';
// import Image from '../components/image';
import SEO from '../components/seo';
import SvgIllustration from '../images/illustrationDesktop';
import SvgIllustrationMobile from '../images/illustrationMobile';

const IndexPage = () => (
    <div className="wrapper">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SvgIllustration />
        <SvgIllustrationMobile />
        <h1 className="hero">Design, Code, and everything in between.</h1>
        <div className="project-wrapper row">
            <div className="col-12 col-md-9 mx-auto">
                <div className="project-main">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 project-details order-2">
                            <small className="project-featured">
                                Featured Project
                            </small>
                            <h2 className="project-title">SingPost 160</h2>
                            <p className="project-desc">
                                Celebrating 160 Years of Post through the Web
                            </p>
                        </div>
                        <div className="col-12 col-md-8 order-1 order-md-2">
                            <img
                                src="https://source.unsplash.com/GBBa67P8tyo/1400x1000"
                                alt=""
                                className="project-img img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="project-main">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 project-details order-2">
                            <h2 className="project-title">FMS Stories</h2>
                            <p className="project-desc">
                                Showcasing the Stories of Media Students
                            </p>
                        </div>
                        <div className="col-12 col-md-8 order-1 order-md-2">
                            <img
                                src="https://source.unsplash.com/GBBa67P8tyo/1400x1000"
                                alt=""
                                className="project-img img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="project-main">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 project-details order-2">
                            <h2 className="project-title">FirstWave SG</h2>
                            <p className="project-desc">Resurfing the Wave</p>
                        </div>
                        <div className="col-12 col-md-8 order-1 order-md-2">
                            <img
                                src="https://source.unsplash.com/GBBa67P8tyo/1400x1000"
                                alt=""
                                className="project-img img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default IndexPage;
