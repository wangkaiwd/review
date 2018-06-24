<template>
  <div class="city">
    <CityHeader></CityHeader>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
export default {
  name: "City",
  components: {
    CityHeader
  }
};
</script>

<style lang="less" scoped>
.city {
}
</style>
