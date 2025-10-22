// import picture from "../../assets/picture.jpeg";
import { Main as StyledMain } from "../styled/Main";
export default function Skills(){
    return(
        <StyledMain>
            <title>Skills|Resume</title>
            {/*<img src={picture} alt="Viren Arora's Picture" />*/}
            <h2>Skills</h2>
            <div className="experience">
                <ul>
                    <li><strong>Programming Languages:</strong> Python, Java, Swift, HTML, STATA BE</li>
                    <li><strong>Statistical Tools:</strong> Bootstrapping, Regression Discontinuity, IV, DID, Regression
                    </li>
                    <li><strong>Excel:</strong> VLOOKUP, Pivot Tables, SUMIFs, Conditional Formatting</li>
                    <li><strong>Languages:</strong> English (Fluent), Hindi (Fluent), Spanish (Proficient)</li>
                    <li><strong>Soft Skills:</strong> Peer mentoring, presentation design, teamwork, and strategic
                        thinking
                    </li>
                </ul>
            </div>
        </StyledMain>
    );
}