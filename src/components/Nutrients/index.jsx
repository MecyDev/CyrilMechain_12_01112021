import PropTypes from "prop-types";
import styled from "styled-components";

import Nutrient from "../Nutrient";

//Css for the component with styled-component
const Container = styled.div`
  grid-area: 1 / 4 / 3 / 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: row;
    grid-area: 1 / 1 / 2 / 7;
    margin-top: 20px;
  }
`;
//End Css

/**
 * Render a list of Nutrient component
 * @namespace Nutrients
 * @param { object } keyData
 */
function Nutrients({ keyData }) {
  return (
    <Container>
      {Object.entries(keyData).map(([k, v]) => {
        return <Nutrient key={k} keyDataName={k} count={v} />;
      })}
    </Container>
  );
}

Nutrients.propTypes = {
  keyData: PropTypes.object,
};

export default Nutrients;
