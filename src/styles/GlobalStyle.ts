import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        font-family: Cafe24ClassicType-Regular;
    }
    @font-face {
        font-family: 'Cafe24ClassicType-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Cafe24ClassicType-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyle;
