<template>
  <div class="g-drag-screen">
    <header class="u-toolbar-area">
      <BaseToolbar />
    </header>
    <aside class="u-widget-list">
      <BaseWidgetList />
    </aside>
    <section class="u-edit-area">
      <main  @drop="handleDrop" @dragover="handleDragOver">
        <BaseEditarea/>
      </main>
    </section>
    <aside class="u-attribute-area">
      <BaseAttributeArea />
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    handleDrop() {
      console.log('放下')
      // e.preventDefault()
      // e.stopPropagation()
    },

    handleDragOver(e) {
      console.log(e)
      e.preventDefault()
      // e.dataTransfer.dropEffect = 'copy'
    },
  },
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
    top: 80px;
    left: 0;
    bottom: 0;
    width: 250px;
  }
  .u-edit-area{
    position: absolute;
    top: 80px;
    left: 250px;
    right: 250px;
    bottom: 0;
    padding: 0 10px;
    main{
      width: 100%;
      height: 100%;
    }
  }
  .u-attribute-area{
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    width: 250px;
  }
}
</style>
