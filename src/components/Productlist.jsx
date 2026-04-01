import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const ProductList = () => {
  const { products, searchQuery,error, isLoading} = useContext(ProductContext);
    if (isLoading) {
    return <h2 className="loading-text">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="error-text">{error}</h2>;
  }

  if (!products || products.length === 0) {
    return <h2 className="empty-text">No products found</h2>;
  }
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showProducts =
    searchQuery.trim() === "" ? products : filteredProducts;

  if (searchQuery.trim() !== "" && filteredProducts.length === 0) {
    return <h2 className="empty-text">No product found</h2>;
  }


  return (
    <>
      <div className="products-container">
        {showProducts.map((p) => (
          <div className="product-card" key={p._id}>
            <div className="product-img-box">
              <img
                src={p.image}
                width={200}
                className="product-img"
                alt="clothes-store"
              />
            </div>

            <div className="product-details">
              <h3 className="product-title">{p.title}</h3>
              <h3 className="product-rating">⭐ {p.rating}</h3>
              <h3 className="product-desc">{p.description}</h3>

              <div className="product-footer">
                <h3 className="product-price">₹ {p.price}</h3>
                <button className="cart-btn">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default ProductList;