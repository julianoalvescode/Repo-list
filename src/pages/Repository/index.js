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
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { filters, filterIndex, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: response.data });
  };

  handleFilterClick = async (filterIndex) => {
    await this.setState({ filterIndex });
    this.loadIssues();
  };

  handlePage = async (action) => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadIssues();
  };

  render() {
    const {
      repository,
      loading,
      issues,
      filters,
      filterIndex,
      page,
    } = this.state;

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
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter.label}
                className={`link-${filter.label}`}
                onClick={() => this.handleFilterClick(index)}
              >
                {filter.label}
              </button>
            ))}
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
