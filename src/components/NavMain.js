import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import AlfianLogo from '../images/logo';
import { device } from '../styles/queries';

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
    padding: 1rem 0;
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    background: var(--dark-gradient);
    z-index: 999;

    @media ${device.md} {
        padding: 2rem 0;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;

    .ar-header-burger {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-self: flex-end;
        position: fixed;
        height: 50px;
        width: 50px;
        padding: 10px;
        right: 1rem;
        top: 1.2rem;
        z-index: 9999;
        cursor: pointer;
        transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);

        &.menu-open {
            transform: rotate(45deg);
        }

        @media ${device.md} {
            display: none;
        }

        .line-menu {
            background-color: var(--pri);
            border-radius: 2px;
            width: 100%;
            height: 4px;
            margin: 5px 0;
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            z-index: 10;
        }

        .line-menu.line-half {
            width: 50%;
            margin: 0px;
            background-color: var(--pri-light);
        }

        .line-menu.first-line {
            transform-origin: right;
        }

        &.menu-open .line-menu.first-line {
            transform: rotate(-90deg) translateX(6px);
        }

        .line-menu.last-line {
            align-self: flex-end;
            transform-origin: left;
        }

        &.menu-open .line-menu.last-line {
            transform: rotate(-90deg) translateX(-6px);
            z-index: -1;
        }
    }
`;

const NavLinkContainer = styled.ul`
    list-style: none;
    text-decoration: none;
    display: flex;
    margin: 0 0 0 auto;

    ${'' /* @media ${device.md} {
        display: flex;
    } */}
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

const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent
        ? { className: 'active navlink' }
        : { className: 'navlink' };
};

const PartialNavLink = props => (
    <Link getProps={isPartiallyActive} {...props}>
        {props.children}
    </Link>
);

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
                        <Link to="/" activeClassName="active">
                            Home
                        </Link>
                    </NavLink>
                    <NavLink>
                        <PartialNavLink
                            to="/#projects"
                            activeClassName="active"
                        >
                            Projects
                        </PartialNavLink>
                    </NavLink>
                    <NavLink>
                        <PartialNavLink to="/about" activeClassName="active">
                            About
                        </PartialNavLink>
                    </NavLink>
                    <NavLink>
                        <PartialNavLink to="/blog" activeClassName="active">
                            Blog
                        </PartialNavLink>
                    </NavLink>
                </NavLinkContainer>
                <div className="ar-header-burger">
                    <div className="line-menu line-half first-line" />
                    <div className="line-menu" />
                    <div className="line-menu line-half last-line" />
                </div>
            </Nav>
        </Container>
    </NavContainer>
);

export default NavMain;
