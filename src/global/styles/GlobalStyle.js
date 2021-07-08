import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin:0;
    padding:0;
    border: none;
    box-sizing:border-box;
    font-family: 'Noto Sans', sans-serif;
}
`

export const WindowContainer = styled.div`
  height : 100vh;
  width : 100vw;
`

export default GlobalStyle;