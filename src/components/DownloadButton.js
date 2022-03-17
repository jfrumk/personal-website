import React from "react";
import "../styles/downloadButton.scss";
const DownloadButton = () => {
  return (
    <button className="downloadButton">
      <div className="buttonContentWrapper">
        <svg
          width="6.1505mm"
          height="6.8955mm"
          version="1.1"
          viewBox="0 0 6.1505 6.8955"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="matrix(.11118 0 0 .10887 -.49823 -.48715)"
            fill="none"
            strokeLinecap="round"
          >
            <path
              d="m32.138 45.338v-37.947m0 37.947 16.746-15.89m-16.746 15.89-16.746-15.89"
              strokeWidth="5.8329"
            />
            <path
              d="m57.045 47.257v8.0251c0 5.4147-4.3591 9.7738-9.7738 9.7738h-30.26c-5.4147 0-9.7738-4.3591-9.7738-9.7738v-8.2931"
              strokeLinejoin="round"
              strokeWidth="5.511"
            />
          </g>
        </svg>
        <div className="text">Download Resume</div>
      </div>
    </button>
  );
};

export default DownloadButton;
