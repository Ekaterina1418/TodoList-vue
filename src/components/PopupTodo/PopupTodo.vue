<template>
  <div class="modal-overlay" v-if="isOpen" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-content__open" type="button" @click="closeModal">
        <img src="../../assets/icons/open.svg" alt="кнопка закрытия" />
      </button>

      <FormTodo :todo="props.todo" @submit="saveEditTodo">
        <template #date>
          <input type="date" v-model="date" />
        </template>
        <template #buttons>
          <div class="modal-content__btn">
            <button class="form-todo__button" type="submit">Сохранить</button>
            <button class="form-todo__button" type="button" @click="closeModal">
              Отменить
            </button>
          </div>
        </template>
      </FormTodo>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from "vue";
import FormTodo from "../FormTodo/FormTodo.vue";
import { useTodosStore, Todo, Priority } from "@/stores/todo";

const store = useTodosStore();
const date = ref("");
const isOpen = ref(true);
const props = defineProps<{ todo: Todo }>();
const emit = defineEmits<{ (e: "close"): void }>();

function formatDateForInput(dateString: string): string {
  const [day, month, year] = dateString.split(".");
  return `${year}-${month}-${day}`;
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${String(Number(day)).padStart(2, "0")}.${String(
    Number(month)
  ).padStart(2, "0")}.${year}`;
}

watch(
  () => props.todo,
  (newTodo) => {
    date.value = formatDateForInput(newTodo.date);
  },
  { immediate: true }
);

function closeModal() {
  emit("close");
}

function saveEditTodo(todoData: {
  title: string;
  body: string;
  priority: Priority;
  date: string;
}) {
  if (props.todo) {
    const formattedDate = formatDate(date.value);
    store.editTodo(props.todo.id, {
      title: todoData.title,
      body: todoData.body,
      priority: todoData.priority,
      date: formattedDate,
    });
    closeModal();
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
