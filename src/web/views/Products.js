import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../core/redux/actions/productsActions';
import Product from '../components/Product';
import style from '../style/views/Products.css';

function Products(props) {
  useEffect(() => {
    props.getProducts();
  }, []);

  const { products } = props;
  if (!products.length) return <div>No products found.</div>;

  return (
    <section className={style.root}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

Products.defaultProps = {
  products: [],
};

const mapPropsToState = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapPropsToState, mapDispatchToProps)(Products);
