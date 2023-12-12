import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledUl = styled.ul`
margin:0 0 20px 0;
list-style: none;
display: flex;
justify-content: center;
gap: 75px;
background-color: #3498db; 
padding: 10px;
text-align: center;
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