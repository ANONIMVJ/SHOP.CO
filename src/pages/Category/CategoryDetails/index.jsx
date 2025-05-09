import React from 'react';
import FilterSidebar from './FilterSidebar';
import { Breadcrumb } from '../../../components';
import Card from '../../../components/Card/Card';
import './CategoryDetails.scss';
import { LeftArrowIcon, RightArrowIcon } from '../../../assets/icons';

const products = [
  {
    id: 1,
    title: 'Gradient Graphic T-shirt',
    image: '/public/img/card1.png',
    price: 145,
    rating: 3.5,
  },
  {
    id: 2,
    title: 'Polo with Tipping Details',
    image: '/public/img/card2.png',
    price: 180,
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Black Striped T-shirt',
    image: '/public/img/card3.png',
    price: 120,
    oldPrice: 160,
    discount: '-30%',
    rating: 5.0,
  },
  {
    id: 4,
    title: 'Skinny Fit Jeans',
    image: '/public/img/na2_item.png',
    price: 240,
    oldPrice: 260,
    discount: '-20%',
    rating: 3.5,
  },
  {
    id: 5,
    title: 'Checkered Shirt',
    image: '/public/img/na3_item.png',
    price: 180,
    rating: 4.5,
  },
  {
    id: 6,
    title: 'Sleeve Striped T-shirt',
    image: '/public/img/na4_item.png',
    price: 130,
    oldPrice: 160,
    discount: '-30%',
    rating: 4.5,
  },
  {
    id: 7,
    title: 'Vertical Striped Shirt',
    image: '/public/img/ts1_item.png',
    price: 212,
    oldPrice: 232,
    discount: '-20%',
    rating: 5.0,
  },
  {
    id: 8,
    title: 'Courage Graphic T-shirt',
    image:  '/public/img/ts2_item.png',
    price: 145,
    rating: 4.0,
  },
  {
    id: 9,
    title: 'Loose Fit Bermuda Shorts',
    image:  '/public/img/ts3_item.png',
    price: 80,
    rating: 3.0,
  },
];

const CategoryDetails = () => {
  return (
      <div className='category-page container'>
     <div className='hr-line' />
      <Breadcrumb />
      <div className='category-content'>
        <FilterSidebar />
        <div className='product-listing'>
          <div className='header'>
            <h2>Casual</h2>
            <div className='info'>
              <p className='title'>Showing 1–10 of 100 Products</p>
              <div className='option-wrapper'>
                <p >Sort by:</p>
                <select>
                    <option className='Most-Popular'>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                </select>
              </div>
            </div>
          </div>

          <div className='cards'>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>

         <div className='hr-botom' />

          <div className='pagination'>
            <button className='prev'><LeftArrowIcon /> Previous</button>
            <div className='pages'>
                <h4 className='active'>1</h4>
                <h3>2</h3>
                <h3>3</h3>
                <h3>...</h3>
                <h3>8</h3>
                <h3>9</h3>
                <h3>10</h3>
            </div>
            <button className='next'>Next <RightArrowIcon /></button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CategoryDetails;
