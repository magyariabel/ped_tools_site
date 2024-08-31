import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em; // 5 steps bigger
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  -webkit-text-stroke: 1px grey;
`;

const KPIList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

const KPIItem = styled.div`
  background-color: ${props => props.selected ? '#3498db' : '#E6F3FF'}; // Light blue hue when not selected
  color: ${props => props.selected ? 'white' : '#2c3e50'};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8em; // 2 steps smaller

  &:hover {
    background-color: ${props => props.selected ? '#2980b9' : '#BDE0FE'};
  }
`;

const Button = styled.button`
  background-color: #808080; // Grey background
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5em; // 4 steps bigger
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #696969;
  }
`;

const ToolList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ToolItem = styled.li`
  background-color: #FFCCCB; // Light red
  color: #2c3e50;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
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
        const response = await axios.get('http://localhost:3001/api/getKPIs');
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
      const response = await axios.post('http://localhost:3001/api/recommend', { kpis: selectedKpis });
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
      <Title>KPI Tool Recommender</Title>
      <h2>Select KPIs:</h2>
      <KPIList>
        {kpis.map((kpi) => (
          <KPIItem
            key={`kpi-${kpi.name}`}
            selected={selectedKpis.some(k => k.name === kpi.name)}
            onClick={() => handleKpiSelect(kpi)}
          >
            {kpi.name}
          </KPIItem>
        ))}
      </KPIList>
      <Button onClick={handleSubmit}>Get Recommended Tools</Button>
      <h2>Recommended Tools:</h2>
      {recommendedTools.length > 0 ? (
        <ToolList>
          {recommendedTools.map((tool) => (
            <ToolItem key={`tool-${tool.name}`}>{tool.name}</ToolItem>
          ))}
        </ToolList>
      ) : (
        <p>No tools found that can calculate the selected KPIs.</p>
      )}
    </Container>
  );
};

export default KPISelector;
