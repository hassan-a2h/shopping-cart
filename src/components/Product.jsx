const Product = ({ product }) => {
  const addToCart = (id, category) => {
    cart.push([id, category]);
  };

  return (
    <>
      {
        product &&
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt="Picture of Product" />
          <p>{product.rating.rate} / 5</p>
          <button onClick={() => addToCart(product.id, product.category)}>Add to Cart</button>
        </div>
      }
    </>
  );
};

export default Product;