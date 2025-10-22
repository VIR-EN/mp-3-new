import picture from "../../assets/picture.jpeg";
import { Main as StyledMain } from "../styled/Main";
export default function Interests(){
    return(
            <StyledMain>
                <title>Interests|Resume</title>
                <img src={picture} alt="Viren Arora's Picture" />
                <h2>Interests</h2>
                <div className="experience">
                    <ul>
                        <li>Playing squash with friends — a great way to stay active and competitive.</li>
                        <li>Maintaining an active gym routine to support both physical and mental wellness.</li>
                        <li>Exploring new cuisines and tackling food challenges with family and friends.</li>
                        <li>Learning about finance, markets, and behavioral economics through self-led projects and
                            articles.
                        </li>
                    </ul>
                </div>
            </StyledMain>

    );
}