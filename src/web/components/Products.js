import React from 'react';
import {Link} from 'react-router';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.props.actions.getProducts();
	}

	render() {
		const {products} = this.props;
		if (!products.length) return <div>No products.</div>;

		return (
			<div className='products'>
				{products.map((product, i) => (
					<article key={'product-' + i} className='product'>
						<img src='http://placehold.it/200x200' alt={product.name} />
						<header className='product__title'>{product.name}</header>

						<p>{product.description}</p>

						<section>
							<p className='product__ribbon'>{product.category}</p>
							<small>{product.releaseDate}</small>
							<small>{product.platform}</small>
						</section>

						<footer>
							<Link to={'/product/' + product.id} className='button'>
								Read more
							</Link>
							<button type='button' className='button'>
								Add to cart
							</button>
						</footer>
					</article>
				))}
			</div>
		);
	}
}

Products.defaultProps = {
	products: []
};

export default Products;
