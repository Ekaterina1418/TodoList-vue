import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
export type Priority = "Низкая" | "Средняя" | "Высокая";
export type Todo = {
  id: string;
  title: string;
  body: string;
  priority: Priority;
  completed: boolean;
  date: string;
};

export const useTodosStore = defineStore("todo", {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(title: string, body: string, priority: Priority, date: string) {
      const today = new Date();
      const formattedDate = `${String(today.getDate()).padStart(
        2,
        "0"
      )}.${String(today.getMonth() + 1).padStart(
        2,
        "0"
      )}.${today.getFullYear()}`;
      this.todos.push({
        id: uuidv4(),
        title,
        body,
        priority,
        completed: false,
        date: date || formattedDate,
      });
    },
    removeTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodoCompletion(id: string) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(id: string, updatedFields: Partial<Todo>) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        Object.assign(todo, updatedFields);
      }
    },
  },
  getters: {
    filteredTodosByPriority: (state) => (priority: Priority) => {
      return state.todos.filter((todo) => todo.priority === priority);
    },
    activeTodos: (state) => {
      return state.todos.filter((todo) => !todo.completed);
    },
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
});
