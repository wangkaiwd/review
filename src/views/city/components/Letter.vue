<template>
  <div class="city-letter">
    <ul>
      <li 
        v-for="item in letterList"
        :key="item"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityLetter",
  props: {
    letterList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/varibles.less";
.city-letter {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0.1067rem;
  top: 2.1067rem;
  bottom: 0;
  color: @bgColor;
  font-size: 14px;
  text-align: center;
}
</style>
