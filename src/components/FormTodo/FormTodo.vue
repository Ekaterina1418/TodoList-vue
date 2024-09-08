<template>
  <form class="form-todo" @submit.prevent="hanleSubmit">
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
    <slot name="date">
      <div class="form-todo__date" v-if="isEditing">
        <label for="date" class="form-todo__label">Дата</label>
        <input class="form-todo__input" v-model="date" type="date" />
      </div>
    </slot>
    <slot name="buttons">
      <div class="form-todo__actions">
        <button class="form-todo__button" type="submit">
          {{ isEditing ? "Сохранить" : "Добавить" }}
        </button>
        <button
          v-if="isEditing"
          class="form-todo__button"
          type="button"
          @click="cancelEdit"
        >
          Отменить
        </button>
      </div>
    </slot>
  </form>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from "vue";
import { Priority, Todo } from "../../stores/todo";
const props = defineProps<{
  todo?: Todo;
  isEditing?: boolean;
}>();
const emit = defineEmits<{
  (e: "submit"): void;
  (e: "cancel"): void;
}>();

const title = ref(props.todo?.title || "");
const body = ref(props.todo?.body || "");
const priority = ref<Priority>(props.todo?.priority || "Низкая");
const date = ref(props.todo?.date);
const errors = ref({
  title: "",
  body: "",
});
const isEditing = ref(!!props.isEditing);

watch(
  () => props.todo,
  (newTodo) => {
    if (newTodo) {
      title.value = newTodo.title;
      body.value = newTodo.body;
      priority.value = newTodo.priority;
      date.value = newTodo.date;
    }
  }
);

function clearErrors() {
  errors.value.title = "";
  errors.value.body = "";
}
function clearFields() {
  title.value = "";
  body.value = "";
  priority.value = "Низкая";
  date.value = "";
}
function hanleSubmit() {
  clearErrors();
  if (!title.value) {
    errors.value.title = "Заголовок обязателен";
  }
  if (!body.value) {
    errors.value.body = "Описание обязателено";
  }
  if (errors.value.title || errors.value.body) {
    return;
  }

  emit("submit", {
    title: title.value,
    body: body.value,
    priority: priority.value,
    date: date.value,
  });
  clearFields();
}
function cancelEdit() {
  emit("cancel");
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
