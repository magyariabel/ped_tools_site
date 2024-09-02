import React from 'react';
import KPISelector from './components/KPISelector';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #E8F5E9; // Light green hue
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  position: relative;
`;

const CornerImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px; // Adjust size as needed
  height: auto;
`;

function App() {
  return (
    <AppContainer>
      <CornerImage src="https://pedeu.net/wp-content/uploads/2021/03/pedeunet-logo.svg" alt="Corner Logo" />
      <KPISelector />
    </AppContainer>
  );
}

export default App;
