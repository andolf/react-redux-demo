import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProduct} from '../../core/redux/actions/productsActions';
import Button from '../components/Button';
import style from '../style/components/Product.css';

class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.actions.getProduct(this.props.params.id);
    }

    render() {
        const {product} = this.props;
        console.log(product);
        if (!product) return <div>No product found.</div>;

        return (
            <article className={style.item}>
                <img className={style.image} src='http://placehold.it/250x350' alt={product.name}/>
                <header className={style.title}>{product.name}</header>

                <p>{product.description}</p>

                <section>
                    <p className={style.ribbon}>{product.category}</p>
                    <p>{product.releaseDate}</p>
                    <p>{product.platform}</p>
                </section>

                <footer className={style.footer}>
                    <Button className={style.button}>
                        Add to cart
                    </Button>
                </footer>
            </article>
        );
    }
}

const mapPropsToState = state => ({
    product: state.product
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProduct
    }, dispatch)
});

export default connect(mapPropsToState, mapDispatchToProps)(Product);
