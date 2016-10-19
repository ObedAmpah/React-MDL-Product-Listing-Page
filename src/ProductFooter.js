import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class ProductFooter extends Component {
	render() {
		return (
			<div>
				<Footer size="mini">
					<FooterSection type="left" logo="Title">
						<FooterLinkList>
							<a href="#">Help</a>
							<a href="#">Customer Service</a>
						</FooterLinkList>
					</FooterSection>
				</Footer>
			</div>
		)
	}
}

export default ProductFooter;
