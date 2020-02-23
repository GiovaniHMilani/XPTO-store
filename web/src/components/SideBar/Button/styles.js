import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 37px;
  text-decoration: none;
  color: #000000;

  img {
    padding: 0px;
  }
  p {
    margin-top: 5px;
  }
  &:hover {
    font-weight: bold;
  }
`;
