<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper
      :swiper="swiper"
    ></HomeSwiper>
  </div>
</template>

<script>
// 组件
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";

// 请求接口
import { fetchHome } from "@/api/home";
export default {
  name: "Home",
  data() {
    return {
      swiper: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper
  },
  mounted() {
    fetchHome({}, res => {
      const { data } = res;
      this.swiper = data.swiperList;
    });
  }
};
</script>

<style lang="less">
</style>
