import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2E7D32;
  text-align: center;
  font-size: 2.5em;
  font-weight: 300;
  margin-bottom: 30px;
`;

const KPIList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
`;

const KPIItem = styled.div`
  background-color: ${props => props.selected ? '#81C784' : '#C8E6C9'};
  color: ${props => props.selected ? '#FFFFFF' : '#33691E'};
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9em;
  flex: 1 0 calc(33.333% - 15px);
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => props.selected ? '#66BB6A' : '#A5D6A7'};
    transform: translateY(-3px);
  }
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    transform: translateY(-3px);
  }
`;

const ToolList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ToolItem = styled.li`
  background-color: #DCEDC8;
  color: #33691E;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #C5E1A5;
    transform: translateX(5px);
  }
`;

const LeafIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-size: 1.2em;
`;

const SubTitle = styled.h2`
  color: #33691E;
  font-weight: 300;
  margin-top: 30px;
`;

const NoToolsMessage = styled.p`
  color: #689F38;
  font-style: italic;
`;

const KPISelector = () => {
  const [kpis, setKpis] = useState([]);
  const [selectedKpis, setSelectedKpis] = useState([]);
  const [recommendedTools, setRecommendedTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKPIs = async () => {
      try {
        const response = await axios.get('/api/getKPIs');
        setKpis(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching KPIs:', err);
        setError('Failed to load KPIs. Please try again later.');
        setLoading(false);
      }
    };

    fetchKPIs();
  }, []);

  const handleKpiSelect = (kpi) => {
    setSelectedKpis(prev => {
      const isAlreadySelected = prev.some(k => k.name === kpi.name);
      if (isAlreadySelected) {
        return prev.filter(k => k.name !== kpi.name);
      } else {
        return [...prev, kpi];
      }
    });
  };

  const handleSubmit = async () => {
    if (selectedKpis.length === 0) {
      setError('Please select at least one KPI');
      return;
    }
    try {
      const response = await axios.post('/api/recommend', { kpis: selectedKpis });
      setRecommendedTools(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError('Failed to get recommendations. Please try again later.');
    }
  };

  if (loading) return <Container>Loading KPIs...</Container>;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Title>🌿 KPI Tool Recommender</Title>
      <SubTitle>Select KPIs:</SubTitle>
      <KPIList>
        {kpis.map((kpi) => (
          <KPIItem
            key={`kpi-${kpi.name}`}
            selected={selectedKpis.some(k => k.name === kpi.name)}
            onClick={() => handleKpiSelect(kpi)}
          >
            <LeafIcon>🍃</LeafIcon>
            {kpi.name}
          </KPIItem>
        ))}
      </KPIList>
      <Button onClick={handleSubmit}>Get Eco-Friendly Tools</Button>
      <SubTitle>Recommended tools to use:</SubTitle>
      {recommendedTools.length > 0 ? (
        <ToolList>
          {recommendedTools.map((tool) => (
            <ToolItem key={`tool-${tool.name}`}>
              <LeafIcon>🌱</LeafIcon>
              {tool.name}
            </ToolItem>
          ))}
        </ToolList>
      ) : (
        <NoToolsMessage>No tools found for the selected KPIs.</NoToolsMessage>
      )}
    </Container>
  );
};

export default KPISelector;
