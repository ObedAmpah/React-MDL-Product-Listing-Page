import React, { Component } from 'react';
import { Header, Layout, Navigation } from 'react-mdl';

class ProductHeader extends Component {
	render() {
		return (
			<div style={{ height: '150px', position: 'relative' }}>
				<Layout fixedHeader>
					<Header title={<span><span style={{ color: '#ddd' }}>NomNomNom / </span><strong>Fruit</strong></span>}>
						<Navigation>
							<a href="#"></a>
							<a href="#"></a>
							<a href="#"><span className="mdl-badge" data-badge="4">Cart</span></a>
						</Navigation>
					</Header>
				</Layout>
			</div>
		)
	}
}

export default ProductHeader;
