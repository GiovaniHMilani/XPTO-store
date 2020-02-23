import React from 'react';

import { Container } from './styles';
import code from '../../assets/img/code.png';
import Button from './Button';

import All from '../../assets/img/supplies.png';
import Gift from '../../assets/img/gift-box.png';
import Recomend from '../../assets/img/recommended.png';
import Box from '../../assets/img/box.png';

export default function index() {
  return (
    <Container>
      <img src={code} alt="Code" />
      <ul>
        <li>
          <Button img={All} text="Todos" />
        </li>
        <li>
          <Button img={Box} text="Exclusivos" />
        </li>
        <li>
          <Button img={Gift} text="Promoção" />
        </li>
        <li>
          <Button img={Recomend} text="Favoritos" />
        </li>
      </ul>
    </Container>
  );
}
