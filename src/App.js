import React from 'react';
import KPISelector from './components/KPISelector';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #FFE4B5; // Light orange background
  min-height: 100vh;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <KPISelector />
    </AppContainer>
  );
}

export default App;
