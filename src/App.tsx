import React, { Suspense } from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";

import './utils/translation';
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import config from 'react-reveal/globals';
import Experience from "./components/Experience";

const Page = styled.div`
 display: block;
 width: 100%;
`;

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    },
});

config({ ssrFadeout: true });

const App: React.FC = () => {
  return (

          <Suspense fallback={null}>
              <ThemeProvider theme={theme}>
                  <Page>
                    <Header />
                    <main>
                        <section id='home'>
                            <LandingPage />
                        </section>
                        <section id='projects'>
                            <Projects />
                        </section>
                        <section id='work'>
                            <Experience />
                        </section>
                    </main>
                  </Page>
              </ThemeProvider>
          </Suspense>

  );
};

export default App;
