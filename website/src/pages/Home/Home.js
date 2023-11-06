import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    const externalWebsiteURL = "https://www.tiktok.com/@login578"; 
    const externalWebsiteURL1 = "https://www.youtube.com/channel/UCO8yMaQN4gNF9Z2EM0vJ2Kw"; 
    const externalWebsiteURL2 = "https://www.linkedin.com/in/rakhi-c"

    return (
        <div className = "Home">
            <header className = "Home-header">
                Home
            </header>
            
            <main>
                <section>
                    <h2> Welcome</h2>
                    <p className="blurb1">
                        Hi, I'm Rakhi. Explore my journey, my interests, and my experiences. Join me as we embark on a digital adventure, where we share stories, knowledge, and a touch of inspiration. Together, we'll navigate this virtual landscape, uncovering new ideas, and making meaningful connections. Thank you for visiting, and I hope you enjoy your time here.
                    </p>
                    <Link to="/About" className="button">Learn More</Link>
                </section>
                
                <section>
                    <h2>Today</h2>
                    <p>
                        Today the date is October 19, 2023, and it is currently 6:05 PM. You're welcome for the update.
                    </p>
                </section>
                <section>
                    <h2>Check it Out!!</h2>
                    <a href={externalWebsiteURL} target="_blank" rel="noopener noreferrer">
                        <button className = "tiktok">TikTok</button>
                    </a>

                    <a href={externalWebsiteURL1} target="_blank" rel="noopener noreferrer">
                        <button className = "youtube">YouTube</button>
                    </a>

                    <a href={externalWebsiteURL2} target="_blank" rel="noopener noreferrer">
                        <button className = "linkedin">LinkedIn</button>
                    </a>
                </section>
            </main>

            <footer>
                <p className="Footer-name"> &copy; {new Date().getFullYear()} rakhi</p>
            </footer>
        </div>
    );
}

export default Home;