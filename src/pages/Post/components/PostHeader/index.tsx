import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { useNavigate } from "react-router-dom";

export function PostHeader() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }
    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink 
                    as="button" 
                    onClick={goBack}
                    icon={<FontAwesomeIcon icon={faChevronLeft}/> } 
                    text="Voltar" 
                    href="#"
                    variant="iconLeft"
                />
                <ExternalLink text="Ver no Github" href="#" target="_blank"/>
            </header>

            <h1>JavaScript data types and data structures</h1>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    EsdrasCaetano
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 1 dia
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </li>
            </ul>
        </PostHeaderContainer>
    )
}