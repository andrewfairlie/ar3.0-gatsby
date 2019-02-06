import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import '../vendor/bootstrap-grid/bootstrap-grid.min.css';
import AlfianLogo from '../images/logo';
import { device } from './queries';

const Logo = styled.div`
    width: 100%;

    & svg {
        height: 25px;

        @media ${device.xl} {
            height: 30px;
        }
    }
`;

const NavContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    background: var(--dark-gradient);
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavLinkContainer = styled.ul`
    list-style: none;
    text-decoration: none;
    display: flex;
    margin: 0 0 0 auto;
`;

const NavLink = styled.li`
    list-style: none;
    text-decoration: none;
    margin-bottom: 0;

    & a {
        color: var(--grey-6);
        text-decoration: none;
        margin-bottom: 0;
        position: relative;
        font-size: 1.2rem;
        z-index: 2;

        @media ${device.lg} {
            font-size: 1.5rem;
        }

        &::after {
            content: '';
            position: absolute;
            right: 0;
            width: 0;
            bottom: 50%;
            ${'' /* transform: translateY(-50%); */}
            background: var(--pri);
            height: 4px;
            transition: width .3s ease-out;
            z-index: 1;
            opacity: .75;
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
            color: var(--pri);
        }
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

const NavMain = () => (
    <NavContainer>
        <Container>
            <Nav>
                <Link to="/">
                    <Logo>
                        <AlfianLogo className="alfian-logo" />
                    </Logo>
                </Link>
                <NavLinkContainer>
                    <NavLink>
                        <Link to="/" activeStyle activeClassName="active">
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

export default NavMain;
