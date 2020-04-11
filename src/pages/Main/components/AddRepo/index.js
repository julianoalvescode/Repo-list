import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { Content } from './styles';

const AddRepo = (props) => {
  const { value, changeRepo, sendRepo } = props;

  return (
    <>
      <Content>
        <div className="add-repo">
          <form onSubmit={sendRepo}>
            <input
              className="add-input"
              onChange={changeRepo}
              value={value}
              type="text"
            />
            <button type="submit">
              <MdAddCircleOutline size="18" color="#1FFA84" />
            </button>
          </form>
        </div>
      </Content>
    </>
  );
};

export default AddRepo;
