<template>
  <div
    :class="[
      'todo-item',
      priorityClass,
      {
        'todo-item--completed': isCompleted,
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
    <p>{{ todo.date }}</p>
    <button v-if="!isCompleted" @click="openModal" type="button">
      Редактировать
    </button>
    <PopupTodo v-if="isOpen" :todo="props.todo" @close="closeModal" />
  </div>
</template>

<script lang="ts" setup>
import PopupTodo from "@/components/PopupTodo/PopupTodo.vue";
import { useTodosStore, Todo } from "@/stores/todo";
import { ref, computed, defineProps } from "vue";

const props = defineProps<{ todo: Todo }>();
const isOpen = ref(false);
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
const isCompleted = computed(() => {
  const todo = store.todos.find((t) => t.id === props.todo.id);
  return todo ? todo.completed : false;
});

function removeTodo() {
  store.removeTodo(props.todo.id);
}
function toggleCompletion() {
  store.toggleTodoCompletion(props.todo.id);
}
function openModal() {
  isOpen.value = true;
}
function closeModal() {
  isOpen.value = false;
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
