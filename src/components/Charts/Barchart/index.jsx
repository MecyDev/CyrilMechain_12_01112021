import { useContext } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import styled from "styled-components";

import { UserInfosContext } from "../../../utils/context";
import { useFetchUserActivity } from "../../../utils/hooks";
import CustomBarTooltip from "../CustomRechart/CustomBarTooltip";

import blkPoint from "../../../assets/blk_point.png";
import redPoint from "../../../assets/red_point.png";

//Css for the component with styled-component
const MyDiv = styled.div`
  height: 320px;
  position: relative;
  grid-area: 1 / 1 / 2 / 4;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  @media (max-width: 1024px) {
    grid-area: 2 / 1 / 3 / 7;
  }
`;

const Container = styled.div`
  height: 220px;
  margin-top: 100px;
`;

const MyH2 = styled.h2`
  position: absolute;
  top: 24px;
  left: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #20253a;
`;

const MyUl = styled.ul`
  display: flex;
  position: absolute;
  top: 24px;
  right: 38px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #74798c;
`;

const MyImg = styled.img`
  margin-right: 10px;
  margin-left: 32px;
`;
//End Css

/**
 * Render a Barchart component
 * @namespace Barchart
 */
function Barchart() {
  const {
    /** The id of the user store in context
     * @memberof Barchart
     * @type { integer }
     */ userId,
  } = useContext(UserInfosContext);

  const {
    /**
     * @memberof Barchart
     * @type { boolean }
     */ isLoading,
    /**
     * @memberof Barchart
     * @type { integer }
     */
    isError,
    /**
     * @memberof Barchart
     * @type { object }
     */
    data,
    /**
     * @memberof Barchart
     * @type { object }
     */
    error,
  } = useFetchUserActivity(userId);

  //Show when data are loading
  if (isLoading) {
    return <span>Loading...</span>;
  }

  //Show if fail retrive data
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <MyDiv>
      <MyH2>Activit?? quotidienne</MyH2>
      <MyUl>
        <li>
          <MyImg src={blkPoint} alt="" /> Poids (Kg)
        </li>
        <li>
          <MyImg src={redPoint} alt="" />
          Calories br??l??es (Kcal)
        </li>
      </MyUl>
      <Container>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data[0]} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{ fontSize: 14 }}
              dy={15}
            />
            <YAxis
              dataKey="kilogram"
              yAxisId="left"
              orientation="right"
              stroke="#8884d8"
              interval="number"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14, fill: "#74798c" }}
              tickCount={8}
              domain={[data[1].minKg - 1, data[1].maxKg + 1]}
            />
            <YAxis
              dataKey="calories"
              yAxisId="right"
              orientation="right"
              stroke="#82ca9d"
              hide={true}
              domain={[data[1].minKcal - 100, data[1].maxKcal + 100]}
            />
            <Tooltip
              content={<CustomBarTooltip />}
              cursor={{ fill: "#e0e0e0" }}
            />
            <Bar
              yAxisId="left"
              dataKey="kilogram"
              fill="#000"
              barSize={7}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="calories"
              fill="#e60000"
              barSize={7}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </MyDiv>
  );
}

export default Barchart;
