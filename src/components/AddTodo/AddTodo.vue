<template>
  <form class="form-todo" @submit.prevent="addTodo">
    <label for="body" class="form-container__label">Заголовок</label>
    <input class="form-todo__input" v-model="title" type="text" />
    <span v-if="errors.title" class="form-todo__error">{{ errors.title }}</span>
    <label for="body" class="form-todo__label">Описание</label>
    <textarea class="form-todo__textarea" v-model="body"></textarea>
    <span v-if="errors.body" class="form-todo__error">{{ errors.body }}</span>
    <label for="body" class="form-todo__label">Приоритетность</label>
    <select class="form-todo__select" v-model="priority">
      <option value="Низкая">Низкая</option>
      <option value="Средняя">Средняя</option>
      <option value="Высокая">Высокая</option>
    </select>
    <button class="form-todo__button" type="submit">Добавить</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTodosStore, Priority } from "../../stores/todo";

const title = ref("");
const body = ref("");
const priority = ref<Priority>("Низкая");
const errors = ref({
  title: "",
  body: "",
});

const store = useTodosStore();

function clearErrors() {
  errors.value.title = "";
  errors.value.body = "";
}
function addTodo() {
  clearErrors();
  if (!title.value) {
    errors.value.title = "Заголовок обязателен";
  }
  if (!body.value) {
    errors.value.body = "Описание обязателено";
  }

  if (title.value && body.value) {
    store.addTodo(title.value, body.value, priority.value);
    title.value = "";
    body.value = "";
    priority.value = "Низкая";
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
