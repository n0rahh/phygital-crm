<template>
  <v-app theme="dark" class="app">
    <Toolbar />
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@import '@/styles/global';

.app {
  background-color: $background-color !important;
}
</style>
