<template>
  <FormTodo @submit="addTodo">
    <template #buttons>
      <button class="form-todo__button" type="submit">Добавить</button>
    </template>
  </FormTodo>
</template>
<script lang="ts" setup>
import FormTodo from "../FormTodo/FormTodo.vue";
import { useTodosStore, Priority } from "@/stores/todo";

const store = useTodosStore();
function addTodo(todoData: {
  title: string;
  body: string;
  priority: Priority;
  date: string;
}) {
  store.addTodo(
    todoData.title,
    todoData.body,
    todoData.priority,
    todoData.date
  );
}
</script>
