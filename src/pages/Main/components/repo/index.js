import React from 'react';
import { Link } from 'react-router-dom';

import { MdRemove } from 'react-icons/md';
import { Content } from './styles';

const Repo = (props) => {
  const { id, avatar, name } = props;

  const handleDelete = () => {
    localStorage.removeItem('repositories');
    window.location.reload();
  };

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
        <Link
          className="repo-button"
          to={`/repository/${encodeURIComponent(name)}`}
        >
          Details
        </Link>
        <button
          onClick={handleDelete}
          className="repo-button-remove"
          type="button"
        >
          <MdRemove color="#FF1A1A" />
        </button>
      </Content>
    </>
  );
};

export default Repo;
