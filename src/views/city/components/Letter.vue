<template>
  <div class="city-letter">
    <ul>
      <li 
        v-for="(item,i) in letterList"
        :key="i"
        @click="handleClick(item)"
        :class="{active: i===activeIndex}"
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
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleClick(item) {
      this.$emit("letterPosition", item);
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
  li {
    padding: 0.0533rem;
    font-size: 12px;
  }
  .active {
    background-color: red;
    color: #fff;
    border-radius: 2%;
  }
}
</style>
