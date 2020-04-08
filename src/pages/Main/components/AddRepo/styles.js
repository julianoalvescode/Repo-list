import styled from 'styled-components';

export const Content = styled.div`
  .add-repo {
    margin: 25px 0;
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 7px;
    width: 328px;
    height: 51px;
    padding: 25px 18px;

    svg {
      cursor: pointer;
    }

    button {
      border: 0;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .add-input {
      padding: 10px 0px;
      border: none;
    }
  }
`;
