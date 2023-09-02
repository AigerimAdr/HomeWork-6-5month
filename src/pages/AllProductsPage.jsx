import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, addToCart } from '../store/goodsReducer';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.goods.products);

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  const handleBuy = product => {
    dispatch(addToCart(product));
  };

  return (
    <div className="all-products-page">
      <h2>All Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.images[0]} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => handleBuy(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;