import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Cart</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Your Shopping Cart</DialogTitle>
          <DialogContent>
          <p><a href="#">Grapes</a> x <input type="text" placeholder="4"></input> = </p>
          <p><a href="#">Pineapple</a> x <input type="text" placeholder="4"></input> = </p>
          <p><a href="#">Bananas</a> x <input type="text" placeholder="4"></input> = </p>
          <p>Promo Code: <input type="text" placeholder="CODE"></input><a href="#">Try</a></p>
            <p>Total Price:<input type="text" placeholder="20.99"></input></p>
          </DialogContent>
          <DialogActions fullWidth>
            <Button type='button'>Remove</Button>
            <Button type='button'>Checkout</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Keep Shopping</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ShoppingCart;
