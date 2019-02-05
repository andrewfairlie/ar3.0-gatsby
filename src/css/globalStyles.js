import { createGlobalStyle } from 'styled-components';
import fontFiles from './typeface';

console.log(fontFiles.GellerHeadlineBlackWOFF2);

export default createGlobalStyle`
    @font-face {
        font-family: 'Geller Headline';
        src: url('${fontFiles.GellerHeadlineBlackEOT}');
        src: url('${fontFiles.GellerHeadlineBlackEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.GellerHeadlineBlackWOFF2}') format('woff2'),
            url('${fontFiles.GellerHeadlineBlackWOFF}') format('woff'),
            url('${fontFiles.GellerHeadlineBlackTTF}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geller Headline';
        src: url('${fontFiles.GellerHeadlineBlackItalicEOT})';
        src: url('${fontFiles.GellerHeadlineBlackItalicEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.GellerHeadlineBlackItalicWOFF2}')
                format('woff2'),
            url('${fontFiles.GellerHeadlineBlackItalicWOFF}') format('woff'),
            url('${fontFiles.GellerHeadlineBlackItalicTTF}')
                format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {'
        font-family: 'Geller Text';
        src: url('${fontFiles.GellerTextLightEOT}');
        src: url('${fontFiles.GellerTextLightEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.GellerTextLightWOFF2}') format('woff2'),
            url('${fontFiles.GellerTextLightWOFF}') format('woff'),
            url('${fontFiles.GellerTextLightTTF}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geller Text';
        src: url('${fontFiles.GellerTextLightItalicEOT}');
        src: url('${fontFiles.GellerTextLightItalicEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.GellerTextLightItalicWOFF2}') format('woff2'),
            url('${fontFiles.GellerTextLightItalicWOFF}') format('woff'),
            url('${fontFiles.GellerTextLightItalicTTF}') format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {'
        font-family: 'Geller Text';
        src: url('${fontFiles.GellerTextSemiboldEOT}');
        src: url('${fontFiles.GellerTextSemiboldEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.GellerTextSemiboldWOFF2}') format('woff2'),
            url('${fontFiles.GellerTextSemiboldWOFF}') format('woff'),
            url('${fontFiles.GellerTextSemiboldTTF}') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geller Text';
        src: url('${fontFiles.GellerTextSemiboldItalicEOT}');
        src: url('${fontFiles.GellerTextSemiboldItalicEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.GellerTextSemiboldItalicWOFF2}') format('woff2'),
            url('${fontFiles.GellerTextSemiboldItalicWOFF}') format('woff'),
            url('${fontFiles.GellerTextSemiboldItalicTTF}') format('truetype');
        font-weight: bold;
        font-style: italic;
    }

    // TT Commons
    @font-face {
        font-family: 'TT Commons';
        src: url('${fontFiles.TTCommonsRegularEOT}');
        src: url('${fontFiles.TTCommonsRegularEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.TTCommonsRegularWOFF}') format('woff'),
            url('${fontFiles.TTCommonsRegularTTF}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'TT Commons';
        src: url('${fontFiles.TTCommonsItalicEOT}');
        src: url('${fontFiles.TTCommonsItalicEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.TTCommonsItalicWOFF}') format('woff'),
            url('${fontFiles.TTCommonsItalicTTF}') format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'TT Commons';
        src: url('${fontFiles.TTCommonsBoldEOT}');
        src: url('${fontFiles.TTCommonsBoldEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.TTCommonsBoldWOFF}') format('woff'),
            url('${fontFiles.TTCommonsBoldTTF}') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'TT Commons';
        src: url('${fontFiles.TTCommonsBoldItalicEOT}');
        src: url('${fontFiles.TTCommonsBoldItalicEOT}' + '?#iefix')
                format('embedded-opentype'),
            url('${fontFiles.TTCommonsBoldItalicWOFF}') format('woff'),
            url('${fontFiles.TTCommonsBoldItalicTTF}') format('truetype');
        font-weight: bold;
        font-style: italic;
    }

    h1 {
        font-family: 'Geller Headline';
    }
`;
