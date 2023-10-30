import React from "react";
import "./About.css"

function About() {
    return (
        <div className = "About">
            <header className = "About-header">
                    About
            </header>

            <main>
                <section>
                    <h2> Welcome</h2>
                    <p className = "description">
                        I am a sophomore, stuyding CS at UC Berkeley. I like runnning, hiking, and traveling. 
                    </p>
                </section>
            </main>

            <footer>
                <p className="Footer-name"> &copy; {new Date().getFullYear()} rakhi</p>
            </footer>
        </div>
    );
}

export default About;