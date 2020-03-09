import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ContainerProdutos } from './styles';

import Header from '../../components/Header';

import Product from '../../components/Product';

export default function Exclusivos() {
  const Products = useSelector(state => state.product.products);

  const ProdutosExclusivos =
    Products && Products.filter(item => item.exclusivo);
  return (
    <Container>
      <Header
        titulo="Conheça nossos produtos exclusivos"
        description="Listagem de produtos exclusivos - clique no produto desejado para saber mais"
      />
      <ContainerProdutos quant={ProdutosExclusivos.length}>
        {ProdutosExclusivos &&
          ProdutosExclusivos.map(item => <Product key={item.id} item={item} />)}
      </ContainerProdutos>
    </Container>
  );
}
