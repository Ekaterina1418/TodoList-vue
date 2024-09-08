<template>
  <nav>
    <router-link to="/">Все задачи</router-link>
    <router-link to="/completed">Выполненные задачи</router-link>
  </nav>
  <div>
    <h1>Активные задачи</h1>
    <TodoItem v-for="todo in activeTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import { useTodosStore } from "@/stores/todo";

const store = useTodosStore();

const activeTodos = computed(() => store.activeTodos);
</script>

<style></style>
