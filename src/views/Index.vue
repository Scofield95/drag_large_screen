<template>
  <div class="g-drag-screen">
    <header class="u-toolbar-area">
      <BaseToolbar />
    </header>
    <aside class="u-widget-list">
      <BaseWidgetList />
    </aside>
    <main class="u-edit-area">
      <BaseEditarea />
    </main>
    <aside class="u-attribute-area">
      <BaseAttributeArea />
    </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.g-drag-screen{
  position: relative;
  width: 100%;
  height: 100%;
  .u-toolbar-area{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
  }
  .u-widget-list{
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 250px;
  }
  .u-edit-area{
    position: absolute;
    top: 70px;
    left: 250px;
    right: 250px;
    bottom: 0;
  }
  .u-attribute-area{
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 0;
    width: 250px;
  }
}
</style>
