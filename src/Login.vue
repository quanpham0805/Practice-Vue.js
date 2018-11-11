<template>
  <div id="Login">
    <h1 class="headerOfLogin">CSP COPE</h1>
    <div class="container-fullwidth">
      <b-card no-body class="UniqueFullWidth">
        <b-tabs card>
          <b-tab title="Sign up" style="width:auto">
            <br>
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fa fa-user-circle-o fa-lg"></i></span>
              </b-input-group-prepend>

              <b-form-input class="LoginInput" size="lg" placeholder="Full name with class" v-model.trim="signUpFullname">
              </b-form-input>
            </b-input-group>
            <b-form-text> For example: Pham Minh Quan K51 Tin </b-form-text>

            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fa fa-user fa-lg"></i></span>
              </b-input-group-prepend>

              <b-form-input class="LoginInput" size="lg" placeholder="Username" :state="checkUsername" v-model.trim="signUpUsername">
              </b-form-input>
            </b-input-group>
            <b-form-text> 6-20 character, letters and numbers </b-form-text>

            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fa fa-lock fa-lg"></i></span>
              </b-input-group-prepend>

              <b-form-input class="LoginInput" type="password" size="lg" placeholder="Password" :state="checkPassword" v-model.trim="signUpPassword">
              </b-form-input>
            </b-input-group>
            <b-form-text> At least 6 characters </b-form-text>

            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fa fa-envelope fa-lg"></i></span>
              </b-input-group-prepend>

              <b-form-input class="LoginInput" size="lg" placeholder="Email" v-model.trim="signUpEmail">
              </b-form-input>
            </b-input-group>

            <br>
              <div>
                <b-form-checkbox v-model="CheckBoxStatus"> I accept the terms and use </b-form-checkbox>
              </div>

            <br>
            <div class="text-center">
              <b-button :variant="'success'" :disabled="FillOutTheForm">Create an Account</b-button>
            </div>
          </b-tab>

          <b-tab title="Log in" active>
            <br>
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fa fa-user fa-lg"></i></span>
              </b-input-group-prepend>
              <b-form-input class="LoginInput" size="lg" placeholder="Username">
              </b-form-input>
            </b-input-group>

            <br>
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fa fa-lock fa-lg"></i></span>
              </b-input-group-prepend>
                <b-form-input class="LoginInput" size="lg" type="password" placeholder="Password">
                </b-form-input>
            </b-input-group>

            <br>
            <div class="text-center">
              <a href=""><small>Forgot your password?</small></a>
            </div>
            <br>
            <div class="text-center">
              <b-button :variant="'success'" @click="changeAuth">Log in</b-button>
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
        signUpFullname: '',
        signUpUsername: '',
        signUpPassword: '',
        signUpEmail: '',
        CheckBoxStatus: false
      }
    },
    methods: {
      changeAuth () {
        this.$parent.authenticated = true;
      }
    },
    computed: {
      checkPassword () {
        if (this.signUpPassword.length == 0) return null;
        else return this.signUpPassword.length >= 6;
      },
      checkUsername () {
        if (this.signUpUsername.length == 0) return null;
        var chk = true, Size = this.signUpUsername.length;
        for (var i = 0 ; i < Size ; i ++)
          if ((this.signUpUsername[i] >= 'a' && this.signUpUsername[i] <= 'z') ||
             (this.signUpUsername[i] >= 'A' && this.signUpUsername[i] <= 'Z') ||
             (this.signUpUsername[i] >= '0' && this.signUpUsername[i] <= '9')) continue;
          else {chk = false; break;}
        return chk === true && 6 <= Size && Size <= 20;
      },
      FillOutTheForm () {
        var chk1 = false, chk2 = false, chk3 = false, chk4 = false;
        if (this.signUpPassword.length >= 6) chk1 = true;
        var chk = true, Size = this.signUpUsername.length;
        for (var i = 0 ; i < Size ; i ++)
          if ((this.signUpUsername[i] >= 'a' && this.signUpUsername[i] <= 'z') ||
             (this.signUpUsername[i] >= 'A' && this.signUpUsername[i] <= 'Z') ||
             (this.signUpUsername[i] >= '0' && this.signUpUsername[i] <= '9')) continue;
          else {chk = false; break;}
        if (chk === true && 6 <= Size && Size <= 20) chk2 = true;
        if (this.signUpFullname.length > 0) chk3 = true;
        if (this.signUpEmail.length > 0) chk4 = true;
        if (chk1 === true && chk2 === true && chk3 === true && chk4 === true && this.CheckBoxStatus === true) return false;
        else return true;
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
    margin-bottom: 12px;
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
  .UniqueFullWidth .input-group-text {
    width: 48px;
    border-right: none;
    background-color: #ffffff;
  }
  .UniqueFullWidth [class^="fa-"], [class*=" fa-"] {
    display: inline-block;
    width: 100%;
  }
  .UniqueFullWidth .LoginInput {
    position: relative;
  }
</style>