import React from 'react';
import { ContainerLink } from './styles';

export default function index({ img, text, to, current }) {
  return (
    <ContainerLink to={to}>
      <img src={img} alt="logo" />
      <p>{text}</p>
    </ContainerLink>
  );
}
