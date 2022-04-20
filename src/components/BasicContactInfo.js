import React from "react";
import "../styles/basicContactInfo.scss";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";
const BasicContactInfo = () => {
  return (
    <div className="basicContactInfo">
      <li>
        <FaUser /> Jack Frumkes
      </li>
      <li>
        <FaEnvelope /> Jafrumkes@alumni.emory.edu / Jafrumkes@gmail.com
      </li>
      <li>
        <HiLocationMarker /> Rancho Santa Fe, CA
      </li>
    </div>
  );
};

export default BasicContactInfo;
