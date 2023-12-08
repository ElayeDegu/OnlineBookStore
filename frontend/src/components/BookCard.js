import React from 'react';
import { Card, Col} from 'antd';
import flower from '../images/flowe.png';

const { Meta } = Card;

const BookCard = ({ book, onPurchase }) => {
 const renderCardContent = () => (
    <div>
      <p>By: {book.writer}</p>
      <p>Price: {book.price}</p>
      <p>Tag: {book.tag}</p>
      <button onClick={onPurchase}>Order Book</button>
    </div>
 );

 return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        style={{ width: 200, marginBottom: '30px' }}
        cover={
          <img
            alt={book.title}
            src={book.image && book.image.length ? book.image[0].url : flower}
          />
        }
      >
        <Meta title={book.title} description={renderCardContent()} />
      </Card>
    </Col>
 );
};

export default BookCard;