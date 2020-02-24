import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Product({ item }) {
  console.log(item);
  return (
    <Container>
      <img src={item.imagem} alt="Product" />
      <div>R$ {item.valor.toFixed(2).replace('.', ',')}</div>
      <h2>{item.nome}</h2>
      <p>{item.decricaoCurta}</p>
    </Container>
  );
}

Product.propTypes = {
  item: PropTypes.object,
};
