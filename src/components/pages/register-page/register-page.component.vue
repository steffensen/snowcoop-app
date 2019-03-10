<template>
  <div id="registerPage">
    <div class="create-account-box-wrapper">
      <el-card class="create-account-box">
        <div class="form-header-wrapper">
          <!-- TODO: add title -->
          <span class="form-title-text">Create your account</span>
        </div>
        <div class="form-body-wrapper">
          <!-- TODO: add form and form items inside for all control -->
          <el-form ref="formData" :model="formData" @focusout.native="updateIsFormValidated">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item :rules="rules.firstName" prop="firstName">
                  <el-input placeholder="firstname" v-model="formData.firstName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :rules="rules.lastName" prop="lastName">
                  <el-input placeholder="lastname" v-model="formData.lastName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item :rules="rules.email" prop="email">
                <el-input placeholder="Email" v-model="formData.email"></el-input>
              </el-form-item>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item :rules="rules.password" prop="password">
                  <el-input type="password" placeholder="Password" v-model="formData.password"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :rules="rules.passwordConfirm" prop="passwordConfirm">
                  <el-input
                    type="password"
                    placeholder="Confirm"
                    v-model="formData.passwordConfirm"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="form-footer-wrapper">
          <!-- TODO: add buttons and wire up event handler and routing method -->
          <div class="text-button-wrapper">
            <router-link to="/login">
              <a>Sign in instead</a>
            </router-link>
          </div>
          <div class="next-button-wrapper">
            <button v-bind:disabled="!isFormValidated" @click="register">Next</button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./register-page.component.js"></script>
<style src="./register-page.component.css"></style>