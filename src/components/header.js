import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import '../vendor/bootstrap-grid/bootstrap-grid.min.css';

const Logo = styled.h1`
    font-size: 1.5em;
    text-align: left;
    float: left;
    color: #e64646;
    margin: 0;
`;

const NavContainer = styled.div`
    width: 100%;
    padding: 2em 0;
    display: flex;
    align-items: center;
    background: #140a1e;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavLinkContainer = styled.ul`
    list-style: none;
    text-decoration: none;
    margin-left: auto;
    display: flex;
    margin-bottom: 0;
`;

const NavLink = styled.li`
    list-style: none;
    text-decoration: none;
    margin-bottom: 0;

    & a {
        color: #e64646;
        text-decoration: none;
        margin-bottom: 0;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            right: 0;
            width: 0;
            bottom: -10px;
            background: #E64646;
            height: 4px;
            transition: width .3s ease-out;
        }

        &:hover {
            font-style: italic;

            &::after {
                left: 0;
                right: auto;
                width: 100%;
            }
        }

        &:focus::after, &:active::after {
            left:0;
            right:auto;
            width: 100%:
        }

        &.active {
            font-style: italic;
        }
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const Header = ({ siteTitle }) => (
    <NavContainer>
        <Container>
            <Nav>
                <Link to="/">
                    <Logo>{siteTitle}</Logo>
                </Link>
                <NavLinkContainer>
                    <NavLink>
                        <Link to="/" activeClassName="active">
                            Home
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/#projects" activeClassName="active">
                            Projects
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/about" activeClassName="active">
                            About
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/blog" activeClassName="active">
                            Blog
                        </Link>
                    </NavLink>
                </NavLinkContainer>
            </Nav>
        </Container>
    </NavContainer>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
