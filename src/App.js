import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import YoutubePage from "./page/YoutubePage";
import ProductPage from "./page/ProductPage";
import AnalysisPage from "./page/AnalysisPage";
import CommunityPage from "./page/CommunityPage";
import LoadingPage from "./page/LoadingPage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GNB from "./components/GNB";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
