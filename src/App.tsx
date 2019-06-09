import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";

const Page = styled.div`
 display: block;
 width: 100%;
`;

const App: React.FC = () => {
  return (
      <Page>
        <Header />
      </Page>
  );
};

export default App;
