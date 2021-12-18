import Nutrient from "../Nutrient";

import styled from "styled-components";

const Container = styled.div`
  grid-area: 1 / 4 / 3 / 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Nutrients(props) {
  return (
    <Container>
      {Object.entries(props.keyData).map(([k, v]) => {
        return <Nutrient key={k} keyDataName={k} count={v} />;
      })}
    </Container>
  );
}

export default Nutrients;
