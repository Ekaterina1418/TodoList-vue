<template>
  <form class="form-todo" @submit.prevent="addTodo">
    <label for="body" class="form-container__label">Заголовок</label>
    <input class="form-todo__input" v-model="title" type="text" />
    <label for="body" class="form-todo__label">Описание</label>
    <textarea class="form-todo__textarea" v-model="body"></textarea>
    <label for="body" class="form-todo__label">Срочность</label>
    <select class="form-todo__select" v-model="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button class="form-todo__button" type="submit">Добавить</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTodosStore, Priority } from "../../stores/todo";

const title = ref("");
const body = ref("");
const priority = ref<Priority>("low");

const store = useTodosStore();

function addTodo() {
  if (title.value && body.value) {
    store.addTodo(title.value, body.value, priority.value);
    title.value = "";
    body.value = "";
    priority.value = "low";
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
