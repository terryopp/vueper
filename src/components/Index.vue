<template class="pa-0 ma-0">
  <v-container fluid class="workspace pa-0 ma-0">
    <v-row no-gutters class="workspace__row">
      <v-col cols="2" class="secondary">
        <edit-panel v-if="loadPanels" />
      </v-col>
      <v-col cols="8">
        <canvas class="workspace__canvas" ref="canvas"></canvas>
      </v-col>
      <v-col cols="2" class="secondary">
        <list-panel v-if="loadPanels" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import ListPanel from './panels/List.vue';
import EditPanel from './panels/Creation.vue';
import paper from "paper";

export default defineComponent ({
  name: 'index',
  components: {
    ListPanel,
    EditPanel
  },
  setup () {
    const loadPanels = ref(false);
    const canvas = ref();
    const hitOptions = {
      segments: true,
      stroke: true,
      fill: true,
      tolerance: 5
    };
    const activeShape = ref({});
    const canMove = ref(false);

    onMounted(() => {
      paper.setup(canvas.value);
      paper.view.onMouseDown = (event) => {
        const hitResult = paper.project.hitTest(event.point, hitOptions);
        canMove.value = true;
        if (!hitResult) {
          activeShape.value.selected = false;
          activeShape.value = {};
          return null;
        } else {
          if (activeShape.value?.id) 
            if (hitResult.item.id == activeShape.value.id) return null;
            else activeShape.value.selected = false;
          activeShape.value = hitResult.item;
          activeShape.value.selected = true;
        }
      };
      paper.view.onMouseMove = (event) => {
        if (activeShape.value?.id && canMove.value) {
          activeShape.value.position = event.point;
        }
      };
      paper.view.onMouseUp = () => {
        canMove.value = false;
      };

      loadPanels.value = true;
    });

    return {
      canvas,
      loadPanels
    }
  }
});
</script>

<style scoped>
.workspace {
  width: 100%;
  height: 100%;
  min-width: 900px;
  min-height: 600px;
}
.workspace__row {
  width: 100%;
  height: 100%;
}
.workspace__canvas{
  width: 100%;
  height: 100%;
}
</style>
