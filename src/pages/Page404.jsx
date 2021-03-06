import { Link } from "react-router-dom";
import styled from "styled-components";

//Css for the component with styled-component
const MyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MyH1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 68px;
  line-height: 24px;
  color: #000000;
`;
//End Css

/**
 * Render 404 page component
 * @namespace Page404
 */
function Page404() {
  return (
    <MyDiv>
      <MyH1>404</MyH1>
      <Link to="/">Go back Home</Link>
    </MyDiv>
  );
}

export default Page404;
