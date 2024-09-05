<template>
  <div
    :class="[
      'todo-item',
      priorityClass,
      {
        'todo-item--completed': todo.completed,
      },
    ]"
  >
    <button class="todo-item__btn" @click="removeTodo">X</button>
    <input
      type="checkbox"
      class="todo-item__checkbox"
      v-model="isCompleted"
      @change="toggleCompletion"
    />
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.body }}</p>
    <small>{{ todo.priority }}</small>
  </div>
</template>

<script lang="ts" setup>
import { useTodosStore, Todo } from "@/stores/todo";
import { computed, defineProps } from "vue";

const props = defineProps<{ todo: Todo }>();

const store = useTodosStore();

const priorityClass = computed(() => {
  switch (props.todo.priority) {
    case "Низкая":
      return "todo-item--low";
    case "Средняя":
      return "todo-item--medium";
    case "Высокая":
      return "todo-item--high";
    default:
      return "";
  }
});
const isCompleted = computed(() => props.todo.completed);

function removeTodo() {
  store.removeTodo(props.todo.id);
}
function toggleCompletion() {
  store.toggleTodoCompletion(props.todo.id);
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
