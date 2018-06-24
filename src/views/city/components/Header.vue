<template>
  <div class="city-header">
    <div class="city-header-top">
      <BaseIcon class="city-back" iconText="icon-fanhui"></BaseIcon>
      <h2>城市选择</h2>
    </div>
    <div class="city-header-input">
      <input type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="less" scoped>
@import "~styles/varibles";
.city-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 2.1067rem;
  width: 100%;
  background: @bgColor;
  .city-header-top {
    color: #fff;
    position: relative;
    height: @headerHeight;
    line-height: @headerHeight;
    h2 {
      text-align: center;
      font-size: 16px;
    }
  }
  .city-back {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0.2133rem;
  }
  .city-header-input {
    height: 0.96rem;
    padding: 0 0.1067rem;
    input {
      height: 0.8267rem;
      width: 100%;
      border: 0;
      outline: none;
      border-radius: 0.1067rem;
      text-align: center;
      font-size: 12px;
      // 为输入框留一些俩边的间隙，比较美观
      padding: 0 0.1067rem;
    }
  }
}
</style>
