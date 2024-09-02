import React from 'react';
import KPISelector from './components/KPISelector';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #F0F7DA; // Light, natural green background
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20"><path fill="%23C5E1A5" d="M0 0h100v100H0z"/><path fill="%23AED581" d="M100 0H0l100 100V0z"/></svg>');
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <KPISelector />
    </AppContainer>
  );
}

export default App;
