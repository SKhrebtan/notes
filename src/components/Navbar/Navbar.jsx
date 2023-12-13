
import { StyledUl , StyledLink, StyledNav} from "./Navbar.styled"

export const Navbar = () => {

    return (
        <StyledNav>   
        <StyledUl>
        <li><StyledLink to="/" >Home</StyledLink></li>
        <li><StyledLink to="/words" >Words</StyledLink></li>
        <li><StyledLink to="/sentences">Sentences</StyledLink></li>                
        </StyledUl>
        </StyledNav>
    )
}