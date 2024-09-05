<template>
  <div class="todo-column todo-column--low">
    <h3 class="todo-column__title">Низкая приоритетность</h3>
    <TodoItem v-for="todo in lowPriorityTodos" :key="todo.id" :todo="todo" />
  </div>
  <div class="todo-column todo-column--medium">
    <h3 class="todo-column__title">Средняя приоритетность</h3>
    <TodoItem v-for="todo in mediumPriorityTodos" :key="todo.id" :todo="todo" />
  </div>
  <div class="todo-column todo-column--high">
    <h3 class="todo-column__title">Высокая приоритетность</h3>
    <TodoItem v-for="todo in highPriorityTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts" setup>
import { useTodosStore } from "@/stores/todo";
import { computed } from "vue";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
const store = useTodosStore();
const lowPriorityTodos = computed(() =>
  store.todos.filter((todo) => todo.priority === "Низкая")
);
const mediumPriorityTodos = computed(() =>
  store.todos.filter((todo) => todo.priority === "Средняя")
);
const highPriorityTodos = computed(() =>
  store.todos.filter((todo) => todo.priority === "Высокая")
);
</script>

<style lang="scss">
@import "./style.scss";
</style>
