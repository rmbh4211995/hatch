import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  flex: 0 0 25%;
  padding: 0px 15px;
  border-radius: 8px;
  color: #6d5a8b;
  background: #fff;
  margin: 20px;
  height: 70px;
`;

const Name = styled.p`
  padding-top: 15px;
  font-weight: bold;
  font-size: 16px;
`;

const Card = ({ name }) => {
  return (
    <CardContainer>
      <Name>{name}</Name>
    </CardContainer>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
