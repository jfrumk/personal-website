import React from "react";
import "../styles/home.scss";
import SocialMediaButtons from "../components/SocialMediaButtons";
import DownloadButton from "../components/DownloadButton";
function Home() {
  return (
    <div className="hero-container">
      <div className="gradient-visualizer">
        <svg
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 .79375 .26458"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0v0.23565c0.16786-0.092582 0.098217 0.098157 0.26458 0 0.16786-0.092582 0.098217 0.098157 0.26458 0 0.16786-0.092582 0.098216 0.098157 0.26458 0v-0.23565h-0.52917z" />
        </svg>
      </div>
      <div id="greeting-container" className="flex-column">
        <h1>
          Hi,
          <br /> I'm Jack Frumkes
        </h1>
        <p className="subtitle">
          I'm a Frontend developer with an emphasis on originality and a
          creative flair.
        </p>
        <SocialMediaButtons className={"smIcons"} />
        <DownloadButton />
        <svg
          className="star"
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.0984 11.7979C14.0984 11.7979 0.934835 13.9581 0.059244 18.86C-0.816347 23.762 8.3032 32.5689 8.3032 32.5689C8.3032 32.5689 4.8611 46.3788 10.3438 49.518C14.2617 51.7612 25.6889 45.4468 25.6889 45.4468C25.6889 45.4468 35.924 52.3724 40.9525 48.8533C44.7888 46.1685 42.8298 32.5689 42.8298 32.5689C42.8298 32.5689 51.997 22.6819 50.9105 18.86C49.824 15.0382 36.5448 11.7979 36.5448 11.7979C36.5448 11.7979 30.0966 0 25.3625 0C20.6283 0 14.0984 11.7979 14.0984 11.7979Z" />
        </svg>
        <svg
          className="star"
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.0984 11.7979C14.0984 11.7979 0.934835 13.9581 0.059244 18.86C-0.816347 23.762 8.3032 32.5689 8.3032 32.5689C8.3032 32.5689 4.8611 46.3788 10.3438 49.518C14.2617 51.7612 25.6889 45.4468 25.6889 45.4468C25.6889 45.4468 35.924 52.3724 40.9525 48.8533C44.7888 46.1685 42.8298 32.5689 42.8298 32.5689C42.8298 32.5689 51.997 22.6819 50.9105 18.86C49.824 15.0382 36.5448 11.7979 36.5448 11.7979C36.5448 11.7979 30.0966 0 25.3625 0C20.6283 0 14.0984 11.7979 14.0984 11.7979Z" />
        </svg>
        <svg
          className="star"
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.0984 11.7979C14.0984 11.7979 0.934835 13.9581 0.059244 18.86C-0.816347 23.762 8.3032 32.5689 8.3032 32.5689C8.3032 32.5689 4.8611 46.3788 10.3438 49.518C14.2617 51.7612 25.6889 45.4468 25.6889 45.4468C25.6889 45.4468 35.924 52.3724 40.9525 48.8533C44.7888 46.1685 42.8298 32.5689 42.8298 32.5689C42.8298 32.5689 51.997 22.6819 50.9105 18.86C49.824 15.0382 36.5448 11.7979 36.5448 11.7979C36.5448 11.7979 30.0966 0 25.3625 0C20.6283 0 14.0984 11.7979 14.0984 11.7979Z" />
        </svg>
      </div>
    </div>
  );
}

export default Home;
