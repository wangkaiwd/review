<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper
      :swiper="swiper"
    >
    </HomeSwiper>
    <HomeCategory
      :iconList="iconList"
    >
    </HomeCategory>
  </div>
</template>

<script>
// 组件
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeCategory from "./components/Category";

// 请求接口
import { fetchHome } from "@/api/home";
export default {
  name: "Home",
  data() {
    return {
      swiper: [],
      iconList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeCategory
  },
  mounted() {
    fetchHome({}, res => {
      const { data } = res;
      this.swiper = data.swiperList;
      this.iconList = data.iconList;
    });
  }
};
</script>

<style lang="less">
</style>
