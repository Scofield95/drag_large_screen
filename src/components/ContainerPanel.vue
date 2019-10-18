<template>
  <div class="g-layout">
    <div class="g-menu">
      <a-collapse defaultActiveKey="1">
        <a-collapse-panel header="布局设置" key="1">
          <div>
            <div class="f-layout-btn">
              <a-input />
              <BaseDragBtn />
            </div>
            <div class="f-layout-btn">
              <a-input />
              <BaseDragBtn />
            </div>
            <div class="f-layout-btn">
              <a-input />
              <BaseDragBtn />
            </div>
            <BaseDraggable><div>iiuuiuiuiuiu</div></BaseDraggable>
            <div class="ui-draggable ui-draggable-dragging">模拟拖拽</div>
            <div v-if="dragLayout">
              <h2>这是一个拖拽组件</h2>
            </div>
          </div>
        </a-collapse-panel>
        <a-collapse-panel header="基本CSS" key="2" :showArrow="false">
          <p>基本css</p>
        </a-collapse-panel>
        <a-collapse-panel header="组件" key="3" :showArrow="false">
          <p>组件</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="u-container">
      <div class="ui-sortable">
        <!-- <UiSortable /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
    UiSortable: () => import("@/components//UiSortable.vue")
  }
})
export default class ContainerPanel extends Vue {
  get dragLayout(){
    return this.$store.state.VUEX_editor.dragLayout
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.f-layout-btn {
  display: flex;
  justify-content: center;
  align-content: center;
  & + .f-layout-btn {
    margin-top: 8px;
  }
}
.g-layout {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  .g-menu {
    width: 250px;
    background: #fff;
  }
  .u-container{
    flex: 1;
    padding: 16px;
  }
}

</style>
