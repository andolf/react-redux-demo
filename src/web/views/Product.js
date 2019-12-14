import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../core/redux/actions/productsActions';
import Button from '../components/Button';
import style from '../style/components/Product.css';

function Product(props) {
  const { id } = useParams();
  useEffect(() => {
    props.getProduct(id);
  }, [id]);

  const { product } = props;
  if (!product) return <div>No product found.</div>;

  return (
    <article className={style.item}>
      <img
        className={style.image}
        src="http://placehold.it/250x350"
        alt={product.name}
      />
      <header className={style.title}>{product.name}</header>

      <p>{product.description}</p>

      <section>
        <p className={style.ribbon}>{product.category}</p>
        <p>{product.releaseDate}</p>
        <p>{product.platform}</p>
      </section>

      <footer className={style.footer}>
        <Button className={style.button}>Add to cart</Button>
      </footer>
    </article>
  );
}

const mapPropsToState = state => ({
  product: state.product,
});

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapPropsToState, mapDispatchToProps)(Product);
