<template>
  <Navigation />
  <div>
    <h1>Выполненные задачи</h1>
    <TodoItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useTodosStore } from "@/stores/todo";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import Navigation from "@/components/Navigation.vue/Navigation.vue";

const store = useTodosStore();
const completedTodos = computed(() => store.completedTodos);
</script>
<style lang="scss"></style>
