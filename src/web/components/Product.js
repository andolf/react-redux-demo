import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import style from '../style/components/Product.css';

const Product = ({ product }) => (
  <article className={style.item}>
    <img
      className={style.image}
      src="http://placehold.it/200x200"
      alt={product.name}
    />
    <header className={style.title}>{product.name}</header>

    <section>
      <p className={style.ribbon}>{product.category}</p>
      <p>{product.releaseDate}</p>
      <p>{product.platform}</p>
    </section>

    <footer className={style.footer}>
      <Link to={'/product/' + product.id}>Read more</Link>
      <Button className={style.button}>Add to cart</Button>
    </footer>
  </article>
);

export default Product;
