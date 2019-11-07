<template>
  <div>
    <iframe width="500px" height="500px" :src="url"></iframe>
  </div>
</template>

<script>
export default {
  name: "iframe-wrapper",
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    this.url = this.$route.query.url;
  }
};
</script>