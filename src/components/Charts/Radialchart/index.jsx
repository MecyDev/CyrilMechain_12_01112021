import PropTypes from "prop-types";
import { Cell, Pie, PieChart, ResponsiveContainer, Label } from "recharts";
import styled from "styled-components";

import CustomRadialLabel from "../CustomRechart/CustomRadialLabel";

//Css for the component with styled-component
const MyResponsiveContainer = styled(ResponsiveContainer)`
  grid-area: 2 / 3 / 3 / 4;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  @media (max-width: 1024px) {
    grid-area: 3 / 5 / 4 / 7;
  }
`;
//End Css

/**
 * Render a Radialchart component
 * @namespace Radialchart
 * @param { array } score
 */
function Radialchart({ score }) {
  return (
    <MyResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={score}
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        >
          {score.map((e, i) => (
            <Cell key={`cell-${i}`} fill={e.color} cornerRadius="50%" />
          ))}

          <Label
            position="center"
            content={
              <CustomRadialLabel
                value1={`${score[0].value * 100}%`}
                value2="de votre "
                value3="objectif"
              />
            }
          ></Label>
        </Pie>
      </PieChart>
    </MyResponsiveContainer>
  );
}

Radialchart.propTypes = {
  score: PropTypes.array,
};

export default Radialchart;
