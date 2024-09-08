<template>
  <nav class="navigation">
    <router-link to="/" class="navigation__link" active-class="active"
      >Все</router-link
    >
    <router-link to="/active" class="navigation__link" active-class="active"
      >Активные
    </router-link>
    <router-link to="/completed" class="navigation__link" active-class="active"
      >Выполненные
    </router-link>
  </nav>
</template>
<script lang="ts" setup></script>
<style lang="scss">
@import "./style.scss";
</style>
