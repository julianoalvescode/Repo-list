import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { Content } from './styles';

const AddRepo = () => {
  return (
    <>
      <Content>
        <div className="add-repo">
          <input className="add-input" type="text" />
          <button type="submit">
            <MdAddCircleOutline size="18" color="#1FFA84" />
          </button>
        </div>
      </Content>
    </>
  );
};

export default AddRepo;
