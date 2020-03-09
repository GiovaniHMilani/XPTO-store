import styled from 'styled-components';

export const Container = styled.div`
  width: 361px;
  height: 339px;
  background: #ffffff;
  box-shadow: 0px 10px 20px #16319b29;
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 25px;

  .dados-prod {
    display: flex;
    padding-left: 28px;
    padding-right: 10px;
    padding-top: 20px;
    color: #5e3ba5;
    font-weight: bold;
    letter-spacing: 0;
    flex-direction: row;
    justify-content: space-between;

    div {
      font-size: 12px;
      color: #8e879e;
      font-weight: normal;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
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

export const ContainerBG = styled.div`
  display: flex;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 187px;
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ContainerStatus = styled.div`
  display: flex;
  width: 107px;
  height: 26px;
  ${props =>
    props.color === 'blue'
      ? 'background: linear-gradient(125deg, #1DB6CE 0%, #182AC9 100%);'
      : 'background: linear-gradient(125deg, #ef0e5a 0%, #55118f 100%);'}
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
