<template>
  <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>

<script lang="ts" setup>
import { useTodosStore } from "@/stores/todo";
import { computed } from "vue";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
const store = useTodosStore();
const todos = computed(() => store.todos);
</script>

<style></style>
