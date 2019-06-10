import React, { Suspense } from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";

import './utils/translation';
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const Page = styled.div`
 display: block;
 width: 100%;
`;

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10
    },
});

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <Suspense fallback={null}>
              <Page>
                <Header />
                <LandingPage />
                <Projects />
              </Page>
          </Suspense>
      </ThemeProvider>
  );
};

export default App;
