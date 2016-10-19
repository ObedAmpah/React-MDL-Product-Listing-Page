import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProductStrawberry extends Component {
	render() {
		return (
			<div>
				<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
				    <CardTitle expand style={{color: '#fff', background: 'url(http://s3.amazonaws.com/buycott/images/attachments/001/051/594/s_thumb/cef8452275cefd9d2993d06b0cbe851d?1412770197) bottom right 15% no-repeat #a9a9a9'}}>Update</CardTitle>
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

export default ProductStrawberry;
