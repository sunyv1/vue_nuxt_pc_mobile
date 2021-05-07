<template>
  <div>
    <h1>移动主页</h1>
    <hello />
    <p-hello />
  </div>
</template>

<script>
import hello from "@/components/m/hello.vue";
import pHello from "@/components/public/hello.vue";
export default {
  components: {
    hello,
    pHello,
  },
};
</script>

<style>
</style>