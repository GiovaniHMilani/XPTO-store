import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ContainerProdutos } from './styles';

import Header from '../../components/Header';

import Product from '../../components/Product';

export default function Home() {
  const Products = useSelector(state => state.product.products);
  return (
    <Container>
      <Header />
      <ContainerProdutos>
        {Products && Products.map(item => <Product item={item} />)}
      </ContainerProdutos>
    </Container>
  );
}
