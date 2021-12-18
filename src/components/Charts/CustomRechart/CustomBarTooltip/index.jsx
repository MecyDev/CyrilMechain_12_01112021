import styled from "styled-components";

const MyDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 39px;
  height: 63px;
  background: #e60000;
`;

const MyP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 4px;
`;

function CustomBarTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <MyDiv>
        <MyP>{`${payload[0].value}Kg`}</MyP>
        <MyP>{`${payload[1].value}Kcal`}</MyP>
      </MyDiv>
    );
  }

  return null;
}

export default CustomBarTooltip;
