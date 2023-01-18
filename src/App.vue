<template>
  
  <HeaderComponent />

  <main>
    <router-view></router-view>
  </main>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

import HeaderComponent from './components/Header.vue';

export default defineComponent({
  name: 'App',
  
  components: {
    HeaderComponent
  }

  });

</script>