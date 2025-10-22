// import picture from "../../assets/picture.jpeg";
import { Main as StyledMain } from "../styled/Main";
export default function Home() {
    return(
        <StyledMain>
            <title>Home|Resume</title>
            {/*<img src={picture} alt="Viren Arora's Picture" />*/}
            <p>Hello! I'm Viren Arora, an undergraduate at Boston University majoring in Economics and Mathematics with
                a minor in Computer Science. This website is a digital version of my resume and showcases my education,
                experience, skills, and interests. Thank you for visiting!
                I love solving complex problems through financial modelling, data analysis, or programming. I do it
                because it’s fun! During my internships, I’ve collaborated closely with teams to develop financial
                models, assess risk, and analyse market trends.
                As a Peer Teaching Assistant and tutor for the BU Financial Modeling Club, I’ve had the chance to mentor
                students, think creatively to simplify complex concepts and foster a collaborative learning environment.
                I thrive when working with others to find innovative solutions to challenging problems.
                Outside of academics, I’m dedicated to maintaining an active gym routine, prioritising both physical
                fitness and mental health. I also enjoy playing squash and exploring new cuisines with friends and
                family. Whether it’s taking on a challenging problem or trying something new, I’m always excited for the
                next challenge.</p>
        </StyledMain>
    );
}