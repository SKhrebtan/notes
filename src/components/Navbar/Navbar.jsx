
import { StyledUl , StyledLink, StyledNav} from "./Navbar.styled"

export const Navbar = () => {

    return (
        <StyledNav>   
        <StyledUl>
        <li className='li'><StyledLink to="/" >Home</StyledLink></li>
        <li className='li'><StyledLink to="/words" >Words</StyledLink></li>
        <li className='li'><StyledLink to="/sentences">Sentences</StyledLink></li>     
        <li className='li'><StyledLink to="/quotes">Quotes</StyledLink></li>             
        </StyledUl>
        </StyledNav>
    )
}