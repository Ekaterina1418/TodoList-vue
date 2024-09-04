<template>
  <div :class="['todo-item', priorityClass]">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.body }}</p>
    <small>Priority: {{ todo.priority }}</small>
    <button @click="removeTodo">Удалить</button>
  </div>
</template>

<script lang="ts" setup>
import { useTodosStore, Todo } from "@/stores/todo";
import { computed, defineProps } from "vue";

const props = defineProps<{ todo: Todo }>();

const store = useTodosStore();

const priorityClass = computed(() => {
  return `priority-${props.todo.priority}`;
});

function removeTodo() {
  store.removeTodo(props.todo.id);
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
