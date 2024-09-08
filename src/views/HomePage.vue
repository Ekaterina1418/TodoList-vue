<template>
  <nav>
    <router-link to="/active">Активные задачи</router-link>
    <router-link to="/completed">Выполненные задачи</router-link>
  </nav>
  <div class="content-center">
    <h1 class="title">Todo List</h1>
    <AddTodo />
  </div>
  <div class="content-todos">
    <TodoList />
  </div>
</template>

<script lang="ts" setup>
import AddTodo from "@/components/AddTodo/AddTodo.vue";
import TodoList from "@/components/TodoList/TodoList.vue";
</script>
