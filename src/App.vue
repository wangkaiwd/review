<template>
  <div id="app">
    <!-- <transition 
      :name="slide"
      :duration="300"
    > -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>
<script>
// TODO:如何区分是到一个新页面还是回退，来执行响应的动画
export default {
  data() {
    return {
      slide: "slide-in"
    };
  }
  // watch: {
  //   slide(newVal, oldVal) {}
  // }
};
</script>
<style lang="less" scoped>
// 进出场动画
.slide-in-enter-to {
  transform: translate3D(0, 0, 0);
  transition: all 300ms ease-in;
}
.slide-in-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-in-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate3D(-100%, 0, 0);
  transition: all 300ms ease-in;
}

.slide-out-leave-active {
  transform: translateX(100%);
  transition: all 300ms ease-in;
}
.slide-out-enter-to {
  transform: translateX(0, 0, 0);
  transition: all 300ms ease-in;
}
.slide-out-enter {
  transform: translateX(-100%);
}
</style>
