import { createSlice } from "@reduxjs/toolkit";
// import { UserInfo } from "os";
import { ProductData } from "../../type";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface InitialState {
  cart: ProductData[];
  wishList: ProductData[];
  userInfo: UserInfo | null;
}

const initialState: InitialState = {
  cart: [],
  wishList: [],
  userInfo: null,
};

export const shoppersSlice = createSlice({
  name: "shoppers",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incresaeQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      }
    },
    decresaeQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    addToWishList: (state, action) => {
      const existingProduct = state?.wishList?.find(
        (item) => item._id === action.payload._id
      );
      //state.cart.push(action.payload);
      if (existingProduct) {
        state.wishList = state.wishList.filter(
          (item) => item?._id !== action.payload._id
        );
      } else {
        state.wishList.push(action.payload);
      }
    },
    resetWishList: (state) => {
      state.wishList = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  incresaeQuantity,
  decresaeQuantity,
  removeFromCart,
  resetCart,
  addToWishList,
  resetWishList,
  addUser,
  removeUser,
} = shoppersSlice.actions;
export default shoppersSlice.reducer;
