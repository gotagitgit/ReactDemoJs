export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  items: Todo[];
}

export interface RootState {
  todos: TodoState;
  rtkTodos: TodoState;
}