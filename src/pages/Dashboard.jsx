import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";

import { useFetchUserInfos } from "../utils/hooks";
import userDataFormat from "../services/formatUserDataFetch";
import Welcome from "../components/Welcome";
import Barchart from "../components/Charts/Barchart";
import Linearchart from "../components/Charts/Linearchart";
import Radarchart from "../components/Charts/Radarchart";
import Radialchart from "../components/Charts/Radialchart";
import Nutrients from "../components/Nutrients";
import Spinner from "../components/Spinner";
import Errorapi from "../components/Errorapi";
import { UserInfosContext } from "../utils/context";

//Css for the component with styled-component
const Container = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Main = styled.main`
  width: 1126px;
  height: 779px;
  @media (max-width: 1024px) {
    width: 95%;
    height: 100%;
    margin: 0 auto 0 auto;
  }
`;

const Graphs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 320px 263px;
  grid-column-gap: 30px;
  grid-row-gap: 28px;
  margin-top: 77px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 120px 320px 263px;
    margin-top: 0;
  }
`;
//End Css

/**
 * Render DashBoard component
 * @namespace Dashboard
 */
function Dashboard() {
  const params = useParams();

  const {
    /** The id of the user store in context
     * @memberof Dashboard
     * @type { integer }
     */ saveId,
  } = useContext(UserInfosContext);

  useEffect(() => {
    saveId(params.id);
  }, [params.id, saveId]);

  const {
    /**
     * @memberof Dashboard
     * @type { boolean }
     */ isLoading,
    /**
     * @memberof Dashboard
     * @type { integer }
     */
    isError,
    /**
     * @memberof Dashboard
     * @type { object }
     */
    data: user,
    /**
     * @memberof Dashboard
     * @type { object }
     */
    error,
  } = useFetchUserInfos(params.id);

  //Show when data are loading
  if (isLoading) {
    return <Spinner />;
  }

  //Show if fail retrive data
  if (isError) {
    return <Errorapi message={error.message} />;
  }

  return (
    <Container>
      <Main>
        <Welcome user={user.data.userInfos.firstName} />
        <Graphs>
          <Barchart />
          <Linearchart />
          <Radarchart />
          <Radialchart
            score={userDataFormat.formatUserScore(user.data.score)}
          />
          <Nutrients keyData={user.data.keyData} />
        </Graphs>
      </Main>
    </Container>
  );
}

export default Dashboard;
