import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 130px;
  background-color: #ffffff;
  box-shadow: 0px 3px 50px #00000029;
  position: fixed;
  padding-left: 10px;
  padding-right: 10px;
  img {
    padding: 44px 27px;
  }

  ul {
    list-style: none;
    width: 130px;

    li {
      width: 85%;
      border-top: 1px solid #cccccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
