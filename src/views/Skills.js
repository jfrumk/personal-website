import React from "react";
import "../styles/skills.scss";
import SkillsChart from "../components/SkillsChart";
const Skills = () => {
  return (
    <div className="skillsWholePage">
      <div className="chartSection">
        <SkillsChart
          skillNames={[
            "React.js",
            "HTML",
            "CSS",
            "SCSS",
            "Java",
            "Python",
            "C/C++",
            "PHP",
            "SQL",
          ]}
          skillProficiency={[
            "Proficient",
            "Proficient",
            "Proficient",
            "Proficient",
            "Proficient",
            "Proficient",
            "Intermediate",
            "Intermediate",
            "Familiar",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
