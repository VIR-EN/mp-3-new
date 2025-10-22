
import { StyledLink } from "./styled/Nav";

export default function Nav() {
    return (
        <>
            <ul>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/education">Education</StyledLink></li>
                <li><StyledLink to="/experience">Experience</StyledLink></li>
                <li><StyledLink to="/projects">Projects</StyledLink></li>
                <li><StyledLink to="/skills">Skills</StyledLink></li>
                <li><StyledLink to="/interests">Interests</StyledLink></li>
            </ul>
        </>
    );
}

