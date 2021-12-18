import styled from "styled-components";

const MyDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MySpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

function Errorapi(props) {
  return (
    <MyDiv>
      <MySpan>{props.message}</MySpan>
    </MyDiv>
  );
}

export default Errorapi;
