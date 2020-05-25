<template>
  <div class="wrapper">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
// import store from "../storage/index";

export default {
  name: "home",
  components: {
    NavHeader,
    NavFooter
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(1)
    this.axios.post("/api/user/login").then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss" scoped>
</style>