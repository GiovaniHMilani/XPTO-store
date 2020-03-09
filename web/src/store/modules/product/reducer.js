const initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PRODUCTS':
      return { ...state, products: action.products };
    case 'FAVORITE_PRODUCT':
      return {
        ...state,
        products: state.products.map(item =>
          item.id === action.id ? { ...item, favorite: !item.favorite } : item
        ),
      };
    default:
      return state;
  }
}
