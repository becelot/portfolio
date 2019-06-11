import React, { Suspense } from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";

import './utils/translation';
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const Page = styled.div`
 display: block;
 width: 100%;
`;

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    },
});

const App: React.FC = () => {
  return (

          <Suspense fallback={null}>
              <ThemeProvider theme={theme}>
                  <Page>
                    <Header />
                    <main>
                        <LandingPage />
                        <Projects />
                    </main>
                  </Page>
              </ThemeProvider>
          </Suspense>

  );
};

export default App;
