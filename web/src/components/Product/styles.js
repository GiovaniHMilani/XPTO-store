import styled from 'styled-components';

export const Container = styled.div`
  width: 361px;
  height: 339px;
  background: #ffffff;
  box-shadow: 0px 10px 20px #16319b29;
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 25px;

  img {
    height: 187px;
    width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    object-fit: cover;
  }

  div {
    display: flex;
    padding-left: 28px;
    padding-top: 20px;
    color: #5e3ba5;
    font-weight: bold;
    letter-spacing: 0;
    flex-direction: row;
    justify-content: space-between;
  }
  h2 {
    color: #282430;
    font-size: 20px;
    margin-top: 15px;
    margin-left: 28px;
  }

  p {
    margin-top: 10px;
    margin-left: 28px;
    margin-right: 28px;
    color: #8e879e;
    font-size: 14px;
    text-align: justify;
  }
`;
