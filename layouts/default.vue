<template>
  <div class="layout">
    <div class="header">
      <h1>头部</h1>
    </div>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html,body {
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 60px;
  color: white;
  background-color: #676771;
}
.content {
  background-color: #f1f1f1;
  flex: 1;
  overflow: auto;
}
</style>