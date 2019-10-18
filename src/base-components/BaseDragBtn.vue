<template>
  <a-button data-drag="true" @mousedown="mousedown" @mouseup="mouseup">
    <a-icon type="drag" />拖动
  </a-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ContainerPanel extends Vue {
  mousedown() {
    console.log("鼠标按下");
  }
  mouseup() {
    console.log("鼠标弹起");
  }
}
</script>
<style lang="scss" scoped>
</style>
