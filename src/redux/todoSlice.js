import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer