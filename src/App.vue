<template>
  <v-app>
    <v-main>
      <index />
    </v-main>
  </v-app>
</template>

<script>
import Index from './components/Index.vue';

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({})
};
</script>
