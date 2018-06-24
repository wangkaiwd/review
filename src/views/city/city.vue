<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CityList
      :hotCities="hotCities"
      :cities="cities"
    >
    </CityList>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CityList from "./components/List.vue";

// 接口
import { fetchCity } from "@/api/home";
export default {
  name: "City",
  components: {
    CityHeader,
    CityList
  },
  data() {
    return {
      cities: {},
      hotCities: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 获取城市页列表数据
    getList() {
      fetchCity({}, res => {
        this.cities = res.data.cities;
        this.hotCities = res.data.hotCities;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.city {
}
</style>
