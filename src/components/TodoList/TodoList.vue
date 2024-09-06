<template>
  <TodoColumn title="Низкая приоритетность" priority="Низкая" />
  <TodoColumn title="Средняя приоритетность" priority="Средняя" />
  <TodoColumn title="Высокая приоритетность" priority="Высокая" />
</template>

<script lang="ts" setup>
import TodoColumn from "@/components/TodoColumn/TodoColumn.vue";
</script>

<style lang="scss">
@import "./style.scss";
</style>
