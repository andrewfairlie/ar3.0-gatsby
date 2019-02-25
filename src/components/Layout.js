import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import GlobalStyle from '../styles/global';
import Container from 'react-bootstrap/Container';
import NavMain from './NavMain';

import '../vendor/bootstrap-grid/bootstrap-grid.min.css';
import '../fonts/tt-commons/tt-commons.css';
import '../fonts/geller/geller.css';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <GlobalStyle />
                <NavMain />
                <Container>
                    <main>{children}</main>
                </Container>
                <Container>
                    <footer>
                        <Container>
                            <div className="footer-container">
                                <span>
                                    Alfian Ridwan © {new Date().getFullYear()}
                                </span>
                                <a href="mailto:hello@alfianridwan.com">
                                    hello@alfianridwan.com
                                </a>
                            </div>
                        </Container>
                    </footer>
                </Container>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
