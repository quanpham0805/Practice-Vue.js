<template>
  <div id="Login">
    <h1 class="headerOfLogin">CSP COPE</h1>
    <div class="container-fullwidth">
      <b-card no-body class="UniqueFullWidth">
        <b-tabs card>
          <b-tab title="Sign up" style="width:auto">
            <br>
            <b-form-input size="lg" placeholder="Full name">
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
            <br>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1">
                I agree to the <a href="">Terms of Service</a>
              </label>
            </div>
            <br>
            <div class="text-center">
              <b-button :variant="'success'">Create an Account</b-button>
            </div>
          </b-tab>

          <b-tab title="Log in" active>
          <br>
            <b-form-input size="lg" placeholder="Username">
            </b-form-input>
            <br>
            <b-form-input size="lg" type="password" placeholder="Password">
            </b-form-input>
            <br>
            <div class="text-center">
              <a href=""><small>Forgot your password?</small></a>
            </div>
            <br>
            <div class="text-center">
              <b-button :variant="'success'">Log in</b-button>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {

      }
    }
  }
</script>

<style>
  .headerOfLogin {
    text-align: center;
    margin: auto;
    padding-top: 22px;
    padding-bottom: 22px;
  }
  .UniqueFullWidth .card-header {
    font-size: 1.3em;
  }
  .UniqueFullWidth {
    width: 400px;
    margin: auto;
  }
  .UniqueFullWidth .card-header-tabs {
    margin-right: -21px;
    margin-left: -21px;
    margin-top: -13px;
  }
  .UniqueFullWidth .nav-tabs .nav-link.active {
    color: #000;
  }
  .UniqueFullWidth .nav-link {
    color: #979faf;
  }
  .UniqueFullWidth .nav-link:hover {
    color: #62676d;
  }
  .UniqueFullWidth .nav-tabs .nav-item {
    margin-bottom: -1px;
    flex-grow: 1;
    text-align: center;
  }
</style>