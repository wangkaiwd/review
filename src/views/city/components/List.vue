<template>
  <div class="city-list" ref="wrapper">
    <div class="content">
      <div class="city-current">
        <h2 class="city-title">当前城市</h2>
        <div class="city-box">
          <p>{{currentCity}}</p>
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
      <div 
        class="city-content"
        v-for="(val,key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="city-title">{{key}}</div>
        <div 
          class="city-content-list"
          v-for="item in val"
          :key="item.id"
          @click="currentCity=item.name"
        >
        {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    cities: {
      type: Object,
      required: true
    },
    hotCities: {
      type: Array,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentCity: "阿坝"
    };
  },
  created() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  watch: {
    position(newVal, oldVal) {
      if (!newVal) return;
      // 这里element为什么是数组
      const element = this.$refs[newVal];
      this.scroll.scrollToElement(element[0], 200, 0, 0);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/varibles.less";
.city-list {
  position: absolute;
  top: 2.1067rem;
  left: 0;
  bottom: 0;
  color: #333;
  overflow: hidden;
  // 粘性定位的所有父元素都不能设置overflow: hidden,否则不会生效
  // .city-content {
  //   position: relative;
  //   & > .city-title {
  //     position: sticky;
  //     top: 0;
  //   }
  // }
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
}
</style>
