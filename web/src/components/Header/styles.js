import styled from 'styled-components';
import lupa from '../../assets/img/loupe.png';

export const Container = styled.div`
  display: flex;
  height: 200px;
  width: 98%;
  border-bottom: 1px solid #cccccc;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  div {
    flex-direction: column;
    justify-content: center;
  }

  p {
    color: #282430;
    font-size: 20px;
    margin-bottom: 5px;
  }

  span {
    color: #8e879e;
    font-size: 14px;
  }

  input {
    width: 445px;
    height: 48px;
    box-shadow: 0px 3px 6px #2959b729;
    border: 0px;
    border-radius: 90px;
    background: url(${lupa}) no-repeat scroll 10px 12px;
    padding-left: 50px;
    font-size: 16px;
    color: #7d7d7d;
  }
`;
