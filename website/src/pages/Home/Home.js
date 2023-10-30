import React from "react";
import './Home.css';

function Home() {
    return (
        <div className = "Home">
            <header className = "Home-header">
                Home
            </header>
            
            <main>
                <section>
                    <h2> Welcome</h2>
                    <p>
                        Hi, I'm Rakhi. Im making this cute little website and it's gonna have some really great colors.
                    </p>
                </section>

                <section>
                    <h2>Today</h2>
                    <p>
                        Today the date is October 19, 2023, and it is currently 6:05 PM. You're welcome for the update.
                    </p>
                </section>
            </main>

            <footer>
                <p className="Footer-name"> &copy; {new Date().getFullYear()} rakhi</p>
            </footer>
        </div>
    );
}

export default Home;