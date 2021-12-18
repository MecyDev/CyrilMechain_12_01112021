import { Link } from "react-router-dom";
import styled from "styled-components";

const MyNav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
  font-size: 28px;
`;

function Home() {
  return (
    <MyNav>
      <MyLink to="/user/12">User 12</MyLink>
      <br />
      <br />
      <MyLink to="/user/18">User 18</MyLink>
    </MyNav>
  );
}

export default Home;
