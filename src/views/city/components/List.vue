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
            @click="handleCityClick(item.name)"
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
          @click="handleCityClick(item.name)"
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
    mounted() {
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    computed: {
      // 获取高度数组
      calculateHeight() {
        let heightList = [];
        const currentCity = document.querySelector(".city-current");
        const hotCity = document.querySelector(".city-hot");
        let initHeight = currentCity.clientHeight + hotCity.clientHeight;
        const content = document.querySelectorAll(".city-content");
        for (let i = 0; i < content.length; i++) {
          heightList.push(initHeight);
          initHeight += content[i].clientHeight;
        }
        return heightList;
      },
      currentCity() {
        return this.$store.state.city;
      }
    },
    watch: {
      position(newVal) {
        if (!newVal) return;
        const element = this.$refs[newVal];
        this.scroll.scrollToElement(element[0], 200, 0, 0);
      }
    },
    methods: {
      // 初始化better-scroll
      initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: 3
        });
        this.scroll.on("scroll", this.onScroll);
      },
      // 监听better-scroll的scroll事件
      onScroll(pos) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let y = -pos.y;
          for (let i = 0; i < this.calculateHeight.length; i++) {
            if (y < Math.floor(this.calculateHeight[i] - 3)) {
              this.$emit("letterScroll", i - 1);
              return;
            } else if (
              y >
              this.calculateHeight[this.calculateHeight.length - 1] - 3
            ) {
              this.$emit("letterScroll", i);
            }
          }
        }, 16);
      },
      handleCityClick(city) {
        this.$store.commit('changeCity',city);
        this.$router.push('/home');
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
