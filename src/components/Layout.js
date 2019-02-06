import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import Container from 'react-bootstrap/Container';
import NavMain from './NavMain';
import { device } from './queries';

import '../vendor/bootstrap-grid/bootstrap-grid.min.css';
import '../fonts/tt-commons.css';

const GlobalStyle = createGlobalStyle`
    :root{
        --pri: #e64646;
        --pri-light: #fa5a5a;
        --pri-dark: #d23232;

        --sec: #140a1e;
        --sec-light: #1e1428;
        --sec-dark: #0a0014;

        --ter: #c89646;
        --ter-light: #dcaa5a;
        --ter-dark: #b48232;

        --grey-1: #111111;
        --grey-2: #333333;
        --grey-3: #666666;
        --grey-4: #999999;
        --grey-5: #dcdcdc;
        --grey-6: #fafafa;

        --dark-gradient: linear-gradient(to bottom, var(--sec-dark) 0%, rgba(var(--sec-dark), 0) 100%
        );
        --light-gradient: linear-gradient(to bottom, var(--grey-6) 0%, rgba(var(--grey-6), 0) 100%);

        --transparent-black: rgba(var(--grey-1), 0.2);
        --transparent-white: rgba(var(--grey-6), 0.2);

        $shadow-sm: 0 1px 0 rgba(var(--grey-1), 0.1), 0 1px 2px rgba(var(--grey-1), 0.15),
            0 5px 15px rgba(var(--grey-1), 0.2);
        $shadow-md: 0 1px 0 rgba(var(--grey-1), 0.1), 0 2px 6px rgba(var(--grey-1), 0.15),
            0 10px 20px rgba(var(--grey-1), 0.2);
        $shadow-lg: 0 1px 0 rgba(var(--grey-1), 0.1), 0 3px 10px rgba(var(--grey-1), 0.15),
            0 20px 30px rgba(var(--grey-1), 0.2);

        --commons: 'TT Commons', Arial, 'Helvetica', sans-serif;
        --firacode: 'Fira Code', Courier New, Courier, monospace;

        // Fonts Settings
        --font-base-size: 1.125rem;
        --font-base: 'TT Commons', Arial, 'Helvetica', sans-serif;
        --font-heading: 'TT Commons', Arial, 'Helvetica', sans-serif;
        --font-subheading: 'Geller Headline', Georgia, 'Times New Roman', Times, serif;
        --font-paragraph: 'Geller Text', Georgia, 'Times New Roman', Times, serif;
        --font-tertiary: 'Fira Code', Courier New, Courier, monospace;

        --text-black: rgba(17, 17, 17, 0.85);
        --text-white: rgba(250, 250, 250, 0.9);
    };

    html {line-height: 1.15;-webkit-text-size-adjust: 100%;};body {margin: 0;};main {display: block;};hr {box-sizing: content-box;height: 0;overflow: visible;};pre {font-family: monospace, monospace;font-size: 1em;};a {background-color: transparent;};abbr[title] {border-bottom: none;text-decoration: underline;text-decoration: underline dotted;};b,strong {font-weight: bolder;};code,kbd,samp {font-family: monospace, monospace;font-size: 1em;};small {font-size: 80%;};sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;};sub {bottom: -0.25em;};sup {top: -0.5em;};img {border-style: none;};button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;};button,input {overflow: visible;};button,select {text-transform: none;};button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance: button;};button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {border-style: none;padding: 0;};button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {outline: 1px dotted ButtonText;};fieldset {padding: 0.35em 0.75em 0.625em;};legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal;};progress {vertical-align: baseline;};textarea {overflow: auto;};[type="checkbox"],[type="radio"] {box-sizing: border-box;padding: 0;};[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {height: auto;};[type="search"] {-webkit-appearance: textfield;outline-offset: -2px;};[type="search"]::-webkit-search-decoration {-webkit-appearance: none;};::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;};details {display: block;};summary {display: list-item;};template {display: none;};[hidden] {display: none;};

    body {
        font-family: var(--font-base);
        font-size: var(--font-base-size);
        background: var(--sec);
        color: var(--text-white);
    }

    main {
        margin-top: 12rem;
    }

    footer {
        position: fixed;
        bottom: 0;
        padding: 2rem 0;
    }

    h1 {
        font-size: 4rem;
        margin-top: 2rem;
        margin-bottom: 3rem;
        line-height: 1.05;

        &.hero {
            font-size: 3.3rem;
            width: 95%;

            @media ${device.sm} {
                font-size: 4rem;
            }
            @media ${device.md} {
                font-size: 4.5rem;
            }
            @media ${device.lg} {
                font-size: 5rem;
            }
            @media ${device.xl} {
                font-size: 6rem;
            }
        }
    }
`;

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
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
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
