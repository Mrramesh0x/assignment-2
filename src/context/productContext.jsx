import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    const [error, setError] = useState("");
      const [products, setProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
const [searchQuery,setSearchQuery] = useState("")

       const handleFetchProducts = async () => {
          try {
            setIsLoading(true);
            setError("");
      
            const fetchData = await fetch(
              "https://fakestoreapiserver.reactbd.org/api/products"
            );
      
            const response = await fetchData.json();
            setProducts(response.data);
          } catch (err) {
            setError(err.message);
          } finally {
            setIsLoading(false);
          }
        };
      
        useEffect(() => {
          handleFetchProducts();
        }, []);




    return (
        <ProductContext.Provider value={{products,error,isLoading,searchQuery,setSearchQuery}}>
{children}
        </ProductContext.Provider>
    );
}