import { Link } from "react-router-dom";
import styled from "styled-components";

//Css for the component with styled-component
const Navigation = styled.nav`
  width: 69%;
  display: flex;
  justify-content: space-between;
  margin-right: 5.97%;
`;

const StyledLink = styled(Link)`
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.4rem;
  text-decoration: none;
`;
//End Css

/**
 * Render a horizontal navbar component
 * @namespace NavHoriz
 */
function NavHoriz() {
  return (
    <Navigation role="main">
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="#">Profil</StyledLink>
      <StyledLink to="#">Réglage</StyledLink>
      <StyledLink to="#">Communauté</StyledLink>
    </Navigation>
  );
}

export default NavHoriz;
