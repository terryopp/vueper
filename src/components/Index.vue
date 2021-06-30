<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2">
        <edit-panel />
      </v-col>
      <v-col cols="8">
        <div class="display-2">scene</div>
      </v-col>
      <v-col cols="2">
        <list-panel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ListPanel from './panels/List.vue';
  import EditPanel from './panels/Edit.vue';

  export default {
    name: 'index',
    components: {
      ListPanel,
      EditPanel
    },
    data: () => ({}),
  }
</script>
