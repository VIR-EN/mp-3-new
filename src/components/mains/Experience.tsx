import picture from "../../assets/Photo_Resized.jpeg";
import { Main as StyledMain } from "../styled/Main";
export default function Experience() {
    return(
        <StyledMain>

            <title>Experience|Resume</title>
            <img src={picture} alt="Viren Arora's Picture" />
            <h2>Experience</h2>
            <div className="experience">
                <section>
                    <h2>LGT Private Banking (Liechtenstein Global Trust)</h2>
                    <p><strong>Summer Analyst Intern</strong> | July – August 2024</p>
                    <ul>
                        <li>Digitized KPIs of all offshore products into a dynamic Excel model; model was adopted by
                            offshore team for client pitches.
                        </li>
                        <li>Conducted risk assessments on Indian public markets for new credit lending arm using 1 and 2
                            Sigma event analysis.
                        </li>
                        <li>Secured funding for 2 tech startups by building pitch decks and explaining complex
                            cybersecurity concepts clearly.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Motilal Oswal Private Wealth</h2>
                    <p><strong>Summer Financial Strategy Intern</strong> | July – August 2023</p>
                    <ul>
                        <li>Ranked mutual funds, PMS, and AIFs for client presentations; enhanced clarity and strategic
                            insights for RMs.
                        </li>
                        <li>Audited 8 client portfolios weekly; developed asset allocation and risk management
                            recommendations.
                        </li>
                        <li>Delivered academic presentations on financial indicators and M&A deals (e.g., HDFC–Jio) with
                            fellow interns.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>BU Financial Modeling Club</h2>
                    <p><strong>Tutor/Mentor</strong> | October 2023 – Present</p>
                    <ul>
                        <li>Led weekly small-group tutoring sessions on DCF, Comps, LBO, and more; helped increase
                            member comprehension by 60%.
                        </li>
                        <li>Collaborated with tutors to refine slides and formats; shared feedback in tutor-only
                            strategy sessions.
                        </li>
                        <li>Delivered large-group presentation to 150+ members on the Binomial Option Pricing Model and
                            Black-Scholes.
                        </li>
                    </ul>
                </section>
            </div>
        </StyledMain>
    );
}