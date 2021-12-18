import { Link } from "react-router-dom";
import styled from "styled-components";

import yoga from "../../assets/yoga.svg";
import swim from "../../assets/swim.svg";
import bike from "../../assets/bike.svg";
import alter from "../../assets/alter.svg";

//Css for the component with styled-component
const Aside = styled.aside`
  grid-area: aside;
  height: calc(100vh - 91px);
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navigation = styled.nav`
  margin-top: 256px;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 316px;
  padding: 0;
  margin: 0;
`;

const NavImg = styled.img`
  width: 64px;
  height: 64px;
  background-color: white;
  border-radius: 6px;
`;

const CopyRight = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: #ffffff;
  width: 138px;
  transform: rotate(-90deg);
  margin-top: 164px;
`;
//End Css

/**
 * Render a vertical navbar component
 * @namespace NavVerti
 */
function NavVerti() {
  return (
    <Aside>
      <Navigation>
        <NavUl>
          <li>
            <Link to="#">
              <NavImg src={yoga} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <NavImg src={swim} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <NavImg src={bike} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <NavImg src={alter} alt="" />
            </Link>
          </li>
        </NavUl>
      </Navigation>
      <CopyRight>Copyright, SportSee 2020</CopyRight>
    </Aside>
  );
}

export default NavVerti;
