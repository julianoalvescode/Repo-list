import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdKeyboardBackspace } from 'react-icons/md';
import Loading from '../Main/components/Loading';
import Favicon from '../../assets/img/favicon.ico';
import { Content } from './styles';
import Issues from './components/issues';
import api from '../../services/api';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      { state: 'all', label: 'Todas', active: true },
      { state: 'open', label: 'Abertas', active: false },
      { state: 'closed', label: 'Fechadas', active: false },
    ],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filters } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters.find((f) => f.active).state,
          per_page: 4,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Repo List - Issues</title>
          <link rel="icon" href={Favicon} />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Content>
          <Link to="/">
            <div className="repo-back">
              <MdKeyboardBackspace color="#999999" size="16" />
              <p>Back</p>
            </div>
          </Link>
          <div className="repo-profile">
            <div className="repo-profile-image">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
            </div>
            <h3 className="repo-profile-name">{repository.full_name}</h3>
            <h2 className="repo-profile-status">{repository.description}</h2>
          </div>
          <div className="repo-buttons">
            <a className="link-all" href="#">
              All
            </a>
            <a className="link-open" href="#">
              Open
            </a>
            <a className="link-closed" href="#">
              Closed
            </a>
          </div>
          <div className="repo-issues">
            {issues.map((i) => {
              return (
                <>
                  <Issues
                    key={String(i.id)}
                    name={i.title}
                    info={i.user.login}
                    avatar={i.user.avatar_url}
                  />
                </>
              );
            })}
          </div>
        </Content>
      </>
    );
  }
}

export default Repository;
