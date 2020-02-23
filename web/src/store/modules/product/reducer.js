const initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PRODUCTS':
      return { ...state, products: action.products };
    default:
      return state;
  }
}
