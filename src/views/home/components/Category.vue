<template>
  <div class="home-category">
    <swiper>
      <!-- slides -->
      <swiper-slide 
        v-for="k in 2"
        :key="k"
      >
      <div class="category-container">
        <div class="item" v-for="k in 5" :key="k">
          <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
          <p>景点门票</p>
        </div>
      </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="category-container">
      
    </div> -->
  </div>
</template>

<script>
/**
 * TODO:
 *  通过每页显示的条数来创建二维数组
 *  之前遇到的问题：轮播表格时，每页5条自己是怎么处理的？
 */
export default {
  name: "HomeCategory",
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  computed: {
    pages() {
      // const pages = [];
      // this.iconList.map((item, i) => {
      //   const n = Math.ceil((i + 1) / 8);
      // });
    }
  }
};
</script>

<style lang="less" scoped>
.home-category {
  width: 100%;
  height: 5.0133rem;
  background-color: red;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  // scoped穿透效果
  & /deep/ .swiper-wrapper {
    box-sizing: inherit;
  }
  .category-container {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    // 当折行进行多行显示时要使用align-content而不是align-items
    align-content: space-around;
    padding: 0.1333rem 0;
  }
  .item {
    width: 25%;
    text-align: center;
  }
  .item-img {
    width: 1.6533rem;
    height: 1.6533rem;
  }
}
</style>
