import React from "react";
import "../styles/skills.scss";
import SkillsChart from "../components/SkillsChart";
const Skills = () => {
  return (
    <div className="skillsWholePage">
      <div className="chartSection">
        <SkillsChart
          skillNames={["React.js", "HTML", "CSS", "SCSS"]}
          skillProficiency={[
            "Proficient",
            "Proficient",
            "Proficient",
            "Proficient",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
