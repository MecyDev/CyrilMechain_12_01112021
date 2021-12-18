import PropTypes from "prop-types";
import styled from "styled-components";

//Css for the component with styled-component
const MyDiv = styled.div`
  width: 39px;
  height: 25px;
  background: #ffffff;
`;

const MyP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;
//End Css

/**
 * Render a Custom Tooltip for LineChart component
 * @namespace CustumLineTooltip
 * @param { boolean } active
 * @param { array } payload
 */
function CustomLineTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <MyDiv>
        <MyP>{`${payload[0].value} min`}</MyP>
      </MyDiv>
    );
  }

  return null;
}

CustomLineTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomLineTooltip;
