import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
export type Priority = "Низкая" | "Средняя" | "Высокая";
export type Todo = {
  id: string;
  title: string;
  body: string;
  priority: Priority;
  completed: boolean;
};

export const useTodosStore = defineStore("todo", {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(title: string, body: string, priority: Priority) {
      this.todos.push({
        id: uuidv4(),
        title,
        body,
        priority,
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
  },
});
