import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Experience from "./mains/Experience.tsx";
import Project from "./mains/Project.tsx";
import Skills from "./mains/Skills.tsx";
import Interests from "./mains/Interests.tsx";
import Credits from "./mains/Credits.tsx";
import { Nav as StyledNav } from "./styled/Nav";
import { Wrapper as StyledWrapper } from "./styled/Wrapper";
import { Header as StyledHeader } from "./styled/Header";
import { Container as StyledContainer } from "./styled/Container";
import { Main as StyledMain } from "./styled/Main";
import { Footer as StyledFooter } from "./styled/Footer";

export default function Root() {
    return (
        <StyledWrapper>
            <StyledHeader>
                <Header />
            </StyledHeader>

            <StyledContainer>
                <StyledNav>
                    <Nav />
                </StyledNav>

                <StyledMain>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/interests" element={<Interests />} />
                        <Route path="/credits" element={<Credits/>} />
                    </Routes>
                </StyledMain>
            </StyledContainer>

            <StyledFooter>
                <Footer />
            </StyledFooter>
        </StyledWrapper>
    );
}