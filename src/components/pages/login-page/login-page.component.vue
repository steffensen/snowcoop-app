<template>
  <div id="loginPage">
    <div class="sign-in-box-wrapper">
      <el-card class="sign-in-box">
        <div class="form-header-wrapper">
          <span class="form-title-text">Sign In</span>
        </div>
        <div class="form-body-wrapper">
          <el-form :model="formData" ref="formData" @focusout.native="updateIsFormValidated">
            <el-form-item :rules="rules.email" prop="email">
              <el-input placeholder="Email" v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item :rules="rules.password" prop="password">
              <el-input type="password" placeholder="Password" v-model="formData.password" show-password></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="form-footer-wrapper">
          <div class="text-button-wrapper">
            <router-link to="/register">
              <a>Create account</a>
            </router-link>
          </div>
          <div class="sign-in-button-wrapper">
            <button v-bind:disabled="!isFormValidated" @click="signIn">Sign In</button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./login-page.component.js"></script>
<style src="./login-page.component.css"></style>
