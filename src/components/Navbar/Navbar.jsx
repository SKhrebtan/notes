
import { StyledUl , StyledLink} from "./Navbar.styled"

export const Navbar = () => {

    return (
        
            <StyledUl>
                <li><StyledLink to="/" >Home</StyledLink></li>
                <li><StyledLink to="/words" >Words</StyledLink></li>
                <li><StyledLink to="/sentences">Sentences</StyledLink></li>                
            </StyledUl>
               
    )
}