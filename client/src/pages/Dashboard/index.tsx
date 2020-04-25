import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Form, Legend } from './styles';

const Dashboard: React.FC = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState([]);
  const [index, setIndex] = useState('');

  useEffect(() => {
    api.get('values/current').then(response => setValues(response.data));
    api.get('values/all').then(response => setSeenIndexes(response.data));
  }, []);

  async function hanldeSubmit(): Promise<void> {
    await api.post('values', {
      index,
    });

    setIndex('');
  }

  function renderSeenIndexes(): string {
    const splitedIndexes = seenIndexes.map(({ number }) => number).join(', ');

    return splitedIndexes;
  }

  function renderValues() {
    const entries = Object.keys(values).map(key => (
      <div key={key}>
        For index {key} I calculated {values[parseInt(key, 10)]}
      </div>
    ));

    return entries;
  }

  return (
    <Container>
      <Form onSubmit={hanldeSubmit}>
        <label htmlFor="fibonacci-index">Enter your index:</label>
        <input
          type="text"
          id="fibonacci-index"
          name="favcolor"
          placeholder="Index"
          value={index}
          onChange={event => setIndex(event.target.value)}
        />
        <button type="submit">Calculate</button>
      </Form>

      <Legend>Indexes I have seen:</Legend>
      {renderSeenIndexes()}

      <Legend>Calculated values:</Legend>
      {renderValues()}
    </Container>
  );
};

export default Dashboard;
