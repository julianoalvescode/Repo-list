import React from 'react';

import Load from '../../../../assets/img/loading.gif';
import { Content } from './styles';

const Loading = () => (
  <>
    <Content>
      <img src={Load} alt="Gif Load" />
    </Content>
  </>
);

export default Loading;
