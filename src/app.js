import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import starWarsData from './data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background: #f2f2f2;
  min-height: 100vh;
`;

const Header = styled.div`
  padding: 8px;
  background: #fff;
  display: flex;
  font-size: 24px;
  color: #2f1359;
  width: 100%;
`;

const App = () => {
  const [index, setIndex] = useState(10);

  const onLoadMore = () => {
    setIndex((prevState) => prevState + 10);
  };

  return (
    <Container>
      <Header>
        <p>People of Star Wars</p>
      </Header>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {starWarsData.slice(0, index).map((person) => (
          <Card key={person.url} name={person.name} />
        ))}
      </div>
      <Button onClick={onLoadMore}>Load More</Button>
    </Container>
  );
};

export default App;
