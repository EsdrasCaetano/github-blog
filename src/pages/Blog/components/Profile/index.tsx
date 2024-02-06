import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { ExternalLink } from "../../../../components/ExternalLink"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/EsdrasCaetano.png"/>

            <ProfileDetails>
                <header>
                    <h1>Esdras Caetano</h1>

                    <ExternalLink text="Github" href="#" />
                </header>

                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </p>

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        Esdras Caetano
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        Agência Bali
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        5 seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}