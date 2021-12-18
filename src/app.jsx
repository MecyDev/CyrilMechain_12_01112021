import styled from "styled-components";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import NavVerti from "./components/NavVerti";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/Page404";
import { UserInfosProvider } from "./utils/context";

import "./styles/minireset.min.css";
import "./styles/base.css";

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 117px 1fr;
  grid-template-rows: 91px calc(100vh - 91px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    "header  header"
    "aside   main";
`;

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "user",
      element: <Page404 />,
    },
    {
      path: "user/:id",
      element: (
        <UserInfosProvider>
          <Dashboard />
        </UserInfosProvider>
      ),
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return (
    <MainDiv>
      <Header />
      <NavVerti />
      {routes}
    </MainDiv>
  );
}

export default App;
