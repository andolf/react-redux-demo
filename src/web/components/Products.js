import React from 'react';
import {Link} from 'react-router';
import Button from './Button';
import style from '../style/components/Products.css';

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
            <section className={style.root}>
                {products.map((product, i) => (
                    <article key={'product-' + i} className={style.item}>
                        <img className={style.image} src='http://placehold.it/200x200' alt={product.name}/>
                        <header className={style.title}>{product.name}</header>

                        <p>{product.description}</p>

                        <section>
                            <p className={style.ribbon}>{product.category}</p>
                            <small>{product.releaseDate}</small>
                            <small>{product.platform}</small>
                        </section>

                        <footer>
                            <Link to={'/product/' + product.id}>
                                Read more
                            </Link>
                            <Button className={style.button}>
                                Add to cart
                            </Button>
                        </footer>
                    </article>
                ))}
            </section>
        );
    }
}

Products.defaultProps = {
    products: []
};

export default Products;
