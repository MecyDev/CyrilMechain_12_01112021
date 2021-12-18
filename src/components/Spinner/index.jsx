import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const MyDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinDiv = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(44, 44, 44, 0.3);
  border-radius: 50%;
  border-top-color: red;
  animation: ${rotate} 1s ease-in-out infinite;
`;

function Spinner() {
  return (
    <MyDiv id="loading">
      <SpinDiv />
    </MyDiv>
  );
}

export default Spinner;
