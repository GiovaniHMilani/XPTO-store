import React from 'react';

import { Container } from './styles';
import code from '../../assets/img/code.png';
import Button from './Button';

import All from '../../assets/img/supplies.png';
import Gift from '../../assets/img/gift-box.png';
import Recomend from '../../assets/img/recommended.png';
import Box from '../../assets/img/box.png';

export default function index() {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  return (
    <Container>
      <img src={code} alt="Code" />
      <ul>
        <li>
          <Button img={All} text="Todos" to="/" />
        </li>
        <li>
          <Button img={Box} text="Exclusivos" to="/exclusivos" />
        </li>
        <li>
          <Button img={Gift} text="Promoção" to="/promocao" />
        </li>
        <li>
          <Button img={Recomend} text="Favoritos" to="/favorites" />
        </li>
      </ul>
    </Container>
  );
}
