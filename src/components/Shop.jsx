import { useState, useEffect } from 'react';
import Nav from './Navbar';
import Product from './Product';
import ProductList from './ProductList';
import '../assets/styles.css';

const Shop = ({ currentProduct, category }) => {
  const [product, setProduct] = useState(currentProduct);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(`https://fakestoreapi.com/products/category/jewelery?limit=20`, 
        { mode: 'cors' });
  
        if (!data.ok) {
          throw new Error("Network error");
        }
  
        data = await data.json();
        setProducts(data);
        setLoading(false);
        setProduct(data[0])
        console.log(product);
      }
      catch(error) {
        console.log(error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="shop">
      { loading && <p className="product">Loading...</p> }
      { error && <h3 className="product">Error: {error}</h3> }
      { product && <Product product={product} className="product"/> }
      { products && <ProductList products={products} current={product} /> }
    </div>
  );
};

export default Shop;