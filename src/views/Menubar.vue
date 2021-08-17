<template>
  <div id="nav">
    <div>
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
#nav {}
</style>
