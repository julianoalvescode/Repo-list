import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  background-color: #fff;
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  a {
    text-decoration: none;
  }

  .repo-back {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 0.5rem;
      color: #999999;
    }
  }

  .repo-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0rem;

    .repo-profile-name {
      margin: 1rem 0;
      color: #092b5e;
      text-align: center;
    }

    .repo-profile-status {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 342px;
      font-size: 14px;
      color: #a7a7a7;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .repo-profile-image {
      display: flex;
      justify-content: center;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }
  }

  .repo-buttons {
    display: flex;
    margin-bottom: 1.59rem;

    button {
      cursor: pointer;
      background-color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 3px;
      font-size: 14px;
    }

    .link-all {
      background-color: #092b5e;
      color: #ffff;
      margin: 0 0.5rem;
      border: 1px solid #092b5e;
      transition: all 0.2s ease-in;
    }

    .link-open {
      border: 1px solid #1df432;
      color: #818181;
      margin: 0 0.5rem;
      transition: all 0.2s ease-in;
      &:visited {
        background-color: #1df432;
      }
      &:hover {
        background-color: #1df432;
        color: #000;
      }
    }

    .link-closed {
      border: 1px solid #ff1a1a;
      color: #818181;
      margin: 0 0.5rem;
      transition: all 0.2s ease-in;
      &:hover {
        background-color: #ff1a1a;
        color: #fff;
      }
    }
  }

  .repo-issues {
    width: 360px;
  }
`;
