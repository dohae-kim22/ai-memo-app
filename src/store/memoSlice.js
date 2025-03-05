import { createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
  name: "memo",
  initialState: [],
  reducers: {
    addMemo: (state, action) => {
      state.push(action.payload);
    },
    deleteMemo: (state, action) => {
      console.log(action.payload.id);

      return state.filter((memo) => memo.id !== action.payload.id);
    },
    updateMemo: (state, action) => {
      const { id, title, content, summary } = action.payload;
      const memo = state.find((memo) => memo.id === id);

      if (memo) {
        memo.title = title;
        memo.content = content;
        memo.summary = summary;
      }
    },
  },
});

export default memoSlice;
export const { addMemo, deleteMemo, updateMemo } = memoSlice.actions;
