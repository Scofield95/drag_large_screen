<template>
<el-card class="u-wrap-widget">
  <div @dragstart="handleDragStart">
    <div draggable >
      <components is="WidgetButton"/>
    </div>
    <div draggable >
      <components is="WidgetButton"/>
    </div>
  </div>
</el-card>
</template>

<script>

export default {
  name: 'BaseWidgetList',
  data() {
    return {
      widgetList: [],
    }
  },

  created() {
  },

  methods: {
    handleDragStart(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="less" scoped>

</style>
