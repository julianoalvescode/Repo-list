import React from 'react';
import { Helmet } from 'react-helmet';

import { Content } from './styles';
import GifError from '../../assets/img/error.jpg';
import Favicon from '../../assets/img/favicon.ico';

const Error = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Error 404</title>
      <link rel="icon" href={Favicon} />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Content>
      <div className="image-error">
        <h3>Dead Link</h3>
        <img src={GifError} alt="Error gif" />
      </div>
    </Content>
  </>
);

export default Error;
