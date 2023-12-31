import axios from 'axios';

const defaultState = {
  products: [],
  cart: [],
};

export const goodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};


export const fetchData = () => {
  return async (dispatch) => {
    try {
      const url = `https://dummyjson.com/products?limit=10&skip=10`;
      const resp = await axios.get(url);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: resp.data.products });
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
};

export const setData = (payload) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: payload,
});

export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload: payload,
});

