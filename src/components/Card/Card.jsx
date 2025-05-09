import React from 'react';
import './Card.scss';
import { BiSolidStar } from 'react-icons/bi';

const Card = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <BiSolidStar key={i} className='star-icon' />
  ));

  return (
    <div className='card'>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <div className='stars'>
        {stars}
        <p className='rating'>{product.rating.toFixed(1)}/5</p>
      </div>
      <div className='price'>
        ${product.price}
        {product.oldPrice && (
          <>
            <span className='oldPrice'>${product.oldPrice}</span>
            <span className='disc'>{product.discount}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
