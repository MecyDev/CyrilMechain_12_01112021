import React from "react";

import { useContext } from "react";
import { UserInfosContext } from "../../../utils/context";
import { useFetchUserAverageSessions } from "../../../utils/hooks";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import styled from "styled-components";
import CustomLineTooltip from "../CustomRechart/CustomLineTooltip";

const MyResponsiveContainer = styled(ResponsiveContainer)`
  grid-area: 2 / 1 / 3 / 2;
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;

const MyDiv = styled.div`
  position: relative;
`;

const MyH2 = styled.h1`
  position: absolute;
  width: 147px;
  height: 48px;
  top: 29px;
  left: 34px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

function Linearchart() {
  const { userId } = useContext(UserInfosContext);

  const { isLoading, isError, data, error } =
    useFetchUserAverageSessions(userId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <MyDiv>
      <MyH2>Durée moyenne des sessions</MyH2>
      <MyResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          outerRadius="75%"
          margin={{ right: 18, bottom: 10, left: 18 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "24px",
              mixBlendMode: "normal",
            }}
          />

          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Tooltip
            content={<CustomLineTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 79,
            }}
          />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </MyResponsiveContainer>
    </MyDiv>
  );
}

export default Linearchart;
