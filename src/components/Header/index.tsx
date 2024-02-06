import { HeaderContainer } from "./styles"
import logosrc from '../../assets/Logo.svg'

export function Header(){
    return (
        <HeaderContainer>
            <img src={logosrc} alt="" />
        </HeaderContainer>
    )
}