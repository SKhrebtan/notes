import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
background-color: #3498db; 
display: flex;
// justify-content: center;
margin-bottom: 15px;
`

export const StyledUl = styled.ul`
margin: 0 auto;
padding: 10px 0px;
list-style: none;
display: flex;
gap: 20px;

}
`

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: white;
font-size: 24px;
transition: all 250ms linear;
  &.active {
    color: black;
  }
  &:hover{
   color: black;
  }
`