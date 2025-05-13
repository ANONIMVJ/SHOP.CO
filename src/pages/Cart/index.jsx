import './Cart.style.scss';
import { DeleteIcon, PromoIcon } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateProdQuantity } from '../../reducer/cart';
import { useProducts } from '../../hooks/useProducts';

function CartPage() {
  const { isLoading } = useProducts();
  const dispatch = useDispatch();
  const cartItemsList = useSelector(state => state.cart);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const updateQuantity = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity >= 1) {
      dispatch(updateProdQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const removeItem = (item) => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const subtotal = cartItemsList.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalDiscount = cartItemsList.items.reduce((sum, item) => {
    if (item.oldPrice && item.oldPrice > item.price) {
      return sum + (item.oldPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const totalDiscountPercentage = subtotal > 0 ? (totalDiscount / subtotal) * 100 : 0;
  const deliveryFee = 15;
  const total = subtotal - totalDiscount + deliveryFee;

  return (
    <div className="cart-page container">
      <div className="hr-line" />
      <h1>YOUR CART</h1>
      {cartItemsList.items.length === 0 ? (
        <div className="empty-cart">
          <img src="/src/assets/emptyCart.png" alt="Empty cart" className="empty-image" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven’t added anything to your cart yet.</p>
        </div>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItemsList.items.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="info-image">
                  <img src={item.image} alt={item.title} />
                  <div className="info">
                    <h4>{item.title}</h4>
                    <p><span className="main">Size:</span> {item.size}</p>
                    <p><span className="main">Color:</span> {item.color}</p>
                    <div className="price-info">
                      <strong>${item.price.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <div onClick={() => removeItem(item)} className="trash"><DeleteIcon /></div>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item, -1)} className="quantity-btn">-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item, 1)} className="quantity-btn">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span><span className='price'>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Discount (-{totalDiscountPercentage.toFixed(2)}%)</span><span className="red">-${totalDiscount.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Delivery Fee</span><span className='price'>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="hr-line-between" />
            <div className="summary-line total">
              <span>Total</span><span className='price'>${total.toFixed(2)}</span>
            </div>
            <div className="promo">
              <div className="promo-input-wrapper">
                <PromoIcon className="promo-icon" />
                <input type="text" placeholder="Add promo code" />
              </div>
              <button>Apply</button>
            </div>
            <button className="checkout">Go to Checkout →</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
