import React from 'react';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ContainerBG, ContainerStatus } from './styles';

export default function Product({ item }) {
  const dispatch = useDispatch();
  const changeSwitch = () => {
    dispatch({
      type: 'FAVORITE_PRODUCT',
      id: item.id,
    });
  };

  return (
    <Container>
      <ContainerBG bgImage={item.imagem}>
        {item.promocao && <ContainerStatus>Promoção</ContainerStatus>}
        {item.exclusivo && (
          <ContainerStatus color="blue">Exclusivo</ContainerStatus>
        )}
      </ContainerBG>
      <div className="dados-prod">
        R$ {item.valor.toFixed(2).replace('.', ',')}
        <div>
          <Switch
            width={25}
            height={11}
            checked={item.favorite}
            onChange={changeSwitch}
            onColor="#0086F8"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span>tornar favorito</span>
        </div>
      </div>
      <h2>{item.nome}</h2>
      <p>{item.decricaoCurta}</p>
    </Container>
  );
}

Product.propTypes = {
  item: PropTypes.object,
};
