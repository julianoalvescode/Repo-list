import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 64px;
  padding: 1rem 1.2rem;
  margin: 1.56rem 0;

  .repo-id {
    color: #092b5e;
    font-size: 1rem;
    display: flex;
    width: 10%;
  }

  .repo-name {
    color: #092b5e;
    font-size: 12px;
    width: 70%;
    display: flex;
    font-weight: 600;
  }

  .repo-info {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .repo-image {
      display: flex;
      img {
        width: 35px;
        height: 35px;
        border-radius: 4px;
      }
    }
  }

  .repo-button {
    background: none;
    border: none;
    color: #999;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
  }

  .repo-button-remove {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }
`;
