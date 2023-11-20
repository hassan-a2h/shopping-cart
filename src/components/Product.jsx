const Product = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src="" alt="Picture of Product" />
      <p>{product.rating} / 5</p>
      <ul>
        {product.categories.map((category) => {
          return <li><h5>{category.name}</h5></li>
        })}
      </ul>
    </div>
  );
};

export default Product;