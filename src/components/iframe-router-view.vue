<template>
  <div>
    <!-- Vue的router-view -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- iframe页 -->
    <component
      v-for="(item,index) in componentsArr"
      :key="index"
      :is="myCom"
      v-show="$route.path === item"
    ></component>
  </div>
</template>

<script>
import iframeWrapper from "./iframeWrapper";
export default {
  name:"iframe-router-view",
  data() {
    return {
      componentsArr: [],
      myCom: "iframe-wrapper"
    };
  },
  components: {
    iframeWrapper
  },
  created() {
    //初次加载，装载
    this.isAddIframePage(this.$route.path);
    //路由切换，动态装载component
    this.$router.beforeEach((to, from, next) => {
      this.isAddIframePage(to.path);
      next();
    });
  },
  watch: {},
  computed: {},
  methods: {
    // 判断是否挂载到componentsArr
    isAddIframePage(path) {
      let component = this.$router.getMatchedComponents(path)[0];

      if (!component) {
        let isComponentRepeat = this.componentsArr.find(item => {
          return item == path;
        });
        if (!isComponentRepeat) {
          this.componentsArr.push(path);
        }
      }
    }
  }
};
</script>