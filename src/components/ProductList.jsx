import '../assets/styles.css';

export default function ProductList({ products, current }) {
  return (
    <div className="product-container">
      { products.map((product, index) => {
        if (product.id === current.id) {
          return (
            <p key={index} className="product-name product-name-selected">{product.title.slice(0, 10) + '...'}</p>
          );
        }

        return <p key={index} className="product-name">{product.title.slice(0, 10) + '...'}</p>
      })}
    </div>
  );
}