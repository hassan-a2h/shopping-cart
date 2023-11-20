import { useState, useEffect } from 'react';
import Nav from './Navbar';
import Product from './Product';

const Shop = ({ category }) => {
  let [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/jewelery`, 
      { mode: 'cors' })
    .then(response => { 
      if (!response.ok) {
        throw new Error("Error, couldn't load data");
      }
      return response.json();
    })
    .then(response => setProducts(response))
    .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Nav leftItems={['Home']} rightItems={['Checkout']}/>
      {products && products.map(product => <Product product={product}/>)}
    </>
  );
};

export default Shop;