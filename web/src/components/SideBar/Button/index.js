import React from 'react';
import { ContainerLink } from './styles';

export default function index({ img, text }) {
  return (
    <ContainerLink>
      <img src={img} alt="logo" />
      <p>{text}</p>
    </ContainerLink>
  );
}
