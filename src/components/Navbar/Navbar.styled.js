import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
background-color: #3498db; 
margin-bottom: 15px;
display: flex;
justify-content:center;
`

export const StyledUl = styled.ul`
margin: 0;
padding: 10px 0px;
list-style: none;
display: flex;
gap: 20px;
@media screen and (min-width: 1024px) {
  gap: 60px;
}
}
`

export const StyledLink = styled(NavLink)`

text-decoration: none;
color: white;
font-size: 22px;
transition: color 250ms linear;
  &.active {
    color: black;
  }
  &:hover{
   color: black;
  }
`