import { createGlobalStyle } from 'styled-components';
import * as fonts from '../fonts';

console.log(fonts.TTCommonsRegular);

export default createGlobalStyle`
    @font-face { 
        font-family: 'TT Commons';
        font-style: normal;
        font-weight: 300;
        src: url('${fonts.TTCommonsRegular}') format('truetype'); 
    } 

    body { font-family: 'TT Commons'; }
`;
