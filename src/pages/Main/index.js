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
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') throw 'Você precisa indicar um repositório';

      const hasRepo = repositories.find((r) => r.name === newRepo);

      if (hasRepo) throw 'Repositório duplicado';

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
        avatar: response.data.owner.avatar_url,
        id: 1,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
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
            changeRepo={this.handleInputChange}
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
        </Content>
      </>
    );
  }
}

export default Main;
