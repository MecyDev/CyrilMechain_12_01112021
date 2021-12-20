import PropTypes from "prop-types";
import styled from "styled-components";

//Css for the component with styled-component
const Infos = styled.div`
  width: 100%;
  @media (max-width: 1024px) {
    margin-top: 25px;
  }
`;

const HOne = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 4.8rem;
  line-height: 2.4rem;
  color: #000000;
`;

const Message = styled.p`
  margin-top: 41px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #000000;
`;
//End Css

/**
 * Render a welcome message component
 * @namespace Welcome
 * @param { string } user
 */
function Welcome({ user }) {
  return (
    <Infos>
      <HOne>Bonjour {user} </HOne>
      <Message>Félicitation ! Vous avez explosé vos objectifs hier 👏</Message>
    </Infos>
  );
}

Welcome.propTypes = {
  user: PropTypes.string,
};

export default Welcome;
