import React from 'react';

// import { Container } from './styles';

const Repository = ({ match }) => {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
};

export default Repository;
