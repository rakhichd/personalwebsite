import React from "react";
import "./Gallery.css"

function Gallery() {
    return (
        <div className = "Gallery">
            <header className = "Gallery-header">
                    Gallery
            </header>
            <main>
                <section>
                    <h2> Welcome</h2>
                    <p className = "description">
                        Here's some of the cool things I've done. 
                    </p>
                </section>
            </main>

            <footer>
                <p className="Footer-name"> &copy; {new Date().getFullYear()} rakhi</p>
            </footer>
        </div>
    );
}

export default Gallery;