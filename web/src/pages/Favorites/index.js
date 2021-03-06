import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ContainerProdutos } from './styles';

import Header from '../../components/Header';

import Product from '../../components/Product';

export default function Favorites() {
  const Products = useSelector(state => state.product.products);

  const ProdutosFavoritos = Products && Products.filter(item => item.favorite);

  return (
    <Container>
      <Header />
      <ContainerProdutos>
        {Products &&
          ProdutosFavoritos.map(item => <Product key={item.id} item={item} />)}
      </ContainerProdutos>
    </Container>
  );
}
