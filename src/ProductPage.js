import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProductGrapes from './ProductGrapes';
import ProductApple from './ProductApple';
import ProductBanana from './ProductBanana';
import ProductBlackberry from './ProductBlackberry';
import ProductLemon from './ProductLemon';
import ProductPineapple from './ProductPineapple';
import ProductOrange from './ProductOrange';
import ProductStrawberry from './ProductStrawberry';
import ProductCherry from './ProductCherry';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';
import ShoppingCart from './ShoppingCart';
import './App.css';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <ProductHeader />
          
          <ShoppingCart />

          <Grid>
            <Cell col={4}><ProductGrapes /></Cell>
            <Cell col={4}><ProductApple /></Cell>
            <Cell col={4}><ProductBanana /></Cell>
          </Grid>
          <Grid>
            <Cell col={4}><ProductCherry /></Cell>
            <Cell col={4}><ProductLemon /></Cell>
            <Cell col={4}><ProductPineapple /></Cell>
          </Grid>
          <Grid>
            <Cell col={4}><ProductStrawberry /></Cell>
            <Cell col={4}><ProductOrange /></Cell>
            <Cell col={4}><ProductBlackberry /></Cell>
          </Grid>

        <ProductFooter />
      </div>
    );
  }
}

export default ProductPage;
