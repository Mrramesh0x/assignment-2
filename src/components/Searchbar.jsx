import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const Searchbar = () => {
  const { searchQuery, setSearchQuery } = useContext(ProductContext);

  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        placeholder="Enter product name to search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchbar-input"
      />
    </div>
  );
};

export default Searchbar;