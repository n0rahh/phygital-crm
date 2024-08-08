<template>
  <v-app-bar color="secondary">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Phygital</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
    color="secondary"
  >
    <v-list class="py-6">
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        class="mb-4"
        @click="$router.push(item.path)"
      >
        <v-list-item-content class="d-flex justify-space-between">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-home', path: '/' },
        { title: 'Player', icon: 'mdi-disc-player', path: '/player' },
      ],
    };
  },
};
</script>
