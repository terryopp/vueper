<template>
  <div class="d-flex flex-column justify-start px-4 py-12">
    <div class="white--text text-center display-1 mb-10">Creation panel</div>
    <v-btn rounded class="primary secondary--text my-4" @click="drawRect">
      rectangle
      <v-icon right>mdi-vector-square</v-icon>
    </v-btn>
    <v-btn rounded class="primary secondary--text my-4" @click="drawCircle">
      circle
      <v-icon right>mdi-vector-circle-variant</v-icon>
    </v-btn>
    <v-btn rounded class="primary secondary--text my-4" @click="drawTriangle">
      triangle
      <v-icon right>mdi-vector-triangle</v-icon>
    </v-btn>
    <v-btn rounded class="primary secondary--text my-4" @click="drawStar">
      star
      <v-icon right>mdi-star-settings-outline</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import paper from "paper";

export default defineComponent ({
  name: 'Edit-panel',

  setup() {
    const items = ref(paper.project.activeLayer.children);
    function number() {
      const currentItems = items.value.filter((item) => item.name);
      return currentItems.length + 1;
    }
    function drawRect () {
      const path = new paper.Path({ name: 'rectangle-' + number() });
      path.strokeColor = '#8F4750';
      path.fillColor = '#DBDBDB';
      path.add(new paper.Point(30, 75));
      path.add(new paper.Point(30, 25)); 
      path.add(new paper.Point(80, 25));
      path.add(new paper.Point(80, 75));
      path.closed = true;
      paper.view.draw();
    }
    function drawCircle () {
      const circle = new paper.Path.Circle(new paper.Point(350, 200), 60);
      circle.name = 'circle-' + number();
      circle.strokeColor = '#8F4750';
      circle.fillColor = '#DBDBDB';
      circle.closed = true;
      paper.view.draw();
    }
    function drawTriangle () {
      const path = new paper.Path({ name: 'triangle-' + number() });
      path.strokeColor = '#8F4750';
      path.fillColor = '#DBDBDB';
      path.add(new paper.Point(440, 120));
      path.add(new paper.Point(520, 120));
      path.add(new paper.Point(480, 80));
      path.closed = true;
      paper.view.draw();
    }
    function drawStar () {
      const path = new paper.Path({ name: 'star-' + number() });
      path.strokeColor = '#8F4750';
      path.fillColor = '#DBDBDB';
      path.add(new paper.Point(270, 110));
      path.add(new paper.Point(290, 105));
      path.add(new paper.Point(300, 85));
      path.add(new paper.Point(310, 105));
      path.add(new paper.Point(330, 110));
      path.add(new paper.Point(315, 120));
      path.add(new paper.Point(320, 140));
      path.add(new paper.Point(300, 130));
      path.add(new paper.Point(280, 140));
      path.add(new paper.Point(285, 120));
      path.closed = true;
      paper.view.draw();
    }
    return {
      drawStar,
      drawRect,
      drawCircle,
      drawTriangle
    }
  }
});
</script>
