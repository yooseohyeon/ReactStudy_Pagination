import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 30px;
    font-family: Pretendard-Regular;
  }

  h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
  }
`;

export default GlobalStyle;
