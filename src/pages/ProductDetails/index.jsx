import { Link, useParams } from "react-router-dom";
import { useProductById } from "../../hooks";
import { useDispatch } from "react-redux";
import { useProducts } from "../../hooks/useProducts";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  StarRating,
  ProductCard,
  ReviewCard,

} from "../../components";
import { addToCart } from "../../reducer/cart";
import { toast } from "react-toastify";

import "./ProductDetails.scss";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("reviews");
  const { id } = useParams();
  const { data } = useProductById(id);
  const { data: productsData, isLoading } = useProducts({ category: "Pants" });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) setProduct(data);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    if (productsData) {
      const filtered = productsData
        .filter((item) => item.id !== Number(id))
        .slice(0, 4);
      setRelatedProducts(filtered);
    }
  }, [productsData, id]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  const colors = [
    { name: "Brown", code: "#44260b" },
    { name: "Green", code: "#023902" },
    { name: "Navy", code: "#1f1f61" },
  ];

  const sizes = product.size || ["XS", "S", "M"];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const increaseQuantity = () => {
    setQuantity((q) => q + 1);
  };

  const handleAddToCart = () => {
    if (selectedColor === null || !selectedSize) {
      toast.warning("Please select size and color before adding to cart.");
      return;
    }

    const cartItem = {
      ...data,
      image: data.images?.[0],
      size: selectedSize,
      color: colors[selectedColor].name,
      quantity,
    };

    dispatch(addToCart(cartItem));
    toast.success("Product added to cart!");
  };

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      verified: true,
      rating: 4.5,
      text: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 14, 2023",
    },
    {
      id: 2,
      name: "Alex M.",
      verified: true,
      rating: 4,
      text: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
      date: "August 15, 2023",
    },
    {
      id: 3,
      name: "Ethan R.",
      verified: true,
      rating: 3.5,
      text: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
      date: "August 16, 2023",
    },
    {
      id: 4,
      name: "Olivia P.",
      verified: true,
      rating: 4,
      text: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
      date: "August 17, 2023",
    },
    {
      id: 5,
      name: "Liam K.",
      verified: true,
      rating: 4,
      text: "\"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.\"",
      date: "August 18, 2023",
    },
    {
      id: 6,
      name: "Ava H.",
      verified: true,
      rating: 4.5,
      text: "\"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"",
      date: "August 19, 2023",
    },
  ];

  return (
    <div className="product-details-page">
      <Breadcrumb />
      <div className="product-details-container">
        <div className="product-images">
          <div className="thumbnails">
            {product.images?.map((image, index) => (
              <button
                key={index}
                className={`thumbnail-btn ${selectedImageIndex === index ? "active" : ""}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={image} alt={`${product.title} view ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className="main-image">
            <img src={product.images[selectedImageIndex]} alt={product.title} />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-rating">
            <StarRating rating={product.rating} size="md" />
            <span className="rating-text">{product.rating}/5</span>
          </div>

          <div className="product-price">
            <span className="current-price">${product.price}</span>
            <span className="original-price">${product.oldPrice}</span>
            <span className="discount-badge">
              -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div className="color-selection">
              <h3>Select Colors</h3>
              <div className="color-options">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option ${selectedColor === index ? "selected" : ""}`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setSelectedColor(index)}
                  >
                    {selectedColor === index && <span className="checkmark">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="size-selection">
              <h3>Choose Size</h3>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-and-cart">
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={decreaseQuantity}>−</button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-btn" onClick={increaseQuantity}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-tabs-section">
        <div className="tabs-container">
          {["details", "reviews", "faqs"].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "details" ? "Product Details" :
               tab === "reviews" ? "Rating & Reviews" : "FAQs"}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "reviews" && (
            <div className="reviews-section">
              <div className="reviews-header">
                <h2 className="reviews-title">All Reviews <span className="reviews-count">({product.count})</span></h2>
              </div>
              <div className="reviews-grid">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <button className="load-more-btn">Load More Reviews</button>
            </div>
          )}
          {activeTab === "details" && <div className="details-content"><p>Product details</p></div>}
          {activeTab === "faqs" && <div className="faqs-content"><p>Frequently asked questions</p></div>}
        </div>
      </div>

      <div className="recommendations-section">
        <h2 className="section-title">YOU MIGHT ALSO LIKE</h2>
        <div className="product-recommendations">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <Link to={`/products/${item.id}`} key={item.id} className="product-link">
                <ProductCard product={item} image={item.images[0]} />
              </Link>
            ))
          ) : (
            <div className="loading-recommendations">Loading recommendations...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
