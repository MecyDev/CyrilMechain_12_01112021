import { useFetchUserInfos } from "../utils/hooks";
import userDataFormat from "../services/formatUserDataFetch";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import styled from "styled-components";

import Welcome from "../components/Welcome";
import Barchart from "../components/Charts/Barchart";
import Linearchart from "../components/Charts/Linearchart";
import Radarchart from "../components/Charts/Radarchart";
import Radialchart from "../components/Charts/Radialchart";
import Nutrients from "../components/Nutrients";
import Spinner from "../components/Spinner";
import Errorapi from "../components/Errorapi";

import { UserInfosContext } from "../utils/context";

const Container = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Main = styled.main`
  width: 1126px;
  height: 779px;
`;

const Graphs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 320px 263px;
  grid-column-gap: 30px;
  grid-row-gap: 28px;
  margin-top: 77px;
`;

function Dashboard() {
  const params = useParams();

  const { saveId } = useContext(UserInfosContext);

  useEffect(() => {
    saveId(params.id);
  }, [params.id, saveId]);

  const {
    isLoading,
    isError,
    data: user,
    error,
  } = useFetchUserInfos(params.id);

  if (isLoading) {
    return <Spinner />;
  }

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
