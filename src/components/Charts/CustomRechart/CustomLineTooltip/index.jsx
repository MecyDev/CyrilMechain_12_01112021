import styled from "styled-components";

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

export default CustomLineTooltip;
