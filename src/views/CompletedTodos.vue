<template>
  <Navigation />
  <section class="task-section">
    <h1 class="task-section__title" v-if="completedTodos.length > 0">
      Выполненные задачи
    </h1>
    <div class="task-section__content">
      <TodoItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
    </div>
  </section>
  <BlanckComponent v-if="completedTodos.length === 0" title="выполненных" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useTodosStore } from "@/stores/todo";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import Navigation from "@/components/Navigation.vue/Navigation.vue";
import BlanckComponent from "@/components/Blanck/BlanckComponent.vue";

const store = useTodosStore();
const completedTodos = computed(() => store.completedTodos);
</script>
<style lang="scss"></style>
