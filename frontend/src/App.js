/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BookCard from "./components/BookCard";
import "./App.css";

function App() {
 const [products, setProducts] = useState([]);
 const [customerPoints, setCustomerPoints] = useState(100);
 const [searchQuery, setSearchQuery] = useState("");
 const [page, setPage] = useState(1);

 const loadMoreRef = useRef(null);
 const observer = useRef(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    })
 );

 useEffect(() => {
    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.current.unobserve(loadMoreRef.current);
      }
    };
 }, []);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/books?search=${searchQuery}&page=${page}`
        );
        setProducts((prevProducts) => [...prevProducts, ...response.data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
 }, [searchQuery, page]);

 const purchaseBook = (item) => {
    if (customerPoints >= item.price) {
      setCustomerPoints((prevPoints) => prevPoints - item.price);
      alert(
        `Congratulations! You have successfully Ordered ${item.title} for ${item.price} points.`
      );
    } else {
      alert("You do not have enough points to ordered this book.");
    }
 };

 return (
    <div className="App">
      <h1>Welcome to our Bookstore!</h1>
      <h2>Your Points: {customerPoints}</h2>
      <div className="card-grid">
        {products.map((item) => (
          <BookCard
            key={item.id}
            book={item}
            onPurchase={() => purchaseBook(item)}
          />
        ))}
      </div>
      <div ref={loadMoreRef}>Load More</div>
    </div>
 );
}

export default App;