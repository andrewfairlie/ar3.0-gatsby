import { device } from './queries';
import { createGlobalStyle } from 'styled-components';

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

        --dark-gradient: linear-gradient(to bottom, rgba(10,0,20,1) 0%, rgba(10,0,20,0) 100%
        );
        --dark-gradient-reverse: linear-gradient(to top, rgba(10,0,20,1) 0%, rgba(10,0,20,0) 100%
        );
        --light-gradient: linear-gradient(to bottom, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%);
        --light-gradient-reverse: linear-gradient(to top, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%);

        --transparent-black: rgba(var(--grey-1), 0.2);
        --transparent-white: rgba(var(--grey-6), 0.2);

        --shadow-sm: 0 1px 0 rgba(17, 17, 17, 0.1), 0 1px 2px rgba(17, 17, 17, 0.15),
            0 5px 15px rgba(17, 17, 17, 0.2);
        --shadow-md: 0 1px 0 rgba(17, 17, 17, 0.1), 0 2px 6px rgba(17, 17, 17, 0.15),
            0 10px 20px rgba(17, 17, 17, 0.2);
        --shadow-lg: 0 1px 0 rgba(17, 17, 17, 0.1), 0 3px 10px rgba(17, 17, 17, 0.15),
            0 20px 30px rgba(17, 17, 17, 0.2);

        --commons: 'TT Commons', Arial, 'Helvetica', sans-serif;
        --firacode: 'Fira Code', Courier New, Courier, monospace;

        --br: 5px;

        // Fonts Settings
        --font-base-size: 1.125rem;
        --font-base: 'TT Commons', Arial, 'Helvetica', sans-serif;
        --font-heading: 'TT Commons', Arial, 'Helvetica', sans-serif;
        --font-subheading: 'Geller Headline', Georgia, 'Times New Roman', Times, serif;
        --font-paragraph: 'Geller Text', Georgia, 'Times New Roman', Times, serif;
        --font-tertiary: 'Fira Code', Courier New, Courier, monospace;

        --text-black: rgba(17, 17, 17, 0.85);
        --text-white: var(--grey-6);
    };

    html {line-height: 1.15;-webkit-text-size-adjust: 100%;};body {margin: 0;};main {display: block;};hr {box-sizing: content-box;height: 0;overflow: visible;};pre {font-family: monospace, monospace;font-size: 1em;};a {background-color: transparent;};abbr[title] {border-bottom: none;text-decoration: underline;text-decoration: underline dotted;};b,strong {font-weight: bolder;};code,kbd,samp {font-family: monospace, monospace;font-size: 1em;};small {font-size: 80%;};sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;};sub {bottom: -0.25em;};sup {top: -0.5em;};img {border-style: none;};button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;};button,input {overflow: visible;};button,select {text-transform: none;};button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance: button;};button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {border-style: none;padding: 0;};button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {outline: 1px dotted ButtonText;};fieldset {padding: 0.35em 0.75em 0.625em;};legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal;};progress {vertical-align: baseline;};textarea {overflow: auto;};[type="checkbox"],[type="radio"] {box-sizing: border-box;padding: 0;};[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {height: auto;};[type="search"] {-webkit-appearance: textfield;outline-offset: -2px;};[type="search"]::-webkit-search-decoration {-webkit-appearance: none;};::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;};details {display: block;};summary {display: list-item;};template {display: none;};[hidden] {display: none;};

    body {
        font-family: var(--font-base);
        font-size: var(--font-base-size);
        background: var(--sec);
        color: var(--text-white);

        p {
            font-family: var(--font-paragraph);
            font-size: 20px;
        }
    }

    main {
        margin-top: 8rem;
        padding-bottom: 5rem;

        @media ${device.md} {
            margin-top: 12rem;
        }
    }

    a {
        color: var(--ter);
        text-decoration: none;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 1rem 0;
        background: var(--dark-gradient-reverse);
        z-index: 998;

        .footer-container {
            display: flex;
        }

        span {

            @media ${device.md} {
                transform: rotate(-90deg);
                transform-origin: left top;
            }
            
        }

        a {
            margin-left: auto;

            @media ${device.md} {
                transform: rotate(90deg);
                transform-origin: right top;
            }
        }

        @media ${device.md} {
            padding: 2rem 0;
        }
    }

    .img-fluid {
        max-width:100%;height:auto;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        font-family: var(--font-heading);
    }

    h1 {
        font-size: 4rem;
        margin-top: 2rem;
        margin-bottom: 3rem;
        line-height: 1.05;

        &.hero {
            font-size: 3.2rem;
            font-family: var(--font-subheading);

            @media ${device.sm} {
                font-size: 4rem;
            }
            @media ${device.md} {
                font-size: 5rem;
                padding-right: 10vw;
            }
            @media ${device.lg} {
                font-size: 6rem;
                padding-right: 5vw;
            }
            /* @media ${device.xl} {
                font-size: 6rem;
            } */
        }
    }

    img {
        border-radius: var(--br);
    }

    .project-wrapper {
        margin-top: 100px;

        @media ${device.md} {
            margin-top: 300px;
        }
    }

    .project-main {
        display: flex;
        align-items: center;

        &:not(:first-of-type) {
            margin-top: 5rem;
        }
    }

    .project-details {
        white-space: normal;
        z-index: 2;
        margin-top: -2rem;

        & > * {
            text-shadow: rgba(17,17,17,0.15);
            padding-left: 1rem;
        }

        @media ${device.md} {
            white-space: nowrap;
            padding: 0;
            margin-top: 0;
        }
    }

    .project-featured {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--ter-light);
        margin-top: 1rem;

        @media ${device.md} {
            margin-top: 0;
        }
    }

    .project-title {
        font-size: 3.2rem;
        font-weight: bold;
        margin: 0.5rem 0 0rem;
        
        @media ${device.md} {
            font-size: 5rem;
        }
    }

    .project-desc {
        font-size: 1.5rem;
        font-family: var(--font-base);
        color: var(--grey-4);
        margin: 0;

        @media ${device.md} {
            font-size: 1.8rem;
        }
    }

    .project-img {
        box-shadow: var(--shadow-md);
    }

    .svgDesktop {
        position: absolute;
        top: -130px;
        left: 0px;
        width: 100%;
        height: auto;
        z-index: -1;
        display: none;

        @media ${device.lg} {
            display: block;
        }
    }

    .svgMobile {
        position: absolute;
        top: 0px;
        left: 0px
        width: 100%;
        height: auto;
        z-index: -1;

        @media ${device.sm} {
            top: -130px;
            left: 0px
        }

        @media ${device.lg} {
            display: none;
        }
    }

    .blog-container {
        display: grid;
        grid-template-columns: minmax(1em, 1fr) repeat(12, minmax(0, 3.795rem)) minmax(
                1em,
                1fr
            );

        & > * {
            grid-column-start: 1;
            grid-column-end: 15;

            @media ${device.md} {
                grid-column-start: 3;
                grid-column-end: 13;
            }
        }

        .blog-header {
            grid-column-start: 1;
            grid-column-end: 15;
            height: 240px;
            object-fit: cover;
            overflow: hidden;
            position: relative;

            @media ${device.md} {
                height: 500px;
            }

            @media ${device.lg} {
                height: 600px;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: $light-gradient;
                z-index: 2;
                opacity: 0.5;
            }

            & img {
                width: 100%;
                top: 50%;
                left: 50%;
                position: relative;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
        }

        .blog-article {
            z-index: 2;

            @media ${device.md} {
                margin-top: -4rem;
                padding-top: 0;
            }
        }

        a {
            color: var(--ter);
        }

        h1 {
            font-size: 42px;
            line-height: 1;
            position: relative;
            z-index: 2;
            color: var(--grey-6);
            font-weight: bold;
            margin-bottom: 0;

            @media ${device.md} {
                color: var(--grey-1);
                margin-bottom: 3rem;
            }

            &::after {
                display: none;

                @media ${device.md} {
                    content: '';
                    display: block;
                    position: absolute;
                    height: 140%;
                    width: 110%;
                    background: #fafafa;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    box-shadow: 0px -15px 20px rgba(250, 250, 250, 0.15);
                    z-index: -1;
                    transition: background 0.4s ease-in;
                }
            }
        }

        h2 {
            color: var(--grey-4);
            font-size: 28px;
        }

        h1 + h2 {
            margin-top: 20px;
        }

        p {
            font-family: $font-paragraph;
            font-size: 19px;
            line-height: 1.45;
            margin-bottom: 0;

            @media ${device.sm} {
                font-size: 21px;
            }

            @media ${device.md} {
                font-size: 22px;
            }

            @media ${device.lg} {
                font-size: 23px;
            }
        }

        h3 {
            font-size: 30px;
            text-transform: capitalize;
            font-weight: bold;
        }

        p + h3 {
            margin-top: 30px;
            margin-bottom: 0px;

            @media ${device.md} {
                margin-top: 50px;
            }
        }

        h3 + p {
            margin-top: 4px;
        }

        blockquote {
            font-style: italic;
            font-weight: bold;
            color: var(--pri-light);
            position: relative;
            margin: 3rem 0 2rem;
            display: inline-block;
            padding: 0 40px;

            &::before {
                content: '';
                position: absolute;
                height: 100%;
                width: 4px;
                left: 0;
                top: 0;
                background-color: var(--pri);
            }

            p {
                margin-top: 0;
                font-size: 22 px;

                @media ${device.md} {
                    font-size: 26px;
                }
            }
        }

        hr {
            margin: 4rem auto;
            border: 2px var(--sec-light) solid;
        }
    }
`;

export default GlobalStyle;
