import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProductBlueberry extends Component {
	render() {
		return (
			<div>
				<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
				    <CardTitle expand style={{color: '#fff', background: 'url(http://usagardener.com/images/fruits/blueberry-blueray.jpg) bottom right 15% no-repeat #a9a9a9'}}>Update</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Aenan convallis.
				    </CardText>
				    <CardActions border>
				        <Button colored>Buy a bunch!</Button>
				    </CardActions>
				</Card>
			</div>
		);
	}
}

export default ProductBlueberry;
