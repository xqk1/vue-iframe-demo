<template>
  <div id="app">
    <div class="nav">
      <router-link class="router" to="/f1">Go to F1</router-link>
      <div></div>
      <router-link class="router" to="/f2">Go to F2</router-link>
      <div></div>
      <router-link class="router" to="/index?url=http://www.baidu.com">Go to Index</router-link>
      <div></div>
      <router-link class="router" to="/indexaaa?url=http://www.qq.com">Go to indexaaa</router-link>      
    </div>
    <iframe-router-view></iframe-router-view>
  </div>
</template>
<script>
import iframeRouterView from './components/iframe-router-view';
export default {
  name: 'app',
  components: {
    iframeRouterView
  }
}
</script>