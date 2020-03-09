import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios';
import GlobalStyle from './styles/global';
import Routes from './Routes';

import SideBar from './components/SideBar';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getValues = async () => {
      const response = await Axios.get(
        'http://www.mocky.io/v2/5d3b57023000005500a2a0a6'
      );
      const produtos = response.data.produtos.map(item => {
        return {
          ...item,
          favorite: false,
        };
      });
      dispatch({
        type: 'SAVE_PRODUCTS',
        products: produtos,
      });
    };
    getValues();
  }, []);

  return (
    <>
      <Router>
        <SideBar />
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}
