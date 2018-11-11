<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #202e3e">
    <a class="navbar-brand" href="">
      <img src="./assets/logo.png" width="32" height="32" alt="">
    </a>
    <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="">Problem<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Status</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Ranking</a>
        </li>
      </ul>
      <ul class="navbar-nav" id="zzz">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{username}}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="">Profile</a>
            <a class="dropdown-item" href="">Settings</a>
            <a class="dropdown-item" href="">My Submissions</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="" v-on:click="changeAuthentication">Log Out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavigationBar',
    data () {
      return {
        username: 'Guest'
      }
    },
    methods: {
      changeAuthentication () {
        this.$parent.authenticated = false;
      }
    }
  }
</script>

<style scoped>
  .dropdown-menu {
    right: 0;
    left: inherit;
  }
  #zzz {
    padding-right: 15px;
  }
  .navbar-brand {
    padding-left: 15px ;
  }
  .nav-link {
    color: #b7c9cc;
  }
  ul.navbar-nav a:hover {
    color: white;
  }
  .navbar-nav > li > .dropdown-menu > .dropdown-item:hover {
    background-color: #202e3e;
  }
  .navbar-toggler {
    color: white;
  }
  .custom-toggler.navbar-toggler {
    border-color: transparent;
    outline: none;
  }
  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
</style>