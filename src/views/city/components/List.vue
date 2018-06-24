<template>
  <div class="city-list">
    <div class="city-current">
      <h2 class="city-title">当前城市</h2>
      <div class="city-box">
        <p>阿坝</p>
      </div>
    </div>
    <div class="city-hot">
      <div class="city-title">
        热门城市
      </div>
      <div class="city-box">
        <p 
          v-for="item in hotCities"
          :key="item.id"
        >
          {{item.name}}
        </p>
      </div>
    </div>
    <div class="city-content"
      v-for="(val,key) in cities"
      :key="key"
    >
      <div class="city-title">{{key}}</div>
      <div class="city-content-list"
        v-for="item in val"
        :key="item.id"
      >
      {{item.name}}
      </div>
    </div>
    <div class="letter">
      <ul>
        <li 
          v-for="(val,key) in cities"
          :key="key"
        >
          {{key}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: {
      type: Object,
      required: true
    },
    hotCities: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/varibles.less";
.city-list {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  // background-color: red;
  padding-top: 2.1067rem;
  color: #333;
  overflow: hidden;
  .city-title {
    height: 0.6933rem;
    background-color: #eee;
    color: #666;
    line-height: 0.6933rem;
    padding-left: 0.2133rem;
    font-size: 13px;
  }
  .city-box {
    display: flex;
    flex-wrap: wrap;
    padding: 0.16rem 0.9067rem 0.16rem 0.16rem;
  }
  p {
    width: 2.7467rem;
    padding: 0.08rem 0;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 0.1067rem;
    margin: 0.1067rem;
  }
  .city-content-list {
    padding-left: 0.2133rem;
    height: 0.9867rem;
    line-height: 0.9867rem;
    border-bottom: 1px solid #eaeaea;
  }
  .letter {
    position: fixed;
    right: 0.1067rem;
    top: 50%;
    color: @bgColor;
    font-size: 14px;
    text-align: center;
    transform: translateY(-50%);
  }
}
</style>
