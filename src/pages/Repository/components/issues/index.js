import React from 'react';

import { Content } from './styles';

const Issues = (props) => {
  const { info, name, avatar } = props;

  return (
    <>
      <Content>
        <div className="image">
          <img src={avatar} alt="Imagem" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>{info}</p>
        </div>
      </Content>
    </>
  );
};

export default Issues;
