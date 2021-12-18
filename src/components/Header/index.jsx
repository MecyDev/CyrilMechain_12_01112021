import styled from "styled-components";

import NavHoriz from "../NavHoriz";
import logo from "../../assets/logo.svg";

//Css for the component with styled-component
const Heading = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadImg = styled.img`
  margin-left: 29px;
`;
//End Css

/**
 * Render a Header component
 * @namespace Header
 */
function Header() {
  return (
    <Heading>
      <HeadImg src={logo} alt="" />
      <NavHoriz />
    </Heading>
  );
}

export default Header;
