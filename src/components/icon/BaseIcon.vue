<template>
  <div class="base-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="handleIconText"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    iconText: {
      type: String,
      required: true
    }
  },
  computed: {
    handleIconText() {
      return `#${this.iconText}`;
    }
  }
};
</script>

<style lang="less" scoped>
.base-icon {
  display: inline-block;
}
</style>
