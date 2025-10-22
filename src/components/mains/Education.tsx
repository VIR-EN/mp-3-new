import picture2 from "../../assets/Photo_Resized.jpeg";
import { Main as StyledMain } from "../styled/Main";
export default function Education() {
    return (
        <StyledMain>
            <title>Education|Resume</title>
            <img src={picture2} alt="Viren Arora's Picture" />
            <h2>Boston University</h2>
            <p><strong>Degree:</strong> B.A. in Economics & Mathematics</p>
            <p><strong>Minor:</strong> Computer Science</p>
            <p><strong>Expected Graduation:</strong> 2026</p>
            <p><strong>Notable Achievements:</strong> Dean’s List Every Semester, Peer Teaching Assistant for
                International Macroeconomics</p>
            <p><strong>Relevant coursework includes:</strong> Data Structures, Microeconomics, Machine Learning,
                Financial Derivatives, and Graph Theory.</p>
        </StyledMain>
    );
}