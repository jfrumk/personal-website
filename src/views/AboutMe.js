import React from "react";
import "../styles/aboutMe.scss";
import aboutMePic from "../about-me-pic.png";
const AboutMe = () => {
  return (
    <div className="aboutMeFullContainer">
      <div className="aboutPicContainer">
        <svg
          width="167.84mm"
          height="180.04mm"
          version="1.1"
          viewBox="0 0 167.84 180.04"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m87.186 0a87.186 90.021 0 0 0-87.186 90.022 87.186 90.021 0 0 0 87.186 90.021 87.186 90.021 0 0 0 69.93-36.34 70.174 70.174 0 0 1-48.665 19.683 70.174 70.174 0 0 1-70.174-70.175 70.174 70.174 0 0 1 70.174-70.174 70.174 70.174 0 0 1 59.393 32.812 87.186 90.021 0 0 0-80.658-55.85z" />
        </svg>

        <img src={aboutMePic} alt="" />
      </div>
      <hr className="taperedLine" />
      <div className="aboutMeTextContainer">
        <div className="aboutMeTextBox">
          <h1 id="aboutMeTitle">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt id aliquet risus feugiat in. Etiam erat velit scelerisque
            in dictum non consectetur a erat. Volutpat maecenas volutpat blandit
            aliquam. Feugiat vivamus at augue eget arcu dictum. Volutpat ac
            tincidunt vitae semper quis lectus nulla. Lacus luctus accumsan
            tortor posuere ac ut consequat semper. Eget velit aliquet sagittis
            id. Duis ultricies lacus sed turpis tincidunt id aliquet risus.
            Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.
            Ante metus dictum at tempor commodo ullamcorper. Fermentum odio eu
            feugiat pretium nibh.
          </p>
          <p>
            Mauris in aliquam sem fringilla ut morbi tincidunt. Pulvinar
            pellentesque habitant morbi tristique senectus et netus. Vel risus
            commodo viverra maecenas accumsan lacus vel. Aliquet eget sit amet
            tellus cras adipiscing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
