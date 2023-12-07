/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import "./App.css";
import BookCard from "./components/BookCard";

function App() {
  const [products, setProducts] = useState([]);
  const [customerPoints, setCustomerPoints] = useState(100);

  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts(searchQuery);
  }, []);

  const fetchProducts = async (searchQuery = "") => {
    const response = await axios.get(
      `http://localhost:8000/books?page=${page + 1}&search=${searchQuery}`
    );
    setProducts([...products, ...response.data]);
    console.log("------>", response.data);
    setPage(page + 1);
    setIsLoading(false);
  };

  const purchaseBook = (item) => {
    if (customerPoints >= item.price) {
      setCustomerPoints(customerPoints - item.price);
      alert(
        `Congratulations! You have successfully Ordered ${item.title} for ${item.price} points.`
      );
    } else {
      alert("You do not have enough points to ordered this book.");
    }
  };

  const loadMore = useCallback(
    async (entries) => {
      const isVisible = entries[0].isIntersecting;
      if (isVisible) {
        setIsLoading(true);
        await fetchProducts(searchQuery);
      }
    },
    [fetchProducts, searchQuery]
  );

  const loadRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(loadMore, options);
    if (loadRef.current) observer.observe(loadRef.current);

    return () => {
      if (loadRef.current) observer.unobserve(loadRef.current);
    };
  }, [loadRef, options]);

  return (
    <div className="App">
      <h1>Welcome to our Bookstore!</h1>
      <h2>Your Points: {customerPoints}</h2>
      {isLoading ? <div>Loading....</div> : <div ref={loadRef}>Load More</div>}
      <div className="card-grid">
        {products.map((item) => (
          <BookCard
            key={item.id}
            book={item}
            onPurchase={() => purchaseBook(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
