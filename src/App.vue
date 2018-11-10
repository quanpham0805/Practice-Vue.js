<template>
  <div class="container-fullwidth">
    <template v-if="authenticated">
      <NavigationBar></NavigationBar>
      <router-view></router-view>
    </template>
    <template v-else>
      <Login></Login>
    </template>
  </div>
</template>

<script>
  import NavigationBar from './NavigationBar.vue'
  import Login from './Login.vue'

  export default {
    components: {
      NavigationBar,
      Login
    },
    data () {
      return {
        authenticated: false
      }
    }
  }
</script>

