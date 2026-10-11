import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'



const Book = ({book}) => {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <div className="book__selected--price">
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
      </div>
    </div>
  )
}

export default Book