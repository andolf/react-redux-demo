import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../core/redux/actions/productsActions';
import Product from '../components/Product';
import style from '../style/pages/Products.css';

class Products extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.actions.getProducts();
    }

    render() {
        const {products} = this.props;
        if (!products.length) return <div>No products found.</div>;

        return (
            <section className={style.root}>
                {products.map((product, i) => (
                    <Product key={'product-' + i} product={product}/>
                ))}
            </section>
        );
    }
}

Products.defaultProps = {
    products: []
};

const mapPropsToState = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProducts
    }, dispatch)
});

export default connect(mapPropsToState, mapDispatchToProps)(Products);
