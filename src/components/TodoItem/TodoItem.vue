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
    <button class="todo-item__btn" @click="removeTodo">
      <img src="../../assets/icons/open.svg" alt="кнопка закрытия" />
    </button>
    <input
      type="checkbox"
      class="todo-item__checkbox"
      v-model="isCompleted"
      @change="toggleCompletion"
    />
    <div class="todo-item__text">
      <h3 class="todo-item__title">{{ todo.title }}</h3>
      <p class="todo-item__desc">{{ todo.body }}</p>
      <small>{{ todo.priority }}</small>
      <p>{{ todo.date }}</p>
    </div>
    <button
      class="todo-item__edit"
      v-if="!isCompleted"
      @click="openModal"
      type="button"
    >
      <img src="../../assets/icons/edit.svg" alt="кнопка редактировать" />
    </button>
    <PopupTodo v-if="isOpen" :todo="props.todo" @close="closeModal" />
  </div>
</template>

<script lang="ts" setup>
import PopupTodo from "@/components/PopupTodo/PopupTodo.vue";
import { useTodosStore, Todo } from "@/stores/todo";
import { ref, computed, defineProps, onMounted, onBeforeMount } from "vue";

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
function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    closeModal();
  }
}
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});
onBeforeMount(() => {
  window.addEventListener("keydown", handleKeydown);
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
