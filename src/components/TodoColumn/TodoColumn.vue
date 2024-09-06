<template>
  <div :class="columnClass">
    <h3 class="todo-column__title">{{ title }}</h3>
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts" setup>
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import { computed, defineProps } from "vue";
import { Priority, useTodosStore } from "@/stores/todo";

const props = defineProps<{
  title: string;
  priority: Priority;
}>();
const store = useTodosStore();

const filteredTodos = computed(() => {
  return store.filteredTodosByPriority(props.priority);
});

const columnClass = computed(() => {
  return `todo-column todo-column--${props.priority.toLowerCase()}`;
});
</script>

<style></style>
