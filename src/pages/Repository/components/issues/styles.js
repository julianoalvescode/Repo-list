import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1.59rem 0;

  .image {
    display: flex;
    align-items: center;
    margin-right: 15px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 3px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    h2 {
      color: #092b5e;
      width: 100%;
      font-size: 1rem;
      margin: 0;
      padding: 0;
    }

    p {
      font-size: 0.8rem;
      width: 80%;
      color: #999999;
    }
  }
`;
