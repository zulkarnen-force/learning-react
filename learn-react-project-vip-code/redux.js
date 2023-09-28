import redux from "redux";

// reducer
const cardReducer = (
  state = {
    isLogin: false,
    card: [{ id: "381209830", name: "Macbook Pro 2020" }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = redux.createStore(cardReducer);
console.log("on create store state: ", store.getState());
// subscriber
store.subscribe(() => {
  console.info(`subscribe store: `, store.getState());
});
// dispatch
const actionToCart = {
  type: "ADD_TO_CART",
  payload: { id: "982309183", name: "Asus Air Box" },
};

store.dispatch(actionToCart);
