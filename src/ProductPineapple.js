import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProductPineapple extends Component {
	render() {
		return (
			<div>
				<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
				    <CardTitle expand style={{color: '#fff', background: 'url(http://img.thrfun.com/img/006/879/sliced_fresh_pineapple_ts.jpg) bottom right 15% no-repeat #a9a9a9'}}>Update</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Aenan convallis.
				    </CardText>
				    <CardActions border>
						Quantity: <input type="text" placeholder="1"></input>
						<Button colored>Add to Cart</Button>
				    </CardActions>
				</Card>
			</div>
		);
	}
}

export default ProductPineapple;
