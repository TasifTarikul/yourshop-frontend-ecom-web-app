import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIsActive: false,
  brandLogoIsActive: false,
  cartIsActive: false,
  accountIsActive: false,
  categories: [],
  categoryError: false
};

const topNavSlice = createSlice({
  name: "topNavSlice",
  initialState: initialState,
  reducers: {
    brandLogoClickAction(state) {
      state.categoryIsActive = false;
      state.cartIsActive = false;
      state.accountIsActive = false;
      state.brandLogoIsActive = !state.brandLogoIsActive;
    },
    categoryClickHandler(state) {
      state.brandLogoIsActive = false;
      state.cartIsActive = false;
      state.accountIsActive = false;
      state.categoryIsActive = !state.categoryIsActive;
    },
    cartClickHandler(state) {
      state.brandLogoIsActive = false;
      state.categoryIsActive = false;
      state.accountIsActive = false;
      state.cartIsActive = !state.cartIsActive;
    },
    accountClickHandler(state) {
      state.brandLogoIsActive = false;
      state.categoryIsActive = false;
      state.cartIsActive = false;
      state.accountIsActive = !state.accountIsActive;
    },
    allNavItemInactive(state) {
      state.brandLogoIsActive = false;
      state.categoryIsActive = false;
      state.cartIsActive = false;
      state.accountIsActive = false;
    },
    setCategories(state,category_list){
        state.categories = category_list.payload
    },
    setCategoryError(state,bool_value){
        state.categoryError = bool_value.payload
    }
  },
});

export const topNavActions = topNavSlice.actions;

export default topNavSlice;
