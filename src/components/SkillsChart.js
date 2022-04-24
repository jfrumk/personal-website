import React from "react";
import "../styles/skillsChart.scss";

//We will rank skills based on the following: proficient, intermediate, familiar
const SkillsChart = ({ ...props }) => {
  let skillList = props.skillNames.map((item, index) => {
    return (
      <li key={index}>
        <div className="skillBarWrapper">
          {item}
          <div className="skillAndBar">
            <span className={"skillBar " + props.skillProficiency[index]} />
            {props.skillProficiency[index]}
          </div>
        </div>
      </li>
    );
  });
  return <ul className="skillChart">{skillList}</ul>;
};

export default SkillsChart;
