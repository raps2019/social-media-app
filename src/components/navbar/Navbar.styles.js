import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
height: 50px;
box-shadow: 0 8px 15px 0 rgba(0,0,0,.1);
display: flex;
padding: 5px 15px;
justify-content: space-between;
align-items: center;
`
export const LeftContainer = styled.div``;
export const CenterContainer = styled.div``;
export const RightContainer = styled.div``;


export const Logo = styled(Link)`
   font-family: 'Pacifico', cursive;
   font-size: 30px;
   text-decoration: none;
   color: ${props => props.theme.navbarTextColor};
`

export const NavButton = styled.button`

`