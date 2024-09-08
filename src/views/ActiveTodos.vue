<template>
  <Navigation />
  <div>
    <h1>Активные задачи</h1>
    <TodoItem v-for="todo in activeTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import { useTodosStore } from "@/stores/todo";
import Navigation from "@/components/Navigation.vue/Navigation.vue";

const store = useTodosStore();

const activeTodos = computed(() => store.activeTodos);
</script>

<style></style>
