import React from "react";
import "./About.css"

function About() {
    const externalWebsiteURL3 = ""
    return (
        <div className = "About">
            <header className = "About-header">
                    About
            </header>

            <main>
                <section>
                    <h2> My Story.</h2>
                    <p className = "description">
                        I am a sophomore, currently pursuing a Bachelor's degree in Computer Science at UC Berkeley. Beyond the world of coding and algorithms, I find immense joy in outdoor activities like running and hiking, which allow me to connect with nature and stay active. Additionally, I'm passionate about traveling, as it broadens my horizons and exposes me to diverse cultures and experiences. Whether I'm exploring new code or new destinations, I thrive on the thrill of discovery and growth.
                    </p>
                </section>
                    <div id="signUpForm" class="hidden">
                        <h3>Get In Touch!</h3>
                        <form id="emailForm">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <button type="submit">Submit</button>
                         </form>
                    </div>
                
            </main>

            <footer>
                <p className="Footer-name"> &copy; {new Date().getFullYear()} rakhi</p>
            </footer>
        </div>
    );
}

export default About;