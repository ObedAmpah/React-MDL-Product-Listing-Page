import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProductBanana extends Component {
	render() {
		return (
			<div>
				<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
				    <CardTitle expand style={{color: '#fff', background: 'url(https://yt3.ggpht.com/-J1JpxHytbHE/AAAAAAAAAAI/AAAAAAAAAAA/7QwxbWpHZYc/s100-c-k-no-mo-rj-c0xffffff/photo.jpg) bottom right 15% no-repeat #a9a9a9'}}>Update</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Aenan convallis.
				    </CardText>
				    <CardActions border>
				    	Quantity <select>
								  <option value="1">1</option>
								  <option value="2">2</option>
								  <option value="3">3</option>
								  <option value="4">4</option>
								</select>
				        <Button colored>Add to Cart</Button>
				    </CardActions>
				</Card>
			</div>
		);
	}
}

export default ProductBanana;
