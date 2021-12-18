import PropTypes from "prop-types";
import styled from "styled-components";

import calorie from "../../assets/calorie.png";
import protein from "../../assets/protein.png";
import glucide from "../../assets/glucide.png";
import lipide from "../../assets/lipide.png";

//Css for the component with styled-component
const DivContainer = styled.div`
  display: flex;
  align-items: center;
  width: 258px;
  height: 124px;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;

const DivImgContainer = styled.div.attrs((props) => ({
  color: props.color,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  margin-left: 32px;
  margin-right: 24px;
  background: ${(props) => props.color};
`;

const DivDataContainer = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #282d30;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2%.4rem;
  color: #74798c;
`;
//End Css

/**
 * Render a Nutrient single block component
 * @namespace Nutrient
 * @param { string } keyDataName
 * @param { integer } count
 */
function Nutrient({ keyDataName, count }) {
  let color = "#fbeced";
  let icon = calorie;
  let keyName = "Calories";

  //For adapt the style of the block
  if (keyDataName === "proteinCount") {
    color = "#e6f5fc";
    icon = protein;
    keyName = "Proteines";
  }
  if (keyDataName === "carbohydrateCount") {
    color = "#fcf6e3";
    icon = glucide;
    keyName = "Glucides";
  }
  if (keyDataName === "lipidCount") {
    color = "#ffe9ef";
    icon = lipide;
    keyName = "Lipides";
  }

  return (
    <DivContainer>
      <DivImgContainer color={color}>
        <img src={icon} alt="icon" />
      </DivImgContainer>

      <DivDataContainer>
        <div>
          <H2>{count.toLocaleString("en-GB")}KCal</H2>
          <P>{keyName}</P>
        </div>
      </DivDataContainer>
    </DivContainer>
  );
}

Nutrient.propTypes = {
  keyDataName: PropTypes.string,
  count: PropTypes.number,
};

export default Nutrient;
