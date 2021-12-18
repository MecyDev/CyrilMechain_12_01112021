import React from "react";
import styled from "styled-components";

const TitleTspan = styled.tspan`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #20253a;
`;

const ScoreTspan = styled.tspan`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 26px;
  text-align: center;
  fill: #282d30;
`;

const ValueTspan = styled.tspan`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  fill: #6e6e6e;
`;

function CustomRadialLabel({ viewBox, value1, value2, value3 }) {
  const { cx, cy } = viewBox;
  return (
    <React.Fragment>
      <text x={cx - 78} y={cy - 92} textAnchor="middle">
        <TitleTspan>Score</TitleTspan>
      </text>
      <text x={cx} y={cy - 5} textAnchor="middle">
        <ScoreTspan>{value1}</ScoreTspan>
      </text>
      <text x={cx} y={cy + 20} textAnchor="middle">
        <ValueTspan>{value2}</ValueTspan>
      </text>
      <text x={cx} y={cy + 45} textAnchor="middle">
        <ValueTspan>{value3}</ValueTspan>
      </text>
    </React.Fragment>
  );
}

export default CustomRadialLabel;
