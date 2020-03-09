import React from 'react';
import { Container } from './styles';

export default function Header({ titulo, description }) {
  return (
    <Container>
      <div>
        <p>
          <b>Empresa XPTO</b> - {titulo}.
        </p>
        <span>{description}</span>
      </div>
      <input />
    </Container>
  );
}

Header.defaultProps = {
  titulo: 'Conheça todos os nossos produtos',
  description:
    'Listagem de produtos - clique no produto desejado para saber mais',
};
