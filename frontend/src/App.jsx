import data from './data';

const App = () => {
  return (
    <div>
      <header className="app-header">
        <a href="/">Shopping</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <strong>{product.price}</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
