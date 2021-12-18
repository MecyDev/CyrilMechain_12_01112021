import PropTypes from "prop-types";
import styled from "styled-components";

//Css for the component with styled-component
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
//End Css

/**
 * Render a Error message component
 * @namespace Errorapi
 * @param { string } message
 */
function Errorapi({ message }) {
  return (
    <MyDiv>
      <MySpan>{message}</MySpan>
    </MyDiv>
  );
}

Errorapi.propTypes = {
  message: PropTypes.string,
};

export default Errorapi;
