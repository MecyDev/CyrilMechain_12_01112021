import { useContext } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

import { UserInfosContext } from "../../../utils/context";
import { useFetchUserPerformance } from "../../../utils/hooks";

//Css for the component with styled-component
const MyResponsiveContainer = styled(ResponsiveContainer)`
  grid-area: 2 / 2 / 3 / 3;
  background: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;
//End Css

/**
 * Render a Radarchart component
 * @namespace Radarchart
 */
function Radarchart() {
  const {
    /** The id of the user store in context
     * @memberof Radarchart
     * @type { integer }
     */ userId,
  } = useContext(UserInfosContext);

  const {
    /**
     * @memberof Radarchart
     * @type { boolean }
     */ isLoading,
    /**
     * @memberof Radarchart
     * @type { integer }
     */
    isError,
    /**
     * @memberof Radarchart
     * @type { object }
     */
    data,
    /**
     * @memberof Radarchart
     * @type { object }
     */
    error,
  } = useFetchUserPerformance(userId);

  //Show when data are loading
  if (isLoading) {
    return <span>Loading...</span>;
  }

  //Show if fail retrive data
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
