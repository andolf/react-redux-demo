import React from 'react';
import {Link} from 'react-router';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.props.actions.getProduct();
	}

	render() {
		const {product} = this.props;
		if (!product) return <div>No products.</div>;

		return (
			<div className='products'>
				<div to={'/product/' + product.id} key={'product-' + i} className='product'>
					<img src='http://placehold.it/200x200' alt={product.name} />
					<header className='product__title'>{product.name}</header>

					<p>{product.description}</p>

					<footer>
						<p className='product__ribbon'>{product.category}</p>
						<small>{product.releaseDate}</small>
						<small>{product.platform}</small>
					</footer>
				</div>
			</div>
		);
	}
}

export default Products;
