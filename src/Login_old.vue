<template>
  <div id="Login_old">
    <h1 class="headerOfLogin_old">CSP COPE</h1>
    <div class="container-fullwidth">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Sign up" style="width:auto">
            <br>
            <b-form-input size="lg" placeholder="Full name">
              <i class="fa fa-bell"></i>
            </b-form-input>
            <br>
            <b-form-input size="lg" placeholder="Username">
            </b-form-input>
            <br>
            <b-form-input size="lg" type="password" placeholder="Password">
            </b-form-input>
            <br>
            <b-form-input size="lg" type="email" placeholder="Email">
            </b-form-input>
          </b-tab>
          <b-tab title="Log in" active>
          <br>
            <b-form-input size="lg" placeholder="Username">
            </b-form-input>
            <br>
            <b-form-input size="lg" type="password" placeholder="Password">
            </b-form-input>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login_old',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .headerOfLogin_old {
    text-align: center;
    margin: auto;
    padding-top: 22px;
    padding-bottom: 22px;
  }
  .card-header {
    font-size: 1.3em;
  }
  .card {
    width: 550px;
    margin: auto;
  }
  .card-header-tabs {
    margin-right: -21px;
    margin-left: -21px;
    margin-top: -13px;
  }
  .nav-tabs .nav-link.active {
    color: #000;
  }
  .nav-link {
    color: #979faf;
  }

  .nav-link:hover {
    color: #62676d;
  }

  .nav-tabs .nav-item {
    margin-bottom: -1px;
    flex-grow: 1;
    text-align: center;
  }
</style>