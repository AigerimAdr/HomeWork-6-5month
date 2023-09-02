
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemsCount = useSelector(state => state.goods.cart.length);

  return (
    <div className="navbar">
      <h1>Online Store</h1>
      <div className="cart-info">
      <Link to="/cart">Cart ({cartItemsCount} items)</Link>
      </div>
    </div>
  );
};

export default Navbar;
