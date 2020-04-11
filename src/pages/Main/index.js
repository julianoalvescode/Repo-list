import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import api from '../../services/api';

import { Content } from './styles';
import Repo from './components/repo';
import AddRepo from './components/AddRepo';
import Favicon from '../../assets/img/favicon.ico';
import Logo from '../../assets/svg/logo.svg';
import Loading from '../../assets/img/loading.gif';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
    };
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleNewRepo = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
      avatar: response.data.owner.avatar_url,
      id: 0,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });

    localStorage.setItem('list', JSON.stringify(repositories));
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Repo List</title>
          <link rel="icon" href={Favicon} />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Content>
          <img src={Logo} alt="Logo" />
          <AddRepo
            value={newRepo}
            changeRepo={this.handleNewRepo}
            sendRepo={this.handleSubmit}
          />
          <div className="content-repo">
            {repositories.map((i) => {
              return (
                <>
                  <Repo name={i.name} id={i.id} avatar={i.avatar} />
                </>
              );
            })}
          </div>
          {loading ? 'teste' : 'não'}
        </Content>
      </>
    );
  }
}

export default Main;
