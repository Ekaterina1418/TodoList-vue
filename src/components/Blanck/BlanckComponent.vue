<template>
  <div class="blanck">
    <h1 class="blanck__title">Нет {{ title }} задач</h1>
    <img
      class="blanck__img"
      src="../../assets/icons/blanck.svg"
      alt="Пустая страница"
    />
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{ title: string }>();
</script>
<style lang="scss">
@import "./style.scss";
</style>
