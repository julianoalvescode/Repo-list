import React from 'react';

import { Content } from './styles';

const Repo = (props) => {
  const { id, avatar, name } = props;

  return (
    <>
      <Content>
        <div className="repo-info">
          <h4 className="repo-id">{id}</h4>
          <div className="repo-image">
            <img src={avatar} alt="Repo" />
          </div>
          <h3 className="repo-name">{name}</h3>
        </div>
        <button className="repo-button" type="button">
          Details
        </button>
      </Content>
    </>
  );
};

export default Repo;
