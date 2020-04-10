import React from 'react';
import { Helmet } from 'react-helmet';

import { Content } from './styles';
import Repo from './components/repo';
import AddRepo from './components/AddRepo';
import Favicon from '../../assets/img/favicon.ico';
import Logo from '../../assets/svg/logo.svg';

const Main = () => {
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
        <AddRepo />
        <div>
          <Repo
            name="julianoalvescode"
            id="01"
            avatar="https://avatars1.githubusercontent.com/u/43914533?s=460&u=a86985289d4a0e2bf8b80c4b0d139d601a7d4687&v=4"
          />
          <Repo
            name="diego3g"
            id="02"
            avatar="https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
          />
          <Repo
            name="filipedeschamps"
            id="03"
            avatar="https://avatars2.githubusercontent.com/u/4248081?s=460&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4"
          />
          <Repo
            name="loiane"
            id="04"
            avatar="https://avatars3.githubusercontent.com/u/59545?s=460&u=f968d812d303a087cb6b23b7aa7766ef1a59559c&v=4"
          />
        </div>
      </Content>
    </>
  );
};

export default Main;
