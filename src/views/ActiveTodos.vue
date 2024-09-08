<template>
  <Navigation />
  <section class="task-section">
    <h1 class="task-section__title" v-if="activeTodos.length > 0">
      Активные задачи
    </h1>
    <div class="task-section__content">
      <TodoItem v-for="todo in activeTodos" :key="todo.id" :todo="todo" />
    </div>
  </section>
  <BlanckComponent v-if="activeTodos.length === 0" title="активных" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import { useTodosStore } from "@/stores/todo";
import Navigation from "@/components/Navigation.vue/Navigation.vue";
import BlanckComponent from "@/components/Blanck/BlanckComponent.vue";

const store = useTodosStore();

const activeTodos = computed(() => store.activeTodos);
</script>
