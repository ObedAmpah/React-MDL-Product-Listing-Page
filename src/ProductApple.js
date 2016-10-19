import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProductApple extends React.Component {
	render() {
		return (
			<div>
				<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
				    <CardTitle expand style={{color: '#fff', background: 'url(https://yt3.ggpht.com/-Zof0x19EtdA/AAAAAAAAAAI/AAAAAAAAAAA/GchdMmXYnv4/s100-c-k-no-mo-rj-c0xffffff/photo.jpg) bottom right 15% no-repeat #a9a9a9'}}>Update</CardTitle>
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

export default ProductApple;
