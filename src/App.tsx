import React, { Suspense } from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";

import './utils/translation';

const Page = styled.div`
 display: block;
 width: 100%;
`;

const App: React.FC = () => {
  return (
      <Suspense fallback={null}>
          <Page>
            <Header />
          </Page>
      </Suspense>
  );
};

export default App;
