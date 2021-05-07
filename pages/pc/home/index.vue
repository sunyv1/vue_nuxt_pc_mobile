<template>
<div>
  <h1>pc主页</h1>
  <hello />
  <p-hello />
</div>
</template>

<script>
import hello from '@/components/pc/hello.vue'
import pHello from '@/components/public/hello.vue'
export default {
  components: {
    hello, pHello
  }
}
</script>

<style>

</style>