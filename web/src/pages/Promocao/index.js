import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ContainerProdutos } from './styles';

import Header from '../../components/Header';

import Product from '../../components/Product';

export default function Promocao() {
  const Products = useSelector(state => state.product.products);

  const ProdutosPromocao = Products && Products.filter(item => item.promocao);

  return (
    <Container>
      <Header
        titulo="Conheça nossas promoções"
        description="Listagem de produtos em promoção - clique no produto desejado para saber mais"
      />
      <ContainerProdutos>
        {ProdutosPromocao &&
          ProdutosPromocao.map(item => <Product key={item.id} item={item} />)}
      </ContainerProdutos>
    </Container>
  );
}
