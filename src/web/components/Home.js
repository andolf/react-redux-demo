import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../core/redux/actions/productsActions';
import Products from './Products';

const Home = ({actions, products}) => (
	<div className='home'>
		<Products actions={actions} products={products} />
	</div>
);

const mapPropsToState = state => ({
	products: state.products
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		getProducts
	}, dispatch)
});

export default connect(mapPropsToState, mapDispatchToProps)(Home);
