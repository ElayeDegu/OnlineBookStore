/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col, Row } from "antd";
import flower from '../images/flowe.png'
const { Meta } = Card;

const BookCard = ({ book, onPurchase }) => {
  return (
    <div className="book-card">
      <Card
        style={{
          width: 200,
          marginBottom: "30px",
        }}
        cover={
          <img src={book.image && book.image.length ? book.image[0].url : flower} />
        }
      >
        <h3>{book.title}</h3>
        <p>By: {book.writer}</p>
        <p>Price: {book.price}</p>
        <p>Tag: {book.tag}</p> 
        <button onClick={onPurchase}>Order Book</button>
      </Card>
    </div>
  );
};

export default BookCard;

