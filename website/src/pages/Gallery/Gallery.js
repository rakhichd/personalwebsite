import React from "react";
import "./Gallery.css"
import YouTube from "react-youtube";

function Gallery() {
    const videoId = "https://www.youtube.com/watch?v=U8KfAr2M1N4"; 

  const opts = {
    height: "390",
    width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

    return (
        <div className = "Gallery">
            <header className = "Gallery-header">
                    Gallery
            </header>
            <main>
                <section>
                    <h2> Galleria </h2>
                    <p className = "description">
                        Here's some of the cool things I've done. 
                    </p>
                </section>
                <YouTube videoId={videoId} opts={opts} />
                <img className = "img1" src="./img1.jpeg"/>

            </main>

            <footer>
                <p className="Footer-name"> &copy; {new Date().getFullYear()} rakhi</p>
            </footer>
        </div>
    );
}

export default Gallery;