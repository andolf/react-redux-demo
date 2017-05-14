import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts, getProduct} from '../../core/redux/actions/productsActions';
import Products from './Products';

const Home = ({actions, products}) => (
    <div className='home'>
        <Products actions={actions} products={products}/>
    </div>
);

const mapPropsToState = state => ({
    products: state.products,
    product: state.product
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProducts,
        getProduct
    }, dispatch)
});

export default connect(mapPropsToState, mapDispatchToProps)(Home);
