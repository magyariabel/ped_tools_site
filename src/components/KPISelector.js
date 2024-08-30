import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    setSelectedKpis(prev => prev.some(k => k.id === kpi.id) ? prev : [...prev, kpi]);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/recommend', { kpis: selectedKpis });
      setRecommendedTools(response.data);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError('Failed to get recommendations. Please try again later.');
    }
  };

  if (loading) return <div>Loading KPIs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Select KPIs:</h2>
      <ul>
        {kpis.map(kpi => (
          <li key={kpi.id}>
            <button onClick={() => handleKpiSelect(kpi)}>{kpi.name}</button>
          </li>
        ))}
      </ul>
      <h2>Selected KPIs:</h2>
      <ul>
        {selectedKpis.map(kpi => (
          <li key={kpi.id}>{kpi.name}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Get Recommended Tools</button>
      <h2>Recommended Tools:</h2>
      <ul>
        {recommendedTools.map(tool => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KPISelector;
