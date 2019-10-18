<template>
  <div id="app" :class="[globalEditorState ? 'editor' : '']">
    <div class="g-header">
      <div>可视化布局</div>
      <a-radio-group defaultValue="a" buttonStyle="solid">
        <a-radio-button value="edit">
          <a-icon type="edit" />编辑
        </a-radio-button>
        <a-radio-button value="b">
          <a-icon type="form" />布局编辑
        </a-radio-button>
        <a-radio-button value="c">
          <a-icon type="eye" />预览
        </a-radio-button>
      </a-radio-group>
      <a-radio-group defaultValue="a" buttonStyle="solid">
        <a-radio-button value="a">
          <a-icon type="download" />下载
        </a-radio-button>
        <a-radio-button value="b">
          <a-icon type="save" />保存
        </a-radio-button>
        <a-radio-button value="c">
          <a-icon type="delete" />清空
        </a-radio-button>
      </a-radio-group>
    </div>
    <ContainerPanel class="g-container" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerPanel from "./components/ContainerPanel.vue";

@Component({
  components: {
    ContainerPanel
  }
})
export default class App extends Vue {
  get globalEditorState(){
    return this.$store.state.VUEX_editor.globalEditorState
  }
  mounted() {
    // window.document.addEventListener(
    //   "mouseup",
    //   (e: MouseEvent) => {
    //     if ((e.target as HTMLElement).dataset.drag) {
    //       console.log("鼠标放下", e);
    //     }
    //   },
    //   false
    // );
    // window.document.addEventListener(
    //   "mousedown",
    //   (e: MouseEvent) => {
    //     if ((e.target as HTMLElement).dataset.drag) {
    //       console.log("鼠标点击", e.target);
    //       console.log("鼠标点击", (e.target as HTMLElement).dataset);
    //     }
    //   },
    //   false
    // );
    window.document.addEventListener("mousemove",(e:any)=>{
      // console.log('鼠标移动',e)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  background: #f5f5f5;
  height: 100%;
  .g-header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background: #333333;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .g-container {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background: #fff;
  }
}
</style>
