import React from 'react';
import { Helmet } from 'react-helmet';

import { Content } from './styles';
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
      </Helmet>
      <Content>
        <img src={Logo} alt="Logo" />
        <AddRepo />
      </Content>
    </>
  );
};

export default Main;
