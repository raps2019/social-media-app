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

export const GlobalButton = styled.button`
text-decoration: none;
background: #ffffff;
padding: 5px 20px;
border: 4px solid #494949;
border-radius: 10px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);transition: all 0.4s ease;
font-size: 14px;
cursor: pointer;

&:hover {
	transition: all 0.4s ease;
}
`


export default GlobalStyle;