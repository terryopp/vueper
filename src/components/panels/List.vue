<template>
  <div class="d-flex flex-column justify-start px-4 py-12">
    <div class="white--text text-center display-1 mb-10">List of objects</div>
    <v-card class="primary secondary--text my-4 overflow-y-auto" min-height="30vh" max-height="65vh">
      <div v-for="(item, i) in items" :key="i" class="px-2 py-2">
        <div class="d-flex justify-space-between align-center"> 
          {{ item.name }}
          <v-btn small icon @click="removeItem(item)">
            <v-icon color="secondary" size="20">mdi-delete-outline</v-icon>
          </v-btn>
        </div>
        <v-divider />
      </div>
    </v-card>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import paper from "paper";

export default defineComponent({
  name: 'List-panel',

  setup() {
    const items = ref(paper.project.activeLayer.children);

    function removeItem(item) {
      item.remove();
    }
    return {
      removeItem,
      items
    }
  }
});
</script>
