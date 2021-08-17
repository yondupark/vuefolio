<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Portfolios">Portfolios</router-link>
      <router-link to="/Listsup">Lists Up</router-link>
      <router-link to="/WhoamI">Whoami</router-link>
      <router-link to="/Guide">Guide</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: 400;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
