import { useContext } from "react";
import { UserInfosContext } from "../../../utils/context";
import { useFetchUserPerformance } from "../../../utils/hooks";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import styled from "styled-components";

const MyResponsiveContainer = styled(ResponsiveContainer)`
  grid-area: 2 / 2 / 3 / 3;
  background: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;

function Radarchart() {
  const { userId } = useContext(UserInfosContext);

  const { isLoading, isError, data, error } = useFetchUserPerformance(userId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <MyResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          tickLine={false}
          tick={{
            fontSize: 10,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#ff0101"
          fillOpacity={0.7}
          stroke="transparent"
        />
      </RadarChart>
    </MyResponsiveContainer>
  );
}

export default Radarchart;
