<template>
  <div id="app">
    <div id="nav">
      <router-link to="/catalog">目录进度条（自己实现的）</router-link>
      <router-link to="/select">下拉框封装</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    padding:10px 0;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
