import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    isOpen: false,
    formData: {
      name: "",
      email: "",
      contact: "",
      description: "",
    },
  },
  reducers: {
    openForm: (state) => {
      state.isOpen = true;
    },
    closeForm: (state) => {
      state.isOpen = false;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = {
        name: "",
        email: "",
        contact: "",
        description: "",
      };
    },
  },
});

export const { openForm, closeForm, updateFormData, resetFormData } =
  formSlice.actions;

export default formSlice.reducer;
