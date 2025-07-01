import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import todoReducer from './todo/redux-toolkit/todoSlice';
import { Todo, TodoState } from './types';

const initialState: TodoState = {
  items: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Use Redux Hooks', completed: false }
  ]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    rtkTodos: todoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;